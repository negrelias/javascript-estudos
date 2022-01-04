console.log("Olá Lucas\nTudo bem?\n\n\n\nQue bom!")


// 'fs' é uma biblioteca nativa do node para trabalhar com arquivos. Significa 'File System'

var input = require('fs').readFileSync(0, 'utf-8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
 
 
console.log(lines[0]);
