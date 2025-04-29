//contar la frecuencia de palabras en un texto (map)

function contarPalabrasMap(frase){
    let palabras = frase.match(/\b\w+\b/g);
    let contar = new Map();

    for(let palabra of palabras) {
        contar.set(palabra, (contar.get(palabra) || 0) + 1);
    }
    return Object.fromEntries(contar);
}

let frase = "en esta frase hay tantas palabras que contar en esta";
console.log(contarPalabrasMap(frase));