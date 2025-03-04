document.querySelector("#formulario").addEventListener("submit", function(event) {
    event.preventDefault(); //Evita que la pagina se recargue.

    // Obteniendo los valores del formulario
    var nombre = document.querySelector("#nombre").value;
    var precio = document.querySelector("#precio").value;
    var desscripcion = document.querySelector("#descripcion").value;
    var disponibilidad = document.querySelector("#disponibilidad").value;

    // Creando la nueva fila en la tabla
    var tabla = document.querySelector("#tabla").getElementsByTagName("tbody")[0];
    var filaNueva = tabla.insertRow(); // El metodo insertRow es para agregar una nueva fila en el HTML

    // Creando la celda con el nuevo dato. 
    filaNueva.insertCell(0).textContent = nombre;
    filaNueva.insertCell(1).textContent = "$" + precio;
    filaNueva.insertCell(2).textContent = desscripcion;

    var stock = filaNueva.insertCell(3);
    stock.textContent = disponibilidad === "disponible" ? "En Stock" : "Agotado";
    stock.classList.add(disponibilidad);

    var accion = filaNueva.insertCell(4);
    var boton = document.createElement("button");
    boton.textContent = "Cambiar color";
    boton.onclick = function() { cambiarColor(this); };
    accion.appendChild(boton);

    document.querySelector("#formulario").reset();
});

function cambiarColor(boton) {
    var celda = boton.parentNode.previousElementSibling;
    var colores = ["#FFD700", "#FF6347", "#4682B4", "#32CD32"];
    var colorActual = celda.style.backgroundColor;
    
    var nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    
    while (nuevoColor === colorActual) {
        nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    }
    
    celda.style.backgroundColor = nuevoColor;
}