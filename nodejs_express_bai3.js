var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

// app.get('/first_template', function(req, res) {
//     res.render('first_view');
// });

// app.get('/dynamic_view', function(req, res) {
//     res.render('dynamic', {
//         name: "Thomas's First Website",
//         url: "http://www.google.com"
//     });
// });

// app.get('/dynamic', function (req, res) {//dynamic in this line is used as the address to access to the web
//     res.render('dynamic',{//dynamic here is a file's name of dynamic.pug
//         user: {user_name:"Thomas", password: "123456"}
//     });
// });

// app.get('/component', function (req, res) {
//     res.render('content');
// });

// app.use('/static',express.static('public'));
// app.get('/static', function(req, res) {
//     res.render('image_view');
// });



app.listen(8080);