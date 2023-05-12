// Module Name: HTTPS
// Description: To make Node.js act as an HTTPS (secured) server

var https = require("https");
var fs = require("fs");

const options = {
    key: fs.readFileSync('path/to/key.pem'),
    cert: fs.readFileSync('path/to/cert.pem')
  };

var server = https.createServer(function(req,res){
    res.write("This is the response for https")
    res.end()
});

server.listen(4100)