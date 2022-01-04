

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [a,b] = input.split('\n').map(Number);
var PROD = a * b;

process.stdout.write(`PROD = ${PROD}\n`);




