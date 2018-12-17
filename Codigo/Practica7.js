'user strict'

/*
	Tabla de multiplicar de un numero introducido por pantalla.
*/

/*var userData = parseInt(prompt('Ingrese el numero', 1));

document.write('Tabla del numero '+userData+ '<br/>'+ '<br/>');
for (var i = 0 ; i <= 10; i++) {
	document.write(userData+'x'+i+ '='+ i* userData + '<br/>');
	
}*/

//Plus: Hacer la tabla de todos los numeros.
document.write('Tablas de multiplicar' + '<br/>');
for (var i = 0 ; i <= 10; i++) {
	for (var j = 0 ; j <= 10; j++) {
		document.write(i +'x'+j + '=' + i*j + '<br />');
	}
	document.write('<br />'+ '<br/>')
}