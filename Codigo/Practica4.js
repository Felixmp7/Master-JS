'use strict'

/*
	Mostrar todos los numeros impares entre 2 numeros introducidos por el usuario.
*/

var a = parseInt(prompt('Ingrese el numero A'));
var b = parseInt(prompt('Ingrese el numero B'));

if (b>a) {
	for (var i = a+1 ; i < b; i++) {
		if (i%2 != 0) {
			console.log('El numero '+ i + ' es impar');
		}
	}
}
else if(a>b){
	for (var i = b+1 ; i < a; i++) {
		if (i%2 != 0) {
			console.log('El numero '+ i + ' es impar');
		}
	}
}

else{
	console.log('Saliendo del programa');
}
