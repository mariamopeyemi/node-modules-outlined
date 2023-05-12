// Module Name: DNS
// Description: To do DNS lookups and name resolution functions

var dns = require('dns');
var te = dns.lookup('www.google.com', function (err, addresses, family) {
  console.log(addresses);
});
