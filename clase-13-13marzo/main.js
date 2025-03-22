console.log("funciones");
let nombre = "emilio"; // vaariable global
console.log(sumar(4, 6));

function moverCuerpo(movimiento) {
  console.log(
    "este mensaje se imprime un mensaje desde dentro de la funcion moverCuerpo"
  );

  return `el cuerpos e movio hacia ${movimiento}`;
}

console.log(moverCuerpo("arriba"));

function saludo(nombre) {
  return `hola ${nombre}`;
}

/* const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const mutliplicar = (a, b) => a * b;
const dividir = (a, b) => a / b; */

function sumar(a, b) {
  return a + b;
}

/* parametros por defecto */
/* p¡nos ayudan a veitar errores en la ejecucion */

function myownReduce(array = [], callback, initialValue = 0) {
  let acumulador = initialValue;

  for (let i = 0; i < array.length; i++) {
    acumulador = callback(acumulador, array[i]);
  }

  return acumulador;
}

const r = myownReduce([1, 2, 3], function (acumulador, item) {
  acumulador += item;

  return acumulador;
});

console.log(r);

/* funcion decalrada */

function saludar() {
  return "buenas tardes";
}

/* funcion expresada */

const despedida = function () {
  return "adios";
};

/* funcion retornada desde otra funcion */
function salida() {
  return function () {};
}

function despedirse(obtenerNombre) {
  let resultado = "adios , se despide : ";
  return (resultado += obtenerNombre(nombre));
}

/* arrow function*/

const add = (uno, dos) => {
  return uno + dos;
};

const less = (uno, dos) => {
  return uno - dos;
};

console.log(add(9, 8));
console.log(less(80, 9));
const sumando = (num1, num2) => num1 + num2;
const restando = (num1, num2) => num1 - num2;
const mutliplicando = (num1, num2) => num1 * num2;
const dividiendo = (num1, num2) => num1 / num2;
const modulo = (num1, num2) => num1 % num2;

const calculadora = (op, num1, num2) => {
  return console.log(op(num1, num2));
};

calculadora(sumando, 10, 20);

const aldo = () => {
  nombre: "ALDO";
};

const btn = document.querySelector(".btn");

function miFuncion() {
  console.log(this);
}
btn.addEventListener("click", () => {
  console.log(this);
});

/* funciones contructoras */
