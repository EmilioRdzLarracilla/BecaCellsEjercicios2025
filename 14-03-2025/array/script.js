//// Constructor Array

////Notacion Literal

const elementos = ["LLantas","Rines","Cuerda","Libreta","cepillo"];
console.log(elementos.length) /// total de elementos en array (lenght)
                              ///5
console.log(elementos[3]); //=> busqueda por posicion [] devuelve libreta

/// constructor de un solo parametro
const arreglo = new Array (5); 
console.log(arreglo.length);
console.log(arreglo[0]);

/// Array con multiples parametros

const usb = new Array ("32gb","64gb","128gb","256gb","512gb");
console.log(usb.length);/// tamaño de array => 5
console.log(usb[4]);//512gb

/////Metodos de Instancia

/***** Array.prototype.at() *****/

const numeros = [1,2,3,4,5,6,7,8,9,0];
let index = 5;
console.log(`el resultado de index es ${numeros.at(index)}`);
index = -8;
console.log(`el resultado de index es ${numeros.at(index)}`);

const lista = ["platanos","cebolla","mango","jabon","pera"];

function devolverprimero(lista){
    return lista.at(1);
}

const primero = devolverprimero(lista);
console.log('El primer elemeto del array es:'+ (primero));


function devolverultimo(lista){
    return lista.at(-1);
}
const ultimo = devolverultimo(lista);
console.log('El ultimo elemeto del array es:'+ ultimo)


/***** Array.prototype.concat() *****/

const num = [1,2,3,4,5,6];
const palabras = ["papas","cangrejo","murcielago","sandia"];
const cosas = ["piedras","lago","rio"];

const union = num.concat(palabras,cosas);
console.log(union);

const union2 = cosas.concat(num);
console.log(union2);

/***** Array.prototype.copyWithin() *****/

const palabra = ["papas","cangrejo","murcielago","sandia"].copyWithin(-1,-3,-1);
console.log(palabra);///["papas","cangrejo","murcielago","cangrejo"]

function copiarSegmento(arrelo, indiceinicio,indicecopiaposicion, indiceacopiar) {
    return arrelo.copyWithin(indiceinicio, indicecopiaposicion,indiceacopiar);
}

// Ejemplo de uso:
const arrayEjemplo = [1,2,3,4,"a",6];
console.log(arrayEjemplo);
console.log(copiarSegmento(arrayEjemplo,0,3,5)); 
////[4, 'a', 3, 4, 'a', 6]

/***** Array.prototype.entries() *****/

var a= [1,2,3,4,5,6,7];
var iteracion = a.entries();

for(let e of iteracion){
    console.log(e);
}

function buscarProducto(productoBuscado) {
    const productos = ["Laptop", "Teclado", "Mouse", "Monitor"];
    for (const [indice, producto] of productos.entries()) {
        if (producto === productoBuscado) {
            console.log(`Producto: "${producto}" encontrado en el índice ${indice}`);
            return indice; 
        }
    }
    
    console.log("El producto que intentas buscar no existe.");
    return -1; 
}

const indiceEncontrado = buscarProducto("jabon");

/***** Array.prototype.every() => devuelve valor booleano si 
 * la condicion (every) se cumple*****/ 

function noesString(element) {
    return typeof element === 'string' && element !== ''
}

const arr1 = ["manzana", "uva", ""];
const arr2 = ["uva", "asdasda", "melon"];

console.log(arr1.every(noesString)); //false
console.log(arr2.every(noesString)); // true

///verificar sin un arreglo es subconjunto de otro

const subconjunto = (array1, array2) =>
    array2.every((element) => array1.includes(element));
  
  console.log(subconjunto([1, 2, 3, 4, 5, 6, 7], [5, 9, 6])); // false
  console.log(subconjunto([1, 2, 3, 4, 5, 6, 7], [5, 1, 7])); // false
  
  /***** Array.prototype.fill() *****/

  const arr3 = [0,1,2,3,9,7];

  console.log(arr3.fill(3,4,5)); ///[0,1,2,3,3,7]
  //console.log(arr3.fill(0,1,3));///[0,0,0,3,9,7]
 const arr4 = [1, 2, 3,5,9,0]
 console.log(arr4.fill(4, -3, -2));

 ///filtrado en arreglos

 var celulares=["apple","samsung","oppo","realme","motorola","redmi"];
function filtraritems(query) {
    return celulares.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    });
}

console.log(filtraritems("re"));// realme,redmi

  /***** Array.prototype.find() *****/



const tienda = [
    {nombre: "cheetos", cantidad : 5},
    {nombre: "refresco", cantidad : 3},
    {nombre: "jabon", cantidad : 1},
    {nombre: "crema", cantidad : 5},
    {nombre: "aceite", cantidad : 10},

];

const resultado = tienda.find((cosa) => 
    cosa.nombre === "crema");

console.log(resultado);


  /***** Array.prototype.findIndex() *****/

const Array3 = [5,-3,18,13,25,99,10];

const numeromayor = (element) => element >15;
console.log(Array3.findIndex(numeromayor)); // array[2]


  /***** Array.prototype.findLast() *****/

  const list = [
    {nombre: "cheetos", cantidad : 5},
    {nombre: "refresco", cantidad : 3},
    {nombre: "jabon", cantidad : 1},
    {nombre: "crema", cantidad : 25},
    {nombre: "aceite", cantidad : 10},

];

function encontrar(item) {
    return item.cantidad > 15;
  }

