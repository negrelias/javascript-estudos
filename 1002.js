var input = require('fs').readFileSync('/dev/stdin', 'utf8');
console.log('Entrada pura: ', input);

var lines = input.split('\n') // capturando o input (entrada)que o documento me deu 2 numeros qualuqer 

//console.log('Entrada tratada: ', lines);
/**
 * Terminal
 * $ 2.00
 * $ 3.00
 * lines = [2, 3]
 */

// ____________________________________________________________



var r = +lines[0] // mais ele converte a string em numeros.
var a = 3.14159 * Math.pow(r, 2) //




process.stdout.write(`A=${a.toFixed(4)}\n`);

//var R = Math.pow(3, 2);
//var result = R *= Math.PI;






