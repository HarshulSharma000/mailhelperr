const mongoose  = require('mongoose');
const _ = require('lodash');
const Path = require('path-parser');
const {URL} = require('url');

const Mailer = require('../services/Mailer');
const requireCredits = require('../middlewares/requireCredits');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const requireLogin = require('../middlewares/requireLogin');

const surveys = mongoose.model('surveys');

module.exports = (app) => {
    app.get('/api/surveys',requireLogin, async (req, res) => {
        const cur_user = req.user;
         const surveyList = await surveys.find({_user: cur_user._id}).select({
             recipients:false
        });
        res.send({surveyList});
    });
    app.post('/api/surveys',requireCredits, async (req, res) => {
        const {title,body, subject, recipients} = req.body;
        const survey = new surveys({
            title,
            subject,
            body,
            recipients: recipients.split(';').map(email => ({email})),
            _user: req.user,
            dateSent: Date.now()
        });

        //Mailer is just an abstraction takes 2 arguments survey details and template
        //can be used to send mails
        const mailer = new Mailer(survey, surveyTemplate(survey));
        
        try {
            await mailer.send();
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();
            res.send(user);
        }
        catch(err) {
            res.status(422).send(err);
        }
        
    });

    app.get('/api/surveys/:surveyId/:choice', (req, res) => {
        res.send('Thanks for voting!');
    });

    app.post('/api/surveys/webhooks', (req,res) => {
        const p = new Path('/api/surveys/:surveyId/:choice');
        _.chain(req.body)
        .map(({email,url}) => {
            const match = p.test(new URL(url).pathname);
            if(match) {
                return { email,surveyId: match.surveyId,choice: match.choice };
            }
        })
        .compact()
        .uniqBy('email','surveyId')
        .each(({email,surveyId,choice}) => {
            surveys.updateOne({
                _id:surveyId,
                recipients: {
                    $elemMatch:{email, responded:false}
                }
            },
            {
                $inc:{[choice]:1},
                $set:{'recipients.$.responded': true},
                lastresponded: new Date()
            }).exec();
        })
        .value();
        res.send({});
    });
}