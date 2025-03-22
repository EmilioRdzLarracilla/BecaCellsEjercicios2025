//sistema de biblioteca
let empleados = [
    {empleado: "carlos", sueldo: 2000},
    {empleado: "monsterrat", sueldo: 1800},
    {empleado: "pablo", sueldo: 1700},
    {empleado: "jose", sueldo: 1500},
    {empleado: "erik", sueldo: 1300},
    {empleado: "manuel", sueldo: 1500},
    {empleado: "pedro", sueldo: 1900}
];

function calcularSueldo(){
    let sueldoTotal = 0;

    for(let s = 0; s< empleados.length; s++) {
        sueldoTotal += empleados[s].sueldo;
    }
    return sueldoTotal;
}

let total = calcularSueldo();
console.log("la empresa debe pagar a todos los empleados: $" + total); 
