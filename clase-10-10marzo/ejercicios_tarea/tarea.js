console.log("ejercicios de tarea");

/* programa 1 */
console.log("hola mundo");

/* programa 2 */
function sumar(num1, num2) {
  return num1 + num2;
}

console.log(sumar(3, 8));

/* programa 3 */

/* let nombre = prompt("ingrese su nombre porfavor");
console.log(`bienvenido ${nombre}`); */

/* programa 4 */

function parImpar(num) {
  if (num % 2) {
    console.log("impar");
  } else {
    console.log("par");
  }
}

parImpar(18);

/* programa 5 */

function unoADiez() {
  console.log("\n\nnumeros del uno al diez");

  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}

unoADiez();

/* programa 6 */

function suma100primerosNumeros() {
  let suma = 0,
    counter = 1;
  while (counter <= 100) {
    suma += counter;
    counter++;
  }

  console.log(suma);
}
suma100primerosNumeros();

/*  programa 7 */

/* let numero = prompt("ingrese la tabla de multiplicar que desee visualizar"); */

function tablaDeMultiplicar(num) {
  let resultado = "";

  if (!num) {
    return (resultado += "el valor no puede estar vacio");
  }
  if (num === 0) {
    return (resultado += "el valor no puede ser cero");
  }
  if (!Number(num)) {
    return (resultado += "el valor deben ser numeros ");
  }
  for (let i = 1; i <= 10; i++) {
    resultado += `${num} x ${i} = ${num * i}\n`;
  }
  return resultado;
}

/* ejercicio 8 */

function invertirCadena(cadena) {
  let revertCadena = "";
  counter = cadena.length - 1;
  while (counter >= 0) {
    revertCadena += cadena[counter];
    counter--;
  }

  return revertCadena;
}

console.log(invertirCadena("yung felix"));

/* ejercicio 9 */

function numeroVocales(frase) {
  const fraseLower = frase.toLowerCase();
  const resultado = {};
  const objetivo = "aeiou";

  for (let i = 0; i < fraseLower.length; i++) {
    for (let j = 0; j < objetivo.length; j++) {
      if (fraseLower[i] === objetivo[j]) {
        const vocal = objetivo[j];
        resultado[vocal] = resultado[vocal] ? resultado[vocal] + 1 : 1;
      }
    }
  }

  console.log(resultado);
}

numeroVocales("murcielago");

/* ejercicio 10 */

function numeroPrimo(numero) {
  if (numero === 1) {
    return console.log("primo");
  }
  for (let i = 2; i < numero; i++) {
    if (numero % 2 === 0) {
      return console.log("no es primo");
    } else {
      return console.log("primo");
    }
  }
}

numeroPrimo(119);
