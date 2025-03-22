console.log('HOLA ESTE ES MI PRIMER SCRIPT');

let nombre = 'aldo';
nombre[0] = 'Ron'; // tipo de dato primitivo y eso significa que es inmutable
console.log(nombre);
nombre = 'Ronaldo';
let edad = 30;
let masculino = true;
let sobrinos = null;
let papas = undefined;
let id = Symbol("foo");
let saldo = 1231231829737891723n;

console.log(typeof nombre, typeof edad);
// POO => abstraccion de un objeto de la vida real
const persona = {
    nombre: 'Aldo',
    edad: 30,
    papas: [{nombre: 'Aldo', edad: 30}]
}; // literal object
persona.nombre = 'Ronaldo';
// persona['nombre']; // 'Ronaldo'
console.log(persona);
const aldo = persona; // direccion de memoria
aldo.nombre = 'Rogelio';
console.log(persona); // ronaldo
console.log(aldo); // rogelio

let coleccion = ['aldo', 'magaly', 'judit'];
// coleccion[0] // 'aldo'
// coleccion[1] // 'magaly'
// coleccion[2] // 'judit'
console.log(coleccion[0]);

const arreglo = [3,0,1,2,3,3,5];

const set = new Set(arreglo); // arreglo 
console.log(set);

console.log(set.size);
set.add('asd');
console.log(set);
console.log(set.size);
set.add('5');
console.log(set);
console.log(set.size);
console.log(set.delete(5));
console.log(set.delete(5));
console.log(set);
console.log(set.size);
console.log(set.has('15'));