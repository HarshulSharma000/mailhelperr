const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const {clientID,clientSecret} = require('../config/keys');
 
const users = mongoose.model('users');

passport.serializeUser((user,done) => {
    done(null,user.id);
});

passport.deserializeUser(async (id,done) => {
    const curuser = await users.findById(id);
    done(null,curuser);
});

passport.use(new GoogleStrategy({
    clientID,
    clientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
    },async (accesstoken, refreshtoken,profile,done) => {
        let curuser = await users.findOne({googleID: profile.id});
        //console.log(curuser);
        if(curuser == null){
           curuser = await new users({googleID: profile.id}).save();
        }
        console.log(curuser);
        done(null,curuser);
    }
));