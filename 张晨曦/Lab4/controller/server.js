var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

var eduInfo = require('../model/getEducation');

http.createServer(function (request, response) {
    var query = url.parse(request.url, true);

    if (request.method == "GET") {
        if (query.pathname == "/") {
            var filename = path.join(__dirname, "../view/index.html");
        } else {
            var filename = path.join(__dirname, "../view", query.pathname);
        }
    
        console.log(filename);
        
        fs.readFile(filename, function (error, data) {
            if (error) {
                console.log(error);
                response.writeHead(404, {'Content-Type': 'text/html'});
                return response.end('404 Not Found');
            }
    
            response.write(data);
            return response.end();
        });
    }

    if (request.method == "POST") {
        let data = [];

        request.on('data', chunk => {
            data += chunk;
        });

        request.on('end', ()=> {
            if (data.length == 0) {
                response.write(eduInfo.queryEducation());
            }
        });

    }
}).listen(8080);

