/* 3️⃣ Gestión de Citas Médicas
Crea un sistema que registre citas médicas con fecha, 
paciente y doctor. Luego, muestra las citas futuras. */

const medicalAppointment = [
  {
    id: 1,
    pacient: "Emilio Rodriguez Larracilla",
    doctor: "Jorge Octavio Arroyo",
    date: "03/25/2025",
  },
  {
    id: 2,
    pacient: "Lucía Martínez Pérez",
    doctor: "Ana Sofía Gómez",
    date: "04/01/2025",
  },
  {
    id: 3,
    pacient: "Carlos Sánchez Ruiz",
    doctor: "Luis Fernando Torres",
    date: "04/08/2025",
  },
  {
    id: 4,
    pacient: "Sofía López García",
    doctor: "Isabel Cristina Vargas",
    date: "04/15/2025",
  },
  {
    id: 5,
    pacient: "David Ramírez Díaz",
    doctor: "Pedro Antonio Jiménez",
    date: "04/22/2025",
  },
  {
    id: 6,
    pacient: "Laura Hernández Flores",
    doctor: "Marta Elena Castillo",
    date: "02/28/2025",
  },
  {
    id: 7,
    pacient: "Miguel González Castro",
    doctor: "Roberto Carlos Méndez",
    date: "01/06/2025",
  },
  {
    id: 8,
    pacient: "Elena Torres Morales",
    doctor: "Carmen Gloria Núñez",
    date: "01/13/2025",
  },
  {
    id: 9,
    pacient: "Javier Vargas Ortega",
    doctor: "Francisco Javier Reyes",
    date: "05/20/2025",
  },
  {
    id: 10,
    pacient: "Patricia Jiménez Silva",
    doctor: "Daniel Eduardo Ríos",
    date: "05/27/2025",
  },
];

const insertAppointment = (pacient, doctor, date) => {
  return medicalAppointment.push({
    id: Date.now(),
    pacient,
    doctor,
    date,
  });
};

const pendingAppointments = (medicalAppointment) => {
  const pending = medicalAppointment.filter((el) => {
    let date = new Date(el.date);
    let now = Date.now();

    if (date > now) {
      return el;
    }
  });

  console.log(pending);
};

insertAppointment("alejandro rodriguez", "Jorge Octavio Arroyo", "04/28/2025");
insertAppointment("emmanuel Garcia", "doctor simi", "07/13/2025");
pendingAppointments(medicalAppointment);

/* console.log(medicalAppointment); */
