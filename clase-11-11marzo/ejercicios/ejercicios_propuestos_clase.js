console.log("ejercicios propuestos en clase");

/* ejercicio 1 palindromo */

function palindromo(frase) {
  let normal = frase.toLowerCase().replace(" ", "");
  let reverse = frase
    .toLowerCase()
    .replace(" ", "")
    .split("")
    .reverse()
    .join("");

  if (normal === reverse) {
    console.log("palindromo");
  }
}

palindromo("luz azul");

/* factorial de un numero */

function factorial(numero) {
  let count = 1;
  let factorial = 1;
  while (count <= numero) {
    factorial *= count;
    count++;
  }

  return factorial;
}

console.log(factorial(5));
/* EJERCICIO 3 */

function fibonacci(numero) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= numero; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fibonacci(5));

/* ejericio 4 arreglo de menor a mayor sin sort */

function ordenarMenorMayor(arreglo) {
  const orden = [];

  for (let i = arreglo.length - 1; i >= 0; --i) {
    orden.push(arreglo[i]);
  }

  console.log(orden);
}

ordenarMenorMayor([9, 8, 7, 6, 5, 4, 3, 2, 1]);

/* ejercicio 5 numero de caracteres en una cadena de texto */

function nDeCaracteres(texto) {
  let limpio = texto.replaceAll(" ", "");

  let longitud = 0;
  for (let i = 0; i < limpio.length; i++) {
    longitud++;
  }

  console.log(`numero de caracteres : ${longitud}`);
}

nDeCaracteres("la mejor de todas");
/* ejercicio 6  */

function nFaltante(arreglo) {
  let anterior = arreglo[0];
  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] - anterior === 1) {
      anterior = arreglo[i];
    } else {
      console.log();

      break;
    }
  }
}

nFaltante([1, 2, 3, 5]);

/* ejercicios de tarea para mañana  miercoles */

/* 

1️⃣Crea un arreglo de objetos donde cada objeto represente un producto con nombre, 
precio y stock. Luego, muestra en consola los productos con stock disponible


2️⃣ Lista de Estudiantes y Promedios
Dado un arreglo de estudiantes con sus notas, calcula su promedio
 y determina si aprobaron (nota mínima 6).
 

 3️⃣ Gestión de Citas Médicas
Crea un sistema que registre citas médicas con fecha, 
paciente y doctor. Luego, muestra las citas futuras.


4️⃣ Filtrar Películas por Género
Crea una lista de películas con título
 y género. Filtra solo las de acción.

 5️⃣ Sistema de Biblioteca
Crea un sistema que registre libros con título, autor y estado
 (prestado o disponible). Luego, muestra solo los libros disponibles.
 
 6️⃣ Registro de Empleados y Sueldos
Dado un listado de empleados con su sueldo, 
calcula el sueldo total que debe pagar la empresa.

7️⃣ Tienda en Línea - Buscar Productos por Nombre
Crea una función que permita buscar un producto por su
 nombre en un catálogo.

 8️⃣ Gestión de Usuarios en una Plataforma
Dado un listado de usuarios con nombre y rol (admin o usuario), 
filtra solo los administradores.

9️⃣ Análisis de Ventas en un Restaurante
Dado un arreglo de ventas con nombre de plato y monto,
 calcula el total vendido.

 🔟 Registro de Asistencia en una Clase
Crea un sistema que registre alumnos y su asistencia (presente o ausente).
 Luego, muestra cuántos asistieron.
 */

/* ejercicios de set y map
 

 
 1️⃣ Eliminar Duplicados en una Lista de Productos (Set)
Dada una lista de productos donde algunos están repetidos, usa Set para eliminar duplicados.
2️⃣ Contar Palabras Únicas en un Texto (Set)
Dado un párrafo, cuenta cuántas palabras únicas tiene.
3️⃣ Verificar si un Usuario ya ha Iniciado Sesión (Set)
Dado un conjunto de usuarios en sesión, verifica si uno en específico ya inició sesión.
4️⃣ Lista de Invitados Únicos en un Evento (Set)
Asegura que cada invitado solo pueda registrarse una vez en la lista.
5️⃣ Registro de Placas de Autos en un Estacionamiento (Set)
Solo se pueden registrar autos únicos.
6️⃣ Contar la Frecuencia de Palabras en un Texto (Map)
Cuenta cuántas veces aparece cada palabra en un texto.
7️⃣ Almacenar Precios de Productos (Map)
Usa un Map para almacenar los precios de productos y consultar por nombre.
8️⃣ Agenda Telefónica con Búsqueda Rápida (Map)
Crea una agenda telefónica donde puedas buscar el número de una persona por su nombre.
9️⃣ Registro de Votos en una Elección (Map)
Dado un conjunto de votos, cuenta cuántos votos tiene cada candidato.
🔟 Historial de Compras de un Cliente (Map)
Registra el historial de compras de un cliente, donde cada cliente tiene una lista de productos comprados
 */
