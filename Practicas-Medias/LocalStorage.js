'use strict'

// Comprobar Disponibilidad del Local Storage
if (typeof(Storage) !== 'undefined') {
	console.log('Puedes usar LocalStorage')
}
else {
	console.log('LocalStorage No permitido')
}


// Guardar datos en el LocalStorage
localStorage.setItem('Titulo', 'Primer dato en LocalStorage')