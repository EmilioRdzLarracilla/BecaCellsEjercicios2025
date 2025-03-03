document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("servicio-formulario").addEventListener("submit", function(event) {
        event.preventDefault();
        
        console.log("Guardando entrabndo a la funcion submit");

        let nombreProducto = document.getElementById("servicio").value;
        
        let precioProducto = document.getElementById("precio").value;
        let descripcionProducto = document.getElementById("descripcion").value;

        let productos = {
            nombre: nombreProducto,
            precio: precioProducto,
            descripcion: descripcionProducto
        }
        if(productos.nombre === "" || productos.precio === "" || productos.descripcion === ""){
            alert("Por favor llena todos los campos");
            return;
        }

        console.log(nombreProducto)
        console.log(precioProducto)
        console.log(descripcionProducto)

        let tabla = document.getElementById('cuerpo-tabla');
        let nuevaFila = document.createElement('tr');
        let nuevaCelda1 = document.createElement('td');
        let nuevaCelda2 = document.createElement('td');
        let nuevaCelda3 = document.createElement('td');

        nuevaCelda1.textContent = nombreProducto;
        nuevaFila.appendChild(nuevaCelda1);

        nuevaCelda2.textContent = precioProducto;
        nuevaFila.appendChild(nuevaCelda2);
        nuevaCelda3.textContent = descripcionProducto;
        nuevaFila.appendChild(nuevaCelda3);  
        tabla.appendChild(nuevaFila);
    
        if(nombreProducto.textContent === nuevaCelda1.textContent){
            alert("El producto ya existe en la tabla");
            return; 

        }

    });
})
