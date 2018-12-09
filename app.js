const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.mothod, req.headers);
    const url = req.url;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"></input><button type="submit">Send</button></form></body>');
        res.write('<html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>MY First Page</title></head>');
    res.write('<body><h1>Hello from My Node.JS server!</h1></body>');
    res.write('<html>');
    res.end();
});

server.listen(3000);