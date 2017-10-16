const moongoose = require('mongoose');
const {Schema} = moongoose;

const userSchema = new Schema({
    googleID: String,
    credits: { type:Number, default: 5 }
});

moongoose.model('users',userSchema);