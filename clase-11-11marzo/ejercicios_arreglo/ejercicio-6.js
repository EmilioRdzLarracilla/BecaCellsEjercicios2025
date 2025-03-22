/* Dado un listado de empleados con su sueldo, 
calcula el sueldo total que debe pagar la empresa. */

const empleados = [
  {
    id: 1,
    nombre: "Emilio Rodriguez Larracilla",
    sueldo: 8000,
  },
  {
    id: 2,
    nombre: "Matias Alustiza",
    sueldo: 13500,
  },
  {
    id: 3,
    nombre: "Jorge Solano Peña",
    sueldo: 9000,
  },
  {
    id: 4,
    nombre: "José Emmanuel García Valverde",
    sueldo: 22000,
  },
  {
    id: 5,
    nombre: "Sonia Almería Rodriguez",
    sueldo: 13000,
  },
  {
    id: 6,
    nombre: "Hugo Tellez Moctezuma",
    sueldo: 50000,
  },
];

const pagoTotal = (empleados) => {
  let pagoTotal = "la cantidad total a pagar es de  : $";
  return (
    (pagoTotal += empleados.reduce(
      (acc, empleado) => acc + empleado.sueldo,
      0
    )) + " pesos"
  );
};

console.log(pagoTotal(empleados));
