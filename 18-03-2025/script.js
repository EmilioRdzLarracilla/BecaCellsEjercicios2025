
///Array, Number, String, Object, Map, Set, Boolean, Promise => ejercicios practica 50 (eval)
//Js en el navegador (Document y events)
//Modulos de ES
//Web components ejercicios practica
// Lit Elememnt (Evaluacion)
// Proyecto


//window
//documento

// buscar elementos en el dom, crear elementos y eliminar elementos

//buscar nodo(HTMLDivElement, HTMLElement, Node,)
const box = document.getElementById('box');
box.style.backgroundColor= 'red';
box.style.color= 'white';
console.log(box.__proto__);

const box= document.querySelector();


var parentElement = document.getElementById("parentElement");
var newElement = document.createElement("div");
newElement.innerText = "Elemento insertado antes";

var referenceElement = document.getElementById("referenceElement");
parentElement.insertBefore(newElement, referenceElement);



////acciones y eventos

