var path = require('path');
var express = require('express');
var UsersMock = require('./users.js');

var app = express();

app.get('/', function(req, res){
    res.json(UsersMock.getAll());
});

app.get('/id=:id', function(req, res) {
    var id = req.params.id;
    res.json(UsersMock.getById(id));
});

app.get('/name=:name', function(req, res) {
    var name = req.params.name;
    res.json(UsersMock.getByName(name));
});

app.get('/email=:email', function(req, res) {
    var email = req.params.email;
    res.json(UsersMock.getByEmail(email));
});

app.listen(5000, function(){
    console.log('Server listening on port 5000');
});