var song = require('./Song.js');
var users = require('./Users.js');
const bcrypt = require('bcrypt');


//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.json({message: 'Greetings from the Test controller!'});
};

//Controllers for Song.js

//Creates a new song
exports.song_createSong = function (req, res, next) {
    let Song = new song(
        {
            Title: req.body.Title,
            Artist: req.body.Artist,
            Album: req.body.Album,
            Year: req.body.Year,
            Genre: req.body.Genre,
        }
    );

    Song.save(function (err, Song) {
        if (err) {
            return next(err);
        }
        res.json({message: 'Song created.', Song});
    })
};

//Gets the song based on ID
exports.song_details = function (req, res, next) {
    song.findById(req.params.id, function (err, Song) {
        if (err) return next(err);
        res.json({Song});
    })
};

//Updates any part of the song
exports.song_update = async function (req, res, next) {
    try {
       var Song = await song.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, Song) {
            if (err) return next(err);
        }); 
        return res.json({message: 'Song udpated.', Song});
    } catch(err) {
        return next(err)
    }
    

};

//Deletes any song 
exports.song_delete = function (req, res, next) {
    song.findByIdAndRemove(req.params.id, function (err, Song) {
        if (err) return next(err);
        res.json({message: 'Song deleted.', Song});
    })
};

//Gets a list of all the songs
exports.song_getAll = function (req, res, next){
    song.find((err, items) => {
        if(err){
            console.log(err);
            return next(err);
        }
        
        return res.json({items});
    });
}

//Controllers for Users.js

//Creates and stores new user
exports.user_createUser = function (req, res, next){
    bcrypt.hash(req.body.Password, 10, function(err, hash) {
        let Users = new users(
            {
                Email: req.body.Email,
                Password: hash,
             
            }
        );
    
            Users.save(function (err, Users) {
                if (err) {
                    return next(err);
                }
                res.json({message: 'User Added.', Users});
            })
      });

};


