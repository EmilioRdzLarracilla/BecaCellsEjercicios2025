let num = prompt("Digita un numero");

function primos() {
    if (num <= 1) {
        console.log("numero no primo");
        return false; //menor o igual a 1 no es primo
    }
    for (let s = 2; s < num; s++) {
        if ( num % s === 0) {
            console.log("numero no primo");
            return false; // divisisble por cualquier numero que no sea 1 o por si mismo, no es primo
        }
    }
    console.log("numero primo");   //si no se cumple cualquiera de las anteriores => numero primo
    return true;
}

primos();
