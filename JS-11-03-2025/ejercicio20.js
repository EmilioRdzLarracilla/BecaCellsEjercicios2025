//eliminar duplicados en una lista de productos (set)
let productos = ["leche", "carne", "huevos", "pan", "galletas", "galletas", "huevos"];

//let sinRepeticion = new Set(productos);
let sinRepeticion = [...new Set(productos)];
console.log("productos sin duplicar: ", sinRepeticion);