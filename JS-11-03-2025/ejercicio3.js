//analizar una funcion que encunetre algu numero de fibonacci
function fibonacci() {
    let limite = prompt("digital el numero de fibonacci que deseas conocer:");
    let primerNum = 0;
    let segundoNum = 1;
    let siguiente;

    for (s = 2; s <= limite; s++) {
        siguiente = primerNum + segundoNum;
        primerNum = segundoNum;
        segundoNum = siguiente;
    }
    if (limite === 0) {
        return primerNum;
    } else {
        return segundoNum;
    }
}
console.log(fibonacci());