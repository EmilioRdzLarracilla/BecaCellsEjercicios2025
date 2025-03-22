/* 2️⃣ Lista de Estudiantes y Promedios
Dado un arreglo de estudiantes con sus notas, calcula su promedio
 y determina si aprobaron (nota mínima 6). */

const estudiantes = [
  {
    nombre: "Ana",
    notas: [8, 9, 7, 10, 6, 9],
  },
  {
    nombre: "Juan",
    notas: [5, 6, 7, 8, 9, 2],
  },
  {
    nombre: "María",
    notas: [9, 10, 8, 7, 3, 5],
  },
  {
    nombre: "Pedro",
    notas: [7, 8, 9, 6, 5, 10],
  },
  {
    nombre: "Laura",
    notas: [6, 7, 10, 9, 10, 5],
  },
  {
    nombre: "Carlos",
    notas: [10, 9, 8, 7, 6, 5],
  },
  {
    nombre: "Sofía",
    notas: [4, 5, 6, 0, 8, 9],
  },
  {
    nombre: "Diego",
    notas: [8, 7, 6, 5, 10, 9],
  },
  {
    nombre: "Isabel",
    notas: [9, 8, 7, 6, 5, 10],
  },
  {
    nombre: "Mateo",
    notas: [6, 5, 10, 9, 9, 7],
  },
];

const promedio = (estudiante) => {
  let resultado = "";
  resultado += estudiante.nombre;
  const promedio = estudiante.notas.reduce(
    (suma, materia) => (suma += materia)
  );

  resultado += ` culmina con un promedio de ${
    promedio / estudiante.notas.length
  } `;
  return (resultado +=
    promedio / estudiante.notas.length > 6
      ? " aprobatorio :)"
      : " reprobatorio :(");
};

console.log(promedio(estudiantes[2]));
