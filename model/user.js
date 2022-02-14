var mongoose = require('mongoose');
var Schema = mongoose.Schema

var userSchema = new Schema({

username: {type: String},
email: {type: String},
city: {type: String}
})

const userModel = mongoose.model('users',  userSchema)
module.exports = userModel