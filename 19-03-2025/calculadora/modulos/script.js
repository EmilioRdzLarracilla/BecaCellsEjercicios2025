import { Mate, funciones, pantalla } from './calculadora.js';

document.addEventListener('DOMContentLoaded', () => {
    
    const botonesNumeros = document.querySelectorAll('.btn.numero');
    botonesNumeros.forEach(boton => {
        boton.addEventListener('click', (e) => {
            funciones.agregarNumero(e.target.textContent);
        });
    });

    const botonesOperadores = document.querySelectorAll('.btn.operador');
    botonesOperadores.forEach(boton => {
        boton.addEventListener('click', (e) => {
            funciones.agregarOperacion(e.target.textContent);
        });
    });

  
    const botonLimpiar = document.querySelector('.btn.limpiar');
    botonLimpiar.addEventListener('click', () => {
        funciones.limpiarPantalla();
    });


    const botonIgual = document.querySelector('.btn.igual');
    botonIgual.addEventListener('click', () => {
        calcularResultado();
    });

    const calcularResultado = () => {
        let expresion = pantalla.value;

        try {
            expresion = expresion.replace(/(\d+)\+(\d+)/g, (match, a, b) => Mate.sumar(parseFloat(a), parseFloat(b)));
            expresion = expresion.replace(/(\d+)\-(\d+)/g, (match, a, b) => Mate.restar(parseFloat(a), parseFloat(b)));
            expresion = expresion.replace(/(\d+)\×(\d+)/g, (a, b) => Mate.multiplicar(parseFloat(a), parseFloat(b)));
            expresion = expresion.replace(/(\d+)\÷(\d+)/g, (a, b) => Mate.dividir(parseFloat(a), parseFloat(b)));
            expresion = expresion.replace(/(\d+(\.\d+)?)\^(\d+(\.\d+)?)/g, (match, a, _, b) => Mate.potencia(parseFloat(a), parseFloat(b)));
            expresion = expresion.replace(/√(\d+)/g, (match, a) => Mate.raiz(parseFloat(a)));
            expresion = expresion.replace(/(\d+)!/g, (match, a) => Mate.factorial(parseInt(a)));

            
            pantalla.value = eval(expresion); 
        } catch (error) {
            pantalla.value = "Syntax Error";
        }
    };
});