// Selecciona el elemento de la pantalla (input donde se mostrarán los valores)
const pantalla = document.querySelector("#pantalla");

// Función para agregar el valor de los botones al input
const agregarValor = e => pantalla.value += e.target.innerText;
// e.target.innerText obtiene el texto del botón presionado y lo añade a la pantalla

// Función para calcular el resultado de la operación matemática ingresada
const calcularResultado = () => {
    try {
        pantalla.value = eval(pantalla.value); // Evalúa la expresión matemática en pantalla
    } catch {
        pantalla.value = "Error"; // Si hay un error en la operación, muestra "Error"
    }
};

// Selecciona todos los botones dentro del contenedor y les agrega eventos de clic
document.querySelectorAll(".contenedor button").forEach(boton => {
    boton.addEventListener("click", e => {
        if (e.target.innerText === "=") 
            calcularResultado(); // Si el botón es "=", ejecuta la función de cálculo
        else 
            agregarValor(e); // Si es otro botón, agrega su valor a la pantalla
    });
});


/**
 * try y catch son bloques utilizados para manejo de errores en JavaScript.
 *  Permiten ejecutar código de forma segura y manejar errores sin que el programa se 
 * detenga abruptamente.
 */