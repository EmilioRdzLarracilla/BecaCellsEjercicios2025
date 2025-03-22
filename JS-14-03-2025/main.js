/*
let total = 0, cuenta = 1;
while (cuenta <= 10){
    total += cuenta;
    cuenta += 1;
}
console.log(total);

console.log(suma(rango(1,10)));
*/


/**
 * 
 *  Ejercicio calculadora de  operaciones suma, resta, multiplicaion, division, modulo
 * 
 *  @param {Number} a
 *  @param {Number} b
 */



/*
const sumar = (a,b) => a + b;
const restar = (a,b) => a - b;
const multiplicar = (a,b) => a * b;
const dividir = (a,b) => a / b;
const modulo = (a,b) => a % b;


console.log("suma: ", sumar(10,10));
console.log("resta: ", restar(10,10));
console.log("multiplicacion: ", multiplicar(10,10));
console.log("division: ", dividir(10,10));
console.log("modulo: ", modulo(10,10));
*/


/**
Ejemplos de funciones constructoras
 */

function auto(modelo, marca, año) {
    let unidad = {
        modelo: modelo,
        marca: marca,
        año: año
    }
    return unidad;
}
let hyundai = auto('hyundai g20', huyndai, '2023');
let mustang = auto('mustang gtr', ford, '2024');
console.log(hyundai, mustang)


function colores(material, tipo) {
    let color = {
        material: material,
        tipo: tipo
    }
    return color;
}

let verde = colores('plastico', 'punta delgada');
let rojo = colores('madera', 'pounta gruesa');
console.log(verde, rojo)



function animales(especie, sonido, tipo) {
    let animal = {
        especie: especie,
        sonido: sonido,
        tipo: tipo
    }
    return animal;
}

let leopardo = animales('leopardo', 'roaaaaw', 'mamifero');
let tortuga = animales('tortuga', 'aaaaaahg', 'ovnifero');
console.log(leopardo, tortuga)


function Usuarios(nombre, email){
    this.nombre =  nombre;
    this.email =  email;
    this. mostrarEmail = function() {
        return `El correo de ${this.nombre} es: ${this.email}`;
    };
}

const usuario = new Usuarios('saul', "saul.rodriguez@hotmail.com");
console.log(usuario.mostrarEmail());


function Persona(nombre,edad, sexo) {
    let persona = {
        nombre: nombre,
        edad: edad,
        sexo: sexo
    };
    return persona;
}

let alberto = persona('alberto', 40, 'm');
let monse = persona('monse', 40, 'f');
console.log(alberto, monse)