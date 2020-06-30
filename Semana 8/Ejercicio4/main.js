'use strict';

let nombre1 = 'Alejandro Calvo'
document.body.onload
var new1 = document.createElement("li"); 
var content1 = document.createTextNode(nombre1); 
new1.appendChild(content1);
document.body.append(new1); 

let nombre2 = 'Jacobo Uribe'
document.body.onload
var new2 = document.createElement("li"); 
var content2 = document.createTextNode(nombre2); 
new2.appendChild(content2);
document.body.append(new2); 

document.querySelector('h1').innerHTML= 'La Geek Girl seleccionada es: ' + nombre2; 