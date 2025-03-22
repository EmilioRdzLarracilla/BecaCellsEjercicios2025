function Auto(nombre, marca, motor,clase,npuertas ){
    let Auto ={

        nombre : nombre,
        marca: marca,
        motor: motor,
        clase: clase,
        npuertas: npuertas,

        mostrar(){
            console.log('El Auto es: ',Auto.marca, Auto.nombre);
        }
    };
    return Auto;
}

const focus = Auto('Focus', 'Ford','Gasolina','Privado',4);
focus.mostrar();

const chevy = Auto('Chevy Pop', 'Chevrolet','Gasolina','Privado',2);
chevy.mostrar();