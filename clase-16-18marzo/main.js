console.log("objetos globales en js");
const d = document;
/*  son aproximadamente 7 objetos globales */
/* el primero Window */

console.log(window);

/* alguna de la propiedad de window es document
que representa dom*/

console.log(window.document);

/* mediante documento podemos acceder al y manipular de manera dinamica sus elementos */

console.log(window.innerHeight); // mide la altura de la ventana
console.log(window.innerWidth); // mide el anho de la ventana

/* setTimeout un tiempo de espera */

/* setTimeout(() => {
  console.log("paso un segundo");
}, 1000); */

/* podemos generar nuestras propiedades*/

/* document no sirve para crear , agregar , manipular y eliminar elemento */
/* htmlDivElement, HTMLElement, Element , Node, EventTarget, Object*/
/* ejemplo de como obtener un elemento de html*/

const contenedor = document.querySelector(".contenedor");
console.log(contenedor);
/*  retorna nulo si no encuentra el elemento */
/* lo mas recomendable es almacenarlo en una variable para poder utilizarlo mas adelante */
contenedor.style.backgroundColor = "yellow";
const article = document.getElementById("article");
console.log(article);

article.style.backgroundColor = "blue";

/* queryselectorAll retorna una lista de nodos de la collecion de elementos 
que cumplan con la seleccion */

const nodos = document.querySelectorAll("span");
console.log(nodos);

/* tenemos funciones para crear elementos ejemplo */

const subtitulo = d.createElement("h2");
subtitulo.textContent = "hola a todos";
d.body.appendChild(subtitulo);

/* ejercicios


1.- Buscar elementos en el dom 
2.- Crear y eliminar elementos
3.- Modificar atributos
4.- Modificar estilos y clases
5.- Modificar el contenido*/

/* abuscar elementos del dom formas ejemplos */

console.log(d.getElementsByTagName("li"));
console.log(d.getElementsByClassName("ul"));
console.log(d.getElementsByName("nombre"));
console.log(d.getElementById("seccion"));
console.log(d.querySelector("#seccion"));
console.log(d.querySelectorAll("li"));
d.querySelectorAll("li").forEach((el) => console.log(el.textContent));

/* creando elementos del dom */
console.log(d.createElement("div"));
console.log(d.createElementNS);
// Crear un elemento SVG <circle>
const svgNS = "http://www.w3.org/2000/svg";
const circle = document.createElementNS(svgNS, "circle");

// Establecer atributos del círculo
circle.setAttribute("cx", 50);
circle.setAttribute("cy", 50);
circle.setAttribute("r", 40);
circle.setAttribute("fill", "red");

// Agregar el círculo a un elemento SVG existente en el DOM
const svgElement = document.getElementById("miSVG");
d.body.appendChild(circle);

const divRojo = d.createElement("div");
divRojo.style.backgroundColor = "red";
divRojo.textContent = "soy un div rojo";

d.body.appendChild(divRojo);
d.body.removeChild(divRojo);

/* modificando atributos */

const inputText = d.querySelector(".inputText");
console.log(inputText);
inputText.setAttribute("value", "enviar");
inputText.setAttribute("type", "submit");
inputText.removeAttribute("name");
inputText.removeAttribute("placeholder");
console.log(inputText.hasAttribute("type"));
console.log(inputText.getAttribute("data-description"));
inputText.setAttribute("data-description", "probando el cambio de atributo");

console.log(inputText.dataset.description);

/* modificar estilos y clases */

const divCaja = d.createElement("div");
divCaja.textContent = "soy un div ";
divCaja.style.backgroundColor = "blue";
divCaja.style.color = "white";
divCaja.style.width = "100px";
divCaja.style.height = "100px";
divCaja.style.border = "thin solid black";
divCaja.style.fontSize = "2rem";

d.body.appendChild(divCaja);
divCaja.classList.add("div-caja-amarilla");
divCaja.style.setProperty("margin", "0 auto");

/* promesas */

const divInsert = d.createElement("div");
divInsert.textContent = "soy otro div de referencia";

divCaja.addEventListener("click", (e) => {
  console.log("me dio click");
  console.log(e.target.name);
});

divCaja.dispatchEvent(new Event("click"));

/* promesas nos funciona para controlar funciones asincronas */

const callback = (resolve, reject) => {
  /* controlar funciones asincronas */
  let exito = false;

  setTimeout(() => {
    if (exito) {
      resolve("si em amó toda la vida");
    } else {
      reject("no se cumplio con esta morra");
    }
  }, 1000);
};

const promesa = new Promise(callback);
console.log(promesa);

promesa
  .then((result) => {
    console.log(result);
    console.log(promesa);
  })
  .catch((error) => {
    console.log(error);
    console.log(promesa);
  });

/* ejemplo de promesas */

/* ejemplo de promesas con una peticion */
const obtenerInfo = () => {
  const url = "https://pokeapi.co/api/v2/pokemon/miltank";
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data.sprites.back_shiny))
    .catch((err) => console.log(err));
};

obtenerInfo();
