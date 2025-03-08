
const estilo = './style.css'

 const container = document.getElementById("contendor-circulos");

 for (let i = 1; i <= 16; i++) {

    const circulo = document.createElement("div");
    circulo.classList.add("circle");
    circulo.textContent = i
    container.appendChild(circulo)        


}
