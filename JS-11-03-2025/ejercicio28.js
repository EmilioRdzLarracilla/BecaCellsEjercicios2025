//registro de votos en una eleccion (map)
let votos = ["persona1", "persona2", "persona3", "persona1", "persona4", "persona3"];

function contar(lista){
    let conteo = new Map();

    for(let s = 0; s < lista.length; s++){
        let candidato = lista[s];

        if (conteo.has(candidato)){
            conteo.set(candidato, conteo.get(candidato) + 1);
        }else {
            conteo.set(candidato, 1);
        }
    }   
    return conteo;
}

let totalVotos = contar(votos);
console.log("los rsultados de la votacion son: ");
for (let[candidato, cantidad] of totalVotos){
    console.log(`${candidato}: ${cantidad} votos`);
}