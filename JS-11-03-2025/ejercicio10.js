function encontrarNum(arreglo) {
    for(let s = 0; s < arreglo.length; s++) {
        for( let a = s + 1; a < arreglo.length; a++) {
            if (arreglo[s] === arreglo[a]) {
                return arreglo[s];
            }
        }
    }
    return "ningun numero se repite";
}

console.log(encontrarNum([1,2,3,4,5,6,7]));
console.log(encontrarNum([4,6,5,7,8,4,3]));
