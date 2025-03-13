const ventas = [
    { plato: 'Tacos', monto: 150 },
    { plato: 'Pizza', monto: 200 },
    { plato: 'Hamburguesa', monto: 180 },
    { plato: 'Sushi', monto: 300 },
    { plato: 'Ensalada', monto: 120 },
];

const total = () => {
    return ventas.reduce((total, venta) => total + venta.monto, 0);
};

console.log('Total vendido: $' + total());