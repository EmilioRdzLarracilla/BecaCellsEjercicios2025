//tienda en linea - buscar productos por nombre

let catalogo = [
    {producto: "bocina", precio: 800, disponible: 3},
    {producto: "audifonos", precio: 400, disponible: 10},
    {producto: "mouse", precio: 180, disponible: 5},
    {producto: "monitor", precio: 1300, disponible: 0},
    {producto: "teclado", precio: 700, disponible: 2},
    {producto: "reloj", precio: 250, disponible: 18},
    {producto: "tableta", precio: 2000, disponible: 0}
];

function buscar(productos) {
    let encontrados = [];
    for (let a = 0; a < productos.length; a++){
        let encontrado = false;

        for ( let s = 0; s < catalogo.length; s++) { 
           if (catalogo[s].producto === productos[a]) {
               encontrados.push(catalogo[s]);
               encontrado = true;
               break;
           }
        }
        if(!encontrado) {
            encontrados.push(`producto ${productos[a]} no encontrado`);
        }
    }
    return encontrados;
};

let busqueda = ["bocina", "reloj"];
let registroBusqueda = buscar(busqueda);

console.log(registroBusqueda);