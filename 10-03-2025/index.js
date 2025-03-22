/*let carro="";


function saludar(){

}

for(){

}
if(){
 

}


2+2

*/

/*Tokens

let carro=""; ///tokens let,carro,=, 'BMW' --> SEPARA POR TOKENS

//CACARCTERES DE CONTROL DE FORMATO => ; \n \r 
espacion en blanco ' ' no impoprtan
es sensible a mayusculas y minusculas

comentarios

/// una sola linea
/*  comentarios multilinea

Let persona = 'OBED';

*/
let nombrePersona =[1,2,3].map((i)=>{
    return i*3;
});

function obtenerNombre(){
    return 'OBED '; //expression
}

/*
Expressions
true // boolean
'string' // string
8 //number
{nombre:'Obed'} //object

[{nombre; 'Obed'}] //array

function obtenerNombre(){
return 'Aldo';
}

const fun = function(){};

*/

///Variables

//var //tiene compatibilidad con todos los navegadores
    //tiene redeclaracion
    //tiene reasignacion podemos agregar otro valor a la misma varianble
    //puede declararse sin valor inicial

    function MiFuncion(){
    var dinero=5; //declaracioj = 'var dinero', asignacion = '= 5'
    var dinero;
    console.log(dinero);
}
MiFuncion();
var dinero=5;

console.log(dinero);


let juan = 'juan'; //transpilacion = BABEL
{
    let juan = 'juan';
    console.log(juan);
}

