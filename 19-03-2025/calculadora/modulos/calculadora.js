
export const pantalla = document.getElementById("mostrar");

export class Mate{
static sumar = (a, b) => a + b;

static restar = (a, b) => a - b;
static multiplicar = (a, b) => a * b;
static dividir = (a, b) => (b !== 0 ? a / b : "Syntax Error");

static raiz = (a) => {
    if (a < 0) return "Syntax Error";
    let resultado = 0;
    for (let i = 0; i * i <= a; i++) {
        resultado = i;
    }
    return resultado;
};

static factorial = (n) => {
    if (n < 0) return "Syntax Error";
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
};

static potencia = (a, b) => {
    let resultado = 1;
    for (let i = 1; i <= b; i++) {
        resultado *= a;  
    }
    return resultado;
};


}

export class funciones{
    static agregarNumero = (num) => {
        pantalla.value += num;
    };
    
    static agregarOperacion = (oper) => {
        pantalla.value += oper;
    };
    
    static limpiarPantalla = () => {
        pantalla.value = "";
    };
    
    static resetCalculadora = () => {
        pantalla.value = "";
    };
}
