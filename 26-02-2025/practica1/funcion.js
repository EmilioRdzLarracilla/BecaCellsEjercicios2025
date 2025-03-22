fetch('https://rickandmortyapi.com/')
.then(response =>
{
return response.json();
})
.then(data =>
{
console.log(data);
})
.catch(error=>{
    
});

