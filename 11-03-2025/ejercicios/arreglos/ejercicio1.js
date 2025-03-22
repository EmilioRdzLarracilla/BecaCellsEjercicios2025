///Arreglo Productos

const productos = [
    { nombre: "Laptop Asus", precio: 15000, stock: 10 },
    { nombre: "Teclado mecánico", precio: 1200, stock: 0 },
    { nombre: "Mouse inalámbrico", precio: 800, stock: 30 },
    { nombre: "Monitor 24 pulgadas", precio: 5000, stock: 15 },
    { nombre: "Silla gamer", precio: 7000, stock: 5 },
    { nombre: "Termo electronico", precio: 70, stock: 5 },
    { nombre: "Kit de limpieza multi usos", precio: 90, stock: 5 },
    { nombre: "Cable OTG", precio: 80, stock: 0 },
    { nombre: "Monitor 32 pulgadasr", precio: 70, stock: 0 },
    { nombre: "Mouse Inalambrico Logitech", precio: 1500, stock: 9 },
];

const stockProductos = [];

for (let i = 0; i < productos.length; i++) {
    
    if (productos[i].stock > 0) {
        stockProductos.push(productos[i]); 
    }
}

console.log("Los productos con stock disponible son:");

for (let i = 0; i < stockProductos.length; i++) 
{
    console.log(stockProductos[i].nombre);
}


/////////////////////////////////

/////Arreglo de estudiantes


const estudiantes = [
    { nombre: "Ana Gabriela", notas: [8, 9, 10] },
    { nombre: "Carlos Alberto", notas: [6, 7, 5] },
    { nombre: "Elena", notas: [9, 9, 8] },
    { nombre: "Miguel Angel", notas: [5, 6, 8] },
    { nombre: "Sofía", notas: [5, 6, 6] },
    { nombre: "Carlos Leonardo", notas: [6, 7, 5] },
    { nombre: "Elena Estefania", notas: [9, 9, 8] },
    { nombre: "Misael", notas: [5, 5, 6] },
    { nombre: "Carla Luna", notas: [7, 7, 5] },
    { nombre: "Eleonor", notas: [9, 9, 8] },
    { nombre: "Moises", notas: [5, 5, 5] }
];

const promedioEstudiantes = [];

for (let i = 0; i < estudiantes.length; i++) {
    let suma = 0;

    for (let j = 0; j < estudiantes[i].notas.length; j++) {
        suma += estudiantes[i].notas[j];
    }

    let promedio = suma / estudiantes[i].notas.length;

    if (promedio >= 6) {
        promedioEstudiantes.push({
            nombre: estudiantes[i].nombre,
            notas: estudiantes[i].notas,
            promedio: promedio.toFixed(2)
        });
    }
}

console.log('Los estudiantes cuyo promedio es aprobatorio son:');

for (let i = 0; i < promedioEstudiantes.length; i++) {
    console.log(promedioEstudiantes[i].nombre, ':', promedioEstudiantes[i].promedio);
}









