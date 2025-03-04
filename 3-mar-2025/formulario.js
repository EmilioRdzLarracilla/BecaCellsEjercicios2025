function cambiarColor(boton) {
    let celda = boton.parentNode.previousElementSibling;
    let colores = ["#FFD700", "#FF6347", "#4682B4", "#32CD32"];
    let colorActual = celda.style.backgroundColor;
    
    let nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    
    while (nuevoColor === colorActual) {
        nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    }
    
    celda.style.backgroundColor = nuevoColor;
}