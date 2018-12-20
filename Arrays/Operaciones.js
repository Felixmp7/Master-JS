'use strict'

var categorias = ["Accion", "Suspenso", "Comedia"];
var peliculas = ["Infinity", "The Purge", "Dale Duro", "Interestelar"];

peliculas.push("Forrest Gump"); // push() añade elementos al final del array
console.log(peliculas);

//peliculas.pop();	// pop() elimina ultimo elemento en el array
//console.log(peliculas);

// Para eliminar elementos en especifico, puedo hacerlo de esta manera:

// Quiero eliminar Dale Duro

var elementWilldelete = peliculas.indexOf('Dale Duro');
console.log(elementWilldelete)

if (elementWilldelete > -1) {
	peliculas.splice(elementWilldelete,1); // splice elimina elementos
}
console.log(peliculas);

var string = peliculas.join(); // convierte arrays en strings

//console.log(string)

peliculas.sort();	//Ordernar array alfabeticamente
console.log(peliculas);

peliculas.reverse(); //Ordenar array al inverso
console.log(peliculas);