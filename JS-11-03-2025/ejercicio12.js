//lista de estudiantes y promedios
let estudiantes = [
    {nombre: "juan", notas: [7,6,8,9,6]},
    {nombre: "roberto", notas: [7,6,8,9,6]},
    {nombre: "pedro", notas: [7,6,8,9,6]},
    {nombre: "jose", notas: [7,6,8,9,6]},
    {nombre: "alfonso", notas: [7,6,8,9,6]},
    {nombre: "isaac", notas: [6,7,6,8,7]},
];

for ( let s = 0;s < estudiantes.length; s++) {
    let suma = 0;

    for (let a = 0; a < estudiantes[s].notas.length; a++) {
        suma += estudiantes[s].notas[a];
    }
    let promedio = suma / estudiantes[s].notas.length;
    let status;

    if (promedio >= 6) { 
        status = "aprobado";
    } else { 
        status = "Reprobado";
    }

    console.log(`${estudiantes[s].nombre} - promedio: ${promedio.toFixed(2)} - ${status}`);
}