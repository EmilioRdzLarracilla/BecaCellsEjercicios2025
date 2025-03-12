var dinero;

let carro = 'BMW'; // Tokens, let, carro, =, 'BMW'
                   // format control character => ; \n \r
                   // whitespaces no importan

// Ejemplo de statement expression

let persona = 'Nestor';
let nombrePersona = [1, 2, 3, 4].map((i) => {
    return i*3
})

true // boolean
'string' // string
10 //numero
{nombre: 'Nestor'} // object
[{nombre: 'Nestor'} ] // array

function obtenerNombre() {
    return 'Nestor';
}

const fun = function() {};

// Variables

function miFuncion() {
    var dinero = 5;
    dinero = 10;
    var dinero;
    console.log(dinero);
}

miFuncion();
var dinero = 'mucho';
console.log(dinero);

let beyer = 'Beyer';

{
    let beyer;
    beyer = 'beyer';
    console.log(beyer);
}

console.log(apellido);

