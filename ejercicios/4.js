const peliculas = [
    { titulo: 'Jhon Wick', genero: 'Accion' },
    { titulo: 'El Padrino', genero: 'Drama' },
    { titulo: 'Mad Max', genero: 'Accion' },
    { titulo: 'Interestellar', genero: 'Ciencia Ficcion' },
    { titulo: 'El Gladiador', genero: 'Accion' },
    { titulo: 'Yo antes de ti', genero: 'Romance' },
];

const peliculasAccion = peliculas.filter(pelicula => pelicula.genero === 'Accion');

console.log('Peliculas de accion: ');
peliculasAccion.forEach(pelicula => console.log(' - ' + pelicula.titulo));