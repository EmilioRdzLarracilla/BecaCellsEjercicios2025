const d = document;
const tableBody = d.querySelector(".table-instance-body");
console.log(tableBody);
let resultadoEntries = `[`;
[1, 3, 5, 7, 9, 11].entries().forEach((element) => {
  resultadoEntries += `[ ${element[0]}, ${element[1]}],`;
});
resultadoEntries += `]`;

let arreglo = [1, 2, 3, 4, 5];
const objecto1 = {};
const objeto2 = { uno: "uno", dos: "dos", tres: "tres" };
const objeto3 = { uno: "uno", dos: "dos", tres: "tres" };
const objetoPadre = {
  propiedadPadre: "Valor del padre",
};
const objetoHijo = Object.create(objetoPadre);
objetoHijo.propiedadHijo = "Valor del hijo";

const productos = [
  { nombre: "Manzana", tipo: "Fruta" },
  { nombre: "Zanahoria", tipo: "Vegetal" },
  { nombre: "Plátano", tipo: "Fruta" },
  { nombre: "Brócoli", tipo: "Vegetal" },
];

const productosAgrupados = Object.groupBy(
  productos,
  (producto) => producto.tipo
);
let metodos = [
  {
    titulo: "metodos de instancia del Objeto String",
    clase: true,
  },
  {
    metodo: "string.prototype.length",
    descripcion: " determina la longitud de un string",
    ejemplo: `"alejandro".length`,
    resultado: "alejandro".length,
  },
  {
    metodo: "String.prototype.anchor()",
    descripcion:
      " El método anchor() crea un ancla HTML, <a>, que se usa como un enlace a hipertexto.",
    ejemplo: `"visita el link".anchor()`,
    resultado: "visita el link".anchor("ancla de contenidos"),
  },
  {
    metodo: "String.prototype.at()",
    descripcion: `  El método at() en JavaScript se utiliza para acceder
     a un carácter específico en una cadena (string) mediante su índice. A 
     diferencia de la notación de corchetes ([]), at() permite el uso de índices
      negativos para acceder a caracteres desde el final de la cadena.`,
    ejemplo: `"emilio".at(-2)`,
    resultado: "emilio".at(-2),
  },
  {
    metodo: "String.prototype.bold()",
    descripcion: "hace que una cadena de texto se convierta en negritas",
    ejemplo: `"Emilio".bold()`,
    resultado: "Emilio".bold(),
  },
  {
    metodo: "String.prototype.charAt()",
    descripcion: "Devuelve en un nuevo string el carácter UTF-16 de una cadena",
    ejemplo: `"buenas noches".charAt(3)`,
    resultado: "buenas noches".charAt(3),
  },
  {
    metodo: "String.prototype.charCodeAt()",
    descripcion:
      "devuelve un numero entero entre 0 y 65535 que repreenta el codigo UTF-16.",
    ejemplo: ` "terremoto".charCodeAt(2)`,
    resultado: "terremoto".charCodeAt(2),
  },
  {
    metodo: "String.prototype.codePointAt()",
    descripcion:
      "devuelve un entero no negativo que equivale al valor Unicode code point del carácter.",
    ejemplo: `"🤪🤪🤪".codePointAt(1)`,
    resultado: "🤪🤪🤪".codePointAt(1),
  },
  {
    metodo: "String.prototype.concat()",
    descripcion: "concatena dos o mas cadenas de texto y regresa una nueva",
    ejemplo: `"".concat("hola ", "como ", "estan ")`,
    resultado: "".concat("hola ", "como ", "estan "),
  },
  {
    metodo: "String.prototype.endsWith()",
    descripcion:
      "determina si una cadena de texto termina con una cadena proporcionanda regresando true o false",
    ejemplo: `"los gatos son la mejor mascota".endsWith("ota")`,
    resultado: "los gatos son la mejor mascota".endsWith("ota"),
  },
  {
    metodo: "String.prototype.includes()",
    descripcion:
      "determina si una cadena de texto contiene la cadena de texto porporcionanda a lo largo de la cadena",
    ejemplo: `"se encuentra".includes("ntr")`,
    resultado: "se encuentra".includes("ntr"),
  },
  {
    metodo: "String.prototype.indexOf()",
    descripcion:
      "se utiliza para buscar la primera aparición de una subcadena dentro de una cadena dada regresando el indice de donde comienza la localización . Tambien podemos agregar despues de cual longitud de la cadena de texto buscar el indice de la aparicion del substring",
    ejemplo: `"hola buenas noches a todos".indexOf("e", 2)`,
    resultado: "hola buenas noches a todos".indexOf("e", 10),
  },
  {
    metodo: "String.prototype.isWellFormed()",
    descripcion: `se utiliza para verificar si una cadena contiene o no "surrogados solitarios". Estos surrogados solitarios son códigos Unicode que, si no se emparejan correctamente, pueden causar problemas al procesar o mostrar texto`,
    ejemplo: `[
      "Hola \uD800 Mundo \uDFFF".isWellFormed(),
      "Hola \uD83D\uDE00 Mundo".isWellFormed(),
    ]`,
    resultado: [
      "Hola \uD800 Mundo \uDFFF".isWellFormed(),
      "Hola \uD83D\uDE00 Mundo".isWellFormed(),
    ],
  },
  {
    metodo: "String.prototype.italics()",
    descripcion: "convierte una cadena de texto a texto en italicas",
    ejemplo: `"larracilla".italics()`,
    resultado: "larracilla".italics(),
  },
  {
    metodo: "String.prototype.lastIndexOf()",
    descripcion:
      "devuleve la posicion de la ultima ocurrencia del valor especificado dentro del string ,empezando de derecha a izquierda",
    ejemplo: `"El mejor momento para empezar es ahora".lastIndexOf("es")`,
    resultado: "El mejor momento para empezar es ahora".lastIndexOf("es"),
  },
  {
    metodo: "String.prototype.link()",
    descripcion: "crea un enlace de hipertexto HTML",
    ejemplo: ` "sitio de MDN".link("https://developer.mozilla.org/")`,
    resultado: "sitio de MDN".link("https://developer.mozilla.org/"),
  },
  {
    metodo: "String.prototype.localeCompare()",
    descripcion:
      "se utiliza para comparar dos cadenas de texto teniendo en cuenta las reglas de ordenación específicas de un idioma o región (locale).retorna un numero negativo si la cadena de referencia va antes de la cadena comparada y viceversa",
    ejemplo: `"ala".localeCompare("pez")`,
    resultado: "pez".localeCompare("ala"),
  },
  {
    metodo: "String.prototype.match()",
    descripcion:
      " nos retorna  todas las coincidencias ocurridas en un arreglo mediante una expresón regular en una cadena de texto",
    ejemplo: `"Ve el mundo. Es más fantástico que cualquier sueño".match(
      /[A-Z]/g
    )`,
    resultado: "Ve el mundo. Es más fantástico quE cualquiEr sueño".match(
      /[A-Z]/g
    ),
  },
  {
    metodo: "String.prototype.matchAll()",
    descripcion:
      " se utiliza para obtener todas las coincidencias de una expresión regular dentro de una cadena, devolviendo un iterador que produce objetos de resultado para cada coincidencia.",
    ejemplo: `[
      ..."El hombre siempre es algo más que lo que conoce sobre sí mismo. No es lo que es una vez y para siempre, es un proceso.".matchAll(
        /e/g
      ),
    ]`,
    resultado: [
      ..."El hombre siempre es algo más que lo que conoce sobre sí mismo. No es lo que es una vez y para siempre, es un proceso.".matchAll(
        /e/g
      ),
    ],
  },
  {
    metodo: "String.prototype.padEnd()",
    descripcion:
      "ayuda a rellenar una cadena de texto con otra cadena (o un carácter) hasta alcanzar una longitud específica. El relleno se agrega al final (a la derecha) de la cadena original.",
    ejemplo: `"esta historia continuará".padEnd(30, ".")`,
    resultado: "esta historia continuará".padEnd(30, "."),
  },
  {
    metodo: "String.prototype.padStart()",
    descripcion:
      " se utiliza para rellenar una cadena de texto con otra cadena (o un carácter) hasta alcanzar una longitud específica. El relleno se agrega al inicio (a la izquierda) de la cadena original.",
    ejemplo: `"bienvenidos".padStart(20, "foo")`,
    resultado: "bienvenidos".padStart(20, "foo"),
  },
  {
    metodo: "String.prototype.repeat()",
    descripcion:
      "repite una cadena de texto indicando el numero de veces que se desea repetir",
    ejemplo: `"Happy! ".repeat(4)`,
    resultado: "Happy! ".repeat(4),
  },
  {
    metodo: "String.prototype.replace()",
    descripcion:
      "reemplaza la primera ocurrencia de una cadena de texto proporcionada por una parte de la cadena de texto dentro del gtexto original, tambien se puede reemplazar por medio de una expresión regular ",
    ejemplo: ` "pienso que tu mascota es la más bonita ".replace("tu", "mi")`,
    resultado: "pienso que tu mascota es la más bonita ".replace("tu", "mi"),
  },
  {
    metodo: "String.prototype.replaceAll()",
    descripcion:
      "retorna un nuevo string con todas las coincidencias ya cambiadas por la cadena de texto proporcionada sin que sufra cambios lacadena de texto original",
    ejemplo: ` "xaxxxaxaxaxaxaxxxaxxxaaaaaxaxax".replaceAll("a", "o")`,
    resultado: "xaxxxaxaxaxaxaxxxaxxxaaaaaxaxax".replaceAll("a", "o"),
  },
  {
    metodo: "String.prototype.search()",
    descripcion:
      "ejecuta una busqueda para encontrar una coincidencia entre una expresión regular y la cadena de texto, la caual nos regresará el indice de la primer coincidencia",
    ejemplo: `"que es lo que está pasando aqui.".search(/aq/g)`,
    resultado: "que es lo que está pasando aqui.".search(/aq/g),
  },
  {
    metodo: "String.prototype.slice()",
    descripcion:
      "extrae una nueva seccion de la cadena de textos sin sufrir cambios la cadena de texto inicial ",
    ejemplo: `"I wanna love you, every day and every night".slice(0, 18)`,
    resultado: "I wanna love you, every day and every night".slice(0, 18),
  },
  {
    metodo: "String.prototype.split()",
    descripcion:
      "divide una cadena de texto en un arreglo de subcadenas, utilizando un separador especificado. El separador puede ser un carácter, una cadena o una expresión regular",
    ejemplo: `"larracilla".split("")`,
    resultado: "larracilla".split(""),
  },
  {
    metodo: "String.prototype.startsWith()",
    descripcion:
      "determina si la cadena de texto inicia con algun patron o cadena en especifico retornando true o false segun el caso",
    ejemplo: `"Cuando me siento en tus brazos, se me olvida todo".startsWith(
      "Cuando"
    )`,
    resultado: "Cuando me siento en tus brazos, se me olvida todo".startsWith(
      "Cuando"
    ),
  },
  {
    metodo: "String.prototype.substring()",
    descripcion:
      "toma una cadena original y devuelve una parte de ella, basándose en los índices de los caracteres que se le indiquen, puede tomar del numero indicado hacia el final o porporcionar dos argumentos uno de inicio y uno de final",
    ejemplo: ` "La libertad no es ser capaz de hacer lo que uno quiere, sino de querer lo que uno hace".substring(
        0,
        27
      )`,
    resultado:
      "La libertad no es ser capaz de hacer lo que uno quiere, sino de querer lo que uno hace".substring(
        0,
        27
      ),
  },
  {
    metodo: "String.prototype.toLocaleLowerCase()",
    descripcion:
      "retorna la cadena de texto en minusculas acorde al idioma en el cual esté la cadena",
    ejemplo: `"Привет".toLocaleLowerCase()`,
    resultado: "Привет".toLocaleLowerCase(),
  },
  {
    metodo: "String.prototype.toLocaleUpperCase()",
    descripcion:
      "retorna la cadena de texto en mayusculas acorde a la zona del idioma en el cual esté la cadena",
    ejemplo: `"istambul".toLocaleUpperCase("tr")`,
    resultado: "istambul".toLocaleUpperCase("tr"),
  },
  {
    metodo: "String.prototype.toLowerCase()",
    descripcion: "retorna la cadena de texto en minúsculas",
    ejemplo: `"EMILIO RODRIGUEZ LARRACILLA".toLowerCase()`,
    resultado: "EMILIO RODRIGUEZ LARRACILLA".toLowerCase(),
  },
  {
    metodo: "String.prototype.toUpperCase()",
    descripcion: "retorna la cadena de texto en mayúsculas",
    ejemplo: `"emilio rodriguez larracilla".toUpperCase()`,
    resultado: "emilio rodriguez larracilla".toUpperCase(),
  },
  {
    metodo: "String.prototype.toString()",
    descripcion: "retorna valores porporcionados en cadena de texto",
    ejemplo: "",
    resultado: [1, 2, 3, 4, 5].tostring,
  },
  {
    metodo: "String.prototype.toWellFormed()",
    descripcion: `se utiliza para crear una nueva cadena donde los surrogados solitarios (códigos Unicode mal formados) son reemplazados por el carácter de reemplazo Unicode (U+FFFD). En otras palabras, "limpia" una cadena para asegurar que esté bien formada según las reglas de UTF-16.`,
    ejemplo: ` "Hola \ uD800 Mundo".toWellFormed()`,
    resultado: "Hola \uD800 Mundo".toWellFormed(),
  },
  {
    metodo: "String.prototype.trim()",
    descripcion:
      "remueve los espacios en blanco al inicio y final de la cadena de texto sin modificar el original",
    ejemplo: `"      hola amigos         ".trim()`,
    resultado: "       hola amigos       ".trim(),
  },
  {
    metodo: "String.prototype.trimEnd()",
    descripcion: "elimina espacios en blanco al final de la cadena de texto",
    ejemplo: `"hola(....espacios en blanco)".trimEnd()`,
    resultado: "hola     ".trimEnd(),
  },
  {
    metodo: "String.prototype.trimStart()",
    descripcion: "elimina espacios en blanco al inicio de la cadena de texto",
    ejemplo: `(....espacios en blanco)hola".trimStart()`,
    resultado: "      hola".trimEnd(),
  },
  {
    metodo: "String.prototype.valueOf()",
    descripcion: "retorna el valor de la cadena de texto",
    ejemplo: `"overworld".valueOf()`,
    resultado: "overworld".valueOf(),
  },
  {
    metodo: "String.prototype.normalize()",
    descripcion:
      "retornar la forma de normalización Unicode de una cadena de texto. Su función principal es asegurar que caracteres que pueden ser representados de múltiples maneras (por ejemplo, caracteres acentuados) tengan una representación consistente",
    ejemplo: " u0041  u006d u00e9 u006c u0069 u0065.normalize()",
    resultado: "\u0041\u006d\u00e9\u006c\u0069\u0065".normalize(),
  },
  {
    titulo: "metodos de instancia del Objeto Array",
    clase: true,
  },
  {
    metodo: "Array.prototype.at()",
    descripcion:
      "toma un valor entero y retorna el elemento con el indice proporcionado que puede ser un entero positivo o negativo",
    ejemplo: `[1, 2, 4, 56, 78, 98].at(4)`,
    resultado: [1, 2, 4, 56, 78, 98].at(4),
  },
  {
    metodo: "Array.prototype.concat()",
    descripcion:
      "concatena dos o mas arreglos , este método no modifica los arreglos porporcionados sino que genera uno nuevo",
    ejemplo: `[].concat(["a", "b", "c"], ["d", "e", "f"], ["x", "y", "z"])`,
    resultado:
      "[" + [].concat(["a", "b", "c"], ["d", "e", "f"], ["x", "y", "z"]) + "]",
  },
  {
    metodo: "Array.prototype.copyWithin()",
    descripcion:
      "e utiliza para copiar una secuencia de elementos dentro de un arreglo a otra posición dentro del mismo arreglo, sobrescribiendo los valores existentes.",
    ejemplo: `["a", "b", "c", "d", "e"].copyWithin(0, 3, 4)`,
    resultado: ["a", "b", "c", "d", "e"].copyWithin(0, 3, 4),
  },
  {
    metodo: "Array.prototype.entries()",
    descripcion:
      "retorna un nuevo objecto arreglo iterador que contiene el par llave / valor  para cada indice del arreglo",
    ejemplo: `${resultadoEntries}`,
    resultado: [1, 3, 5, 7, 9, 11].entries().forEach((el) => el),
  },
  {
    metodo: "Array.prototype.every()",
    descripcion:
      "verifica si todos los elementos de un arreglo cumplen con una condiciín especificada mediante una funcion de prueba",
    ejemplo: ` [1, 2, 3, 4, 5, 6, 7, 8].every((el) => el < 10)`,
    resultado: [1, 2, 3, 4, 5, 6, 7, 8].every((el) => el < 10),
  },
  {
    metodo: "Array.prototype.fill()",
    descripcion:
      "cambia todos los elementos de un arreglo por un valor estático, desde un índice de inicio hasta un índice final.",
    ejemplo: ` [1, 2, 3, 4, 5, 6, 7, 8].fill("a", 2, 6)`,
    resultado: [1, 2, 3, 4, 5, 6, 7, 8].fill("a", 2, 6),
  },
  {
    metodo: "Array.prototype.filter()",
    descripcion:
      "regresa un nuevo arreglo con los elementos del arreglo original que cumplan una condición por medio de una funcón",
    ejemplo: `["uno", "dos", "tres", "cuatro", "cinco"].filter((el) => el.length > 4 ),`,
    resultado: ["uno", "dos", "tres", "cuatro", "cinco"].filter(
      (el) => el.length > 4
    ),
  },
  {
    metodo: "Array.prototype.find()",
    descripcion:
      "retorna el primer valor que cumpla con la condición especificada en una función de prueba , si no encuentra el valor retorna undefined",
    ejemplo: `[1, 4, 9, 16, 25, 36].find((el) => el > 10)`,
    resultado: [1, 4, 9, 16, 25, 36].find((el) => el > 10),
  },
  {
    metodo: "Array.prototype.findIndex()",
    descripcion:
      "retorna el índice del primer valor que cumpla con la condición especificada en una función de prueba , si no encuentra el valor retorna -1",
    ejemplo: `["Manzana", "Plátano", "Naranja", "Uvas", "Pera"].findIndex(
      (el) => el.length < 5
    ),`,
    resultado: ["Manzana", "Plátano", "Naranja", "Uvas", "Pera"].findIndex(
      (el) => el.length < 5
    ),
  },
  {
    metodo: "Array.prototype.findLast()",
    descripcion:
      "retorna el valor de la primer coincidencia encontrada por medio de una funcion de prueba , empezando desde el utlimo valor del arreglo hasta el primero",
    ejemplo: `[
      ["a", "b", "c"],
      "Hola",
      42,
      true,
      { nombre: "Objeto" },
      [1, 2, 3],
      null,
      undefined,
    ].findLast((el) => el instanceof Array),`,
    resultado: [
      ["a", "b", "c"],
      "Hola",
      42,
      true,
      { nombre: "Objeto" },
      [1, 2, 3],
      null,
      undefined,
    ].findLast((el) => el instanceof Array),
  },
  {
    metodo: "Array.prototype.findLastIndex()",
    descripcion:
      "itera el arreglo en orden inverso y retorna el indice del primer elemento que cumpla con la condicón de la funcion de prueba",
    ejemplo: `["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"].findLastIndex(
      (e) => e === "i"
    ),`,
    resultado: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"].findLastIndex(
      (e) => e === "i"
    ),
  },
  {
    metodo: "Array.prototype.flat()",
    descripcion:
      "crea un nuevo arreglo aplanado con todos los elementos de los subarreglos concatenados recursivamente hasta una profundidad especificada.",
    ejemplo: `[1, 2, 3, [4, 5, 6, [7]], 8].flat()`,
    resultado: "[" + [1, 2, 3, [4, 5, 6, [7]], 8].flat() + "]",
  },
  {
    metodo: "Array.prototype.flatMap()",
    descripcion:
      " es una combinación de map() y flat(). Primero aplica una función de mapeo a cada elemento de un arreglo y luego aplana el resultado en un nuevo arreglo.",
    ejemplo: `[1, 2, [3]].flatMap((e) => Math.sin(e).toFixed(2))`,
    resultado: "[" + [1, 2, [3]].flatMap((e) => Math.sin(e).toFixed(2)) + "]",
  },

  {
    metodo: "Array.prototype.forEach()",
    descripcion:
      "ejecuta una funcion proporcionada una vez por cada elemento de un arreglo",
    ejemplo: `["a", "b", "c"].forEach((el) => console.log(el.toUpperCase()))`,
    resultado: `en consola
    
    A
    B
    C`,
  },
  {
    metodo: "Array.prototype.includes()",
    descripcion:
      "determina si un arreglo incluye cierto valor dentro de los valores del arreglo retornando tru o false segun el caso",
    ejemplo: `[1, 2, 3, 4, 5].includes(3)`,
    resultado: +[1, 2, 3, 4, 5].includes(3),
  },
  {
    metodo: "Array.prototype.indexOf()",
    descripcion:
      "retorna el valor del indice si este se encuentra dentro del arreglo , en caso de no ecnontrarlo retorna -1",
    ejemplo: `[2, 4, 6, 8, 20].indexOf(20)`,
    resultado: [2, 4, 6, 8, 20].indexOf(20),
  },
  {
    metodo: "Array.prototype.join()",
    descripcion:
      "crea y retorna un nuevo arreglo uniendo en un string todos los elementos separados por un caracter porporcionado si asi se desea",
    ejemplo: `["uno", "dos", "tres"].join("-")`,
    resultado: ["uno", "dos", "tres"].join("-"),
  },
  {
    metodo: "Array.prototype.keys()",
    descripcion:
      "devuelve un nuevo objeto Array Iterator que contiene las claves para cada indice en el arreglo. ",
    ejemplo: `[4, 5, 6, 7, 8].keys().map((el) => console.log(el))`,
    resultado: `en consola 1 2 3 4 5`,
  },
  {
    metodo: "Array.prototype.lastIndexOf()",
    descripcion:
      " devuelve el último índice en el que un cierto elemento puede encontrarse en el arreglo, ó -1 si el elemento no se encontrara. El arreglo es recorrido en sentido contrario,",
    ejemplo: ` ["Perro", "Gato", "Elefante", "León", "Tigre"].lastIndexOf(
      "Tigre"
    )`,
    resultado: ["Perro", "Gato", "Elefante", "León", "Tigre"].lastIndexOf(
      "Tigre"
    ),
  },
  {
    metodo: "Array.prototype.map()",
    descripcion:
      "crea un nuevo arreglo con los resultados de una callback en cada elemento ",
    ejemplo: `[1, 2, 3, 4, 5, 6].map((el) => el ** 2)`,
    resultado: "[" + [1, 2, 3, 4, 5, 6].map((el) => el ** 2) + "]",
  },
  {
    metodo: "Array.prototype.pop()",
    descripcion: "elimina el ultimo elemento del arreglo y lo devuelve",
    ejemplo: `[1, 2, 3, 4].pop()`,
    resultado: [1, 2, 3, 4].pop(),
  },
  {
    metodo: "Array.prototype.push()",
    descripcion:
      "agrega un elemento al arreglo en la última posición y devuelve la longitud del arreglo",
    ejemplo: `[1, 2, 3, 4, 5].push(9)`,
    resultado: [1, 2, 3, 4, 5].push(9),
  },
  {
    metodo: "Array.prototype.reduce()",
    descripcion:
      "ejecuta una función reductora sobre cada elemento del arreglo y devuelve un unico valor",
    ejemplo: `[1, 2, 3, 4, 5].reduce((acc, item) => acc * item)`,
    resultado: [1, 2, 3, 4, 5].reduce((acc, item) => acc * item),
  },
  {
    metodo: "Array.prototype.reduceRight()",
    descripcion:
      "ejecuta una función reductora sobre cada elemento del arreglo y devuelve un unico valor comenzando de derecha a izquierda",
    ejemplo: `[1, 2, 3, 4, 5].reduceRight((acc, item) => acc * item)`,
    resultado: [1, 2, 3, 4, 5].reduceRight((acc, item) => acc * item),
  },

  {
    metodo: "Array.prototype.reverse()",
    descripcion: "invierte el orden de los elementos de un arreglo",
    ejemplo: `["uno", "dos", "tres"].reverse()`,
    resultado: "[" + ["uno", "dos", "tres"].reverse() + "]",
  },
  {
    metodo: "Array.prototype.shift()",
    descripcion:
      "remueve el primer elemento de un arreglo y retorna el elemento removido, este metodo cambia el largo del arreglo",
    ejemplo: `["a", "b", "c", "d"].shift()`,
    resultado: ["a", "b", "c", "d"].shift(),
  },
  {
    metodo: "Array.prototype.some()",
    descripcion:
      "comprueba si al menos uno de los elementos en el arreglo pasa la prueba implementada por medio de una función , retornando true en caso de que cumpla y false en el caso contrario, esta función no modifica el arreglo original",
    ejemplo: `[1, 2, 3, 4, 5, 6].some((el) => el % 2 === 0)`,
    resultado: [1, 2, 3, 4, 5, 6].some((el) => el % 2 === 0),
  },
  {
    metodo: "Array.prototype.sort()",
    descripcion:
      "se utiliza para ordenar los elementos de un arreglo in situ, lo que significa que modifica el arreglo original.",
    ejemplo: `[1, 22, 33, 4, 4, 55, 5, 5, 12, 32, 3, 4].sort()`,
    resultado: "[" + [1, 22, 33, 4, 4, 55, 5, 5, 12, 32, 3, 4].sort() + "]",
  },
  {
    metodo: "Array.prototype.splice()",
    descripcion:
      "cambia el contenido del arreglo removiendo o reemplazando elementos existentes y/o agregando nuevos elementos  in situ",
    ejemplo: `["Jan", "March", "April", "June"].splice(0, 2) `,
    resultado: "[" + ["Jan", "March", "April", "June"].splice(0, 2) + "]",
  },
  {
    metodo: "Array.prototype.toLocaleString() ",
    descripcion:
      "se utiliza para convertir un número, fecha u objeto en una representación de cadena sensible a la localización. Esto significa que la cadena resultante se formatea de acuerdo con las convenciones de un idioma y región específicos.",
    ejemplo: `[1, "a", new Date("21 Dec 1997 14:12:00 UTC")].toLocaleString(
      "en",
      { timeZone: "UTC" }
    )`,
    resultado: [1, "a", new Date("21 Dec 1997 14:12:00 UTC")].toLocaleString(
      "en",
      { timeZone: "UTC" }
    ),
  },
  {
    metodo: "Array.prototype.toReversed() ",
    descripcion:
      "genera un nuevo arreglo ordenado en reversa sin modificar el actual",
    ejemplo: `[1, 2, 3, 4, 5, 6].toReversed()`,
    resultado: "[" + [1, 2, 3, 4, 5, 6].toReversed() + "]",
  },
  {
    metodo: "Array.prototype.toSorted()",
    descripcion:
      "genera una copia del arreglo ordenandolo de manera ascendente",
    ejemplo: `[9, 8, 7, 6].toSorted()`,
    resultado: [9, 8, 7, 6].toSorted(),
  },
  {
    metodo: "Array.prototype.toSpliced()",
    descripcion:
      "s una adición relativamente reciente al lenguaje y se utiliza para crear una copia de un arreglo con elementos eliminados o reemplazados, sin modificar el arreglo original",
    ejemplo: `[1, 2, 3, 4, 5].toSpliced(2, 1)`,
    resultado: "[" + [1, 2, 3, 4, 5].toSpliced(2, 1) + "]",
  },
  {
    metodo: "Array.prototype.toString()",
    descripcion:
      "retorna un string representando todos los valores del arreglo",
    ejemplo: `[true, false, {}, [1, 2, 3], "si", 67].toString() `,
    resultado: [true, false, {}, [1, 2, 3], "si", 67].toString(),
  },
  {
    metodo: "Array.prototype.unshift()",
    descripcion:
      "agrega elementos al inicio de un arreglo y retorna el nuevo valor del largo del arreglo",
    ejemplo: `[1, 2, 3, 4, 5].unshift(8, 9)`,
    resultado: [1, 2, 3, 4, 5].unshift(8, 9),
  },
  {
    metodo: "Array.prototype.values()",
    descripcion:
      "Devuelve un nuevo objeto iterador de arreglos que contiene los valores de cada índice del arreglo.",
    ejemplo: `[10, 20, 30, 40].values()`,
    resultado: [10, 20, 30, 40].values(),
  },
  {
    metodo: "Array.prototype.with()",
    descripcion:
      "crea una copia de un arreglo con un elemento modificado en un índice específico, sin modificar el arreglo original. Es un método no mutante, lo que significa que devuelve un nuevo arreglo con los cambios realizados.",
    ejemplo: `[1, 2, 3, 4, 5].with(0, 10)`,
    resultado: "[" + [1, 2, 3, 4, 5].with(0, 10) + "]",
  },
  {
    titulo: "metodos de estaticos y de instancia del Objeto Object",
    clase: true,
  },
  {
    metodo: "Object.assign()",
    descripcion:
      "se utiliza para copiar los valores de todas las propiedades enumerables propias de uno o más objetos fuente a un objeto destino. Devuelve el objeto destino.",
    ejemplo: `Object.assign({ a: 1, b: 2 }, { b: 4, c: 5 })`,
    resultado: "en consola a:1 b:4 c:5",
  },
  {
    metodo: "Object.create()",
    descripcion:
      "se utiliza para crear un nuevo objeto, utilizando un objeto existente como prototipo para el nuevo objeto creado.",
    ejemplo: `Object.create({ uno: 1, dos: 2 }).uno`,
    resultado: Object.create({ uno: 1, dos: 2 }).uno,
  },
  {
    metodo: "",
    descripcion:
      "define o modifica las propiedades de un arreglo existente directamente en el objeto , retornandolo",
    ejemplo: `Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {},
}).property1`,
    resultado: Object.defineProperties(objecto1, {
      property1: {
        value: 42,
        writable: true,
      },
      property2: {},
    }).property1,
  },
  {
    metodo: "Object.defineProperty()",
    descripcion:
      "define o modifica las propiedades de un arreglo existente directamente en el objeto , retornandolo",
    ejemplo: `Object.defineProperties(object1, {
        property1: {
          value: 89,
          writable: false,
        },
        property2: {hola:"hola"},
      }).property1  `,
    resultado: Object.defineProperties(objecto1, {
      property1: {
        value: 89,
        writable: false,
      },
      property2: { hola: "hola" },
    }).property1,
  },
  {
    metodo: "Object.entries()",
    descripcion:
      "es un metodo estatico que retorna un arreglo iterable con pares de clave valor",
    ejemplo: `Object.entries(objeto2)[0]`,
    resultado: Object.entries(objeto2)[0],
  },
  {
    metodo: "Object.freeze()",
    descripcion:
      "Es probable que te refieras al método Object.freeze() en JavaScript. Este método se utiliza para congelar un objeto, lo que significa que impide que se modifiquen sus propiedades",
    ejemplo: `Object.freeze(objeto2)`,
    resultado: Object.freeze(objeto2),
  },
  {
    metodo: "Object.fromEntries()",
    descripcion: "transforma una lista de clave valor en un objeto",
    ejemplo: `Object.fromEntries(
      new Map([
        ["foo", "bar"],
        ["baz", 42],
      ])
    ).foo`,
    resultado: Object.fromEntries(
      new Map([
        ["foo", "bar"],
        ["baz", 42],
      ])
    ).foo,
  },
  {
    metodo: "Object.getOwnPropertyDescriptor()",
    descripcion:
      "se utiliza para obtener el descriptor de propiedad de una propiedad propia (no heredada) de un objeto. Un descriptor de propiedad es un objeto que contiene información sobre los atributos de una propiedad, como su valor, si es escribible, enumerable y configurable.",
    ejemplo: `Object.getOwnPropertyDescriptor(objeto3, "dos")`,
    resultado: Object.getOwnPropertyDescriptor(objeto3, "dos").configurable,
  },
  {
    metodo: "Object.getOwnPropertyDescriptors()",
    descripcion:
      "se utiliza para obtener todos los descriptores de propiedad de las propiedades propias (no heredadas) de un objeto. Un descriptor de propiedad es un objeto que contiene información sobre los atributos de una propiedad, como su valor, si es escribible, enumerable y configurable",
    ejemplo: ` Object.getOwnPropertyDescriptors({ property: 42 }).property
      .writable`,
    resultado: Object.getOwnPropertyDescriptors({ property: 42 }).property
      .writable,
  },
  {
    metodo: "Object.getOwnPropertyNames()",
    descripcion:
      "obtiene un arreglo con todos los nombres de las propiedades propias (no heredadas) de un objeto, tanto las enumerables como las no enumerables. a excepción de los Symbols",
    ejemplo: `Object.getOwnPropertyNames({ uno: "uno", dos: "dos" })`,
    resultado: Object.getOwnPropertyNames({ uno: "uno", dos: "dos" }),
  },
  {
    metodo: "Object.getOwnPropertySymbols",
    descripcion:
      "Se utiliza para obtener un arreglo con todos los símbolos de propiedad propios (no heredados) de un objeto. Un símbolo de propiedad es un tipo de dato primitivo que se utiliza como clave de propiedad de objeto",
    ejemplo: ``,
    resultado: " Object.getOwnPropertySymbols",
  },
  {
    metodo: "Object.getPrototypeOf()",
    descripcion:
      "obtiene el prototipo (es decir, el objeto interno [[Prototype]]) de un objeto especificado.",
    ejemplo: `Object.getPrototypeOf(objetoHijo) === objetoPadre`,
    resultado: Object.getPrototypeOf(objetoHijo) === objetoPadre,
  },
  {
    metodo: "Object.groupBy()",
    descripcion:
      "agrupa los elementos de un arreglo en un objeto, según el valor devuelto por una callback function.",
    ejemplo: `Object.groupBy(productos, (producto) => producto.tipo)`,
    resultado: console.log(productosAgrupados),
  },
  {
    metodo: "",
    descripcion: "",
    ejemplo: ``,
    resultado: "",
  },
  {
    metodo: "Object.hasOwn()",
    descripcion:
      " Este método se utiliza para determinar si un objeto tiene una propiedad propia (no heredada) con el nombre especificado.",
    ejemplo: ` Object.hasOwn(objeto3, "uno")`,
    resultado: Object.hasOwn(objeto3, "uno"),
  },
  {
    metodo: "Object.is()",
    descripcion: "determina si dos valores son iguales",
    ejemplo: `Object.is("1", 1)`,
    resultado: Object.is("1", 1),
  },
];

metodos.map((metodo) => {
  metodo.clase
    ? (tableBody.innerHTML += `
         <tr class="rowTitle">
          <td colspan="4">${metodo.titulo}</td> 
        </tr>`)
    : (tableBody.innerHTML += `<tr>
    <td>${metodo.metodo}</td>
    <td>${metodo.descripcion}</td>
    <td>${metodo.ejemplo}</td>  
    <td>${metodo.resultado}</td>
  </tr>`);
});

const ejemplo = {
  metodo: "",
  descripcion: "",
  ejemplo: ``,
  resultado: "",
};
