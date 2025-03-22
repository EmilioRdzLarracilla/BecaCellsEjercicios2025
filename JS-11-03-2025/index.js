console.log("Hola este es mi primer script");

//tipos de datos primitivos (son inmutables)

let nombre = 'saul'; //string

nombre[0] = "Ron"; // tipo de dato primitivo y eso significa que es inmutable
nombre = 'Ronaldo'; // se debe escribir de la siguiente manera si se quiere cambiar

let edad = 25;    //number
let masculino = true; //boolean
let sobrinos = null; //null
let papas = undefined; //undefined
let it = Symbol('credential'); //symbol sirve para identificar valores unicos
let saldo = 12345798372846672683726n; //BigInt 

console.log(typeof nombre); //typeof no dice que tipo de dato es una variable

const number1 = Number('0'); //expressiones, funccion constructora, clase o prototipo
const number2 = Number(2+3);
const number3 = Number(true);
const number4 = Number(false);
const number5 = Number([].length);
const number6 = Number([].length);

const number7 = new Number('0'); //expressiones, funcion constructora, clase o prototipo, constuye objetos 
const number8 = new Number(2+3);
const number9 = new Number(true); //tyoe cohersion
const number10 = new Number(false); //tyoe cohersion
const number11 = new Number([].length);
const number12 = new Number([].length);



////////////////////////////////////////////////////////////////////////////////////////////

//POO => abstraccion de un objeto de la vida real

//tipos de datos complejos (son mutables)

let persona = {   // tipo literal object
    nombre: 'saul',
    //[variable.nombre] = '': creacion de variables dinamicas
    edad: 25,
    papas: [{nombre: 'saul', edad: 25}]
};

persona.nombre = "Ronaldo";   // es mutable porque  si se puede cambiar la variable dinamica
persona['nombre'] // 'rONALOD'
console.log(persona);

let saul = persona; // dirrecion de memoria
saul.nombre = 'Rogelio';
console.log(persona); //ronaldo
console.log(saul); //rogelio
;
let coleccion = ['saul', 'aldo','judit']; //  tipo arreglo, guarda valores
// nomenclatura para ingresar al array
coleccion[0] //saul 
coleccion[1] //aldo 
coleccion[2] //judit 
console.log(coleccion[0])


const arreglo = [0,1,2,3,3,3,5,5];
// la forma mas rapida para el programador de limpiar los numeros repetidos es con 'new Set'

//set
const set = new Set(arreglo); //tipo de dato set no primitivo, es muy parecido a un array, permite almacenar valores unicos
console.log(set);
console.log(set.size); //set.size tamaño de un conjunto

set.add('asd'); // agrega un valor en el conjunto
console.log(set);
console.log(set.size);

set.add('asd'); // agrega un valor en el conjunto
console.log(set);
console.log(set.size);

console.log(set.rdelete(5)); //borra un valor del conjunto
console.log(set.rdelete(5)); //borra un valor del conjunto

console.log(set);
console.log(set.size);
console.log(set.has(4)); // retorna aun boolean indicando si el elemento especificado existe en el objeto set o no

//map cuando se quiera utilizar tuplas de valores

const map = new Map();
map.set(1, 'uno'); //agrega un valor al mapa y set necesita dos cosas la llave y el valor
if(map.has(1) === true) {

} else {
    map.set(1, 'uno'); //en set y en map 'has' funciona d ela misma forma
}

map.set(1, 'one'); //se sobrescribio el map
console.log(map)


const value = map.has(1);
console.log(value);

const otherValue = map.get(1); //
console.llog(otherValue);
let deleteResult = map.delete(0); //
console.log(deleteResult);
console.log(map);
map.clear(); // limpia y elimina todos los elementos del map
console.log(map.size()) //


const otherMap = new Map([
    ['manzana', 2],
    ['manzana', 2],
    ['manzana', 2],
    ['manzana', 2],
])

console.log(otherMap);


