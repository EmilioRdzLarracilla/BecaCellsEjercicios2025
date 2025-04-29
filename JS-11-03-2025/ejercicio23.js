//lista de invitados unicos en un evento
let invitados = new Set();

function registro(nombre) {
    if ( invitados.has(nombre)) {
        console.log(`${nombre} ya esta registrado`);
    } else {
        invitados.add(nombre);
        console.log(`${nombre} se registro con exito`);
    }
}

registro("persona1");
registro("persona2");
registro("persona1");
registro("persona2");

console.log("invitados:",[...invitados]);