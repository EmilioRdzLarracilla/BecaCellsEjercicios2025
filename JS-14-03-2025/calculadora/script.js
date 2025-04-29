const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

let num1 = "", num2 = "", operador = "", operando = false;

/**
 *  funcion actualizarPantalla para traer el contenido de la clase pantalla en html
 * y asignarlo al parametro valor
 * @param {*} valor 
 * @returns 
 */
const actualizarPantalla = (valor) => pantalla.textContent = valor;

/**
 *  funcion limpiarPantalla referenciando los casos en los que se ejecutara
 *  la funcion actualizar pantalla al numero '0' de nuevo
 */
const limpiarPantalla = () => { num1 = num2 = operador = ""; operando = false; actualizarPantalla("0"); };


/**
 * funcion para borrar el contenido en pantalla de izquierda a derecha, -1 para que se cuente desde el final 
 * la extraccion de la cadena 
 */
const borrarUltimo = () => {
    if (!operando) {
        num1 = num1.slice(0, -1) || "0";
        actualizarPantalla(num1);
    } else {
        num2 = num2.slice(0, -1) || "";
        actualizarPantalla(num2 || num1);
    }
};


/***
 *  funcion operaciones para generar las ejecuciones de la operaciones 
 * de acuerdo al simbolo clickeado
 */
const operaciones = {
    "+": (n1, n2) => n1 + n2,
    "-": (n1, n2) => n1 - n2,
    "*": (n1, n2) => n1 * n2,
    "/": (n1, n2) => n2 !== 0 ? n1 / n2 : "Error",
    "^": (n1, n2) => Math.pow(n1, n2),
    "%": (n1, n2) => n1 % n2
};

/**
 *  esta funcion es el conjjunto para devolver o modificar la ejecucion de las operaciones
 * @param {*} boton 
 * @returns 
 */
const clickBorrarCIgual = (boton) => {
    const valor = boton.textContent;
    if (boton.id === "c") return limpiarPantalla();
    if (boton.id === "borrar") return borrarUltimo();
    if (boton.id === "igual") return clickIgual();
    if (operaciones[valor]) return clickOperador(valor);
    clickNumero(valor);
};

/**
 * funcion que determina la condicion para determinar el resultado de las operaciones
 */
const clickIgual = () => {
    if (num1 && operador && num2) {
        actualizarPantalla(operaciones[operador](Number(num1), Number(num2)));
        num1 = pantalla.textContent;
        num2 = operador = "";
        operando = false;
    }
};

/**
 *  funcion para asignarle un valor al operando siempre y cuando ya se tenga un numero previo
 * y no se le haya asignado uno anteriormente
 * @param {*} valor 
 */
const clickOperador = (valor) => {
    if (num1 && !operando) {
        operador = valor;
        operando = true;
    }
};

/**
 *  funcion para la asignacion de valores a num1 y num2
 * @param {*} valor 
 */
const clickNumero = (valor) => {
    if (!operando) {
        num1 = num1 === "0" ? valor : num1 + valor;
        actualizarPantalla(num1);
    } else {
        num2 += valor;
        actualizarPantalla(num2);
    }
};

botones.forEach(boton => boton.addEventListener("click", () => clickBorrarCIgual(boton)));
