/* Dado un arreglo de ventas con nombre de plato y monto,
 calcula el total vendido. */

const ventas = [
  { nombre: "Tacos al pastor", montoPagado: 80 },
  { nombre: "Enchiladas verdes", montoPagado: 120 },
  { nombre: "Pozole", montoPagado: 150 },
  { nombre: "Chiles en nogada", montoPagado: 200 },
  { nombre: "Guacamole con totopos", montoPagado: 90 },
  { nombre: "Cochinita pibil", montoPagado: 180 },
  { nombre: "Mole poblano", montoPagado: 160 },
  { nombre: "Tostadas de tinga", montoPagado: 70 },
  { nombre: "Sopa de tortilla", montoPagado: 100 },
  { nombre: "Tamales", montoPagado: 60 },
  { nombre: "Quesadillas", montoPagado: 50 },
  { nombre: "Carnitas", montoPagado: 170 },
  { nombre: "Pescado a la Veracruzana", montoPagado: 220 },
  { nombre: "Flautas de pollo", montoPagado: 95 },
];

const montoTotal = (ventas) => {
  let totalGanado = "el monto total ganado es de : $ ";
  return (
    (totalGanado += ventas.reduce(
      (acc, platillo) => acc + platillo.montoPagado,
      0
    )) + " pesos"
  );
};

console.log(montoTotal(ventas));
