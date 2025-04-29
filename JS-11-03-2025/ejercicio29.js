//historial de compras de un cliente (map)
let historial = new Map();

function agregar(cliente, producto) {
    if(historial.has(cliente)){
        historial.get(cliente).push(producto);
    }else {
        historial.set(cliente, [producto]);
    }
} 

agregar("persona1", "producto1");
agregar("persona2", "producto2");
agregar("persona4", "producto2");
agregar("persona4", "producto1");
agregar("persona3", "producto3");

console.log("historial de compras:");
for(let [cliente, productos] of historial){
    console.log(`${cliente}: ${productos}`);
}


