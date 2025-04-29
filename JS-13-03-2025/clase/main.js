let nombre = 'saul'; // variable global

//camelCase, dash case, slash case, moverCuerpo MOVER-VUERPO /

/***
* Generar comentarios es una buena practica para leer el codigo
*
* Metodo para mover el cuerpo de una persona
* @param {Object} persona
*
* no tener mas de 3 parametros
*
*/

// DECLARACION
function moverCuerpo(persona, nombreNovia) {     // parametros son variables  local de tipo function scope es una referencia a algun valor
    // persona = {nombre: 'saul', edad: 17, sexo: 'M'}  argumento {nombre: 'saul', edad: 17, sexo: 'M'}
   console.log(`Se esta moviendo ${persona. nombre} y su novia es: ${nombreNovia}`);         // concatenacion dinamica
   console.log(`Este mensaje se imprime desde adentro de la funcion`);    // estatico sin valores interpolados
    if (persona.edad > 18) {
    console.log(`${persona.nombre} es mayor de edad y su edad es: ${persona.edad}`);
    }
    return {nombre: persona.nombre};    
    return     //valor de retorno implicito undefined
    // return 'el usuario se llama ' +  persona.nombre;    valor explicito
}


// EJECUCION
const resultado = moverCuerpo({nombre: 'saul', edad: 17, sexo: 'M'}, 'Milenka');
moverCuerpo(resultado);
moverCuerpo({nombre: 'aldo', edad: 15, sexo: 'M'}, 'Amanda');


const result = [1,2,3].reduce(function(acumulador, item) {
    acumulador += item
;
return acumulador;
}, 0);

console.log(result);

function myOwnReduce(array, callback, initialValue) {
    acumulador = initialValue;
    for(let i = 0; i < array.length; i++ ){
        acumulador = callback(acumulador, array[i]);
    }
    return acumulador;
}

const r = myOwnReduce([1,2,3], function(acumulador, item) {
    acumulador += item;
    return acumulador;
}, 0);

console.log(r);

const s = myOwnReduce(['hola','saul','como estas'], function(acumulador, item) {
    acumulador += item;
    return acumulador;
}, '');

console.log(r);

// el reduce es generico se puede utilizar para numbers, strings, etc


//valores por parametros por defectos
// FUNCION DECLARACION 
function myOwnReduce(array  = [], callback, initialValue = 0) {
    acumulador = initialValue;
    for(let i = 0; i < array.length; i++ ){
        acumulador = callback(acumulador, array[i]);
    }
    return acumulador;
}

const u = myOwnReduce(function(acumulador, item) {
    acumulador += item;
    return acumulador;
});

console.log(u);


// function expression
// almacenada en una variable
const baz = function () {
    console.log('ALV');
}
baz();
//una funcion retornada desde otra funcion
function saludar() {

     //valores === expression
    return function() {
    console.log('mensaje dentro de la funcion que se retorna ');
    console.log('OJO');
    console.log('estos mensajes solo se ejecutaran si .....');


    }
}
const resultadoSaludar =  saludar();
resultadoSaludar();




// una funcion basada como argumento a otra funcion (callback)
function despedir(obtenerNombre){
    const resultado =  obtenerNombre();
    console.log(resultado);
}

despedir(function() {
    return 'este es mi nombre saul';
});

const v = myOwnReduce(function(acumulador, item) {
    acumulador += item;
    return acumulador;
});

console.log(v);


/*
function getPkemonData( {
    fetch('')
    .then(function(reponse){
        console.log('INFORMACION DELREQUEST');
        console.log(response);
    })
    .then(function(realResponse){
        console.log('INFORMACION DEL SERVICIO');
        console.log(realResponse);
        const img = document.createElement('img');
        img.src=realResponse.sprites.front_shiny;
        document.body.appendChild(img); 
    })
})
*/




//ARROW FUNCTION
//son funciones anonimas, no tiene un nombre 

/** 
* metodo para sumar dos valores a es primer operando y b es el segundo operando
* 
* @param {Number} a
* @param {Number} b
**/

const sumar = (a,b) => {
    return a + b;
};

const res = sumar(10, 10);
console.log(res);



const persona = {
    nombre: 'saul',
    saludar:(...arguments) => {
        // this es el contexto de dclaracion
        //this = window
        console.log(this);
        console.log(arguments);
        console.log(`Hola mi nombre es: ${this.nombre}`);
    }
}

persona.saludar([1,2,3]); //Hola mi nombre es 'saul


const juan = {
    nombre: 'JUAN',
    saludar: function(){
        //this es el contexto de ejecucion
        //this = juan
        //arguments es una coleccion como un array 
        console.log(this);
        console.log(arguments);
        console.log(`Hola mi nombre es: ${this.nombre}`);
    }
}

// this = juan

juan.saludar([1,2,3]); //Hola mi nombre es Juan 

// bind, call, apply para bindear la funcion de forma explicita ???

//FUNCIONES CONSTRUCTORAS

function Persona(nombre,edad, sexo) {
    let persona = {
        nombre: nombre,
        edad: edad,
        sexo: sexo
    };
    return persona;
}    //literal object

let alberto = persona('alberto', 40, 'm');
let monse = persona('monse', 40, 'f');
console.log(alberto, monse)


//ejemplos de funciones constructoras para carros, motos, computadoras, lenguajes




