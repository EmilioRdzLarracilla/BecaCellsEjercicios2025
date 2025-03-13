const libros = [
    { titulo: 'El Señor de los Anillos', autor: 'J.R.R. Tolkien', estado: 'Disponible' },
    { titulo: 'Metro 2033', autor: 'Dimitry Glukhovsky', estado: 'Prestado' },
    { titulo: 'Hush Hush', autor: 'Becca Fitzpatrick', estado: 'Disponible'},
    { titulo: 'El elegido', autor: 'Thomas Mann', estado: 'Prestado' },
    { titulo: 'El Silmarillion', autor: 'J.R.R. Tolkien', estado: 'Disponible' },
];

const librosDisponibles = () => {
    return libros.filter(libro => libro.estado === 'Disponible');
};

console.log ('Libros disponibles: ');
librosDisponibles().forEach(libro => {
    console.log(' - ' + libro.titulo + ' de ' + libro.autor);
})