var express = require('express')
var React = require('react')
var Router = require('react-router')
var fs = require("fs")
var https = require('https')
var http = require('http')

var app = express()

app.use('/static/js', express.static(__dirname + '/src/static/js'));
app.use('/static/css', express.static(__dirname + '/src/static/css'));
app.use('/static/svg', express.static(__dirname + '/src/static/svg'));

app.use(function(req, res, next) {
  return res.sendFile(__dirname + '/src/static/index.html');
});

//var privateKey = fs.readFileSync('key.pem').toString();
//var certificate = fs.readFileSync('cert.pem').toString();

http.createServer(app).listen(8080);
/*https.createServer({
  key: privateKey,
  cert: certificate
}, app).listen(8081);
*/