function PersonaNew(nombre, edad, sexo){
    this.nombre = nombre;
    this.edad = edad,
    this.sexo = sexo,
    this.saludar = function(){
        console.log('Hola soy:  ', this.nombre);
    }
}   

const emilio = undefined;
console.log(emilio);
emilio.saludar();


//instancia
const jeronimo = 5568376283;
telefono.toFixed(); // toFixed esta dentro del prototipo
const aa = [a,2,3];
aa.reduce();  //reduce esta dentro del prototipo
console.log(aa);


class Carro {
    constructor(puertas = 4, modelo = 'generico', anio = 2025) {
        this.puertas = puertas;
        this.modelo = modelo;
        this.__anio = naio ?? 2025; // mullish coleasing operating    
    }
    mover() {
        if(this._anio < 2024){
            this._modelo = '54';
        }
        console.log(`El ${this._modelo} hacer run run run`);
    }
}

const bmw = new Carro(5, 's3', 2014);
bmw.puertas // API publica (attributes)
bmw._modelo //privado
bmw.mover();



// sugar syntax
class Persona extends Carro {
    constructor(nombre, edad, sexo) {
        super(4, 2024);
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
    // acciones que puede hacer un objeto de tipo Persona
    saludar() {
        console.log(`Hola soy: ${this.nombre}`);
    }
}
// instancia
const jeronimoh = new Persona('Jeronimo', 29, 'M');
jeronimo.saludar();
jeronimo.mover();
console.log(jeronimo);

// let telefono = 5513044563;
// telefono.toFixed(); // toFixed esta dentro del prototipo
// const aa = [1,2,3];
// console.log(aa);

const bmwn = new Carro(5);
bmw.mover();


Array.prototype.reduce =  function(callback, iniitialValue){
    //this = window
    acumulador = initialValue;
    for(let i = 0; i <this.length; i++){
        acumulador = callback(acumulador, this[i]);
    }
    return acumulador;
}
const resulRedt = [1,2,3].yOwnReduce((acumulador, item) => {
    acumuuladro += item;
    return acumulador;
},0);

console.log(resulRedt);
const aaa= 0;
aaa.toFixed();


//METODOS ESTATICOS
// [].method()
//[].static method()   aqui no se utiliza el this 




// window
//document
// buscar elementos en el dom, crear elemetnos y eliminar elementos 
//buscar nodo (etiquetas, event target, nodes, objetos)

const box = document.getElementById('id') // retorna un nodo o un null
box.style.background = 'red'; // typeError is cannot read properties of null (reading 'style')
box.style.color = 'white';
console.log(box.__proto__);
// buscar etiquetas (HTMLdIVeLEMENT, htmlElement, Element, Node, EventTarget, Object))

//eventos

box.addEventListener('click', (event) => {    //primeros se ejecutan los eventListeners porque se necesita escuchar primero la accion
    console.log('me dio click el usuario', typeof event);
});

box.dispatchEvent(new Event('click'));




const box1 = document.querySelector('span'); // recibe un selector de CSS regresa igualmente un nodo
box1.style.backgroundColor = 'red'; //TypeError is cannot read properties of null (reading 'style')
// buscar etiquetas (HTMLdIVeLEMENT, htmlElement, Element, Node, EventTarget, Object))

const listOfDivs = document.querySelectorAll('div');
console.log(listOfDivs); 

//crear etiquetas
const newDiv = document.createElement('div');
//agregar la etiqueta al DOM
document.body.appendChild(newDiv);
console.log(document.body)



/*
1.- Buscar elementos en el dom 
2.- Crear y eliminar elementos
3.- Modificar atributos
4.- Modificar estilos y clases
5.- Modificar el contenido
*/


const parentElement = document.getElementById("parentElement");
const newElement = document.createElement("div");
newElement.innerText = "Elemento insertado antes";

const referenceElement = document.getElementById("referenceElement");
parentElement.insertBefore(newElement, referenceElement);





//Promise

const callback = (resolve, reject) => {
    let exito = true;
    window.setTimeout( () => {  //setTimeout esta en el objeto window
        if(exito === true) {
            resolve('si me amo toda la vida');
        } else { 
            reject('No se cumplio la promesa')
        }
    }, 5000);
};
// las callback son esa funcion que necesitan las promesas para ejecutarse
const promise = new Promise(callback) //controlar acciones asincronas 
console.log(promise);
promise
.then((result)  => {
    console.log(result);
    console.log(promise);
})

.catch(error => {
    console.log(error)
}) 


//ejemplo con pokeAPI
 
const obtenerInfoPokemon = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
    fetch(url)
    .then((response) => {
        console.log(response);
        return response.json(); // promise
    })
    .then(data => {
        console.log(`Aqui obtuve la informacion de Ditto ${data.sprites.front_default}`);
    })
    .catch((error) => {
        console.log(error);
    });
};


obtenerInfoPokemon();


// https://es.javascript.info/
//https://web.dev/learn/javascript
//https://lenguajejs.com/asincronia/promesas/que-son/
// https://www.youtube.com/watch?v=eiC58R16hb8&t=109s
// https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=405s


Promise.prototype.all = (promisesArray) => {
    let resultArray = [];
    for (let s = 0; s < promisesArray.length; s++) {
        promisesArray[s].then(() => {
            resultArray.push(true)
        })
    }
    return resultArray.includes(true);
}

Promise.all();

