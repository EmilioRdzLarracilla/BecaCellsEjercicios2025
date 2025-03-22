//contar el numero de palabras en una frase
function contarPalabras() {
    let frase = prompt("Escribe una frase: ");
    
    if (!frase || typeof frase !== "string") {
        return "No es válida la entrada porque no tiene palabras.";
    }
    
    let contador = 0;
    let palabra = false;

    for (let s = 0; s < frase.length; s++) {
        if (frase[s] !== " " && frase[s] !== "\t" && frase[s] !== "\n") {
            if (!palabra) {
                contador++;
                palabra = true;
            }
        } else {
            palabra = false;
        }
    }

    return contador;
}

console.log(`Número de palabras: ${contarPalabras()}`);