// Module Name: STRINGDECODER
// Description: To decode buffer objects into strings

var sd = require('string_decoder').StringDecoder;
var d = new sd('utf8');
var b = Buffer('abc');

console.log(b); 
console.log(d.write(b)); 
