//Crea una funcion donde si una palabra es un palindromo
// Utilizar un metodo de inistancia.


class PalindromoValido {
    /**
     *
     */
    constructor(palabra) {
        this.palabra = palabra;
    }

    esPalindromo() {
        const palabraLimpia = this.palabra.toLowerCase().replace(/[^a-z0-9]/g,'');
        const palabraRevez = palabraLimpia.split('').reverse().join('');
        return palabraLimpia === palabraRevez;
    }

    checkPalindromo() {
        if(this.esPalindromo()){
            console.log(`${this.palabra} es un palindromo`);
        }else {
            console.log(`${this.palabra} no es un palindromo`);

        }
    }
}


class Factorial {
    /**
     *
     */
    constructor(numero) {
        this.numero = numero;
    }
    calcularFactorial(n = this.numero){
        if(n === 0 || n === 1){
            return 1;
        }else {
            return n * this.calcularFactorial(n - 1);
        }
    }

    mostrarResultado() {
        const result = this.calcularFactorial();
        console.log(`El factorial de ${this.numero} es: ${result}`)
    }
}

const inputUsuario = prompt("ingresa una palabra");
const revisarPalindromo = new PalindromoValido(inputUsuario);
revisarPalindromo.checkPalindromo()
const inputUsuario1 = parseInt(prompt('Ingrese un numero a calcular:'));
const calcular = new Factorial(inputUsuario1);
calcular.mostrarResultado();

