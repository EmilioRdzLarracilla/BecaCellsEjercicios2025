/*const box = document.querySelector('.box');

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {

        box.style.top = `${box.style.top ?? 0 + 10}`;
    }
});*/

const box = document.querySelector('.box');

// Obtener posición inicial del div
const posicionInicial = box.getBoundingClientRect();
console.log(`Posición inicial - X: ${posicionInicial.left}, Y: ${posicionInicial.top}`);

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        let topActual = parseInt(window.getComputedStyle(box).top); // Obtener la posición actual
        box.style.top = `${topActual + 10}px`; // Mover 10px hacia abajo
    }
});