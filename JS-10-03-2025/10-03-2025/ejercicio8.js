// invertir una cadena de texto

let texto = prompt("Escribe alguna palabra:");
let textoAlReves = '';

for ( let s = texto.length -1; s >=0; s--) {
    textoAlReves += texto[s]
}

console.log(textoAlReves);