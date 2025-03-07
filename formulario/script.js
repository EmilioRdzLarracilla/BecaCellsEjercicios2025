var currentStep = 0;
var steps = document.querySelectorAll(".step");

function showStep(step) {
    steps.forEach((el, index) => {
        el.classList.toggle("active", index === step);
    });
}

function siguientePaso() {
    if (currentStep < steps.length) {
        showStep(currentStep);
        currentStep++;

        if (currentStep === steps.length) {
            mostrarResumen();
        }
    } 
}

function pasoAnterior() {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
}

function mostrarResumen() {
    document.querySelector("#resumen-nombre").textContent = document.querySelector("#nombre").value;
    document.querySelector("#resumen-correo").textContent = document.querySelector("#correo").value;
    document.querySelector("#resumen-telefono").textContent = document.querySelector("#telefono").value;

    var planSeleccionado = document.querySelector('input[name = "plan"]:checked');
    document.querySelector("#resumen-plan").textContent = planSeleccionado ? planSeleccionado.value : "Ninguno";

    var complementosSeleccionados = [];
    document.querySelectorAll('input[name = "complemento"]:checked').forEach(el => {
        complementosSeleccionados.push(el.value);
    });

    document.querySelector("#resumen-complementos").textContent = complementosSeleccionados.length ? complementosSeleccionados.join(", ") : "Ninguno";
}

showStep(currentStep);