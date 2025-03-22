function subCadenaMax(cadena) {
    let maxSubCadena = '';
    let subCadenaActual = '';

    for (let s = 0; s < cadena.length; s++) {
        // Si el carácter actual es igual al anterior, continuamos la secuencia
        if (s === 0 || cadena[s] === cadena[s - 1]) {
            subCadenaActual += cadena[s];
        } else {
            if (subCadenaActual.length > maxSubCadena.length) {
                maxSubCadena = subCadenaActual;
            }
            subCadenaActual = cadena[s];
        }
    }

    if (subCadenaActual.length > maxSubCadena.length) {
        maxSubCadena = subCadenaActual;
    }

    return maxSubCadena;
}

// Ejemplo de uso
let cadena = "aaaabcabbbbbcaabbbbbbcccccc"; 
console.log(`La subcadena más larga es: ${subCadenaMax(cadena)}`);