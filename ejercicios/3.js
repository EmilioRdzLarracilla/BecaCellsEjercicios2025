const citas = [
    { paciente: 'Juan Perez', doctor: 'Dr. Rodriguez', fecha: '10-03-2025' },
    { paciente: 'Ana Gomez', doctor: 'Dra. Lopez', fecha: '15-03-2025' },
    { paciente: 'Carlos Sanchez', doctor: 'Dr. Martinez', fecha: '20-03-2025' },
    { paciente: 'Laura Torres', doctor: 'Dra. Fernandez', fecha: '05-03-2025' },
];

const citasFuturas = () => {
    const hoy = new Date();
    return citas.filter(cita => new Date(cita.fecha) > hoy);
};  

console.log('Citas Futuras: ');
citasFuturas().forEach(cita => {
    console.log('Paciente: ' + cita.paciente + ', Doctor: ' + cita.doctor + ', Fecha: ' + cita.fecha); 
});