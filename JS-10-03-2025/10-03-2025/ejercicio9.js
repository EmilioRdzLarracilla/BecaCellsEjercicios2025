const vocales = ['A', 'E', 'I', 'O', 'U','a', 'e', 'i', 'o', 'u'];
let cuenta = 0;
let frase = prompt("escribe una frase:");

for (let s = 0; s < frase.length; s++) {
    let letra = frase[s];
    for (let a = 0; a < vocales.length; a++){
        if(letra === vocales[a]) {
            cuenta++;
            break;
        }
    }
}

console.log(`numero de vocales: ${cuenta}`);