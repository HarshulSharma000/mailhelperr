'use strict';
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const {clientID,clientSecret, mongodbURI } = require('./config/keys');

const app = express();

mongoose.connect(mongodbURI);

require('./routes/authroutes')(app);

passport.use(new GoogleStrategy({
    clientID,
    clientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
    },(accesstoken, refreshtoken,profile,done) => {
        console.log("here is our accessstoken:");
        console.log(accesstoken);
        console.log("here is our profile that we stole...");
        console.log(profile);
        done();
    }
));

app.get('/surveys',(req,res) => res.send({ 
    sot: "mai lgau kya?"
}));

app.get('/check',(req,res) => res.send({ 
    Le: "Aunty aa gya... tera omprakash"
}));

app.get('/',(req,res) => {
    res.send({ Bolna:"Aunty aau kya?"});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);