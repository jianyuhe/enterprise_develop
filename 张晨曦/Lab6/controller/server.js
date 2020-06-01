var express = require('express');
var http = require('http');
var app = express();
var path = require('path');
var getEdu = require('../model/getEducation');

http.createServer(app).listen(8080);

fileroot = path.join(__dirname, '../view/');

app.get('/', function(req, res) {
    res.sendFile(fileroot + 'index.html');
});

app.get('/education', function(req, res){
    getEdu.queryEducation(function(data) {
        res.json(data);
    });
});

app.get('/education?year=2014', function(req, res) {
    getEdu.queryEducation(function(data) {
        console.log(req.query.year);
        res.json(data[req.query.year]);
    });
});