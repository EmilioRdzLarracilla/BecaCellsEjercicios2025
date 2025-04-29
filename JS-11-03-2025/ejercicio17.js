//gestion de usuarios en una plataforma
let usuarios = [
    {nombre: "persona1", rol: "admin"},
    {nombre: "persona2", rol: "admin"},
    {nombre: "persona3", rol: "usuario"},
    {nombre: "persona4", rol: "admin"},
    {nombre: "persona5", rol: "usuario"},
    {nombre: "persona6", rol: "admin"},
    {nombre: "persona7", rol: "usuario"},
    {nombre: "persona8", rol: "admin"},
    {nombre: "persona9", rol: "usuario"},
    {nombre: "persona10", rol: "admin"}
];

function administradores(lista) { 
    let admins = [];
    for ( let s = 0; s < lista.length; s++) {
        if ( lista[s].rol === "admin") {
            admins.push(lista[s]);
        }
    }
    return admins;
}

let filtrarAdmins = administradores(usuarios);
console.log(filtrarAdmins);