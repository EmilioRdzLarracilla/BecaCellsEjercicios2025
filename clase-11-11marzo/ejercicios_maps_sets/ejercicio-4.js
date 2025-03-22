/* 4️⃣ Lista de Invitados Únicos en un Evento (Set)
Asegura que cada invitado solo pueda registrarse una vez en la lista. */

const listaInvitados = new Set([
  "Javier Hernandez",
  "Eduardo Serena",
  "Alejandro Rodriguez",
  "Emmanuel Rosas",
  "Eder Martinez",
  "Juan Pérez",
  "Alicia Macías",
  "Alejandra Diaz",
  "jorge Salinas",
  "eduardo Vargas",
  "David Tuesta",
  "Jorge Campos",
]);

const registro = (listaInvitados, invitado) => {
  if (!invitado || typeof invitado !== "string") {
    return console.log("inserte la informacion de forma correcta");
  }

  if (listaInvitados.has(invitado)) {
    return console.log("invitado ya ha sido registrado");
  } else {
    listaInvitados.add(invitado);
    return console.log("invitado agregado con éxito");
  }
};

registro(listaInvitados, "Emilio Rodriguez");
registro(listaInvitados, "Emmanuel Rosas");
