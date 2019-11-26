const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usersSchema = new Schema({
    Email: {type: String, required: true, max: 30},
    Password: {type: String, required: true},
});

// Export the model
module.exports = mongoose.model('users', usersSchema);