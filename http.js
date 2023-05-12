// Module Name: HTTP
// Description: To make Node.js act as an HTTP server

var http = require("http");

var server = http.createServer(function(req,res){
    res.write("This is a response")
    res.end()
});

server.listen(4000)