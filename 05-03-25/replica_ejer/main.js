document.addEventListener("DOMContentLoaded", function () {
    let currentStep = 1;

    document.getElementById("form1").addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario

        // Obtener valores de los inputs
        let nombre = document.getElementById("nombre");
        let correo = document.getElementById("correo");
        let cel = document.getElementById("cel");

        
        if (nombre !== "" && correo !== "" && cel !== "") {
            nextStep(1); // Avanzar al siguiente paso
        } else {
            alert("Por favor, completa todos los campos.");
        }
    });
});

function nextStep(step) {
    let currentStepElement = document.getElementById(`paso-${step}`);
    let nextStepElement = document.getElementById(`paso-${step + 1}`);
    

    if (currentStepElement && nextStepElement) {
        currentStepElement.classList.remove("active");
        currentStepElement.style.display = "none";

        nextStepElement.classList.add("active");
        nextStepElement.style.display = "block";
    }
}
