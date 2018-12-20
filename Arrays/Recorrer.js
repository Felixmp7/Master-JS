'use strict'

var amigos = ["Felix", "Jose", "Maria", "Andrha", "Alejandro", "Cesar", "Jesus"];

document.write("<h1>Amigos</h1>");
document.write("<ul>")
/*amigos.forEach((elemento, indice) => {
	document.write("<li>"+indice+" - "+elemento+"</li>");
})*/

//for in

for(let amigo in amigos){
	document.write("<li>"+amigos[amigo]+"</li>");
}
document.write("</ul>")