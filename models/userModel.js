var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var schema = mongoose.Schema;

  var UserSchema = new schema({
    user_name: {
      type:String,
      unique:true,
      required:true
    },
    first_name: {
      type:String,
      required:true
    },
    last_name: {
      type:String,
      required:true
    },
    email: {
      type:String,
      required:true
    },
    password: {
      type:String,
      required:true
    },
    bio: {
      type:String
    },
    state: {
      type:String
    },
    city: {
      type:String
    },
    profile_pic: {
      type:String
    }
  });


UserSchema.plugin(uniqueValidator);

var user = mongoose.model('user', UserSchema);

module.exports = user;

  //var User = mongoose.model('User',UserSchema);

  // var zach = new User({
  //   user_name: 'zfsmith',
  //   first_name: 'Zachary',
  //   last_name: 'Smith',
  //   email: 'zac2008@aol.com',
  //   password: 'password',
  //   bio: 'I am A full stack developer',
  //   state: 'Texas',
  //   city: 'austin',
  //   profile_pic: 'https://upload.wikimedia.org/wikipedia/commons/7/79/2010-brown-bear.jpg'
  // });
