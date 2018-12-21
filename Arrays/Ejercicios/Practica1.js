'use strict'

// Programa que:
/*1. Pida 6 numeros por pantalla y los meta en un array.
2. Mostrar el array completo, en el cuerpo de la pagina y en la consola.
3. Sacar el vector ordenado, y mostrarlo.
4. Invertir el orden y mostrarlo.
5. Mostrar cuantos elementos tiene el array.
6. Hacer busqueda de un valor introducido por el usuario y que nos diga si está en el array
y su indice.*/

// 1)
var n = 1;
var array = [];
do{
	var data = parseInt(prompt('Introduzca el valor numero '+n+' en el array'));
	n++;
	array.push(data);
}while(n <= 6);

// 2)
console.log(array);
document.write('[ '+array+ ']');


