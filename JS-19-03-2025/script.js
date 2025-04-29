// Promise.race()
// Promise.all()
// Promise.allSettled

const iterable = [Promise.resolsve('Exito 1'), Promise.resolve('Exito2'), Promise.resolve('Exito3')];
Promise.all(iterable)
.then(() => {
    console.log('se resolvieron todas las promesas')
});

//Modulos

// export  se utiliza hoy en dia
// import

export const PI = 3.1416;
export const saludar = () => {
    console.log('ghdfhahs');
}


 // impot {sumar, multiplicar, PI} from './calculator.js';
import calculadora, * as calculadora from './calculator.js';
calculadora = {
    sumar: sumar,
    multiplicar: multiplicar
}

//const result = sumar(10,10);
console.log(computadora);

console.log(calculadora.sumar(10,10))

const result =  sumar(10,10);
console.log(result);



