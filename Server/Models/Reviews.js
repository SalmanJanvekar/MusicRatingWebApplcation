const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let reviewsSchema = new Schema({
    Person: {type: String, max: 30},
    Rating: {type: Number, max: 5, min: 1},
    Track: {type: String, max: 30},
});

// Export the model
module.exports = mongoose.model('reviews', reviewsSchema);