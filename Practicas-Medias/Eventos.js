'use strict'


function cambiarColor(){

	var bg = boton.style.backgroundColor;
	if (bg == "white") {
		boton.style.backgroundColor = 'red';
	}
	else if(bg == 'red'){
		boton.style.backgroundColor = 'white';
	}
}

var boton = document.querySelector("#boton");
boton.style.backgroundColor = 'white';
boton.addEventListener('click', function(){
	cambiarColor();
});