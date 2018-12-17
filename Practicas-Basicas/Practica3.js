'use strict'

/*
	Dados 2 numeros introducidos por el usuario, mostrar por consola todos los numeros intermedios.
*/

var a = parseInt(prompt('Ingrese el numero A'));
var b = parseInt(prompt('Ingrese el numero B'));

if (b>a) {
	for (var i = a+1 ; i < b; i++) {
		console.log(i);
	}
}
else if(a>b){
	for (var i = b+1 ; i < a; i++) {
		console.log(i);
	}
}

else{
	console.log('Saliendo del programa');
}
