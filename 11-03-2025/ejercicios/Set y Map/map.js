/////////////////////////////////////////
////////////MAP/////////////////////////

////Frecuencia de repeticion de un texto

const texto = prompt('Dime una frase: ');

function contarPalabrasrepetidas(texto) {
    let palabras = texto.toLowerCase().replace(/[.,!?]/g, '').split(/\s+/);
    
    console.log(palabras);
    
    let palabrasrepetidas = new Map();

    palabras.forEach(palabra => {
        if (palabrasrepetidas.has(palabra)) {
            palabrasrepetidas.set(palabra, palabrasrepetidas.get(palabra) + 1);
        } else {
           
            palabrasrepetidas.set(palabra, 1);
        }
    });

    return palabrasrepetidas;
}

const resultado = contarPalabrasrepetidas(texto);
console.log("Este es el numero de palabras repetidas:", resultado);

///////Productos/////

const Productos = [
    { nombre: "Jabon", precio: 15 },
    { nombre: "sopa", precio:18  },
    { nombre: "lechuga", precio: 10 },
    { nombre: "foco", precio: 23 },
    { nombre: "crema", precio: 20 },
    { nombre: "refresco", precio: 30 }
];

const myMap = new Map();

Productos.forEach(producto => {
    myMap.set(producto.nombre.toLowerCase(), producto.precio); 
});

const nombreProducto = prompt("Producto a consultar: ").toLowerCase();


if (myMap.has(nombreProducto)) {
    console.log('El precio de',nombreProducto, 'es:', myMap.get(nombreProducto));
} else {
    console.log('El producto',nombreProducto, 'no está en la lista de productos actual');
}

/////Agenda Telefonica

const Telefonos = [
    { nombre: "Juan", telefono: 7225268799 },
    { nombre: "Axel", telefono: 5612425544  },
    { nombre: "Roberto", telefono: 7889966551 },
    { nombre: "Rosa", telefono: 7655443210 },
    { nombre: "Ernesto", telefono: 5513456720 },
    { nombre: "Luis", telefono: 5567549900 }
];

const tel = new Map();

Telefonos.forEach(telefono => {
    tel.set(telefono.nombre.toLowerCase(), telefono.telefono); 
});

const nombreContacto = prompt("Realiza una busqueda: ").toLowerCase();


if (tel.has(nombreContacto)) {
    console.log('Se localizo el contacto:',nombreContacto, 'con numero telefonico:', tel.get(nombreContacto));
} else {
    console.log('El contacto',nombreContacto, 'no existe');
}
