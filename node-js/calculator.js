'use strict'

// console.log('Hola Mundo desde Node');
// Capturar parámetros desde un comando | Por ejemplo, $ node calculator.js 1 2 3

const args = process.argv;
// console.log(args);

// Los 2 primeros valores del array son: path del binario de Node y path del archivo que se está corriendo.

const params = args.slice(2);
const number1 = parseFloat(params[0]);
const number2 = parseFloat(params[1]);

console.log(`
    La suma de ambos números es ${number1 + number2}.
    La resta de ambos números es ${number1 - number2}.
    La multiplicación de ambos números es ${number1 * number2}.
    La división de ambos números es ${number1 / number2}.
`);