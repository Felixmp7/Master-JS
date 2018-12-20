'use strict'

var texto = ["Felix", "Jose", "Maria", "Andrha", "Alejandro", "Cesar", "Jesus"];

document.write("<h1>Amigos</h1>");
document.write("<ul>")
texto.forEach((elemento, indice) => {
	document.write("<li>"+indice+" - "+elemento+"</li>");
})
document.write("</ul>")