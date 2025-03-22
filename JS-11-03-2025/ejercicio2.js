function numFactorial() {
    let factorial = prompt("digita un numero:");
    let resultado = 1;
    for (let s = 1; s <= factorial; s++) {
        resultado *= s;
    }
    return resultado;
}
console.log(numFactorial());