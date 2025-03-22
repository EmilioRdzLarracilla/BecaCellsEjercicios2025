//sumar los digitos de un numero hasta que aparezca un solo digito como resultado
function sumar() {
    let num = prompt("digita un numero");
    
    while(num >= 10) {
        let suma = 0;
        for (let s = num; s > 0; s = Math.floor(s / 10)) {
            suma += s % 10;
        }
        num = suma;

    }
    return num;
}

console.log(sumar());