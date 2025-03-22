/* 1️⃣Crea un arreglo de objetos donde cada objeto represente un producto con nombre, 
precio y stock. Luego, muestra en consola los productos con stock disponible
 */

const productos = [
  { nombre: "Camiseta Algodón", precio: 25, stock: 50 },
  { nombre: "Pantalón Vaquero", precio: 45, stock: 30 },
  { nombre: "Vestido Floral", precio: 60, stock: 20 },
  { nombre: "Chaqueta Cuero", precio: 120, stock: 0 },
  { nombre: "Sudadera Deportiva", precio: 35, stock: 40 },
  { nombre: "Falda Larga", precio: 55, stock: 25 },
  { nombre: "Blusa Seda", precio: 70, stock: 15 },
  { nombre: "Abrigo Invierno", precio: 150, stock: 0 },
  { nombre: "Polo Clásico", precio: 30, stock: 35 },
  { nombre: "Shorts Deportivos", precio: 20, stock: 60 },
  { nombre: "Top Encaje", precio: 40, stock: 28 },
  { nombre: "Jersey Lana", precio: 80, stock: 0 },
  { nombre: "Camisa Lino", precio: 50, stock: 32 },
  { nombre: "Pantalón Chándal", precio: 38, stock: 45 },
  { nombre: "Vestido Noche", precio: 90, stock: 18 },
  { nombre: "Cazadora Denim", precio: 75, stock: 0 },
  { nombre: "Leggings Deportivos", precio: 28, stock: 55 },
  { nombre: "Falda Vaquera", precio: 48, stock: 27 },
  { nombre: "Chaleco Acolchado", precio: 65, stock: 0 },
  { nombre: "Camiseta Estampada", precio: 22, stock: 58 },
];

const disponibilidad = (arreglo) => {
  const disponibles = arreglo.filter((el) => {
    return el.stock > 0;
  });

  console.log(disponibles);
};

disponibilidad(productos);
