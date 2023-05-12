// Module Name: VM
// Description: To compile JavaScript code in a virtual machine

var vm = require('vm');
var myObj = { name: 'Ben', age: 23 };
vm.createContext(myObj);

vm.runInContext('age += 1;', myObj);

console.log(myObj);