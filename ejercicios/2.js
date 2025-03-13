const estudiantes = [
    { nombre: 'Juan', notas: [7, 8, 9] },
    { nombre: 'Ana', notas: [5, 6, 7] },
    { nombre: 'Luis', notas: [4, 5, 5] },
    { nombre: 'Maria', notas: [9, 9, 10] },
    { nombre: 'Carlos', notas: [6, 7, 6]},
];

const calcularPromedio = (notas) => {
    const suma = notas.reduce((total, nota) => total + nota, 0);
    return suma / notas.length;
};

estudiantes.forEach(estudiante => {
    const promedio = calcularPromedio(estudiante.notas);
    const estado = promedio >= 6 ? 'Aprobado' : 'Reprobado';

    console.log("Nombre: " + estudiante.nombre + ", Promedio: " + promedio.toFixed(2) + ", Estado: " + estado);
});