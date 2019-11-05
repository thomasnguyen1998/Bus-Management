var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();
var fs = require('fs');

app.get('/send', function(req, res){
   res.render('form');
});

app.set('view engine', 'pug');
app.set('views', './views');

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.post('/', function(req, res){
   console.log(req.body);
   var temp = req.body;
   fs.writeFile('E:\\Web_Server\\demo.txt', temp.say + temp.to + "", function (err) {
      if (err) throw(err);
   });
   //res.send("recieved your request!");
   res.render('form2');
});

app.post('/abc', function(req, res){
   console.log(req.body);
   var temp = req.body;
   fs.writeFile('E:\\Web_Server\\demoabc.txt', temp.say + temp.to + "", function (err) {
      if (err) throw(err);
   });
   //res.send("recieved your request!");
   res.render('form2');
});
app.listen(8080);
