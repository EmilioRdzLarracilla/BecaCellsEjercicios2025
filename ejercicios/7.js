const catalogo = [
    { nombre: 'Laptop', precio: 1200 },
    { nombre: 'IPhone', precio: 800 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Monitor', precio: 300 },
    { nombre: 'Mouse', precio: 25 }, 
];

const buscarProducto = (nombreBuscado) => {
    // .find para encontar el primer producto que coincida con el nombre
    const producto = catalogo.find(item => item.nombre.toLowerCase() === nombreBuscado.toLowerCase());

    // Usar if else para verificar que encontramos el producto
    if (producto) {
        return 'Producto encontrado: ' + producto.nombre + ' - Precio: $' + producto.precio;
    } else {
        return 'Producto encontrado';
    }
};

console.log(buscarProducto('Laptop'));
console.log(buscarProducto('Camara'));