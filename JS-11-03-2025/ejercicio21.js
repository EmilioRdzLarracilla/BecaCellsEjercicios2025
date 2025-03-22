function palabrasUnicas() {
    let frase = prompt("escribe una frase: ");
        let palabras = frase.replace(/[.,]/g, '').split( ' ');
    let unica = new Set();

    for (let s = 0; s < frase.length; s++){
        unica.add(palabras[s]);
    }
    return unica.size;
}

let totalPalUnicas = palabrasUnicas();
console.log(`el texto tiene ${totalPalUnicas} palabras unicas`);
