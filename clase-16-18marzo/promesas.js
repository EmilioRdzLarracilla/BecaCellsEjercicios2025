console.log("promesas");

const baseUrl = "https://pokeapi.co/api/v2/pokemon";
const url = `${baseUrl}/1`;

const arregloPromesas = [
  fetch(`${baseUrl}/145`),
  fetch(`${baseUrl}/23`),
  fetch(`${baseUrl}/33`),
  fetch(`${baseUrl}/41`),
  fetch(`${baseUrl}/52`),
  fetch(`${baseUrl}/67`),
];
/* creando una promesa */

/*  */
/* const promesaExito = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done");
  }, 5000);
});

promesaExito.then(() => {
  console.log(alert("hecho"));
}); */

/* si solo nos importa los errores */
/* const promesaError = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("ha ocurrido algo en la ejecución"));
  }, 1000);
}); */

/* promesaError
  .finally(() => console.log("se ejecuta sin importar lo que pase"))
  .catch((err) => console.log(err)); */

/* La idea de finally es definir un manejador para realizar tareas de limpieza y
 finalización una vez que la operacióm haya concluido. */

/* Event-driven programming (EDP) es un
 paradigma de programación que se basa en que los
  eventos externos determinan la ejecución de un programa. 
  Esto se logra mediante la programación de acciones en respuesta a eventos, 
  como clics de ratón, pulsaciones de teclas, o mensajes de otros programas.  */

/* promises  colt steel course es6 2015*/
/* promise proporciona then y catch los cuales aceptan callbacks */
/* la callback en then se ejecutará si la promesa se resolvió , y tiene acceso al valor 
de la promesa cuando se resuelva */

/* fetch(`${baseUrl}/1`)
  .then((res1) => {
    console.log("response 1 ", res1);
    fetch(`${baseUrl}/2`)
      .then((res2) => {
        console.log("response 2", res2);
        fetch(`${baseUrl}/3`)
          .then((res3) => {
            console.log("response 3", res3);
            fetch(`${baseUrl}/4`)
              .then((res4) => {
                console.log("response 4", res4);
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err)); */

/* solo necesitamos un catch para todas las peticiones en cadena  */
/* fetch(`${baseUrl}/1`)
  .then((res1) => {
    console.log("response 1 ", res1);
    fetch(`${baseUrl}/2`).then((res2) => {
      console.log("response 2", res2);
      fetch(`${baseUrl}/3`).then((res3) => {
        console.log("response 3", res3);
        fetch(`${baseUrl}/4`).then((res4) => {
          console.log("response 4", res4);
        });
      });
    });
  })
  .catch((err) => console.log(err)); */

/* una mejor forma de hacer peticiones en cadena */

/* fetch(`${baseUrl}/1`)
  .then((res1) => {
    console.log("response 1", res1);
    return fetch(`${baseUrl}/2`);
  })
  .then((res2) => {
    console.log("response 2", res2);
    return fetch(`${baseUrl}/3`);
  })
  .then((res3) => {
    console.log("response 3", res3);
    return fetch(`${baseUrl}/4`);
  })
  .then((res4) => console.log("response 4", res4))
  .catch((err) => console.log(err)); */

/* const objetoYung = {
  uno: 1,
  dos: 2,
  tres: 3,
  cuatro: 4,
};

const { uno, dos, ...rest } = objetoYung;

console.log(rest); */

/* async await son palabras reservadas para trabajar con promesas , podemos hacer cualquier funcion asíncrona */
/* await pausa la ejecucion  ,espera a que se resuelva la promesa y evalua el valor resuelto, despues continua con la ejecucion
hay que pensar que await es un boton de pausa */
/* async function requestPoke(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const stats = await data.stats;
    console.log(stats);
  } catch (error) {
    console.log(error);
  }
}

requestPoke(url); */

/* podemos hacer una secuencia de peticiones mediante async y await con un codigo mas legible 
como en una peticion fetch con ayuda de then y catch tambien solo tenemos un catch para todas las peticiones*/

/* async function fakeRequest() {
  try {
    const res1 = await fetch(`${baseUrl}/1`);
    console.log(res1);

    const res2 = await fetch(`${baseUrl}/2`);
    console.log(res1);

    const res3 = await fetch(`http://nope.nope`);
    console.log(res1);

    const res4 = await fetch(`${baseUrl}/4`);
    console.log(res1);
  } catch (error) {
    console.log(error);
  }
}

fakeRequest(); */

