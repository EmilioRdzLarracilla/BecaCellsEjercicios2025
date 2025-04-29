let usersInSession = new Set(["persona1", "persona2", "persona3", "persona4", "persona5"]);

function validar(user) {
    if(usersInSession.has(user)) {
        return `${user} ya esta en sesion`;
    } else {
        return `${user} no esta en sesion`;
    }
}
console.log(validar("persona1"));
console.log(validar("persona7"));