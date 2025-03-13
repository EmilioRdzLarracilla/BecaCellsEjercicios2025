const invitados = new Set();

const registrarInvitado = (nombre) => {
    if (invitados.has(nombre)) {
        console.log(nombre + ' Ya esta registrado');
    } else {
        invitados.add(nombre);
        console.log(nombre + ' Ha sido registrado exitosamente');
    }
};

registrarInvitado('Carlos');
registrarInvitado('Ana');
registrarInvitado('Carlos');
registrarInvitado('Luis');

console.log('Lista de invitados: ', [...invitados]);