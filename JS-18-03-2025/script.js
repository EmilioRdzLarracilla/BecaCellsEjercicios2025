//Promise

const callback = (resolve, reject) => {
    let exito = true;
    window.setTimeout( () => {  //setTimeout esta en el objeto window
        if(exito === true) {
            resolve('si me amo toda la vida');
        } else { 
            reject('No se cumplio la promesa')
        }
    }, 5000);
};
// las callback son esa funcion que necesitan las promesas para ejecutarse
const promise = new Promise(callback) //controlar acciones asincronas 
console.log(promise);
promise
.then((result)  => {
    console.log(result);
    console.log(promise);
})

.catch(error => {
    console.log(error)
}) 


//ejemplo con pokeAPI
 
const obtenerInfoPokemon = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
    fetch(url)
    .then((response) => {
        console.log(response);
        return response.json(); // promise
    })
    .then(data => {
        console.log(`Aqui obtuve la informacion de Ditto ${data.sprites.front_default}`);
    })
    .catch((error) => {
        console.log(error);
    });
};


obtenerInfoPokemon();


// https://es.javascript.info/
//https://web.dev/learn/javascript
//https://lenguajejs.com/asincronia/promesas/que-son/
// https://www.youtube.com/watch?v=eiC58R16hb8&t=109s
// https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=405s


Promise.prototype.all = (promisesArray) => {
    let resultArray = [];
    for (let s = 0; s < promisesArray.length; s++) {
        promisesArray[s].then(() => {
            resultArray.push(true)
        })
    }
    return resultArray.includes(true);
}

Promise.all();


function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        let resultados = [];
        let completado = 0;

        if(promises.length === 0) {
            resolve();
        }


        promises.forEach((promise, index) => {
            Promise.resolve(promise)
            .then(value => {
                resultados[index] = value;
                completado++;

                if(completado === promises.length) {
                    resolve(results);
                }
            }) 
            .catch(error => reject(error));
        });
    });
}

const p1 =  Promise.resolve("Promesa 1 resuelta");
const p2 = new Promise(resolve => setTimeout(() => resolve("Promesa 2 resulta"), 3000));
const p3 = Promise.resolve("promesa 3 resuelta");

promiseAll([p1,p2,p3])
    .then(console.log)
    .catch(console.error)

const p4 = Promise.reject("promesa fallida");
promiseAll([p1,p2,p3])
.then(console.log)
.catch(console.error)


//Ejercicios