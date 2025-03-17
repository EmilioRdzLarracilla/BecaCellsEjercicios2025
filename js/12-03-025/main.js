/** 
 * Operadores
 * es un caracter que permite realizar operaciones 
*/

//operadores  aritmeticos +,-, *, potencia, /, %

// const resultado =[1,2,3].reduce((acomulador, item) =>{
//    acomulador += item;
//    return acomulador; 
// }, 0);

//back ticks 
// console.log (resultado + 10); //problema (type cohersion) (valor)  y (dato )
//tambien son expreciones o tambien son objetos 
//TIENEN PONDERACIONES 
//hacer ejercicios


//operadores comparacion 
// ==, === , <, >, <=, >=, !=

//falsy  = false -1 "" null undegined  
//truthy 1 'asdfas' null undefined true

//el compilador es el que da la informacion

//opereradores logicos 
// && \\ !

// false && false = false => //!!'aasjkdfasd' && !!false = true && false = false
// console.log(!!"hello" && false); // true && false = false
// console.log(!42 && true); // false && true = false
// console.log(!!"JavaScript" && !!1); // true && true = true
// console.log(!" " && !true); // false && false = false
// console.log(!![] && 0); // true && false = false
// console.log(!"code" && 100); // false && true = false
// console.log(!!"false" && undefined); // true && false = false
// console.log(!null && !1); // false && false = false
// console.log(!!{} && !!"hola"); // true && true = true
// console.log(!NaN && ![]); // false && false = false

// false && false = false => //!'aasjkdfasd' && !false = false && false = false
// console.log(!"JavaScript" && !1); // false && false = false
// console.log(!"hello" && !true); // false && false = false
// console.log(!42 && ![]); // false && false = false
// console.log(!" " && !null); // false && false = false
// console.log(!"false" && !100); // false && false = false
// console.log(!{} && !NaN); // false && false = false
// console.log(!"code" && !undefined); // false && false = false
// console.log(![] && !"string"); // false && false = false
// console.log(!0 && !null); // false && false = false
// console.log(!NaN && !false); // false && false = false

// false && true = false => //!!'aasjkdfasd' && !!'asdfaf' = -1 && false = false
// console.log(!!"hello" && !1); // true && false = false
// console.log(!!"JavaScript" && !true); // true && false = false
// console.log(!!" " && ![]); // true && false = false
// console.log(!!"false" && !0); // true && false = false
// console.log(!!{} && !null); // true && false = false
// console.log(!!"code" && !NaN); // true && false = false
// console.log(!![] && !undefined); // true && false = false
// console.log(!!1 && !""); // true && false = false
// console.log(!!"data" && !false); // true && false = false
// console.log(!!"100" && !null); // true && false = false

// true && true = true  => //!!'asdfafs' && !!'asdfaf' => true && true = true 
console.log(!!"hello" && !!1); // true && true = true
console.log(!!"JavaScript" && !!true); // true && true = true
console.log(!!" " && !![]); // true && true = true
console.log(!!"false" && !!0.5); // true && true = true
console.log(!!{} && !!"world"); // true && true = true
console.log(!!"code" && !!42); // true && true = true
console.log(!![] && !!undefined == false); // true && true = true
console.log(!!1 && !!"text"); // true && true = true
console.log(!!"data" && !!Infinity); // true && true = true
console.log(!!"100" && !!-1); // true && true = true

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = !array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// Expected output: 10

// let nombre = 'juan';
// let edad = 10;

// console.log(nombre && false);  