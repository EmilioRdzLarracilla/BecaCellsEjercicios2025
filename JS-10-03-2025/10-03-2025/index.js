let ccarro = ''; // unidad logica mas pequeña del lenguaje tokens lt, carro, = , 'BMW'

//CARACTERES DE CONTROL DE FORMATO notifica el fin de una estruccion
// format control character => ; \n \r (retorno de carro)
let carro     = ''; // no le interesan los espacios en blanco
//comentarios online
/* 
multicomentarios
multiline comments
*/ 
let persona = 'saul';//declaraciones o statements son las lineas que se escriben
//expression son fragmentos de codigo que se encuentran en los staments, cuando se ejecuta algo recibe un valor: 'saul'

let nombrePersona = [1, 2, 3, ].map((i) => {
    return i*3;
});  //expression

function obtenerNombre() {
    return 'saul'; //expression
}
obtenerNombre()


true //boolean
'string' //string
10 //number
{nombre: 'Aldo'} //pbject
[{qnombre: 'Aldo'}] //array

let aberto = aldo //respuesta Alberto

function obtenerNombre() {
    return 'Aldo'
}

const fun = function() {};

// Javascript the good part; Eloquent JS


//VARIABLES espacio reservado en memoria (var, let, const)
function mifunction() {
    var dinero = 5; //aqui la variable solo va vivir dentro de la funcion 
    var dinero;   //redeclaracion y redeclaracion sin valor inicial
    dinero = 10; //reasignacion
}
//propiedad del objeto global
var dinero; //scope es window, ensucia el scope global(window) 
console.log(dinero)

dinero = 'mucho'; //hosting es que el motor de js declara la variable por ti
console.log(dinero)



let juan = 'Juan' //transpilacion => babel
{
    let juan = 'Juan'; //esta es una variable distinta a la de arriba 
    console.log(juan) 
}  //bloque de codigo es un ocnjunto de instrucciones de limitadas por los brackets

juan = 'JUAN';
console.log(juan) //no hay redeclaracion pero si reasignacion


const perro = 'ares' ; //se declara una sola vez y se le asigna un valor una sola vez


