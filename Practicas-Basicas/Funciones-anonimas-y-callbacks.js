'use strict'

// Funciones anonimas: Funciones que no tienen nombre.

/*function sumar(a,b){
	var resultado = a+b;
	return "La suma es = " + resultado;
}

console.log(sumar(5,4));*/

//Callbacks 
// Cuando en una llamada a una funcion, le paso como parametros otra funcion, se convierte en un callback


function sumar(a,b, sumar_y_mostrar, sumar_doble){
	var resultado = a+b;
	sumar_y_mostrar(resultado);
	sumar_doble(resultado);
	return sumar;
}

sumar(3,5, function(dato){
	console.log("La suma es = "+dato);
},function(dato){
	console.log("La suma doble es = "+(dato*2));
});