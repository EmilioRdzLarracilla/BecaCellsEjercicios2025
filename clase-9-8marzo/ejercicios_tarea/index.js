console.log("evento drag and drop");
const d = document;
const destinos = d.querySelectorAll(".dragzone");

const cards = d.querySelectorAll(".jira-card");

cards.forEach((card) => {
  card.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("application/x-moz-file", e.target.id);
  });
});

destinos.forEach((destino) => {
  destino.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
});

destinos.forEach((destino) => {
  destino.addEventListener("drop", (e) => {
    const cardId = e.dataTransfer.getData("application/x-moz-file");
    const card = document.getElementById(cardId);
    destino.appendChild(card);
  });
});

/* destino.addEventListener("drop", (e) => {
  const cardId = e.dataTransfer.getData("application/x-moz-file");
  const card = document.getElementById(cardId);
  destino.appendChild(card);
});
 */
