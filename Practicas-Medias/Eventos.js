'use strict'


function cambiarColor(){
	boton.style.backgroundColor = 'red';
}

var boton = document.querySelector("#boton");

// Click
boton.addEventListener('click', function(){
	cambiarColor();
});

// Mouse over
boton.addEventListener('mouseover', function(){
	boton.style.backgroundColor = 'yellow';
});

// Mouse out

boton.addEventListener('mouseout', function(){
	boton.style.backgroundColor = 'black';
});
