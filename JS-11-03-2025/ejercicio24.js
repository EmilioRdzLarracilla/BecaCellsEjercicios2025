//registro de placas de autos en un estacionamiento

let autos = new Set();

function registrados(placa) {
    if(autos.has(placa)) {
        console.log(`el auto ocn la placa "${placa}" ya esta regiistrado`);
    }  else {
        autos.add(placa);
        console.log(`el auto con la placa ${placa} se registro con exito`);
    }
}

registrados("abh-287");
registrados("gsh-439");
registrados("ghd-123");
registrados("abh-287");
registrados("ghd-123");