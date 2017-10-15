const mongoose = require('mongoose');
const {Schema} = mongoose;

const recipientsSchema = require('./recipients');

const surveysSchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [recipientsSchema],
    yes: {type: Number, default: 0},
    no: {type: Number, default: 0},
    _user: {type: Schema.Types.ObjectId, ref:'users'},
    dateSent: Date,
    lastResponded: Date
});

mongoose.model('surveys',surveysSchema);