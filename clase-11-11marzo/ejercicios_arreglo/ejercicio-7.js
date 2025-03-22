/* 7️⃣ Tienda en Línea - Buscar Productos por Nombre
Crea una función que permita buscar un producto por su
 nombre en un catálogo. */

const catalogoProductos = [
  {
    id: 1,
    nombre: "Laptop HP Pavilion",
    precio: 800,
    marca: "HP",
    disponibilidad: true,
  },
  {
    id: 2,
    nombre: "Smartphone Samsung Galaxy S21",
    precio: 700,
    marca: "Samsung",
    disponibilidad: true,
  },
  {
    id: 3,
    nombre: "Tablet iPad Air",
    precio: 600,
    marca: "Apple",
    disponibilidad: false,
  },
  {
    id: 4,
    nombre: "Cámara Sony Alpha 7 III",
    precio: 2000,
    marca: "Sony",
    disponibilidad: true,
  },
  {
    id: 5,
    nombre: "Smartwatch Fitbit Versa 3",
    precio: 200,
    marca: "Fitbit",
    disponibilidad: true,
  },
  {
    id: 6,
    nombre: "Auriculares Bose QuietComfort 35 II",
    precio: 300,
    marca: "Bose",
    disponibilidad: false,
  },
  {
    id: 7,
    nombre: "Televisor LG OLED 55 pulgadas",
    precio: 1500,
    marca: "LG",
    disponibilidad: true,
  },
  {
    id: 8,
    nombre: "Consola PlayStation 5",
    precio: 500,
    marca: "Sony",
    disponibilidad: true,
  },
  {
    id: 9,
    nombre: "Impresora HP DeskJet 2755",
    precio: 100,
    marca: "HP",
    disponibilidad: false,
  },
  {
    id: 10,
    nombre: "Altavoz inteligente Amazon Echo Dot",
    precio: 50,
    marca: "Amazon",
    disponibilidad: true,
  },
];

function buscarProducto(catalogo, nombreProducto) {
  return (
    catalogo.find(
      (producto) =>
        producto.nombre.toLowerCase() === nombreProducto.toLowerCase()
    ) || "no encontrado"
  );
}

console.log(buscarProducto(catalogoProductos, "consola playstation 5"));
