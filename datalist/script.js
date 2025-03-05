document.querySelector("#busqueda").addEventListener("click", function() {
    var buscar = document.querySelector("#buscar").value;

    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(buscar)}`;
    
});