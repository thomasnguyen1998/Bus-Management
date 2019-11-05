var express = require('express');
var app = express();
var tg = require('./module1_TG');

app.use('/TG',function (req, res, next) {
    console.log("A new request recived at " + Date.now());

    next();
});

app.get('/TG', function(req, res) {
    res.send(tg.thoiGian());
});

app.listen(8080);