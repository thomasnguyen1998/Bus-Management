var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "annguyen",
    password: "123456",
    database: "myDB"
});
var express = require('express');
var app = express();
var url = require('url');

var bodyParser = require('body-parser');
app.set('view engine', 'pug');
app.set('views', './views');


// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

app.get('/', function(req, res) {
   res.sendFile('form_host.html', {root: 'views'});
});

app.get('/create/', function (req, res) {
    res.sendFile('form_create.html', {root:'views'});
});

app.get('/table', function(req, res) {
    con.query("SELECT * FROM customer", function (err, result, fields) {
        if (err) throw err;
        res.render('content', {list: result});
      });   
});

app.post('/create/', function(req, res) {
    var new_user = req.body;
    console.log(new_user);
    sql = "INSERT INTO customer (USER_NAME, RFID, MONEY) VALUES (" + "'" + new_user.user_name + "'," + "'"
    + new_user.rfid + "'," + new_user.money + ')';
    con.query(sql, function(err, result) {
        if (err) console.log(err);
        console.log(result);
    });
    con.query("SELECT * FROM customer", function (err, result, fields) {
        if (err) throw err;
        res.render('content', {list: result});
      });
});

app.get('/customer/:id', function (req, res) {
    console.log(req.params.id);
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    
    if (req.params.id == 'search')
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        try {
            var query_tring = "SELECT * FROM customer WHERE RFID = '" + query.rfid + "'";
            con.query(query_tring, function(err, result, fields) {
            console.log(result);
            if (err) console.log(err);
            else
            {
                if (result[0].MONEY < 3000) res.end('0');
                else
                {
                    var money_temp = result[0].MONEY;
                    money_temp -= 3000;
                    con.query("UPDATE customer SET MONEY = " + money_temp + " WHERE ID = " + result[0].ID);
                    res.end(money_temp + '');
                }
            }
        });
        }
        catch (error) {
            res.end(error);
        }
    }
    else{
        console.log("hello");
        
        con.query("SELECT * FROM customer WHERE ID =" + req.params.id, function (err, result, fields) {
            if (err) console.log(err);
            console.log(result);
            res.render('detail', {customer: result[0]});
        });
    }
});

app.post('/update/customer/:id', function(req, res) {
    con.query("SELECT * FROM customer WHERE ID =" + req.params.id, function (err, result, fields) {
        if (err) throw err;
        console.log(result[0]);
        var money = parseInt(result[0].MONEY);
        money += parseInt(req.body.MONEY);
        con.query("UPDATE customer SET MONEY = " + money + " WHERE ID = " + req.params.id);
        console.log(money);
    con.query("SELECT * FROM customer WHERE ID =" + req.params.id, function(err, result1, fields) {
        res.render('detail', {customer: result1[0]});
        });
      });
});


app.listen(8080);//, "10.0.134.206"