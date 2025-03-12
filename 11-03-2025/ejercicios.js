// Ejercicio 1

console.log("Hola Mundo");

// Ejercicio 2

/*
function suma(){
let numero1 = parseInt(prompt("Ingrese el primer numero: "));
let numero2 = parseInt(prompt("Ingrese el segundo numero: "));
console.log(numero1 + numero2);
}
suma();
*/

// Ejercicio 3

/*
let nombre = prompt("Ingresa tu nombre: ");

console.log("Hola " + nombre + " ten un excelente dia.");
*/

// Ejercicio 4.

/*
let numero = parseInt(prompt("Ingrese un numero: "));

if(numero % 2 == 0) {
    console.log("Es un numero par");
} else {
    console.log("Es un numero impar");
};
*/

//Ejercicio 5

/*
let numero = 10;

for(let i = 1; i <= numero; i++) {
    console.log("Numero: " + i);
};
*/

// Ejercicio 6

/*
let numero = 100;

for(let i = 1; i <= numero; i++) {
    console.log(i + " + 1 = " + (i + 1));
};
*/

// Ejjercicio 7

/*
let numero = parseInt(prompt("Ingrese la tabla de multiplicar deseada: "));

for(let i = 1; i <= 10; i++) {
    console.log(i + " x " + numero + " = " + (i * numero));
}
*/

// Ejercicio 8 freecodecamp.com

function invertirCadena(cad) {
    //Paso 1. Usar el metodo split para devolver un nuevo arreglo
    let separarCadena = cad.split("");

    //Paso 2. Usar el metodo reverse para invertir el nuevo arreglo creado
    let invertirArreglo = separarCadena.reverse();

    //Paso 3. Usar el metodo join para pasar de un arreglo a una cadena de texto
    let unirArreglo = invertirArreglo.join("");

    return unirArreglo;
}

console.log(invertirCadena("hola"));

// Ejercicio 9 stackoverflow.com

/*
let frase = prompt("Ingresa una frase");
let vocales = frase.match(/[aeiou]/g);
console.log("Las vocales de la frase son: " + vocales);
*/

// Ejercicio 10

/*
function numPrimo(numero) {
    if(numero < 2) {
        return false
    }
    
    for(let i = 2; i <= Math.sqrt(numero); i++) {
        if(numero % i == 0) {
            return false
        }
    }
    return true 
}

let numero = prompt("Ingrese un numero: ");

if(numPrimo(numero)) {
    console.log("El numero: " + numero + " es un numero primo");
} else {
    console.log("El numero: " + numero + " NO es un numero primo");
}
    */
