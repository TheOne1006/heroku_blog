var express = require('express');
var router = express.Router();

module.exports = function (app) {

  /* GET home page. */
  app.get('/', function(req, res, next) {
    res.render('index', { title: '主页' });
  });

  app.get('/reg', function (req, res, next) {
    res.render('reg', { title: '注册'})
  });

  app.post('/reg', function (req, res, next) {

  });

  app.get('/login', function (req, res, next) {
    res.render('login', { title: '登陆'});
  });

  app.post('/login', function (req, res, next) {

  });

  app.get('/post', function (req, res) {
    res.render('post',{title: '发表'});
  });


}
