const normaliza = /[^a-z0-9]/g;

function normalizacion() {
    let palFrase = prompt("escribe una frase:");
    let sinTema = palFrase.toLowerCase().replace(normaliza,"");
    let final = sinTema.length - 1;
    function determinar(sinTema, inicio, final) {
        if (inicio >= final) {
            return true;
        }
        if (sinTema[inicio] !== sinTema[final]) {
            return false;
        }
        return determinar(sinTema, inicio + 1, final - 1);
    }
    return determinar(sinTema, 0, final)
}
 console.log(normalizacion());
