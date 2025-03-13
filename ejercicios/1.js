const productos = [
    { nombre: 'Laptop', precio: 15000, stock: 5 },
    { nombre: 'Mouse', precio: 500, stock: 0 },
    { nombre: 'Teclado', precio: 1200, stock: 10 },
    { nombre: 'Monitor', precio: 7000, stock: 2 },
    { nombre: 'USB', precio: 300, stock: 0 },
];

// Usar el metodo filter para saber que productos hay disponibles.

const productosDisponibles = productos.filter(producto => producto.stock > 0);

console.log("Productos disponibles: ");
productosDisponibles.forEach(producto => {
    console.log('Nombre: ' + producto.nombre + ', Precio: ' + producto.precio + ', Stock: ' + producto.stock);
})