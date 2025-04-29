let arreglo = [1, 3, 7, 10, 3, 2];

function ordenar(array) {
    let recorrer = array.length;

    for (let i = 0; i < recorrer - 1; i++) {  
        for (let j = 0; j < recorrer - i - 1; j++) {  
            if (array[j] > array[j + 1]) { 
                let temporal = array[j];  
                array[j] = array[j + 1];  
                array[j + 1] = temporal;  
            }
        }
    }
    return array;  
}

console.log("Array original:", arreglo);
console.log("Array ordenado:", ordenar(arreglo));