//fultrar peliculas por filtro
let pelis = [
    {nombre: "peli1", genero: "accion"},
    {nombre: "peli2", genero: "terror"},
    {nombre: "peli3", genero: "accion"},
    {nombre: "peli4", genero: "drama"},
    {nombre: "peli5", genero: "accion"},
    {nombre: "peli6", genero: "accion"},
    {nombre: "peli7", genero: "terror"},
    {nombre: "peli8", genero: "animacion"},
    {nombre: "peli9", genero: "drama"},
    {nombre: "peli10", genero: "drama"}
];
function filtrarAccion(){
    for(let s = 0; s < pelis.length; s++) {
        if (pelis[s].genero === "accion") {
            console.log(`${pelis[s].nombre} - Genero: ${pelis[s].genero}`);
        }
    } 
}

filtrarAccion();
