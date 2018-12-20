'use strict'

var amigos = ["Felix", "Jose", "Maria", "Andrha", "Alejandro", "Cesar", "Jesus"];

/*var busqueda = amigos.find(amigo => { //find permite trabajar con los strings
	if(amigo == "Alejandro"){
		console.log("true");
	}
	else {
		console.log("false");
	}
})

console.log(busqueda);*/


var busqueda = amigos.findIndex(amigo => amigo == "Alejandro") //findIndex permite trabajar con los indices
console.log(busqueda);

var precios = [10,30,12,50,101,56,204];

var busqueda = precios.some( precio => precio > 20);
console.log(busqueda);