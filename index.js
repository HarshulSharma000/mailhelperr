'use strict';
const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const cookiesession = require('cookie-session');

const {mongodbURI, cookieKey } = require('./config/keys');
require('./models/users');
require('./services/passport.js');

const app = express(); //Server creation

mongoose.connect(mongodbURI);//Connecting to remote db

const users = mongoose.model('users');

//Middlewares
app.use(cookiesession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey]
    // cookie: {  // In case deserialsizeUser fails due to ssl conflict
    //     secure: false
    // }
}));

app.use(passport.initialize());
app.use(passport.session());


//Routes
require('./routes/authroutes')(app);
require('./routes/apiroutes')(app);

app.get('/surveys',(req,res) => { 
    res.send({ 
        sot: "mai lgau kya?"
    });
});

app.get('/check',(req,res) => {
    res.send({ 
        Le: "Aunty aa gya... tera omprakash"
    });    
});

app.get('/',(req,res) => {
    res.send({ Bolna:"Aunty aau kya?"});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);