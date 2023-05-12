// Module Name: UTIL
// Description: To access utility functions

var util = require('util');
var txt = 'Congratulate %s on his %dth birthday!';
var result = util.format(txt, 'Ben', 28); 

console.log(result);