'use strict';
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {clientID,clientSecret } = require('./config/keys');

const app = express();

passport.use(new GoogleStrategy({
    clientID,
    clientSecret,
    callbackURL: '/auth/google/callback/'
    }, accesstoken => {
    console.log("here is our accessstoken:");
    console.log(accesstoken);
    }
));

app.get('/auth/google',passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

app.get('/auth/google/callback',passport.authenticate('google'), 
(req,res) => res.redirect('/surveys')
);

app.get('/surveys',(req,res) => res.send({ 
    Le: "Aunty aa gya..."
}));

app.get('/',(req,res) => {
    res.send({ Bolna:"Aunty aau kya?"});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);