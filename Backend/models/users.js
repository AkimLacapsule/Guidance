var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    lastName: String,
    firstName: String,
    email: String,
    salt: String,
    password: String,
    token: String
   });


