/* 6️⃣ Contar la Frecuencia de Palabras en un Texto (Map)
Cuenta cuántas veces aparece cada palabra en un texto. */

let texto = `Una vez visto esto, lo que sorprende es que a unas y a otras se les llame lo mismo: ideas. La identidad de nombre es lo único que estorba para distinguir dos cosas cuya disparidad brinca tan claramente ante nosotros sin más que usar frente a frente estos dos términos: creencias y ocurrencias. La incongruente conducta de dar un mismo nombre a dos cosas tan distintas no es, sin embargo, una casualidad ni una distracción. Proviene de una incongruencia más honda: de la confusión entre dos problemas radicalmente diversos que exigen dos modos de pensar y de llamar no menos dispares.`;

const palabrasUnicas = (texto) => {
  const regex = /[.,':;]/g;
  const mapTexto = new Map();
  const textoLimpio = texto.replaceAll(regex, "").split(" ");
  console.log(textoLimpio);

  textoLimpio.forEach((palabra) => {
    let count = 1;
    mapTexto.has(palabra) ? mapTexto.set(palabra) : mapTexto.set(palabra, 1);
  });

  return console.log(mapTexto);
};

palabrasUnicas(texto);
