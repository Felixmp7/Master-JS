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


//Focus
var input = document.querySelector("#campo_nombre");
input.addEventListener('focus', ()=>{
	console.log('[Focus] estas dentro del input');
})

// Blur
input.addEventListener('blur', ()=>{
	console.log('[Blur] estas fuera del input');
})

//Keydown


//Keyup


//Keypress