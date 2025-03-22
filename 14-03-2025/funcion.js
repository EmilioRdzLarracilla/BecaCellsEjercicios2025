/*
Inicializacion vacia de la pantalla
*/
let pantallaValor = "";

/*
obtencioon del elemento html 
*/
const mostrarPantalla = () => {
    const pantalla = document.getElementById("mostrar");
    pantalla.value = pantallaValor;
};

/**
 * funcion que añade el numero seleccionado a la pantalla de nuestra 
 * @param {*} numero 
 * pasa el valor del numero redirigiendolo a la variable pantallaValor
 */
const agregarNumero = (numero) => {
    pantallaValor += numero;
    mostrarPantalla();
};

const agregarOperacion = (operacion) => {
    pantallaValor += ` ${operacion} `;
    mostrarPantalla();
};

const limpiarPantalla = () => {
    pantallaValor = "";
    mostrarPantalla();
};

const calcularResultado = () => {
    let resultado;

    if (pantallaValor.includes('+')) {
        const [a1, b1] = pantallaValor.split(' + ').map(Number);
        resultado = sumar(a1, b1);
    } else if (pantallaValor.includes('-')) {
        const [a2, b2] = pantallaValor.split(' - ').map(Number);
        resultado = restar(a2, b2);
    } else if (pantallaValor.includes('*')) {
        const [a3, b3] = pantallaValor.split(' * ').map(Number);
        resultado = multiplicar(a3, b3);
    } else if (pantallaValor.includes('/')) {
        const [a4, b4] = pantallaValor.split(' / ').map(Number);
        resultado = dividir(a4, b4);
    } else if (pantallaValor.includes('√')) {
        const a6 = parseFloat(pantallaValor.replace('√', '').trim());
        resultado = raiz(a6);
    } else if (pantallaValor.includes('^')) {
        const [a7, b7] = pantallaValor.split(' ^ ').map(Number);
        resultado = potencia(a7, b7);
    } else if (pantallaValor.includes('!')) {
        const a8 = parseInt(pantallaValor.replace('!', '').trim());
        resultado = factorial(a8);
    } else {
        resultado = " Syntax Error"; 
    }

    pantallaValor = resultado.toString();
    mostrarPantalla();
};

/**
 * funcionn para realizar la suma de dos valores
 * @param {*} a primer numero 
 * @param {*} b segundo numero
 * @returns sumar();  
 */
const sumar = (a, b) => a + b;

/**
 * Funcion para restar dos valores
 * @param {*} a primer numero
 * @param {*} b segundo numero
 * @returns  restar(); 
 */
const restar = (a, b) => a - b;

/**
 * Funcion para multiplicar dos valores
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
const multiplicar = (a, b) => a * b;


/**
 * Funcion para realizar la division de dos valores
 * @param {*} a dividendo 
 * @param {*} b divisor
 * @returns dividir() b!=0 => a/b b==0 =>'Syntax error'; 
 */
const dividir = (a, b) => {
   if(b!==0){
   return a / b
   }
   else{
      return 'Syntax Error';
   }
   
};

/**
 * Funcion que determina la raiz cuadrada de un numero
 * @param {*} a numero a elevar 
 * @returns resultado (raiz cuadrada de un numero si y solo si es diferente de 0)
 */

const raiz = (a) => {
    if (a < 0) {
        return "Syntax error";
    }

    else{
    let resultado = 0;
    
    for (let i = 0; i * i <= a; i++) {
        resultado = i;
    }

    return resultado;
}
    
};

/**
 * Funcion pra calcular el factorial de un numero 
 * @param {*} a valor  de inicio
 * @returns  resultado (potencia del numero)
 */

const factorial = (a) => {
    if (a < 0){
        return "Syntax error"; 
    } 
    else{

        let resultado = 1;
        for (let i = 1; i <= a; i++) {
            resultado *= i; 
        }
        return resultado;
    }
    
};

 /**
  * Funcion para calcular la potencia de un numero
  * @param {*} a numero que se elevara(base)
  * @param {*} b numero de elvacion(exponente)
  * @returns resultado(peracion realizada)  
  */

const potencia = (a, b) => {
    let resultado = 1;
    for (let i = 1; i <= b; i++) {
        resultado *= a;  
    }
    return resultado;
};


