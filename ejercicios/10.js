const alumnos = [
    { nombre: 'Carlos', asistencia: 'Presente' },
    { nombre: 'Ana', asistencia: 'Ausente' },
    { nombre: 'Luis', asistencia: 'Presente' },
    { nombre: 'Marta', asistencia: 'Presente' },
    { nombre: 'Pedro', asistencia: 'Ausente' },
];

const asistencias = () => {
    return alumnos.filter(alumno => alumno.asistencia === 'Presente').length;
};

console.log("Alumnos presentes: " + asistencias());