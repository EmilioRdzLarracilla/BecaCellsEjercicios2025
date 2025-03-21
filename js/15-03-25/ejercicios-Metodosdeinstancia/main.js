Array.prototype.at()
//LO QUE HACER .at es hacer de como puede recorrerse un arreglo
//comun mente el indice empieza de 0 y le de izquierda a
// derecha  pero si pones -0  numeros negativos empieza de derecha izquierda

//EJEMPLO DE LA PAGINA
// const array1 = [5, 12, 8, 130, 44];
// let index = 1;
// console.log(`An index of ${index} returns ${array1.at(index)}`);
// index = -1;
// console.log(`An index of ${index} returns ${array1.at(index)}`);

//MI EJERMPLO
// const arreglo1 = [10,12,25,35];
// let inicio = 1;
// console.log(`El numero de inicio del array esde ${inicio} recorremos el arreglo ${arreglo1.at(inicio)}`);
// inicio = -1;

// console.log(`el numero de inicio de lectura de derecha a isquierda es ${inicio} recorremos
//     el arreglo ${arreglo1.at(inicio)}`);


Array.prototype.concat()
// El método concat() de las instancias de Array se utiliza para fusionar dos o más matrices. 
// Este método no cambia las matrices existentes, sino que devuelve una nueva matriz.
//ejemplo de la pagina
// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];
// const array3 = array1.concat(array2);

// console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

//MI EJEMPLO
// const array1 = [1, 2, 3, 4];
// const array2 = [5, 6, 7, 8, 9];
// const junto = array1.concat(array2);
// console.log(junto);


// El método copyWithin() de instancias de Array copia parte de esta matriz a 
// otra ubicación en la misma matriz y devuelve esta matriz sin modificar su longitud.

// const array1 = ["a", "b", "c", "d", "e"];
// // Copy to index 0 the element at index 3
// console.log(array1.copyWithin(0, 3, 4));
// // Expected output: Array ["d", "b", "c", "d", "e"]
// // Copy to index 1 all elements from index 3 to the end
// console.log(array1.copyWithin(1, 3));
// // Expected output: Array ["d", "d", "e", "d", "e"]
// ejemplo
// let numeros = [10, 20, 30, 40, 50];

// // Copiar los elementos desde el índice 2 (30, 40, 50) en el índice 0
// console.log(numeros.copyWithin(0, 2));
// Resultado: [30, 40, 50, 40, 50]


// El método entries() de las instancias de Array devuelve un nuevo objeto iterador de
//  matriz que contiene los pares clave/valor para cada índice de la matriz.
// const array1 = ["a", "b", "c"];
// const iterator1 = array1.entries();
// console.log(iterator1.next().value);
// // Expected output: Array [0, "a"]
// console.log(iterator1.next().value);
// // Expected output: Array [1, "b"]

// ejermplo

const arreglo = [1,2,3];
const iterador = arreglo.entries();
console.log(iterador.next());