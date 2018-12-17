'use strict'

/*
	Hacer un programa que pida 2 numeros y diga cual es el mayor, el menor y si son iguales.
*/

var a = prompt('Ingrese el numero A');
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
}