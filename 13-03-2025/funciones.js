
/*function nombreFuncion(){

}
*/

/**
 * Metodo para mover el cuerpo de una persona
 * @param {object} persona 
 */
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
}

moverCuerpo({nombre: 'ALDO', edad: 17, sexo: 'M'});
moverCuerpo({nombre: 'OSCAR', edad: 19, sexo: 'M'});

///function expression
////almacenada en una funcion
const baz = function(){
  console.log('OLV');  
};

//// una funcion retornada desde otra funcion
function saludar()
{
    ///valores === expresion
    return function(){
        console.log('mensaje dentro de la funcion que se retorna');
        console.log('OJO');
        console.log('estos mensajes solo se ejecutan si el resultado de la funcion es llamado');
    }
}
const resultadoSaludar = saludar();

resultadoSaludar();

//// una funcion pasada como argumento a otra funcion(callback)

function despedir(obtenerNombre){
    const resultado = obtenerNombre();
    console.log(resultado);

}

despedir(function(){return 'Este es mi nombre: Obed'});


///ARROW FUNCTION => FUNCIONES FLECHA

const sum = (a, b) =>{
return a + b ;
}

const res=sum(10,10); //=> asi se manda a llamar la arrow function
console.log(res);



///funciones constructoras 

function Persona(nombre, edad, sexo){
    let persona ={

        nombre : nombre,
        edad: edad,
        sexo: sexo,

        saludar(){
            console.log('hola soy: ', this.nombre);
        }
    };
    return persona;
}

const alberto = Persona('Alberto', 40, 'M');
alberto.saludar();
const  monse = Persona('Monse', 22, 'F');
monse.saludar();
const ana = Persona('Ana', 22, 'F');
ana.saludar();


class carro {
    constructor(puertas = 4, anio){
this.puertas =  puertas;
this._modelo =  'generico'; //'_' propiedades privadas
this.__anio =  anio ?? 2025;// '__' propiedades protegidad
     }

    mover(){

        if(this.__anio > 2024){
            this._modelo='s4'
        }
        console.log(`EL ${this._modelo} runrunrun`);
    }
}
const bmw = new carro(5,'s3',2024);
bmw.mover();
bmw.puertas//publico
bmw._modelo//privado


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
const jeronimo = new Persona('Jeronimo', 29, 'M');
jeronimo.saludar();
jeronimo.mover();
console.log(jeronimo);

// let telefono = 5513044563;
// telefono.toFixed(); // toFixed esta dentro del prototipo
// const aa = [1,2,3];
// console.log(aa);

const bmw = new Carro(5);
bmw.mover();





