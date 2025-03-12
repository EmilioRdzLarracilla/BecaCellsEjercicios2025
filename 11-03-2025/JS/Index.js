console.log('Hola mki primer script')


let nombre = 'ALan';
let edad = 30;
let masculino = true;
let sobrinos = null;
let papas = undefined;
let id = Symbol('foo');
console.log(id)
let saldo = 1231241341234255323434n;

console.log(typeof saldo, typeof edad);

let persona = {
    nombre: "Alan",
    edad: 30,
    papas: [{nombre: "Papas", edad: 30}]
}

console.log(typeof persona)
persona.nombre = "Oscar";
persona['nombre'];

let alan = persona;


console.log(persona)
let coleccion = ['aldo','magaly','judit'];console.log(coleccion)
coleccion[0]
coleccion[1]
coleccion[2]
console.log(coleccion[0])

const arreglo = [3,2,3,3,5,6]

const set = new Set(arreglo);// arreglo
console.log(set ,set.size)
set.add('ads')
console.log(set ,set.size,set.delete(5),set.delete(5))
console.log(set.has('ads'), set.values[4])

const map = new Map();
map.set(1, 'uno');

// if(map.set('uno')){

// }else {
//     map.set('one');
// }
const value = map.has(1)
console.log(value)
const otroValue = map.get(1)
console.log(otroValue)
console.log(map.delete(1))
map.delete(1);

let deleteResult = map.delete(0)
console.log(deleteResult)
map.clear();
console.log(map)
console.log(map.size)


