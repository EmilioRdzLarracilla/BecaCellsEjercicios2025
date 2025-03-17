//Como se tiene que hacer una  (valor)  (asignacion)
let nombre = 'Juan luis'; //esta es una variable con scpe global
//camel case , das case, slas case


/**
 * Metodo para mover el cuerpo de una persona
 * @param {Object} persona 
 */

function moverCuerpo(persona) {
    // persona = {nombre: 'OSCAR', edad: 19, sexo: 'M'};
    console.log('Este mensaje se imprime desde adentro de la funcion');
    console.log(`Se esta moviendo ${persona.nombre}`);
    if(persona.edad > 18) {
        console.log(`${persona.nombre} es mayor de edad y su edad es: ${persona.edad}`);
    } else {
       console.log(`${persona.nombre} es menor de edad`); 
    }
    //valor de retorno 
}//retorno implicito Lo hace el motor por ti 

moverCuerpo({nombre: 'ALDO', edad: 17, sexo: 'M'});
moverCuerpo({nombre: 'OSCAR', edad: 19, sexo: 'M'});

//parametros por defecto cuando reclaremos  nuestra funciones 
//event loop
//callback queue

const sumar = (a, b)=>{
    return a +b;
};

const resta = (a, b)=>{
    return a - b;
};

const multiplicar = (a, b)=>{
    return a * b;
};

const dividir = (a, b)=>{
    return a  / b;
};

const residuo = (a, b)=>{
    return a % b;
};

const suma = sumar(32, 1);
const res = resta(32, 1);
const multi = multiplicar(32, 1);
const divi = dividir(32, 1);
const rest = residuo(32, 1);

console.log(suma);
console.log(res);
console.log(multi);
console.log(divi);
console.log(rest);
//Buscar la informacon de todo esto CALLBACK repasar
//que es un arrow funtion 
//this
//argumentos
//this es el contexto de ejecucuon
//Toddo: apply ,bind, call
//... split operator
//SCOPE

