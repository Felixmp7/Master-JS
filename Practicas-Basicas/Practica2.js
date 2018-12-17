'use strict'

/*Utilizando un bucle, mostrar la media y la suma de los resultados de los datos introducidos por el usuario
hasta que el usuario introduzca un numero negativo*/
/*var media = 0;
do {
	var a = parseInt(prompt('Ingrese el numero A'));
	var b = parseInt(prompt('Ingrese el numero B'));

	if (a <= 0 || b <= 0) {
		alert('Datos invalidos, saliendo del programa...');
		var condicion = false;
	}
	else{
		var resultados = a + b;
		alert('La suma de los numeros ingresados es = ' + resultados);
		media = media + resultados;
		alert('La media es = '+ media)
		condicion = true;
	}

}while(condicion);*/


// Entendi mal el ejercicio, el profesor se referia a otra cosa cuando dijo "media", haciendolo de nuevo;

var resultado = 0;
var contador = 0;
do {
	var a = parseInt(prompt('Ingrese el numero'));
	
	if (a < 0) {
		alert('Datos invalidos, saliendo del programa...');
		var condicion = false;
	}
	else{
		contador++;
		var resultado = resultado + a;
		alert('Suma = '+ resultado);
		condicion = true;
	}

}while(condicion);

alert('La suma total fue = '+ resultado);
alert('La media total fue = '+ resultado/contador);

