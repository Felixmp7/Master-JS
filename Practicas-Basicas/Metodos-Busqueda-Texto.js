'use strict'

var texto = "Bienvenidos al curso de Master para Javascript";

//var busqueda = texto.indexOf('curso'); // Indica en que posicion (caracter) empieza la palabra buscada (Primera coincidencia de busqueda)
//var busqueda = texto.lastIndexOf('curso'); // Indica en que posicion (caracter) empieza la palabra buscada (Ultima coincidencia de busqueda)
//var busqueda = texto.search('curso'); // Similar al indexOf()
//var busqueda = texto.match('curso'); // Devuelve en un array informacion adicional sobre el elemnto buscado.
//var busqueda = texto.substr(15,5); // Extraer a partir del caracter 15, 5 caracteres.
//var busqueda = texto.charAt(15); // Extraer a partir caracter 15.
//var busqueda = texto.startsWith("Bienv"); // Extraer texto que empiece por "Bienv" (devuelve true o false)
//var busqueda = texto.endsWith("Jav"); // Extraer texto que termine por "Bienv" (devuelve true o false)
var busqueda = texto.includes("Master"); // Similar a indexOf (palabras precizas y devuelve true o false) . 


console.log(busqueda);