const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const controller = require('./Controller.js');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', controller.test);

//Methods for the Song.js
router.post('/addSong', controller.song_createSong); //create new item
router.get('/music', controller.song_getAll); //read all items
router.get('/:id', controller.song_details); //read item
router.put('/:id', controller.song_update); //update existing item
router.delete('/:id', controller.song_delete); //delete item from database

//Methods for Users.js

router.post('/addUsers', controller.user_createUser);
module.exports = router;


