function analizar(cadena) {
    let contador = 0;

    for (let s = 0; s < cadena.length; s++){
        if(cadena[s] === '(') {
            contador++;
        } else if(cadena[s] === ')')  {
            contador--;
            if(contador < 0) {
                return "falta un parentesis de apertura";
            }

        }
    } 

    if(contador === 0) {
        return "Todos los parentesis estan cerrados";
    } else {
        return "falta un parentesis de cierre";
    }
}

console.log(analizar("()"));
console.log(analizar("()())"));
console.log(analizar("()()()("));
