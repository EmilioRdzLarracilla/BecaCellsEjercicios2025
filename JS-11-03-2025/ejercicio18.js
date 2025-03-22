//analisis de ventas en un restaurante

let ventas = [
    {plato: "alimento1", monto: 15},
    {plato: "alimento2", monto: 250},
    {plato: "alimento3", monto: 35},
    {plato: "alimento4", monto: 450},
    {plato: "alimento5", monto: 57},
    {plato: "alimento6", monto: 75},
    {plato: "alimento7", monto: 85},
    {plato: "alimento8", monto: 98},
    {plato: "alimento9", monto: 150}
];

function sumaVentas(ventas) {
    let total = 0;
    for (let s = 0; s < ventas.length; s++) {
        total += ventas[s].monto;
    }
    return total;
}

let Total = sumaVentas(ventas);
console.log(`Total vendido: ${Total}`);