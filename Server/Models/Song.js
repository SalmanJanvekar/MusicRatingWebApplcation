const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let songSchema = new Schema({
    Title: {type: String, required: true, max: 30},
    Artist: {type: String, required: true, max: 30},
    Album: {type: String, required: true, max: 30},
    Year: {type: Number, required: true, max: 2020},
    Genre: {type: String, required: true, max: 30},
    Rating: {type: Number, max: 5, min: 1},

});

// Export the model
module.exports = mongoose.model('song', songSchema);