/* Contar Palabras Únicas en un Texto (Set)
Dado un párrafo, cuenta cuántas palabras únicas tiene. */

const texto =
  "Doña Uzeada de Ribera Maldonado de Bracamonte y Anaya era baja, rechoncha, abigotada. Ya no existia razon para llamar talle al suyo. Sus colores vivos, sanos, podian mas que el albayalde y el soliman del afeite, con que se blanqueaba por simular melancolias. Gastaba dos parches oscuros, adheridos a las sienes y que fingian medicamentos. Tenia los ojitos ratoniles, maliciosos. Sabia dilatarlos duramente o desmayarlos con recato o levantarlos con disimulo. Caminaba contoneando las imposibles caderas y era dificil, al verla, no asociar su estampa achaparrada con la de ciertos palmipedos domesticos. Sortijas celestes y azules le ahorcaban las falanges";

const contarPalabrasUnicas = (texto) => {
  let textoLimpio = texto.replace(",.", " ");
  const palabrasUnicas = new Set(textoLimpio.split(" "));

  return palabrasUnicas.size;
};

console.log(contarPalabrasUnicas(texto));
