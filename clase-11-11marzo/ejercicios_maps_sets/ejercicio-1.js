/*  1️⃣ Eliminar Duplicados en una Lista de Productos (Set)
Dada una lista de productos donde algunos están repetidos, usa Set para eliminar duplicados. */

const listaProductos = [
  "jamon",
  "queso",
  "peras",
  "tortillas",
  "huevo",
  "espinacas",
  "frijoles",
  "jabón",
  "té",
  "cafe",
  "peras",
  "espinacas",
  "chiles",
  "carbe de res",
  "papel",
  "sevrvilletas",
  "galletas",
  "aceite",
  "papel",
];

const quitarDuplicados = (lista) => {
  const listaLimpia = new Set(lista);
  return listaLimpia;
};

console.log(quitarDuplicados(listaProductos));
