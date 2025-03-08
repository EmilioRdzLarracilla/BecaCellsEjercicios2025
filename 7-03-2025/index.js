let position = 0;
const box = document.querySelector('.box');

document.addEventListener("keydown", (event) => {
    if (event.key === " ") {
        position += 10;
        box.style.left = position + "px";
    }
});