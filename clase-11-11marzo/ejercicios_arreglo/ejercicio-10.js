/* 🔟 Registro de Asistencia en una Clase
Crea un sistema que registre alumnos y su asistencia (presente o ausente).
 Luego, muestra cuántos asistieron. */

const alumnos = [
  { nombre: "Ana García", asistencia: "Presente" },
  { nombre: "Juan Pérez", asistencia: "Ausente" },
  { nombre: "María López", asistencia: "Presente" },
  { nombre: "Pedro Rodríguez", asistencia: "Presente" },
  { nombre: "Laura Martínez", asistencia: "Ausente" },
  { nombre: "Carlos Sánchez", asistencia: "Presente" },
  { nombre: "Sofía Ramírez", asistencia: "Presente" },
  { nombre: "Diego Torres", asistencia: "Ausente" },
  { nombre: "Isabel Castro", asistencia: "Presente" },
  { nombre: "Mateo Díaz", asistencia: "Presente" },
  { nombre: "Luisa Fernández", asistencia: "Ausente" },
  { nombre: "Andrés Gómez", asistencia: "Presente" },
  { nombre: "Carmen Ruiz", asistencia: "Presente" },
  { nombre: "Javier Morales", asistencia: "Ausente" },
  { nombre: "Patricia Núñez", asistencia: "Presente" },
  { nombre: "Roberto Ortiz", asistencia: "Presente" },
  { nombre: "Elena Silva", asistencia: "Ausente" },
  { nombre: "Francisco Vargas", asistencia: "Presente" },
  { nombre: "Gloria Jiménez", asistencia: "Presente" },
  { nombre: "Daniela Ríos", asistencia: "Ausente" },
];

const registrarAlumno = (listaAsistencia, nombre, asistencia) => {
  if (!nombre && !asistencia) {
    return console.log("ingrese los datos completos");
  } else {
    return listaAsistencia.push({
      nombre,
      asistencia,
    });
  }
};

const asistenciaCantidad = (listaAsistencia) => {
  let asistenciaCantidad = " asistieron ";

  asistenciaCantidad += listaAsistencia.length + " alumnos";

  return asistenciaCantidad;
};

registrarAlumno(alumnos, "emilio rodriguez", "Presente");
console.log(alumnos);

console.log(asistenciaCantidad(alumnos));
