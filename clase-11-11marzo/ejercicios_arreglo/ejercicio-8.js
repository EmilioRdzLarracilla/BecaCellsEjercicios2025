/* Dado un listado de usuarios con nombre y rol (admin o usuario), 
filtra solo los administradores. */

const usuarios = [
  {
    nombre: "Emilio Rodriguez ",
    rol: "admin",
  },

  {
    nombre: "juan Pérez ",
    rol: "admin",
  },
  {
    nombre: "Emmanuel Larracilla ",
    rol: "usuario",
  },
  {
    nombre: "Aldo de Rosas ",
    rol: "usuario",
  },
  {
    nombre: "Sonia Ramírez",
    rol: "admin",
  },
  {
    nombre: "Claudia Alvarado ",
    rol: "usuario",
  },
  {
    nombre: "Benito juarez",
    rol: "admin",
  },
  {
    nombre: "Peso pluma",
    rol: "usuario",
  },
];

const filtrarAdmins = (usuarios) => {
  return usuarios.filter((usuario) => usuario.rol === "admin");
};

console.log(filtrarAdmins(usuarios));
