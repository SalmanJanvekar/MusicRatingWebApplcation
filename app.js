const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const mongoose = require("mongoose")

const app = express();

//Bcrypt method used to encrypt passwords to be put into the server Database.

var bcrypt = require('bcrypt');
const saltRounds = 10;

//Home Page CSS static files as well as all functionality: Load the sign-up page, get the details of the user, and post to the server.

    app.use("/static", express.static("/Users/salman/Desktop/se3316-sjanveka-lab5/Lab5/app/static" + '/static'));
    app.use(bodyParser.urlencoded({extended: true}));

    app.get("/Registration", function(req, res){
        res.sendFile('registration.component.html', { root: "/Users/salman/Desktop/se3316-sjanveka-lab5/Lab5/src/app/registration/registration.component.html" });
        });

    app.post("/", function (req, res){

        var firstName = req.body.fName;
        var lastName = req.body.lName;
        var email = req.body.email;
        var password = req.body.pw;

        bcrypt.hash(password, saltRounds, function(err, hash){
        console.log(firstName, lastName, email, hash);
        });
    
    });

app.listen(4201, function(){
    console.log("Server is running on port 4200");
})