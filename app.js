var http = require('http');

http.createServer(function(req, res){
    res.end("Gerencia");
}).listen(8080)