//agenda telefonica con busqueda rapida (map)

let agenda = new Map();

agenda.set("persona1", "567-987-638");
agenda.set("persona2", "567-987-665");
agenda.set("persona3", "567-987-456");
agenda.set("persona4", "567-987-665");
agenda.set("persona5", "567-987-623");
agenda.set("persona6", "567-987-631");
agenda.set("persona7", "567-987-123");
agenda.set("persona8", "567-987-645");

function buscar(nombre) {
    if(agenda.has(nombre)){
        return `el numero de ${nombre} es ${agenda.get(nombre)}`;
    } else {
        return `el contacto ${nombre} no esta en la agenda`;
        }
}

console.log(buscar("persona3"));
console.log(buscar("persona5"));
console.log(buscar("persona9"));

