const mongoose  = require('mongoose');

const Mailer = require('../services/Mailer');
const requireCredits = require('../middlewares/requireCredits');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const surveys = mongoose.model('surveys');

module.exports = (app) => {
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
        console.log(survey.recipients);

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
}