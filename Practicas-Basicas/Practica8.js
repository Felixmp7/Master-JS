'user strict'

/*
	Calculadora
*/

var opcion = parseInt(prompt('Opciones: ' +' 1. Sumar '+ ' 2. Restar '+ ' 3. Multiplicar '+ ' 4. Dividir '));

switch(opcion){
	case 1: 
		var a = parseInt(prompt('Introduzca el numero a'));
		alert(a);
		var b = parseInt(prompt('Introduzca el numero b'));
		alert(b);
				var resultado = a+b
		alert('La suma es = '+ resultado);
	break;

	case 2: 
		var a = parseInt(prompt('Introduzca el numero a'));
		alert(a);
		var b = parseInt(prompt('Introduzca el numero b'));
		alert(b);
		var resultado = a-b
		alert('La resta es = '+ resultado);
	break;

	case 3: 
		var a = parseInt(prompt('Introduzca el numero a'));
		alert(a);
		var b = parseInt(prompt('Introduzca el numero b'));
		alert(b);
		var resultado = a*b
		alert('La multiplicacion es = '+ resultado);
	break;

	case 4: 
		var a = parseInt(prompt('Introduzca el numero a'));
		alert(a);
		var b = parseInt(prompt('Introduzca el numero b'));
		alert(b);
		var resultado = a/b
		alert('La division es = '+ resultado);
	break;

	default:
		alert('Seleccione una opcion válida');
	break;
}