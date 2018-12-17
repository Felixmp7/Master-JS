'use strict'

/*
	Que nos diga si un numero es par o impar, pedir datos por prompt, si no es valido, volver a pedir el numero
*/

do {
	var userData = parseInt(prompt('Ingrese el numero', 1));
	
	if (isNaN(userData)) {
		alert('Dato invalido, Introduzca un numero');
		var condicion = false;
	}
	else if(userData%2 == 0){
		alert('El numero ' + userData +' es par');
		condicion = true;
	}
	else if(userData%2 != 0){
		alert('El numero ' + userData +' es impar');
		condicion = true;
	}

}while(!condicion);