/* al comparar los diferentes mecanismos then catch y async/await tenemos que

-tras bambalinas hacen exactamente lo mismo
-async/await es la forma moderna de trabajar con promesas*/

/* cuando hacemos peticiones en paralelo, notamos que no importa la secuencia en el codigo , las peticiones se mostraran
de acuerdo a el tiempo de respuesta por ejemplo  */

/* const resultados = [];

fetch(`${baseUrl}/1`).then((res1) => {
  console.log("request 1 finished");
  resultados.push(res1);
});

fetch(`${baseUrl}/2`).then((res2) => {
  console.log("request 2 finished");
  resultados.push(res2);
});
fetch(`${baseUrl}/3`).then((res3) => {
  console.log("request 3 finished");
  resultados.push(res3);
});
fetch(`${baseUrl}/4`).then((res4) => {
  console.log("request 4 finished");
  resultados.push(res4);
});
 */

/* podemos hacer el patron secuencial o en cadena de peticiones por medio de async /await que es  mas legible que 
hacerlo con then y catch */
/* siempre se ejecutarán de manera secuencial  */
/* const getPokemons = async () => {
  let request = [];
  const res1 = await fetch(`${baseUrl}/1`);
  console.log("request 1 done");
  const res2 = await fetch(`${baseUrl}/2`);
  console.log("request 2 done");
  const res3 = await fetch(`${baseUrl}/3`);
  console.log("request 3 done");

  request = [res1, res2, res3];
}; 

getPokemons();
*/

/* Promise.all() */
/* acepta un arreglo de promesas y retorna una nueva promesa

la nueva promesa se resolverá cuando cada una de las promesas del arreglo hayan sido resueltas
y sera rejected si al menos una de las promesas es rechazada */

// Promise.all(arregloPromesas)
//   .then((result) => {
//     console.log("promesas realizadas con exito");
//     result.forEach((element) => {});
//   })
//   .catch((error) => {
//     console.log("one of the promises falied");
//     console.log(error);
//   });

/* lo podemos hacer tambien mediante async y await */

/* const getPokemonsAll = async () => {
  try {
    const getAll = await Promise.all(arregloPromesas);
    console.log(getAll);
    console.log("todas las promesas realizadas con exito");
  } catch (error) {
    console.log(error);
  }
};

getPokemonsAll(); */

/* promise.IsSetled()  acepta un arreglo de promesas y retorna una
e utiliza para esperar a que todas las promesas proporcionadas se hayan
resuelto o rechazado, y luego devuelve una promesa que se resuelve con un arreglo
 de objetos que describen el resultado de cada promesa*/

/* haciendo la petición con allSetled */
/* 
const peticionesAllSetled = async () => {
  let pokemon1 = fetch(`${baseUrl}/1`),
    pokemon2 = fetch(`http://noe.noe.com`), // fallará
    jsonPlaceUser = fetch("https://jsonplaceholder.typicode.com/users/1"),
    jsonPlaceUser2 = fetch("https://placeholder.typicode.com/users/3"), // fallará
    pokemon3 = fetch(`${baseUrl}/2`);
  let respuesta = await Promise.allSettled([
    pokemon1,
    pokemon2,
    jsonPlaceUser,
    jsonPlaceUser2,
    pokemon3,
  ]);
  console.log(respuesta);

  // filtrando las respuestas

  const resueltas = respuesta.filter((res) => res.status === "fulfilled");
  console.log(resueltas);

  const rechazadas = respuesta.filter((res) => res.status === "rejected");
  console.log(rechazadas);
};
 */

// PROMISE.RACE()

//acepta un arreglo de promesas y retorna una nueva promesa

// Promise.race(arregloPromesas)
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));

/* un ejemplo con funciones asincronas */

// const racepeticion = async () => {
//   try {
//     const raceRes = await Promise.race(arregloPromesas);
//     console.log(raceRes);
//   } catch (error) {
//     console.log(error);
//   }
// };

/* ejercicio de metodo propio */

Promise.myOwnAll = function (promisesArray) {
  return new Promise((resolve, reject) => {
    const resolvedPromises = [];
    let results = 0;
    for (let i = 0; i < promisesArray.length; i++) {
      Promise.resolve(promisesArray[i])
        .then((response) => {
          resolvedPromises[i] = response;
          results++;

          if (results === promisesArray.length) {
            resolve(resolvedPromises);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};

/* Promise.myOwnAll();
 */

Promise.myOwnAll(arregloPromesas).then((res) => console.log(res, "hello"));
