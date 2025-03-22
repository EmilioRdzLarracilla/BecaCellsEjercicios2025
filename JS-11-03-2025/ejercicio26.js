//almacenar precios de productos (map)

let catalog = new Map();

catalog.set("producto1", 450);
catalog.set("producto2", 450);
catalog.set("producto3", 450);
catalog.set("producto4", 450);
catalog.set("producto5", 450);
catalog.set("producto6", 450);
catalog.set("producto7", 450);
catalog.set("producto8", 450);


function consultaPrecios(producto) {
    if(catalog.has(producto)) {
        return `El precio de "${producto}" es $${catalog.get(producto)}`;
    }else {
        return `el producto "${producto}" no esta en el catalogo`;
    }
}

console.log(consultaPrecios("producto2"));
console.log(consultaPrecios("producto5"));
console.log(consultaPrecios("producto9"));







