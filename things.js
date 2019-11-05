var express = require('express');
var router = express.Router();


router.get('/AN', function (req, res) {
    res.send("GET route on things");
});

router.post('/AN', function(req, res) {
    res.send("POST route on things");
});

module.exports = router;