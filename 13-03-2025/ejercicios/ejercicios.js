let expresiones = [
    {operacion: "(4+2) && (8===3)", resultado: (4+2) && (8===3) },
    {operacion: "(5 > 4) && (5-5)", resultado: (5 > 4) && (5-5) },
    {operacion: "18 =='mayor edad' && 0", resultado: (18 =='mayor edad' && 0 )},
    {operacion: "'string' && false", resultado: 'string' && false },
    {operacion: "(0 && 5)", resultado: 0 && 5 },
    {operacion: "'Juan' && !1", resultado: "Juan" && !1 },
    {operacion: "(15 >= 10) && (1 != 1)", resultado: (15 >= 10) && (1 != 1) },
    {operacion: "(3 < 5) && (5 > 10)", resultado: (3 < 5) && (5 > 10) },
    {operacion: "(9 - 1 >= 7) && (5 + 3 > 9)", resultado: (9 - 1 >= 7) && (5 + 3 > 9) },
    {operacion: "[] && null", resultado: ([] && null) + "" }
];

let tabla1 = document.querySelector("#tablaAND tbody");

expresiones.forEach(({ operacion, resultado }) => {
    let fila = document.createElement("tr");

    let celdaExpresion = document.createElement("td");
    let celdaResultado = document.createElement("td");

    celdaExpresion.textContent = operacion;
    celdaResultado.textContent = resultado;

    fila.appendChild(celdaExpresion);
    fila.appendChild(celdaResultado);
    tabla1.appendChild(fila);
});


let and = [
    {operacion: "('' && 'Texto')", resultado: ('' && 'Texto') + "" },
    {operacion: "0 && 20", resultado: (10 && 20 )},
    {operacion: "'string' && false", resultado: 'string' && false },
    {operacion: "(0 && 5)", resultado: 0 && 5 },
    {operacion: "'Juan' && !1", resultado: "Juan" && !1 },
    {operacion: "(15 >= 10) && (1 != 1)", resultado: (15 >= 10) && (1 != 1) },
    {operacion: "(3 < 5) && (5 > 10)", resultado: (3 < 5) && (5 > 10) },
    {operacion: "(9 - 1 >= 7) && (5 + 3 > 9)", resultado: (9 - 1 >= 7) && (5 + 3 > 9) },
    {operacion: "[] && null", resultado: ([] && null) + "" }
];

let tabla2 = document.querySelector("#tablaAND1 tbody");

and.forEach(({ operacion, resultado }) => {
    let fila = document.createElement("tr");

    let celdaExpresion = document.createElement("td");
    let celdaResultado = document.createElement("td");

    celdaExpresion.textContent = operacion;
    celdaResultado.textContent = resultado;

    fila.appendChild(celdaExpresion);
    fila.appendChild(celdaResultado);
    tabla2.appendChild(fila);
});
