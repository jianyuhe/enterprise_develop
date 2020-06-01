
var http = require('http');

var url = require('url');
var fs = require('fs');

var mysql = require('mysql');
var con = mysql.createConnection({host:"localhost", user:"root",password:"13110772322", database:"mydb"});

con.connect(function(err) {
	if(err)throw err;
	var sql ="INSERT INTO user (username, email,password,create_time) VALUES ('Michelle', '12@sad.ie','BlueVillage',12/4/2015)";
	con.query("SELECT username FROM user",
	function(err, result, fields) { // fields is an array with information about each field as an object
	if(err)throw err; console.log(result[2]); });
	
	con.query(sql,function(err, result) {if(err)throwerr;console.log("1 record inserted, ID: "+result.insertId);});
	
	});


http.createServer(function(req, res) {
var q = url.parse(req.url, true);

fs.readFile("cv.html", function(err, data) {
if (err) {
 res.writeHead(404, {'Content-Type': 'text/html'});
return res.end("404 Not Found");
 }
res.writeHead (200, {'Content-Type': 'text/html'});
res.write(data);
return res.end(); 
 }); // you can use 'return' to ensure you stop after the (first) callback
}).listen(8080); 
