var express = require('express');

var app = express();

// obvious in production you would do port 80 or 443
var port = 5000;

app.get('/', function(req, res){
    res.send('Hello World');
});

app.get('/auburn', function(req, res){
    res.send('Hello Auburn');
});

app.listen(port, function(err){
    console.log("running server on port " + port + ".");
});