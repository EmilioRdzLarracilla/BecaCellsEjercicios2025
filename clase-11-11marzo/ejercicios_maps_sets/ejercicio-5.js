/* 5️⃣ Registro de Placas de Autos en un Estacionamiento (Set)
Solo se pueden registrar autos únicos. */

const placas = new Set([
  "ABC-1234",
  "XYZ-5678",
  "LMN-9012",
  "PQR-3456",
  "UVW-7890",
  "GHI-2345",
  "DEF-6789",
  "JKL-0123",
  "STU-4567",
  "OPQ-8901",
  "VWX-2346",
  "RST-6790",
  "MNO-0134",
  "IJK-4578",
  "EFG-8912",
  "BCD-2356",
  "QRS-6890",
  "NOP-0145",
  "HIJ-4589",
  "CDE-8923",
]);

const registroplacas = (listaPlacas, placa) => {
  if (!placa || typeof placa !== "string") {
    return console.log("inserte la informacion de forma correcta");
  }

  if (listaPlacas.has(placa)) {
    return console.log("el numero de placa ingresado ya ha sido registrado");
  } else {
    listaPlacas.add(placa);
    return console.log("nº de placa agregado con exito");
  }
};

registroplacas(placas, "");
