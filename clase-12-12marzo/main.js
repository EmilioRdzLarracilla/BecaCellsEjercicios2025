console.log("operadores");

/* un operador es un caratcer que nos permite realizar operaciones con operandos */

//operadores aritmeticos
// +-*/ % **

const suma = [1, 2, 3, 4, 5].reduce((acc, item) => acc + item);
console.log(suma);
console.log(2 + 3);
console.log("resultado" + 10);
console.log(10 + "resultado");
console.log([10, 9, 8] + "resultado");
console.log("resultado" + [10, 9, 8]);
console.log([10] + {});

const yo = {
  niombre: "emilio",
  edad: 29,
};

console.log(yo.toString());

/* tarea jugar con los operadores y ver que sucede */
//ejemplo

console.log([1, 2, 3, 4] - "diez");

/* operador de modulo */

console.log(45 % 4);

/* potencia  */

console.log(8 ** 2);
console.log(typeof NaN);
console.log(typeof undefined);
console.log();

/* OPERACIONES DE COMPARACION */
// == , =, >, <, <=, >=

console.log(0 == 0);
console.log(0 == "0");
console.log("tipos");

console.log(typeof 0 == typeof "0");
console.log(null + null);

/* PRACTICANDO EL TYPE COHERSION */

console.log(true + "false");
console.log("2" + Math.E);
console.log(undefined + false);
console.log(null + true);
console.log(true + 10);

/* ejemplos de tipos que tienden a truthy */

console.log(!![]);
console.log(!!{});

const objeto = {};

if (objeto) {
  console.log("truthy");
}

if (" ") {
  console.log("hay un strings");
}

if (2) {
  console.log("hay un numero");
}

if (!0) {
  console.log("cero negado tiende a truthy");
}

if (!0 && !false) {
  console.log("tienden a true");
}

if (!0 || !!false) {
  console.log("cualquiera de los dos que sea true");
}

if ([] && " ") {
  console.log("los dos son verdaderos");
}

if (
  [] &&
  {} &&
  new Set() &&
  new Map() &&
  new WeakSet() &&
  new WeakMap() &&
  new Date() &&
  Math
) {
  console.log("todos por default tienden a true");
}

if (` `) {
  console.log("backtips con espacio tienden a true");
} else {
  console.log("bactips vacias tienden a false");
}

console.log(new Set() == new Map());

console.log(" " === ` `);

console.log("");

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});
console.log(typeof new Set());

/* operadores logicos */

// && || ! nos a yudan a comparar valores booleanos

console.log(true && false);
console.log(false && false);
console.log(false && false);
console.log(true && true);

/* ejercicio */
console.log("ejercicio con operador AND");

console.log(!!null && !!undefined);
console.log(![] && !!new Set());
console.log(!!new Map() && !new Date());
console.log(!!new Set() && true);

console.log(
  [1, 2, 3, 4, 5].reduce((acc, item) => acc + item) &&
    ["a", "b", "c", "d"].includes("a")
);

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

console.log(!!suma(10, 20) && !!resta(10, 10));

console.log();

/* operador logico or */
console.log("operador or");

console.log(false || false);
console.log(true || false);
console.log(false || true);
console.log(true || true);

console.log("operador or con expresiones que tienden a truthy y falsy\n\n");

console.log(![] || !new Set()); //false
console.log(!!{} || !"cadena"); // true
console.log(!![] || !new Map()); // true
console.log(!!new Date() || [1, 2, 3, 4, 5].reduce((acc, item) => acc + item)); //true
console.log("\n\n\n");

/*  operadores de cortocircuito */

console.log(10 && "james");

console.log("ejercicios de corto circuito && ");

console.log(0 && []); // dara 0
