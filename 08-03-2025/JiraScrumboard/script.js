document.addEventListener("DOMContentLoaded", () => {
    // Función de búsqueda
    document.getElementById("searchBtn").addEventListener("click", () => {
        let query = prompt("Ingrese el término de búsqueda:");
        if (query) alert(`Buscando: ${query}`);
    });

    // Mostrar/Ocultar Panel lateral
    document.getElementById("toggleAside").addEventListener("click", () => {
        let panel = document.getElementById("sidePanel");
        panel.style.right = panel.style.right === "0px" ? "-250px" : "0px";
    });

    // Redirigir a Preguntas Frecuentes
    document.getElementById("helpBtn").addEventListener("click", () => {
        window.location.href = "https://example.com/faqs";
    });

    // Drag & Drop funcionalidad
    let cards = document.querySelectorAll(".card");
    let columns = document.querySelectorAll(".column");

    cards.forEach(card => {
        card.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", e.target.innerText);
            e.target.classList.add("dragging");
        });

        card.addEventListener("dragend", (e) => {
            e.target.classList.remove("dragging");
        });
    });

    columns.forEach(column => {
        column.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        column.addEventListener("drop", (e) => {
            e.preventDefault();
            let data = e.dataTransfer.getData("text/plain");
            let newCard = document.createElement("div");
            newCard.classList.add("card");
            newCard.draggable = true;
            newCard.innerText = data;
            column.appendChild(newCard);
        });
    });
});