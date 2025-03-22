//////////SET///////////
//SET ELIMINA DUPLICADOS
const productos = [
    "Laptop Asus",
    "Teclado mecánico",
    "Mouse inalámbrico",
    "Monitor 24 pulgadas",
    "Silla gamer",
    "Termo electronico",
    "Kit de limpieza multi usos",
    "Cable OTG" ,
    "Monitor 32 pulgadasr" ,
    "Mouse Inalambrico Logitech" ,
    "Monitor 24 pulgadas",
    "Silla gamer",
    "Termo electronico",
    "Monitor 32 pulgadas",
    "Silla gamer",
    "Termo electronico",
   
];
console.log([...new Set(productos)]);
const set = new Set(productos);
console.log(set);



////contar palabras unicas en un texto

let texto=prompt('ingresa una frase:');

function contarPalabrasUnicas(texto) {
    
    let palabras = texto.toLowerCase().replace(/[.,!?]/g, "").split(/\s+/);
    
    let palabrasUnicas = new Set(palabras);

    return palabrasUnicas.size;
}

console.log("Cantidad de palabras únicas en el texto es:", contarPalabrasUnicas(texto));

////Inicio de sesion de usuarios

const usuarios = [
    { nombre: "Axel", sesion: true },
    { nombre: "Carlos", sesion: false },
    { nombre: "Lorena", sesion: true },
    { nombre: "Manuel", sesion: true },
    { nombre: "Sofía", sesion: false },
    { nombre: "Karla", sesion: true },
    { nombre: "Mateo", sesion: false }
];

const usuarioSesion = new Set();
usuarios.forEach(usuario => {
    if (usuario.sesion) {
        usuarioSesion.add(usuario.nombre);
    }
});
console.log(usuarioSesion);

let usuarioBuscar = "Axel"; 

if (usuarioSesion.has(usuarioBuscar)) {
    console.log('El usuario:',usuarioBuscar,'ha iniciado sesión previamente');
} else {
    console.log('El usuario:',usuarioBuscar,'no ha iniciado sesión');
    
}


////Lista de invitados


const invitados = new Set([
    { nombre: "axel" },
    { nombre: "carlos" },
    { nombre: "lorena" },
    { nombre: "manuel" },
    { nombre: "sofía" },
    { nombre: "karla" },
    { nombre: "mateo" }
]);

const datos = prompt('Dime tu nombre: ').toUpperCase();

const nuevoInvitado = { nombre: datos };


let existe = false;

invitados.forEach(inv => {
    if (inv.nombre.toUpperCase() === datos) {
        existe = true;
    }
});

if (!existe) {
    invitados.add(nuevoInvitado);
    console.log(datos,'ha sido agregado a la lista de invitados');
} else {
    console.log(datos, 'ya está en la lista de invitados');
}

console.log(invitados);

////registro autos

const autos = new Set([
    { placa: "LZA210B" },
    { placa: "MAP200A" },
    { placa: "JAM891J" },
    { placa: "RAM982A" },
    { placa: "ZUC381B" },
    { placa: "LUB788B" },
    { placa: "CRO098A" },
]);

const data = prompt('ingrese un vehiculo: ').toUpperCase();

const nuevoAuto = { placa: data };


let exist = false;

autos.forEach(auto=> {
    if (auto.placa.toUpperCase() === data) {
        exist = true;
    }
});

if (!exist) {
    autos.add(nuevoAuto);
    console.log('El vehiculo con placa ',data, 'ha sido registrado exitosamente');
} else {
    console.log('El vehiculo con placa ',data, 'ya se encuentra registrado');
}

console.log(autos);







