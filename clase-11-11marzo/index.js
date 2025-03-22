/* scopes */

function saludar() {
  let nombre = "emilio";
  console.log(`hola mi nombre es ${nombre}`);
}

/* console.log(nombre); */

/* const  ejemplo*/

const PI = 3.1416;

console.log(PI);

/* tipos de datos */

/* string  */

const palabra = "emilio";

/* numero */
let numero = 10;
let numeroDecimal = 10.235436;
let numeroExp = 25e78;

/* otra forma de crear datos primitivos */

/* const numero1 = new Number("10");
const numero2 = new Number(2 + 3);
const numero3 = new Number(true);
const numero4 = new Number(false);
const numero5 = new Number([].length); */

const numero1 = Number("10");
const numero2 = Number(2 + 3);
const numero3 = Number(true);
const numero4 = Number(false);
const numero5 = Number([].length);

console.log(numero1, numero2, numero3, numero4, numero5);

console.log(numeroExp);

/*  boolean*/

const esMayor = true;

/* nulo */

let cantidad = null;

/* undefined */
let indefinido;
let noDefinido = undefined;

console.log(indefinido, noDefinido);

/*  symbol */

let id = Symbol("credencial");
let id2 = Symbol("credencial");

console.log(id === id2);

/* bigint */

let saldo = 12341237497348718482384n;
console.log(saldo);

console.log(typeof saldo);

/* Inmutabilidad */

let nombre = "james ";

/* objeto  */

let datos = {
  nombre: "emilio",
  edad: 29,
  hobbies: ["patinar , caminar ,leer , cocicar , hacer lettering"],
};

/* accediendo a cada una propiedad del objeto */

console.log(datos.nombre);
/* otra forma de acceder */

console.log(datos["hobbies"]);

/* arreglo */

let arreglo2 = [23, 4, 5, 5, 9, 4, 6, 4, 6];
console.log(arreglo2[6]);

/* set */

const arreglo3 = [1, 2, 3, 3, 3, 4, 2, 4, 4, 4, 5, 6, 7, 7, 8, 6, 6, 4];

const unicos = new Set(arreglo3);
console.log(unicos);
console.log(unicos.delete(2));
console.log(unicos.size);
unicos.add(89);
unicos.add("6");
console.log(unicos);
console.log(unicos.has(6));

/* insterseccion de set */

const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([6, 7, 8, 9, 10]);

const inter = set1.intersection(set2);

console.log(inter);

/*  maps  */

const map = new Map();

map.set("nombre", "emilio");
console.log(map);
map.set("edad", 29);
console.log(map);
map.set("hobbies", ["caminar", "correr", "cocinar"]);
console.log(map);

console.log(map.has("hobbies"));
/* ontener el valor de un map */
const otherValue = map.get("hobbies");
console.log(otherValue);

const resultado = map.delete("edad");
console.log(resultado);
console.log(map.size);

console.log(map);

map.clear();

console.log(map);

const ma = new Map();
ma.set();
