//SISTEMA DE INVENTARIO DE UNA TIENDA

let inventario = [
    {producto: "bocina", precio: 800, disponible: 3},
    {producto: "audifonos", precio: 400, disponible: 10},
    {producto: "mouse", precio: 180, disponible: 5},
    {producto: "monitor", precio: 1300, disponible: 0},
    {producto: "teclado", precio: 700, disponible: 2},
    {producto: "reloj", precio: 250, disponible: 18},
    {producto: "tableta", precio: 2000, disponible: 0}
];

let disponibilidad = [];
for(let s = 0; s < inventario.length; s++) {
    if (inventario[s].disponible > 0) {
        disponibilidad.push(inventario[s]);
    }
}

console.log("productos disponibles:", disponibilidad);

