let countLeftRight = 0;
let countUpDown = 0;

const increment = 30;
const circle = document.querySelector(".circle");

document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowUp") {
        countUpDown -= increment;
        console.log("arriba");
        circle.style.top = `${countUpDown}px`;
    }
    if (e.code === "ArrowDown") {
        countUpDown += increment;
        console.log("abajo");
        circle.style.top = `${countUpDown}px`;
    }
    if (e.code === "ArrowLeft") {
        countLeftRight -= increment;
        console.log("izquierda");
        circle.style.left = `${countLeftRight}px`;
    }
    if (e.code === "ArrowRight") {
        countLeftRight += increment;
        console.log("derecha");
        circle.style.left = `${countLeftRight}px`;
    }
});
