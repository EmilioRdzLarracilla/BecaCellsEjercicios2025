/*

OPERADORES 
Es un caracter que nos permite realizar operaciones con operandos

*/

///Operadores Aritmeticos

//+, -, *, /, Math.pow(2,2), %

const resultado=[1,2,3].reduce((item) => {
    acumulador += item;
    return acumulador
},0)

console.log(resultado + 10);///16
console.log('resultado'+10);///resultado10 ///type cohersion, JIT
console.log(true + 10);///11 //JIT//type cohersion
console.log(10 + 'resultado');///type cohersion 
console.log([10] + {});


console.log(4%2);////0
const potencia= Math.pow(2,2);
console.log(2**2);

///////OPERADOES COMPARACION

// ==, ====, >, <, <=, >=

0 == 0 /// OPERADOR NO ESTRICTO
'0' == '0' // OPERADOR NO ESTRICTO. TYPE COHERSION, true{valor} => el problema de esto es el type cohersion

const a = typeof 0; ///'number'
const b = typeof '0';///'string'

0 === '0' // Estricto 0 '0' false => 'number !== 'string' valida el valor y el tipo de dato

//falsy ejemplos que type cohersion toma en ocasiones como falsos

///0,'', undefined, null, NaN


let variable = null;
if(!!variable == false){//!! => doble negacion
    console.log('este es mi resultado');
}

///TRUTHY

// 1,'hola', null, [],undefined => true


/////////OPERADORES LOGICOS/////////

///&&(AND),  | , !

/* OPERADOR LOGICO AND
1 && 0 = 0
0 && 0 = 0
0 && 1 = 0
1 && 1 = 1

true && false = false // !! 'asdasd' && false => true && false = false
false && false = false // !'asdasd' && false => true && false = false
false && true = false  // !'asdasd' && -1 => false && false = false
true && true = true  //  !!'asdasd' && !!'asdasd' => true
*/


const nombre = 'juan';
const edad = 10;
 const valor= edad && null;

 console.log(valor); //== null

 if(!!edad && !! nombre){
    console.log('lajksfjhakjsfhjkahf');

 }



 /////operador OR 
/*
 0 || 0 = 0 => false || false = false

 0 || 1 = 1 => false || true = true

 1 || 0 = 1 => true || false = true
  
 1 || 1 = 1 => true || true = true
*/


console.log(10 || 6);


