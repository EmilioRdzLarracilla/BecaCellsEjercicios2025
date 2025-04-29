/*
*                         OPERADORES
*es un caracter que nos ermite realizar operaciones con operandos
*/

//    +, -, /, Math.pow(2,2), %, ++, --, +=, -=


//operador +
const sumatoria = [1,2,3].reduce((acumulador, item) => {     //reduce es comoun for
    acumulador += item;
    return acumulador
}, 0);   // reultado: 6

console.log(sumatoria + 10); //16
console.log("sumatoria" + 10); //sumatoria10       JIT - type cohersion
console.log(true + 10); //110       JIT - type cohersion
console.log(10 + "sumatoria"); //10sumatoria       JIT - type cohersion
console.log([10] + {}); //10[object object]       JIT - type cohersion
console.log('6' + 10); //610       JIT - type cohersion

//tarea jugar con los operadores -, *, /

//operador % (modulo)
console.log(`4&2 = ${4%2}`);

const potencia = Math.pow(2,2);
console.log(potencia);
console.log(2**2);

//OPERADORES DE COMPARACION
// estrictos y no estrictos        ==, =, >, <, <=,>=, 

0 == 0 // true non strict operator, type cohersion  true(valor) => el problema de esto es type cohersion
'0' == '0' // true  le da prioridad a los strings

const a = typeof 0;  // 'number'
const b = typeof '0'; //'string'
0 === '0' //comparacion   false => 'number' !== 'string' operador stricto (valor y tipo de dato))
 // la diferencia principal es que el strict valida el tipo de dato
// FALSY
// -1, 0, '', undefined, null, false
let variable = null;
if(!!variable == false){
    console.log('hadgkhagdhgfad');
}

// TRUTHY
 // 1, 'asjhc', undefined => true
 let variable2 = 1;

 if(!variable2){
    console.log('dhfggcj');
 }

 // OPERAODRES LOGICOS
 // && || ! 

//true && false = false => //  !!"xcdagcj" && false => true && false = false
//false && false = false => //  !"xcdagcj" && false => false && false = false
//false && true = false =>    //  !"xcdagcj" && -1 => false &&  true = false 
//true && true = true =>      //  "xcdagcj" && true => true && true = true


const nombre = 'juan';
const edad = 10;
const valor= nombre && edad;
//const valor = null && edad; null es false asi que pinta false porque toma el primer valor falso
                                // para convertir un valor a booleano se ocupan !!
console.log(!!10 && !!valor);  // operador de corto circuito toma el ultimo valor de la expresion que obtuvo truthy


// ||

//false || false = false
//false || true = true
//true || false = true
//true || true = true