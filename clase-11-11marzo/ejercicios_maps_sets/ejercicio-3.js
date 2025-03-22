/* 3️⃣ Verificar si un Usuario ya ha Iniciado Sesión (Set)
Dado un conjunto de usuarios en sesión, verifica si uno en específico ya inició sesión.
 */

const usuarios = new Set([
  {
    nombre: "Emmanuel",
    sesion: "iniciada",
  },
  {
    nombre: "alejandro",
    sesion: "sin iniciar",
  },
  {
    nombre: "rodrigo",
    sesion: "sin iniciar",
  },
  {
    nombre: "sonia",
    sesion: "sin iniciar",
  },
  {
    nombre: "mario",
    sesion: "sin iniciar",
  },
  {
    nombre: "mario",
    sesion: "sin iniciar",
  },
]);

const login = new Set();

login.add("emmanuel");
login.add("alejandro");
login.add("Susana");
login.add("Alexa");
login.add("Mario");
login.add("Jaime");
login.add("Yair");

const sesionIniciada = (usuarios, nombre) => {
  if (usuarios.has(nombre)) {
    return console.log("logeado");
  } else {
    return console.log("usuario sin logear");
  }
};

sesionIniciada(login, "emmanuel");
sesionIniciada(login, "aldo");
