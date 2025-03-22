const formulario = document.getElementById("formulario");
const tabla = document.getElementById("productos").getElementsByTagName("tbody")[0];

// Función que se ejecuta cuando se envía el formulario
formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener los valores del formulario
    const producto = document.getElementById("producto").value;
    const descripcion = document.getElementById("descripcion").value;
    const precio = document.getElementById("precio").value;
    const stock = document.getElementById("stock").value;

    // Crear una nueva fila en la tabla
    const nuevaFila = tabla.insertRow();

    // Insertar celdas y agregar los datos
    const celdaNombre = nuevaFila.insertCell(0);
    const celdaEdad = nuevaFila.insertCell(1);

    celdaNombre.textContent = producto;
    celdaEdad.textContent = descripcion;
    celdaNombre.textContent = precio;
    celdaEdad.textContent = stock;

    // Limpiar el formulario
    formulario.reset();
});