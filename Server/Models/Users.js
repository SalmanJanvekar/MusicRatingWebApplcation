const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usersSchema = new Schema({
    Email: {type: String, required: true, max: 30, unique: true},
    Password: {type: String, required: true},
    Active: {type: Boolean},
    Deactive: {type: Boolean},
    authenticationCode: {type: String, max: 5, min: 5},
});

// Export the model
module.exports = mongoose.model('users', usersSchema);