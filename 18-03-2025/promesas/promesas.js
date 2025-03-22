
const callback = (resolve, reject) => {
let exito = true;
setTimeout(() =>{
    if(exito === true){
        resolve('la neta si paso');

    }else{
        reject('tss traes muy mala vibra Krnal')
    }
},2000);///simulacion de algo asincrono
};      ///se tardo en contestar el servicio
        ///se tardo en renderizar el DOM

const promise = new Promise(callback); // controlar acciones asincronas
console.log(promise);
promise
.then((result) => {///cachamos con then y catch
    console.log(result);
    console.log(promise);
})
.catch(error => { 
console.log(error);
})

const obtenerInforPokemon = () =>{
  const url= 'https://pokeapi.co/api/v2/pokemon/ditto';
  fetch(url)
  .then((response) => {
     console.log(response);
     return response.json();
  })
  .then(data =>{
    console.log('aqui obtuve informacion de ditt');
  })
  .catch(error=> {
    console.log(error);
  })
}
obtenerInforPokemon();

/**
 * Promise.race()
 * Promise.all()
 * Promise.allSettled()
 */

const iterable = [Promise.resolve('EXITO 1'), Promise.resolve('exito 2'),Promise.resolve('Ecito 2')];
Promise.all(iterable)
.then(()=>{
  console.log('se ha resuelto cada promesa');
});

function promiseAll(iterable){
  const promiseall = new Promise();

  iterable.forEach((promiseall) =>
  {
   promise.then((result)=>{
    flag = true;
   }) 
   .catch(()=>{
    flag=false;
   });
  });
  if(flag){
    promiseall.resolve()
  }else{
    promiseall.reject()
  }
}
promiseAll();