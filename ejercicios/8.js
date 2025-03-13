const usuarios = [
    { nombre: 'Carlos', rol: 'Admin' },
    { nombre: 'Ana', rol: 'Usuario' },
    { nombre: 'Luis', rol: 'Admin' },
    { nombre: 'Marta', rol: 'Usuario' },
    { nombre: 'Pedro', rol: 'Admin' },
];

const adminsitradores = () => {
    return usuarios.filter(usuario => usuario.rol === 'Admin');
};

console.log(adminsitradores());