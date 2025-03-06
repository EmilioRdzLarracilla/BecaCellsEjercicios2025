console.log("nuebas etiquetas html");

const d = document;
const modalBtn = d.querySelector(".modal-btn");
const modal = d.querySelector(".dialog-modal");
const btnShow = d.querySelector(".btn-show");
console.log(modalBtn);
console.log(btnShow);

modalBtn.addEventListener("click", () => {
  modal.toggleAttribute("open");
});

btnShow.addEventListener("click", () => {
  modal.setAttribute("open", true);
});
