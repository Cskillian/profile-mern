var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongodb = require('mongodb');
var react = require('react');
var reactDom = require('react-dom');
var reactRouter = require('react-router');

//schema
var userModel = require('./models/userModel.js');

//express
var app = express();
var PORT = process.env.PORT || 3000;

//Bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//serve our public folder
app.use(express.static('./public'));

//mongoose
mongoose.connect('mongodb://localhost/3000/profile-mern');
var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
