/* Crea una agenda telefónica donde puedas buscar el número de una persona por su nombre.
 */

const contactos = new Map([
  ["Ana García", 5512345678],
  ["Juan Pérez", 5598765432],
  ["María López", 5611223344],
  ["Pedro Rodríguez", 5699887766],
  ["Laura Martínez", 5712349876],
  ["Carlos Sánchez", 5798761234],
  ["Sofía Ramírez", 5811229988],
  ["Diego Torres", 5899881122],
  ["Isabel Castro", 5912341234],
  ["Mateo Díaz", 5998769876],
]);

const obtenerNumero = (agenda, nombre) => {
  if (!agenda || !nombre) {
    return console.log("inserte la agenda de contactos");
  }

  if (agenda.has(nombre)) {
    return console.log(agenda.get(nombre));
  } else {
    return console.log("no existe el contacto buscado");
  }
};

obtenerNumero(contactos, "Ana García");
obtenerNumero(contactos, "Diego Torres");
