/**
 * archivo operaciones.js, ejecucion de las operaciones en la calculadora 
 * 
 *  @const {objeto} operaciones
 *   contiene funciones flecha de las operaciones a realizar 
 */

export const operaciones = {
    "+": (n1,n2) => n1 + n2,
    "-": (n1,n2) => n1 - n2,
    "*": (n1,n2) => n1 * n2,
    "/": (n1,n2) => n2 !== 0 ? n1 / n2 : "error",
    "^": (n1,n2) => Math.pow(n1,n2),
    "%": (n1,n2) => n1 % n2
};