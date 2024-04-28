const http = require("http")

http.createServer((request, response) =>{
    response.writeHead(200, {'text':"hellow fira"})

    response.end('hwllow ');

}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/')