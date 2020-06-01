var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
    var query = url.parse(request.url, true);

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
}).listen(8080);

