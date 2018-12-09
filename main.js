// 1.Import Required Module
var http = require('http');

// 2. Create Server
http.createServer(function (require, response) {
    //Send the http header
    //HTTP Status:200 :OK
    //Content Type: text/plain
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    //Send the response body as "Hello world NodeJS"
    response.end('Hello world NodeJS\n');

}).listen(8081);

//Console will print the message
console.log('Server runnig at the http://127.0.0.1:8081');