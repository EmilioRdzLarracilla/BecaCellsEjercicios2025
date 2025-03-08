console.log("juego de la pelota");
let countUpDown = 0,
  countLeftRight = 0;

const aumento = 30;

const d = document;

const circle = d.querySelector(".circle");
d.addEventListener("keydown", (e) => {
  if (e.code === "ArrowUp") {
    countUpDown -= aumento;
    console.log("arriba");
    circle.style.top = `${countUpDown}px`;
  }

  if (e.code === "ArrowDown") {
    countUpDown += aumento;
    console.log("abajo");
    circle.style.top = `${countUpDown}px`;
  }
  if (e.code === "ArrowLeft") {
    countLeftRight -= aumento;
    console.log("izquierda");
    circle.style.left = `${countLeftRight}px`;
  }
  if (e.code === "ArrowRight") {
    countLeftRight += aumento;
    console.log("derecha");
    circle.style.left = `${countLeftRight}px`;
  }
});
