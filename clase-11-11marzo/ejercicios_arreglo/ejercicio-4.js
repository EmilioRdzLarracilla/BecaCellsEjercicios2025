/* Crea una lista de películas con título
 y género. Filtra solo las de acción. */

const peliculas = [
  { id: 1, titulo: "El Padrino", genero: "Drama" },
  { id: 2, titulo: "Interestelar", genero: "Ciencia ficción" },
  { id: 3, titulo: "La La Land", genero: "Musical" },
  {
    id: 4,
    titulo: "El Señor de los Anillos: La Comunidad del Anillo",
    genero: "Fantasía",
  },
  { id: 5, titulo: "Parásitos", genero: "Thriller" },
  { id: 6, titulo: "Duro de matar", genero: "Acción" },
  { id: 7, titulo: "Misión imposible", genero: "Acción" },
  { id: 8, titulo: "John Wick", genero: "Acción" },
  { id: 9, titulo: "Mad Max: furia en la carretera", genero: "Acción" },
  { id: 10, titulo: "Terminator 2", genero: "Acción" },
  { id: 11, titulo: "Casablanca", genero: "Drama" },
  { id: 12, titulo: "Blade Runner", genero: "Ciencia ficción" },
  { id: 13, titulo: "West Side Story", genero: "Musical" },
  { id: 14, titulo: "El laberinto del fauno", genero: "Fantasía" },
  { id: 15, titulo: "El silencio de los inocentes", genero: "Thriller" },
];

const soloAccion = (peliculas) => {
  return peliculas.filter((el) => el.genero === "Acción");
};
console.log(soloAccion(peliculas));
