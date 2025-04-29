function numFaltante(array) {
    for (let s = 0; s < array.length - 1; s++) {
        if (array[s] + 1 !== array[s + 1]) {
            return array[s] + 1;
        }
    }
    return "no falta ningun numero";
}

let  consecutivos = [1, 3, 4, 5];
console.log(`numero(s) faltantes: ${numFaltante(consecutivos)}`);