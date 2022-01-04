const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [a, b] = input.split('\n').map(Number);

process.stdout.write(`X = ${a + b}\n`);

