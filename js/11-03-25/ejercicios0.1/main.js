/*1.- Crea un arreglo de objetos donde cada objeto represente un producto con nombre, 
precio y stock. Luego, muestra en consola los productos con stock disponible
*/

let producto =[
{nombre:"leche", precio:35, stock:5},
{nombre:"refresco", precio:25, stock:1},
{nombre:"nutella", precio:50, stock:0},
{nombre:"cereal", precio:100, stock:50},
{nombre:"papas", precio:35, stock:10},
{nombre:"papas", precio:35, stock:10},
{nombre:"arroz", precio:25, stock:0}
];

for(let i=0; i< producto.length; i++){
    if(producto[i].stock > 0){
        console.log(producto[i]);
    }
}


/*2.-Lista de Estudiantes y Promedios Dado un arreglo de estudiantes con sus notas,
 calcula su promedio y determina si aprobaron (nota mínima 6).
*/

// let Alumnos = [
// {nombre:"Lorena", edad:41, salon:"A16", calificacion:9},
// {nombre:"Alejandra", edad:41, salon:"A24", calificacion:8},
// {nombre:"Juanita", edad:20, salon:"A36", calificacion:10},
// {nombre:"Brenda", edad:30, salon:"A48", calificacion:8.5},
// {nombre:"Juan", edad:25, salon:"A32", calificacion:5}
// ];

// for(let i=0; i<Alumnos.length; i++){
//     if(Alumnos[i].calificacion > 6){
//         console.log("Calificacion Aprobatoria", Alumnos[i]);
//     }else{
//         console.log("Reprobado", Alumnos[i]);
//     }
// }


/*3.-Gestión de Citas Médicas Crea un sistema que registre citas médicas con fecha,
 paciente y doctor. Luego, muestra las citas futuras.*/


/*4.- Filtrar Películas por Género Crea una lista de películas con título y género. 
Filtra solo las de acción.
*/

// let peliculas =[
// {nomPelicula:"intensamente", genero:"infantil"},
// {nomPelicula:"Mision imposible", genero:"Accion"},
// {nomPelicula:"La monja", genero:"terror"},
// {nomPelicula:"yo robot", genero:"ciencia ficcion"},
// {nomPelicula:"Terminator", genero:"Accion"},
// {nomPelicula:"Liga de la justicia", genero:"Accion"},
// {nomPelicula:"Diario de una pasion", genero:"romantica"},
// {nomPelicula:"star wars", genero:"ciencia ficcion"},
// {nomPelicula:"Los Indestructibles", genero:"Accion"}
// ];


// let accion = peliculas.filter(pelicula => pelicula.genero === "Accion");

// console.log(accion);

/*5.- Sistema de Biblioteca
Crea un sistema que registre libros con título, autor y estado
 (prestado o disponible). Luego, muestra solo los libros disponibles.
*/

/*6.- Registro de Empleados y Sueldos
Dado un listado de empleados con su sueldo, 
calcula el sueldo total que debe pagar la empresa.
*/

/*7.-Tienda en Línea - Buscar Productos por Nombre
Crea una función que permita buscar un producto por su
 nombre en un catálogo.
 */

 /* 8.- Gestión de Usuarios en una Plataforma
Dado un listado de usuarios con nombre y rol (admin o usuario), 
filtra solo los administradores.
  */


/*9.- Análisis de Ventas en un Restaurante
Dado un arreglo de ventas con nombre de plato y monto,
 calcula el total vendido.
 */


 /*10.- Registro de Asistencia en una Clase
Crea un sistema que registre alumnos y su asistencia (presente o ausente).
 Luego, muestra cuántos asistieron.
 */



//  --------------------------------------------------------



/*
1 Eliminar Duplicados en una Lista de Productos (Set)
Dada una lista de productos donde algunos están repetidos, usa Set para eliminar duplicados
*/

// let productosUnicos = Array.from(
//   new Map(producto.map(p => [p.nombre + p.precio, p])).values()
// );

// console.log(productosUnicos);

// 2 Contar Palabras Únicas en un Texto (Set)
// Dado un párrafo, cuenta cuántas palabras únicas tiene.

// function contarPalabrasUnicas(texto) {
//   let palabras = texto.toLowerCase().replace(/[.,!?]/g, "").split(" ");
//   let palabrasUnicas = new Set(palabras);
//   return palabrasUnicas.size;
// }

// let parrafo = "Hola mundo, hola programación.";
// console.log("Palabras únicas:", contarPalabrasUnicas(parrafo));


// 3 Verificar si un Usuario ya ha Iniciado Sesión (Set)
// Dado un conjunto de usuarios en sesión, verifica si uno en específico ya inició sesión

// Conjunto de usuarios en sesión
let usuariosEnSesion = new Set(["juan123", "maria456", "pedro789", "ana2024"]);

