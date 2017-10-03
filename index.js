'use strict';
const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send({ Hi: "Hope this works here right now :)"});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);