const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const controller = require('./Controller.js');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', controller.test);
//Methods for Reviews.js
router.post('/addRating', controller.reviews_createReviews);
router.get('/Ratings', controller.reviews_getAll);
//Methods for Users.js
router.post('/register', controller.user_createUser);
router.post('/logIn', controller.user_logInUser);
//Methods for the Song.js
router.post('/addSong', controller.song_createSong); //create new item
router.get('/music', controller.song_getAll); //read all items
router.get('/:id', controller.song_details); //read item
router.put('/:id', controller.song_update); //update existing item
router.delete('/:id', controller.song_delete); //delete item from database




module.exports = router;


