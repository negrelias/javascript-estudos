var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [a,b] = input.split('\n').map(Number);
var soma = (a*3.5 + b*7.5) /11;
var media = soma.toFixed(5);




process.stdout.write(`MEDIA = ${media}\n`);


