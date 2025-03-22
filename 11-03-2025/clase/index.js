console.log('Hola este es mi primer Script');

let nombre = 'obed';
let edad = 24;
let masculino=true; ///tipo de dato primitivo y eso significa que es inmutable
let sobrinos=null;
let papas= undefined;
let id=new Symbol("foo");
console.log(id);

let saldo = 22938012831938144712683123623621379173913n;



const number1 = Number(0);///expresiones, funcion constructora, clase o prototipo
const number2 = Number(2+3);
const number3 = Number(true);///type cohersion
const number4 = Number(false);/// type cohersion
const number5 =Number([].length);

console.log(number1,number2,number3,number4,number5);


/////////////////////////////////////////////
console.log(typeof nombre, typeof edad);

let persona = {
    nombre: 'Obed', ///Guarda llaves y valores
    edad:24,
    papas: [{nombre:'obed', edad:24}]
};///literal object


persona.nombre = 'Ronaldo';
persona['nombre'];

console.log(persona);

let aldo = persona; //almacena la direccion de memoria
aldo.nombre= 'rogelio';
console.log(aldo);
console.log(nombre);
/*
let coleccion = ['', '', '' ];
coleccion[0]
coleccion[1]//nomenglatura para acceder al indice del codigo
coleccion[2]
*/

//console.log(coleccion[0]);
const arreglo=[ 0,1,2,2,3,3,4,5,6,6];

const set = new Set(arreglo);

console.log(set);///arreglo
console.log(set.size);
set.add("loa");
console.log(set);///arreglo
console.log(set.size);
console.log(set.delete(5));
console.log(set);///arreglo
console.log(set.size);
console.log(set.has(5));


const adds= new Set([1,3,5,7,9]);
const squares = new Set([2,4,6,8,10]);

console.log(adds.intersection(squares));


const map= new Map();
map.set(1,'uno');
const value = map.has(1);
console.log(value);

const otherValue = map.get(1);
console.log(otherValue);

//let deleteRedult = map.delete(0);
//console.log(deleteRedult);

console.log(map);
map.clear();
console.log(map)
console.log(map.size);

///manera de generar otro map

const otherMap = new Map([
    ['manzana',2]
    ['pera', 3]
    ['sandia',1]
    ['melon', 4]
])
console.log(otherMap);





