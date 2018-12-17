'use strict'

/*
	Mostrar todos los numeros divisores de 1 numero introducido por un prompt.
*/

var userData = parseInt(prompt('Introduzca el numero',1));

for (var i = 1; i <= userData ; i++) {
	if (userData%i == 0) {
		console.log('El numero '+ i + ' es divisor de ' + userData);
	}
}