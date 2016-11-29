var express = require('express')
var React = require('react')
var Router = require('react-router')

var app = express()

app.use('/js', express.static(__dirname + '/src/static/js'));
app.use('/css', express.static(__dirname + '/src/static/css'));

app.use(function(req, res, next) {
  return res.sendFile(__dirname + '/src/static/index.html');
});

app.listen(3000);
