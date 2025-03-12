console.log("Hola");

// Estos son los tipos de datos primitivos.

let nombre = "Nestor";
nombre[0] = 'Ron'; // Esto no puede pasar por que es un tipo de dato primitivo y eso significa que es inmuutable
let edad = 24;
let masculino = true;
let parientes = null;
let sobrinos = undefined;
let saldo = 1244647364764829n;

const number1 = Number('0');     

//////////////////////////////////////////////////


console.log(typeof nombre);

// Estos son tipos de datos complejos.

// POO => absstraccion de un objeto de la vida real

// Este elemento complejo es un objeto

let persona = {
    nombre: 'Nestor',
    edad: 24,
    papas: [{nombre: 'Nestor', edad: 30}]
}; // Esto se llama literal object 

persona.nombre = 'Aqua';
persona['nombre'];
console.log(persona);

let beyer = persona; // Aqui guardamos la direccion de memoria
beyer.nombre = 'Gael';
console.log(persona);
console.log(beyer);

// Este elemento es un arreglo.

let coleccion = ['Nestor', 'Gael', 'Beyer'];
coleccion[0];
coleccion[1];
coleccion[2];
console.log(coleccion);


const arreglo = [0, 1, 2, 3, 4, 5];
const set = new Set(arreglo); // Es muy parecido a un arreglo
console.log(set.size);
set.add("otro");
console.log(set);
console.log(set.size);
set.delete(5);
console.log(set);
console.log(set.size);
console.log(set.has('15'));

// map

const map = new Map();
map.set(1, 'uno');
const value = map.has(1);  
console.log(value);
const otherValue = map.get(1);
console.log(otherValue);
// map.delete(0);
console.log(map);
map.clear();
console.log(map);
console.log(map.size);

const otherMap = new Map ({
    
})

