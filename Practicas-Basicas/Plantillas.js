'use strict'

var nombre = prompt('Nombre: ');
var apellido = prompt('Apellido: ');

//var texto = "Mi nombre es "+ nombre + " y mi apellido es "+apellido;

var texto = `
	<h1>Hola que tal</h1>
	<p>Mi nombre es ${nombre}</p>
	<p>Mi apellido es ${apellido}</p>
`;
document.write(texto);
