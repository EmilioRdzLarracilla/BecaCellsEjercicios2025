//factorial de un numero
/*
let numero=+prompt('ingresa un numero:');

function factorial(numero) {


    
    if (numero < 0)
    {
      console.log('No se pueden calcular numeros negativos');
    }

    else
    {

    let resultado =1;

    for (let i = 2; i<=numero ;i++){
        resultado *= i;

    }
    return resultado;
}
    
}
    let resultado = factorial(numero);
    console.log("El factorial de:", numero, 'es',resultado);

*/




///contar palabras

let palabra = prompt('Escribe una palabra:');

function contarPalabras(palabra) {
   
    let palabras = palabra.trim().split('\s'); 
    return palabras.length;
}

let resultado = contarPalabras(palabra);
console.log("El número de palabras es:", resultado);
