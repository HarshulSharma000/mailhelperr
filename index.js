'use strict';
const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
//const cors = require('cors');

const {mongodbURI, cookieKey } = require('./config/keys');
require('./models/users');
require('./models/surveys');
require('./services/passport.js');

const app = express(); //Server creation

mongoose.connect(mongodbURI);//Connecting to remote db

const users = mongoose.model('users');

//Middlewares
//app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.json());
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey],
    // cookie: {  // In case deserialsizeUser fails due to ssl conflict
    //     secure: false,
    //     httpOnly: false
    //}
}));

app.use(passport.initialize());
app.use(passport.session());



//Routes
require('./routes/authroutes')(app);
require('./routes/apiroutes')(app);
require('./routes/billingroutes')(app);
require('./routes/surveyroutes')(app);

app.get('/check',(req,res) => {
    res.send({ 
        Le: "Aunty aa gya... tera omprakash"
    });    
});

// app.get('/',(req,res) => {
//     res.send({ Bolna:"Aunty aau kya?"});
// });

if(process.env.NODE_ENV === 'production') {
    //To serve production asserts such as main.js and main.css
    app.use(express.static('client/build'));//Add / before client to enter into the world of pink elephants
    
    //To serve index.html if no other route is found for the request
    const path = require('path');
    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);