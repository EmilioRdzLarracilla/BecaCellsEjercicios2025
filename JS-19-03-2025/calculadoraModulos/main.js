/**
 * 
 * archivo main.js ejecucion de las eventualidades de la calculadora
 */    

import { operaciones } from "./operaciones.js";

const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

let num1 = "", num2 = "", operador = "", operando = false;

const actualizarPantalla = (valor) => pantalla.textContent = valor;

const limpiarPantalla = () => { num1 = num2 = operador = ""; operando = false; 
    actualizarPantalla("0"); };

const borrarUltimo = () => {
    if (!operando) {
        num1 = num1.slice(0, -1) || "0"; 
        actualizarPantalla(num1);
    } else {
        num2 = num2.slice(0, -1) || "";
        actualizarPantalla(num2 || num1);
    }
};

const clickBorrarCIgual = (boton) => {
    const valor = boton.textContent;
    const actions = {
        c: limpiarPantalla,
        borrar: borrarUltimo,
        igual: clickIgual
    };
    if (actions[boton.id]) return actions[boton.id]();
    if (operaciones[valor]) return clickOperador(valor);
    clickNumero(valor);
};

const clickIgual = () => {
    if (num1 && operador && num2) {
        actualizarPantalla(operaciones[operador](Number(num1), Number(num2)));
        num1 = pantalla.textContent;
        num2 = operador = "";
        operando = false;
    }
};

const clickOperador = (valor) => {
    if(num1 && !operando) {
        operador = valor;
        operando = true;
    }
};

const clickNumero = (valor) => {
    if(!operando){
        num1 = num1 === "0" ? valor : num1 + valor;
        actualizarPantalla(num1);
    } else {
        num2 += valor;
        actualizarPantalla(num2);
    }
};


botones.forEach(boton => boton.addEventListener("click", () => 
    clickBorrarCIgual(boton)));

