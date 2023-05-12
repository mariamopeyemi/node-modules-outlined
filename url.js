var http = require('http');
var url = require('url');
var addURL = "http://localhost:80/index.html?name=John&id=3433"
var server = http.createServer(function (req, res) {
    var q = url.parse(addURL, true);
    res.write(q.href);
    res.end();
})

server.listen(4200);