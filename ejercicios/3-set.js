const usuariosEnSesion = new Set (['Carlos', 'Ana', 'Luis', 'Marta', 'Pedro']);

const verificarSesion = (usuario) => {
    return usuariosEnSesion.has(usuario);
};

console.log('¿Carlos ha inciado sesion?', verificarSesion('Carlos'));
console.log('¿Maria ha iniciado sesion', verificarSesion('Maria'));