//console.log('Hola Mundo');///imprimir hola mundo

/*

function sumarValores() {
  let valor1 = +prompt('Ingresa el Valor 1:');
  let valor2 = +prompt('Ingresa el Valor 2:');


  let suma = valor1 + valor2;


  console.log('La suma de estos valores es:', suma);
}
/*
let cadena=prompt('digita una serie de numeros:');
let arreglo = cadena.split('');

for (let i = 0; i < arreglo.length; i++) {
    numeros[i] = parseInt(arreglo[i]);  e
}

console.log(numeros);
/*

sumarValores();

*/

/*

let nombre=prompt('Hola, Cual es tu Nombre:');  Programa para saludar al usuario

console.log("hola estoy encantado de conocerte,", nombre);

*/

/* PROGRAMA PARA SABER SI UN NUMERO ES PAR O IMPAR

let numero=+prompt('Escribe un numero:');


if (numero % 2 === 0) {

    console.log('el numero',numero,'es par');

  } else {
   
    console.log('el numero',numero,'es impar');
  }

  */

/*programa para mostrar los numeros del 1 al 10

let numero = 10;

let mostrar = '';
for (let i = 1; i <= numero; i++) {
  mostrar += i + ' ';
}

console.log(mostrar);

*/

  /* funcion para sumar los primeros 100 numeros

let numero=100;

let suma=0;

for(let i=1; i <= numero ; i++ )
    {
suma +=i;

}

console.log("la suma de los numeros es:",suma);
*/

/* Programa para mostrar la tabla de multiplicar
let numero = +prompt("Dime la tabla que deseas consultar:");
let mostrar = ''; 
for (let i = 1; i <= 10; i++) {
  mostrar += numero + ' x ' + i + ' = ' + (numero * i) + '\n';
}
console.log(mostrar);
*/

/*invertir Una cadena de texto

let texto = prompt('Escribe algo:');
let textoInvertido = ' ';
let mostrar = ' '; 

if (texto === ' ') {
  console.log('No hay un texto disponible');
} else {
  
  let contador = 0;
  for (let i = 0; texto[i]; i++) {
    contador++;
  }

  for (let i = contador - 1; i >= 0; i--) {
    textoInvertido += texto[i];
  }

  console.log(textoInvertido);
}

*/

/* Funcion para contar vocales

let palabra = prompt('Dime una palabra:');
let vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function contarVocales(palabra) {
    let contador = 0;

    for (let i = 0; i < palabra.length; i++) {
        for (let j = 0; j < vocales.length; j++) {
            if (palabra[i] === vocales[j]) {
                contador++;
            }
        }
    }

    return contador;
}

let resultado = contarVocales(palabra);
console.log("El número de vocales es:", resultado);
*/

/*
function esPrimo(numero) {
    if (numero < 2 || (numero > 2 && numero % 2 === 0)) {
        console.log(`${numero} no es un numero primo`);
        return;
    }

    let i = 3;
    while (i * i <= numero) {
        if (numero % i === 0) {
            console.log(`${numero} no es un numero primo`);
            return;
        }
        i += 2;
    }

    console.log(`${numero} es un numero primo`);
}

const numero = Number(prompt("Ingresa un número:"));

if (numero) {
    esPrimo(numero);
} else {
    console.log("Por favor, ingresa un número válido.");
}
*/