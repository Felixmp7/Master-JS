'use strict'

window.addEventListener('load', () => {
	// Ejecutar codigo 1 vez despues de cierto tiempo  = setTimeout()
	/*var tiempo = setTimeout(()=>{
		console.log('Set timeout ejecutado');
	}, 2002)*/

	// Ejecutar codigo cada cierto tiempo  = setInterval()

	function iniciar(){
		var tiempo = setInterval(()=>{
			console.log('Set interval ejecutado');
		}, 2002);
		return tiempo;
	}

	var tiempo = iniciar();

	var stop = document.querySelector('#stop');
	stop.addEventListener('click', ()=> {
		clearInterval(tiempo);
		console.log('Has detenido el tiempo O.O')
	})

	var start = document.querySelector('#start');
	start.addEventListener('click', ()=> {
		iniciar();
		console.log('Has Iniciado el tiempo O.O')
	})
});