function verificarSesion(usuario) {
    return usuariosEnSesion.has(usuario) 
        ? ` El usuario "${usuario}" ya ha iniciado sesión.` 
        : `El usuario "${usuario}" no ha iniciado sesión.`;
}

console.log(verificarSesion("maria456")); 
console.log(verificarSesion("carlos999")); 


// 4 Lista de Invitados Únicos en un Evento (Set)
// Asegura que cada invitado solo pueda registrarse una vez en la lista.

// Lista para guardar los invitados sin repetir
// let listaInvitados = new Set();

// function agregarInvitado(nombre) {
//     if (!listaInvitados.has(nombre)) {
//         listaInvitados.add(nombre);
//         console.log(`"${nombre}" ha sido agregado.`);
//     } else {
//         console.log(`"${nombre}" ya está en la lista.`);
//     }
// }

// agregarInvitado("Juan");
// agregarInvitado("María");
// agregarInvitado("Juan"); 
// agregarInvitado("Pedro");

// console.log("Lista de invitados:", [...listaInvitados]);


// 5 Registro de Placas de Autos en un Estacionamiento (Set)
// Solo se pueden registrar autos únicos.
// Registro de placas sin repetir
// let placasEstacionamiento = new Set();

// function registrarPlaca(placa) {
//     let mensaje = placasEstacionamiento.has(placa) 
//         ? ` La placa "${placa}" ya está registrada.` 
//         : `Placa "${placa}" registrada con éxito.`;
    
//     placasEstacionamiento.add(placa);
//     console.log(mensaje);
// }


// registrarPlaca("ABC-123");
// registrarPlaca("XYZ-789");
// registrarPlaca("ABC-123"); 
// registrarPlaca("LMN-456");

// console.log("Placas registradas:", [...placasEstacionamiento]);


// 6 Contar la Frecuencia de Palabras en un Texto (Map)
// Cuenta cuántas veces aparece cada palabra en un texto.

// function contarPalabras(texto) {
//   let palabras = texto.toLowerCase().split(/\s+/);
//   let frecuencia = new Map();

//   palabras.forEach(palabra => 
//       frecuencia.set(palabra, (frecuencia.get(palabra) || 0) + 1)
//   );

//   return frecuencia;
// }


// let texto = "Hola mundo hola mundo hola hola";
// console.log(contarPalabras(texto));


// 7 Almacenar Precios de Productos (Map)
// Usa un Map para almacenar los precios de productos y consultar por nombre.
// Mapa para almacenar los precios de los productos
// let preciosProductos = new Map([
//   ["Leche", 35],
//   ["Refresco", 25],
//   ["Nutella", 50],
//   ["Cereal", 100],
//   ["Papas", 35],
//   ["Arroz", 25]
// ]);


// function obtenerPrecio(producto) {
//   return preciosProductos.get(producto) || "no encontrado";
// }


// console.log(obtenerPrecio("Leche"));
// console.log(obtenerPrecio("Nutella")); 
// console.log(obtenerPrecio("Pan")); 


// 8 Agenda Telefónica con Búsqueda Rápida (Map)
// Crea una agenda telefónica donde puedas buscar el número de una persona por su nombre.
// Mapa para almacenar la agenda telefónica
// let agendaTelefonica = new Map([
//   ["Juan", "555-1234"],
//   ["Maria", "555-5678"],
//   ["Carlos", "555-9876"],
//   ["Ana", "555-4321"]
// ]);

// function buscarNumero(nombre) {
//   return agendaTelefonica.get(nombre) || "Número no encontrado";
// }

// console.log(buscarNumero("Maria"));  
// console.log(buscarNumero("Pedro")); 
// console.log(buscarNumero("Carlos")); 


// 9 Registro de Votos en una Elección (Map)
// Dado un conjunto de votos, cuenta cuántos votos tiene cada candidato.
// function contarVotos(votos) {
//   let resultado = new Map();

//   votos.forEach(candidato => 
//       resultado.set(candidato, (resultado.get(candidato) || 0) + 1)
//   );

//   return resultado;
// }

// let votos = ["Juan", "Maria", "Juan", "Carlos", "Maria", "Juan", "Carlos", "Carlos"];
// console.log(contarVotos(votos));


// 10 Historial de Compras de un Cliente (Map)
// Registra el historial de compras de un cliente, donde cada cliente tiene una lista de productos comprados.
// Mapa para almacenar el historial de compras
// let historialCompras = new Map();
// function registrarCompra(cliente, producto) {
//     historialCompras.set(cliente, [(historialCompras.get(cliente) || []), producto]);
// }

// registrarCompra("Juan", "Laptop");
// registrarCompra("Maria", "Teléfono");
// registrarCompra("Juan", "Mouse");
// registrarCompra("Carlos", "Teclado");
// registrarCompra("Maria", "Tablet");

// console.log(historialCompras);
