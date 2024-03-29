var song = require('./Models/Song.js');
var users = require('./Models/Users.js');
var reviews = require('./Models/Reviews.js');



const bcrypt = require('bcrypt');

var randomCode = require("randomstring");



//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.json({message: 'Greetings from the Test controller!'});
};

//Controllers for Song.js

//Creates a new song
exports.song_createSong = function (req, res, next) {
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
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
            return res.status(500).send(); //500 server error, 404 not found, 200 OK.
        }
        res.json({message: 'Song created.', Song});
        return res.status(200).send();
    })
};

//Gets the song based on ID
exports.song_details = function (req, res, next) {
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    song.findById(req.params.id, function (err, Song) {
        if (err) return next(err);
        res.json({Song});
    })
};

//Updates any part of the song
exports.song_update = async function (req, res, next) {
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
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
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    song.findByIdAndRemove(req.params.id, function (err, Song) {
        if (err) return next(err);
        res.json({message: 'Song deleted.', Song});
    })
};

//Gets a list of all the songs
exports.song_getAll = function (req, res, next){
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
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
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    bcrypt.hash(req.body.Password, 10, function(err, hash) {
        let Users = new users(
            {
                Email: req.body.Email,
                Password: hash,
                Active: false,
                Deactive: true,
                authenticationCode: randomCode.generate(5),
                Admin: false,
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

//Existing user can Log in if they use the same password & username
exports.user_logInUser = function (req, res, next){
    
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    const Username = req.body.Email;
    const Password = req.body.Password;
    users.findOne({ Email: Username}, function(err, foundUser){
        if(err){
            return res.send(err);
        }
        if(!foundUser){
            return res.send("User not found")
        }
        else{
            if(bcrypt.compare(Password, foundUser.Password))
                return res.send(foundUser)
                else{
                    return res.send('Incorrect password')
                    
                }
        }
        
    })
    if (Username === "admin@admin.com" && Password === "admin") {
        localStorage.setItem("currentUser", JSON.stringify(users));
      
      if (localStorage.getItem("currentUser")){
        // logged in so return true
        return users;
      } else {
        return false;
      }
}
}

//updates user
exports.user_update = async function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        try {
           var Users = await users.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, users) {
                if (err) return next(err);
            }); 
            return res.json({message: 'User udpated.', Users});
        } catch(err) {
            return next(err)
        }
        
    
    };


//Reviews Controllers

//Creates a new Rating for a song
exports.reviews_createReviews = function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    let Reviews = new reviews(
        {
            Person: req.body.Person,
            Rating: req.body.Rating,
            Track: req.body.Track,
            Review: req.body.Review,
        }
    );

    Reviews.save(function (err) {
        if (err) {
            return next(err);
        }
        res.status(200).send("successful");
    })
};

//Gets All reviews for a song
exports.reviews_getAll = function (req, res, next){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    reviews.find((err, items) => {
        if(err){
            console.log(err);
            return next(err);
        }
        
        return res.json({items});
    });
}

exports.calculateAverage = function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    let Reviews = new reviews({
        rating: req.body.Rating,
    })

    var num = 0;
    var avgRating = 0;
    var avgRating = Number(([(avgRating+rating)/(num)]))
    num++
    Reviews.save(function (err) {
        if (err) {
            return next(err);
        }
        res.status(200).send("successful");
    })
    return avgRating;
}
