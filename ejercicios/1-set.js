const productos = ['Manzana', 'Banana', 'Naranja', 'Manzana', 'Pera', 'Banana', 'Uva'];

// Asi podemos elimanr a loss duplicados.

const productosUnicos = [...new Set(productos)];

console.log('Productos Unicos: ', productosUnicos);