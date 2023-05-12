// Module Name: DATAGRAM MODULE
// Description: The crypto module provides a way of handling encrypted data.


// Initiate file first C:\Users\Your Name>node demo_dgram.js

let dgram = require('dgram');
let s = dgram.createSocket('udp4');
s.send(Buffer.from('abc'), 8080, 'localhost');