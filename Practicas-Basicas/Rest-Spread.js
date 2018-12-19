'use strict'

/*function listaDeFrutas(f1,f2){
	console.log("La fruta 1 es: "+ f1);
	console.log("La fruta 2 es: "+ f2);
}

listaDeFrutas("Pera", "Manzana");*/

// Parametro rest (...) se utiliza cuando una funcion tiene definidos un numero limitado de parametros, y
// cuando se llama a la funcion se le pasan mas parametros de los que admite,
// este parametro toma todos los parametros que sobran y los guarda en un array que podemos manipular.


/*function listaDeFrutasConRest(f1,f2, ...resto_de_frutas){
	console.log("La fruta 1 es: "+ f1);
	console.log("La fruta 2 es: "+ f2);
	console.log(resto_de_frutas)
}

listaDeFrutasConRest("Pera", "Manzana", "Limon", "Mango", "Guayaba", "Guanabana", "Durazno", "Melocoton", "Fresa");*/


// Parametro Spread (...) se utiliza cuando se hace el llamado a la funcion, por ejemplo, si tuviera un 
// array de frutas y lo paso como parametro en el momento de llamar a la funcion, la funcion va a tomar el f1
// como si fuera una fruta completa, pero en realidad es un array.. utilizando los 3 puntos en el llamado
// le indicamos a la funcion que estamos pasando una coleccion de datos y que debe distribuir los datos de acuerdo
// a la cantidad de parametros que recibe.

function listaDeFrutasConRest(f1,f2, ...resto_de_frutas){
	console.log("La fruta 1 es: "+ f1);
	console.log("La fruta 2 es: "+ f2);
	console.log(resto_de_frutas)
}
var frutas = ["Pera", "Manzana"];

//listaDeFrutasConRest(frutas, "Limon", "Mango", "Guayaba", "Guanabana", "Durazno", "Melocoton", "Fresa");
listaDeFrutasConRest(...frutas, "Limon", "Mango", "Guayaba", "Guanabana", "Durazno", "Melocoton", "Fresa");