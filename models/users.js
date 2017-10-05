const moongoose = require('mongoose');
const {Schema} = moongoose;

const userSchema = new Schema({
    googleID: String
});

moongoose.model('users',userSchema);