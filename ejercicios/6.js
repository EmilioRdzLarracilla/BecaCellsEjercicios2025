const empleados = [
    { nombre: 'Carlos', sueldo: 2500},
    { nombre: 'Ana', sueldo: 3000 },
    { nombre: 'Luis', sueldo: 2800 },
    { nombre: 'Maria', sueldo: 3200 },
    { nombre: 'Pedro', sueldo: 2700 },
];

const sueldoTotal = () => {
    return empleados.reduce((total, empleado) => total + empleado.sueldo, 0);
};

console.log('El sueldo total a pagar es: $' + sueldoTotal());