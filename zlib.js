// Module Name: ZLIB
// Description: To compress or decompress files

var zlib = require('zlib');
var fs = require('fs');

var gzip = zlib.createGzip();
var r = fs.createReadStream('./trialfile.txt');
var w = fs.createWriteStream('./mygzipfile.txt.gz');
r.pipe(gzip).pipe(w);