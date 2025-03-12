// Calcular el factorial de un numero.


function factorial() {
    let numero = parseInt(prompt("Ingrese un numero: "));
    let resultado = 1;
    for(let i = 1; i <= numero; i++) {
        resultado = resultado*i;
    };
    console.log("El factorial del numero: " + numero + " es: " + resultado);
};
factorial();


// Contar caracteres en una cadena de texto


let texto = prompt("Ingrese su texto: ");
console.log("Su texto cuenta con: " + texto.length + " caracteres");


// Ordenar un array.
