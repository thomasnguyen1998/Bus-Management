var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');

var things = require('./things.js');
var tg = require('./module1_TG');

http.createServer(function(req, res) {
});
// app.get('/things/:name/:id/', function(req, res) {
//     res.send('The id is ' + req.params.id + ' and name is ' + req.params.name);
// });

// app.get('/TG', function(req, res) {
//     // res.send(tg.thoiGian());
//  });
//  app.get('/things/:id([0-9]{5})', function(req, res){
//     res.send('id: ' + req.params.id);
//     res.send(tg.thoiGian());
// });
// app.get('*', function(req, res){
//     res.send('Sorry, this is an invalid URL.');
//  });
// app.use('/summer', summer);//example is a address to access to things

app.use('/things', things);
// app.get('/things', function (req, res) {
//     res.render('things');
// });

app.listen(8080);

