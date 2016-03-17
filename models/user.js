// var mongodb = require('./db');
var settings = require('../settings');
var MongoClient = require('mongodb').MongoClient;

function User( user ) {
  this.name = user.name;
  this.password = user.password;
  this.email = user.email;
}

module.exports = User;

User.prototype.save = function ( cb ) {
  var user = {
    name : this.name,
    password: this.password,
    email : this.email
  };

  MongoClient.connect( settings.db , function (err, db) {
    if(err) {
      return cb(err);
    }

    db.collection('users', function (err, collection) {
      if(err) {
        MongoClient.close();
        return cb(err);
      }

      collection.insert(user, {
        safe: true
      }, function (err, user) {
        MongoClient.close();
        if(err) {
          return cb(err);
        }
        cb(null);
      });

    })
  })

}
