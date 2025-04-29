//registro de asistencias  en una clase
let alumnos = [
    { nombre: "persona1", asistencia: "presente" },
    { nombre: "persona2", asistencia: "ausente" },
    { nombre: "persona3", asistencia: "presente" },
    { nombre: "persona4", asistencia: "presente" },
    { nombre: "persona5", asistencia: "ausente" },
    { nombre: "persona6", asistencia: "presente" },
    { nombre: "persona7", asistencia: "presente" },
    { nombre: "persona8", asistencia: "ausente" },
    { nombre: "persona9", asistencia: "ausente" },
    { nombre: "persona10", asistencia: "ausente" }
];

function asistencias(lista){
    let presentes = 0;
    let ausentes = 0;

    for (let s = 0; s < lista.length; s++) {
        if( lista[s].asistencia === "presente") {
            presentes++;
        } else if (lista[s].asistencia === "ausente"){
            ausentes++;
        }
    }
    return {presentes, ausentes};
}

let asist = asistencias(alumnos);
console.log(`alumnos presentes: ${asist.presentes}`);
console.log(`alumnos ausentes: ${asist.ausentes}`);
