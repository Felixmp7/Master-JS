'use strict'

/*
	Hacer un programa que pida 2 numeros y diga cual es el mayor, el menor y si son iguales.
	PLUS = Si los datos no son numeros o son numeros menores o iguales a 0, que vuelva a pedir los datos
*/

// Ejercicio sin Plus
/*var a = prompt('Ingrese el numero A');
alert(a);

var b = prompt('Ingrese el numero B');
alert(b);

if (a>b) {
	alert("El numero " + a + " es mayor que " + b);
}
else if(a==b){
	alert("Los 2 numeros son iguales");
}
else {
	alert("El numero " + b + " es mayor que " + a);
}*/

//Ejercicio con plus

do {
	var a = parseInt(prompt('Ingrese el numero A'));
	alert(a);

	var b = parseInt(prompt('Ingrese el numero B'));
	alert(b);

	if (isNaN(a) || a <= 0 || isNaN(b) || b <= 0) {
		alert('Datos invalidos, por favor vuelva a introducir los datos');
		var condicion = false;
	}
	else{
		if (a>b) {
		alert("El numero " + a + " es mayor que " + b);
		}
		else if(a==b){
		alert("Los 2 numeros son iguales");
		}
		else {
		alert("El numero " + b + " es mayor que " + a);
		}
		condicion = true;
	}

}while(!condicion);