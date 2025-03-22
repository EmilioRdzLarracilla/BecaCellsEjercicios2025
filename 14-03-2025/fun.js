const pantalla = document.getElementById("mostrar");

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => (b !== 0 ? a / b : "Syntax Error");

const raiz = (a) => {
    if (a < 0) return "Syntax Error";
    let resultado = 0;
    for (let i = 0; i * i <= a; i++) {
        resultado = i;
    }
    return resultado;
};

const factorial = (n) => {
    if (n < 0) return "Syntax Error";
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
};


const potencia = (a, b) => {
    let resultado = 1;
    let esNegativo = b < 0; // Verifica si el exponente es negativo
    let exponente = Math.abs(b); // Usa el valor absoluto del exponente

    for (let i = 1; i <= exponente; i++) {
        resultado *= a;
    }

    return esNegativo ? 1 / resultado : resultado;
};

const agregarNumero = (num) => {
    pantalla.value += num;
};

const agregarOperacion = (oper) => {
    pantalla.value += oper;
};

const limpiarPantalla = () => {
    pantalla.value = "";
};

const resetCalculadora = () => {
    pantalla.value = "";
};

const calcularResultado = () => {
    try {
        let expresion = pantalla.value;
        expresion = expresion.replace(/(\d+)\+(\d+)/g, (match, a, b) => sumar(parseFloat(a), parseFloat(b))); // Suma
        expresion = expresion.replace(/(\d+)\-(\d+)/g, (match, a, b) => restar(parseFloat(a), parseFloat(b))); // Resta
        expresion = expresion.replace(/(\d+(\.\d+)?)\^(\d+(\.\d+)?)/g, (match, a, _, b) => potencia(parseFloat(a), parseFloat(b)));
        expresion = expresion.replace(/(\d+)\×(\d+)/g, (a, b) => multiplicar(parseFloat(a), parseFloat(b))); // Multiplicación
        expresion = expresion.replace(/(\d+)\÷(\d+)/g, (a, b) => dividir(parseFloat(a), parseFloat(b))); // División 
        expresion = expresion.replace(/√(\d+)/g, (match, a) => raiz(parseInt(a))); // Raíz cuadrada
        expresion = expresion.replace(/(\d+)!/g, (match, a) => factorial(parseInt(a))); // Factorial
      pantalla.value = eval(expresion);
    } catch (error) {
        pantalla.value = "Syntax Error";
    }
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".igual").addEventListener("click", calcularResultado);
});