console.log(list.findLast(encontrar)); // {nombre:'crema, cantidad: 25}

  /***** Array.prototype.findLastIndex() *****/
  const arr = [15, 120, 0, 50, 40];

  const number = (element) => element > 40;
  
  console.log(arr.findLastIndex(number));//// 3


  /***** Array.prototype.flat() *****/
var nume=[2,6,4,8,0,[5,8,9]];
console.log(nume.flat());///[2, 6, 4, 8, 0, 5, 8, 9]

  /***** Array.prototype.flatMap() *****/

  var mul=[2,4,6,8,5,4,3];
     console.log(mul.flatMap((x) => [ x * 3]));

/***** Array.prototype.forEach() *****/
function buscarNumero(arre, numeroBuscado) {
    arre.forEach((numero, index) => {
        if (numero === numeroBuscado) {
            console.log(`El número ${numeroBuscado} fue encontrado en la posición ${index}.`);
        }
    });
}

const arre = [6, 5, 4, 4, 8];

buscarNumero(arre, 10); 
buscarNumero(arre, 6); ///6 en posicion 0

/***** Array.prototype.Includes() *****/


const mascota = ["pez", "gato", "perro","perico","zorro"];

console.log(mascota.includes("perico"));
// true

/***** Array.prototype.indexOf() *****/
var indices = [];
var array = [1, 2, 3, 1, 4, 1];
var element = 1;
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);

/***** Array.prototype.join() *****/
var avatar = ["aire","tierra","fuego","agua"];
var join = avatar.join(",")
console.log(`el avatar puede controlar los siguientes elementos: ${join}`);

/***** Array.prototype.keys() *****/
const clave = [1,2,3,7,0];
const iterador = clave.keys();
for (const key of iterador) {
    console.log(key);
}

/***** Array.prototype.lastIndexOf() *****/
const zoo = ["tigre","cocodrilo","pato","ganzo","vaca"];

console.log(zoo.lastIndexOf("pato"));

/***** Array.prototype.Map() *****/
var ent = [8, 12, 16, 32, 64];
var mitad = ent.map(function (num) {
  return  num / 2;
});
console.log(mitad);

/***** Array.prototype.pop() *****/
const autos = ["dodge","chevrolet","audi","ford","tesla"];
console.log(autos);
console.log('se eliminara:' + autos.pop());
console.log(autos);

/***** Array.prototype.push() *****/

const auto = ["dodge","chevrolet","audi","ford","tesla"];
console.log(auto.push("BYD","Corvette"));
console.log(auto);

/***** Array.prototype.reduce() *****/
console.log([0, 5, 9, 3, 4].reduce(function (valorAnterior, valorActual) {
    return valorAnterior + valorActual;
  }, 1));

  /***** Array.prototype.reduceRight() *****/

  console.log([1, 5, 9, 3, 4].reduceRight(function (valorAnterior, valorActual) {
    return valorAnterior + valorActual;
  }, 8));

/***** Array.prototype.reverse() *****/

const tareas = ["aseo","trastes","barrer"];
 const reversa = tareas.reverse();
 console.log(reversa);

 /***** Array.prototype.shift() *****/

 var consultas = ["juan","rene","sofia","axel"];
 var eliminar = consultas.shift();
 console.log(eliminar); 
 console.log(consultas);

  /***** Array.prototype.slice() *****/

  var nombres = ["Jose", "Pedro", "Pablo", "Ana", "Veronica"];
var seleccionados = nombres.slice(2,4);
console.log(seleccionados);

/***** Array.prototype.some() *****/

  function mayorA(elemento) {
    return elemento > 7;
  }
  console.log([2, 5, 8, 1, 4].some(mayorA)); // false

/***** Array.prototype.sort() *****/
const sort = [8, 4, 2, 1, 5];
sort.sort(function (a, b) {
  return a - b;
});
console.log(sort); 

/***** Array.prototype.splice() *****/
const libros = ["ficcion", "comedia", "drama", "suspenso"];
libros.splice(3, 0, "terror");
console.log(libros);

/***** Array.prototype.toLocaleString() *****/

const array1 = [15, "a", new Date("18 marzo 2025 14:50:00 UTC")];
const localeString = array1.toLocaleString("en", { timeZone: "UTC" });

console.log(localeString);


/***** Array.prototype.toReversed() *****/
const items = [1, "juan", "23","masculino"];
console.log(items);
const reversedItems = items.toReversed();
console.log(reversedItems); 

/***** Array.prototype.toSorted() *****/

const nom = ["Marcela", "Jenny", "Fernanda", "Daniel"];
const nomb = nom.toSorted();
console.log(nomb);

/***** Array.prototype.toSpliced() *****/
const nuevo = [8, 6, 9, 4, , 6, ,];
console.log(nuevo.toSpliced(2, 5));

/***** Array.prototype.toString() *****/
const astring = ["hola", "tengo", 24, "años"];

console.log(astring.toString());

/***** Array.prototype.unshift() *****/
const uns = [6, 9, 0];
console.log(uns.unshift("hola", "me agregaron"));
console.log(uns);

/***** Array.prototype.values() *****/
const ele = ["como","estas","tu"];
const iterator = ele.values();

for (const value of iterator) {
  console.log(value);
}

/***** Array.prototype.with() *****/
const est = [1, 2, 3, 6, 5];
console.log(est.with(1,2)); // [1, 2, 6, 4, 5]
//console.log(est);

/***** Array.prototype[Si]() *****/

const abcedario = ["a", "b", "c","d","e"];
const iterator1 = abcedario[Symbol.iterator]();

for (const value of iterator1) {
  console.log(value);
}
