// Module Name: FS
// Description: To handle the file system

var fs = require('fs');
fs.readFile('fstext.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});
