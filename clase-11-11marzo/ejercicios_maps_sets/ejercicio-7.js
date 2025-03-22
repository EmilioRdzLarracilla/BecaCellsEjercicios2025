/* Almacenar Precios de Productos (Map)
Usa un Map para almacenar los precios de productos y consultar por nombre */

const productos = new Map();

productos.set("camisa", 50);
productos.set("zapatos", 850);
productos.set("sudadera", 350);
productos.set("bufanda", 150);
productos.set("calcetines", 80);
productos.set("corbata", 130);
productos.set("pantalón", 450);
productos.set("zapatillas", 950);
productos.set("cinturón", 250);

console.log(productos.get("zapatillas"));
console.log(productos.get("zapatos"));
