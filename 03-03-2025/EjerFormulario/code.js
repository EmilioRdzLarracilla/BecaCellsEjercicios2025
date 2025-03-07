document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("forms");
    const table = document.getElementById("table").getElementsByTagName("tbody") [0];

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const producto = document.getElementById("producto").value;
        const descripcion = document.getElementById("descripcion").value;
        const precio = document.getElementById("precio").value;

        const crearFila = table.insertRow();
        const celdaProducto = crearFila.insertCell(0);
        const celdaPrecio = crearFila.insertCell(1);
        const celdaDescripcion = crearFila.insertCell(2);

        celdaProducto.textContent = producto;
        celdaPrecio.textContent = precio;
        celdaDescripcion.textContent = descripcion;

        form.reset();
    })
})