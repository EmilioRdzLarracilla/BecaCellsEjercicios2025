/*const task1 = () => console.log('tarea 1 comppletada');
const task2 = () => console.log('tarea 2 comppletada');
const task3 = () => console.log('tarea 3 comppletada');

task1();
task2();
task3();
*/
const task1 = (callback) => {
    console.log("Iniciando tarea 1...");
    setTimeout(() => {
      callback();
    }, 5000);
  }
  
  task1( () => console.log("Tarea 1 terminada en 3 segundos") );

///simulacion asincrona(callback Hell)

  const task = (name, time, callback) => {
    console.log(`Iniciando ${name}...`);
    setTimeout(() => {
      callback();
    }, time);
  }
  task( "tarea 1", 3000, () => {
    console.log("Tarea 1 completada.");
    task( "tarea 2", 2000, () => {
      console.log("Tarea 2 completada.");
      task( "tarea 3", 5000, () => {
        console.log("Tarea 3 completada.");
      });
    });
  });

/* Codigo Asincrono no bloqueante => permite ejecutar el resto del programa
                                     mientras  espera ser ejecutado.
   fetch("/robots.txt")
  .then(function() {
    // Código a realizar cuando se cumpla la promesa 
})
.catch(function() {
  // Código a realizar cuando se rechaza la promesa 
});
  
*/

/* .then() && .catch() anidados */
/**
 // 1) Gestiona los rechazos de cada then()

fetch("/data.json")
  .then(response => {         // Gestiona la primera promesa
    return response.json();   // Devuelve otra promesa
  })
  .catch(error => {           // Gestiona si ocurre un error en el then() anterior
    console.error("Ocurrió un error: ", error);
  })
  .then(data => {             // Gestiona la segunda promesa
    console.log(data);        // Devuelve el JSON como un objeto ya procesado
  })
  .catch(error => {           // Gestiona si ocurre un error en el then() anterior
    console.error("Ocurrió un error: ", error);
  });
 *
 */