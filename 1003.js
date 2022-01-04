var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [a,b] = input.split('\n').map(Number);


process.stdout.write(`SOMA = ${a + b}\n`);
