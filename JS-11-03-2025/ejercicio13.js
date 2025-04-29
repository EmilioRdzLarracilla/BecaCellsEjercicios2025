//gestion de citas medicas
let citas =[ 
    {fecha: "2025-03-05", paciente: "juan", doctor: "doc perez"},
    {fecha: "2025-03-14", paciente: "alberto", doctor: "doc perez"},
    {fecha: "2025-03-16", paciente: "josefina", doctor: "doc sanchez"},
    {fecha: "2025-03-14", paciente: "pedro", doctor: "doc perez"},
    {fecha: "2025-03-18", paciente: "aaron", doctor: "doc ramirez"}
];

let diaActual = new Date("2025-03.12");
function citasFuturas() {
    for (let s = 0; s < citas.length; s++) {
        let citaFecha = new Date(citas[s].fecha);

        if(citaFecha > diaActual) {
            console.log(`cita: ${citas[s].fecha} - paciente: ${citas[s].paciente} - doc: ${citas[s].doctor}`);
        }
    }
}

citasFuturas();