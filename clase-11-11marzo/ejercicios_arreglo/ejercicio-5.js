const libros = [
  {
    id: 1,
    titulo: "El miedo a la libertad",
    autor: "Erich Fromm",
    estado: "Disponible",
  },
  {
    id: 2,
    titulo: "El arte de amar",
    autor: "Erich Fromm",
    estado: "Prestado",
  },
  {
    id: 3,
    titulo: "La condición humana",
    autor: "Karl Jaspers",
    estado: "Disponible",
  },
  {
    id: 4,
    titulo: "Filosofía de la existencia",
    autor: "Karl Jaspers",
    estado: "Prestado",
  },
  {
    id: 5,
    titulo: "La sociedad del cansancio",
    autor: "Byung-Chul Han",
    estado: "Disponible",
  },
  {
    id: 6,
    titulo: "Psicopolítica",
    autor: "Byung-Chul Han",
    estado: "Prestado",
  },
  {
    id: 7,
    titulo: "Tener o ser",
    autor: "Erich Fromm",
    estado: "Disponible",
  },
  {
    id: 8,
    titulo: "De la tragedia a la filosofía",
    autor: "Karl Jaspers",
    estado: "Prestado",
  },
  {
    id: 9,
    titulo: "La expulsión de lo distinto",
    autor: "Byung-Chul Han",
    estado: "Disponible",
  },
  {
    id: 10,
    titulo: "El corazón del hombre",
    autor: "Erich Fromm",
    estado: "Prestado",
  },
  {
    id: 11,
    titulo: "Razón y existencia",
    autor: "Karl Jaspers",
    estado: "Disponible",
  },
  {
    id: 12,
    titulo: "No cosas: Quiebras del mundo de hoy",
    autor: "Byung-Chul Han",
    estado: "Prestado",
  },
  {
    id: 13,
    titulo: "Anatomía de la destructividad humana",
    autor: "Erich Fromm",
    estado: "Disponible",
  },
  {
    id: 14,
    titulo: "La bomba atómica y el futuro del hombre",
    autor: "Karl Jaspers",
    estado: "Prestado",
  },
  {
    id: 15,
    titulo: "Lo bello salva",
    autor: "Byung-Chul Han",
    estado: "Disponible",
  },
];

const librosDisponibles = (libros) => {
  return libros.filter((libro) => libro.estado === "Disponible");
};

console.log(librosDisponibles(libros));
