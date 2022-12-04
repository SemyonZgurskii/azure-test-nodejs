const http = require('http');

const PORT = 8000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
})

server.listen(PORT, () => console.log(`server started on port ${PORT}`))
