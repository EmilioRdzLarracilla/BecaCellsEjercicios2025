const nombre = 'Nestor'; // Esto es una variable con el scope local

// Parametros son nombres  de variabless que se van a generar localmente, que solo existira dentro del scope de la funcion
// Persona es un parametro que unicamente va a existir dentro de la funcion
// No podemos pasar de tres parametros para tener buenas practicas, SOLID, KISS, DRY
// La funcion nos ayuda a reciclar el codigo y no hacerlo cada vez que lo necesitemos y en su lugar solo mandarla a llamar

/* 
* Metodo para mover a una persona
* @param {object} persona 
*/

// La siguiente funcion es la declaracion de la misma
// Aqui son parametros
function moverCuerpo(persona) {
    console.log('Este menssaje se imprime desde dentro de la funcion');
    console.log(`Se esta moviendo ${persona.nombre}`);
    if(persona.edad > 18) {
        console.log(`${persona.nombre} es mayor de edad y su edad es: ${persona.edad}`);
    } else {
        console.log(`${persona.nombre} es menor de edad`);
    }
    return 'El usuario se llama ' + persona.nombre;
    // Return impicito es cuando aunque yo no la mande a llamar, el motor de JS lo terminara agregando 
} 

// En la ejecucion son argumentos
// Esto es la ejecucion de la funcion
const resultado = moverCuerpo({nombre: 'Nestor', edad: 24, sexo: 'M'});
console.log(resultado);

const result = [1, 2, 3].reduce(function(acumulador, item) {
    acumulador += item;
    return acumulador;
}, 0);

console.log(result);

function myOwnReduce(array, callback, initianValue) {
    acumulador = initianValue;
    for(let i = 0; i < array.length; i++) {
        acumulador = callback(acumulador, array[i]);
    }
    return acumulador;
}

const r = myOwnReduce([1, 2, 3], function(acumulador, item) {
    acumulador += item;
    return acumulador;
}, 0);

console.log(r);