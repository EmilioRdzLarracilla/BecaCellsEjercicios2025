console.log("tabla de ejercicios");

const d = document;
const tbody = d.querySelector(".tbody-logic");
let expresionesAndArray = [];

const expresiones = [
  {
    uno: "comparador AND",
    operador: "",
    dos: "",
    resultado: "",
    clase: true,
  },
  {
    uno: "![]",
    operador: "&&",
    dos: "!{}",
    resultado: ![] && !{},
  },
  {
    uno: "!''",
    operador: "&&",
    dos: "!5",
    resultado: !"" && !5,
  },
  {
    uno: "![1, 2, 3, 4, 5].reduce((acc, item) => acc + item)",
    operador: "&&",
    dos: "[1, 3, 5, 7, 9].includes(2)",
    resultado:
      ![1, 2, 3, 4, 5].reduce((acc, item) => acc + item) &&
      !![1, 3, 5, 7, 9].includes(2),
  },
  {
    uno: "!new Date()",
    operador: "&&",
    dos: "!new Map()",
    resultado: !new Date() && !new Map(),
  },
  {
    uno: "!new Set()",
    operador: "&&",
    dos: "!new Array()",
    resultado: !new Set() && !new Array(),
  },
  {
    uno: "!!undefined",
    operador: "&&",
    dos: "!!null",
    resultado: !!undefined && !!null,
  },
  {
    uno: "!{nombre : 'emilio'}",
    operador: "&&",
    dos: "!10",
    resultado: !{ nombre: "emilio" } && !!10,
  },
  {
    uno: "!!0",
    operador: "&&",
    dos: "!!false",
    resultado: !!0 && !!false,
  },
  {
    uno: "comparador OR",
    operador: "",
    dos: "",
    resultado: "",
    clase: true,
  },

  {
    uno: "!!0",
    operador: "||",
    dos: "false",
    resultado: !!0 || false,
  },
  {
    uno: "!![]} ",
    operador: "||",
    dos: "!!{}",
    resultado: !![] || !!{},
  },
  {
    uno: "!![]",
    operador: "||",
    dos: "!9",
    resultado: !![] || !9,
  },
  {
    uno: `!!""`,
    operador: "||",
    dos: "!new Date()",
    resultado: !!"" || !new Date(),
  },
  {
    uno: "!![1, 2, 3, 4, 5].reduce((acc, item) => acc + item) ",
    operador: "||",
    dos: `
      !!(function () {
        return 7 ** 2;
      })()
    
    `,
    resultado:
      !![1, 2, 3, 4, 5].reduce((acc, item) => acc + item) ||
      !!(function () {
        return 7 ** 2;
      })(),
  },
  {
    uno: "!undefined",
    operador: "||",
    dos: "!null",
    resultado: !undefined || !null,
  },
  {
    uno: "!!uno",
    operador: "||",
    dos: "!!dos",
    resultado: !!"uno" || !!"dos",
  },
  {
    uno: "!Date.now",
    operador: "||",
    dos: "!! Math.E",
    resultado: !Date.now || !!Math.E,
  },
  {
    uno: "![false, true, false, true, true].map((el) => !el)",
    operador: "||",
    dos: " !!Math.floor(0.4)",
    resultado:
      ![false, true, false, true, true].map((el) => !el) || !!Math.floor(0.4),
  },

  {
    uno: "operador de corto circuito &&",
    operador: "",
    dos: "",
    resultado: "",
    clase: true,
  },

  {
    uno: "[false, true, false, true, true].map((el) => !el)",
    operador: "&&",
    dos: " Math.floor(0.4)",
    resultado:
      [false, true, false, true, true].map((el) => !el) && Math.floor(0.4),
  },
  {
    uno: "Date.now()",
    operador: "&&",
    dos: "[10, 20, 40, !Math.E].reduce((acc, item) => acc * item)",
    resultado:
      Date.now() && [10, 20, 40, !Math.E].reduce((acc, item) => acc * item),
  },
  {
    uno: "hola",
    operador: "&&",
    dos: "adios",
    resultado: "hola" && "adios",
  },
  {
    uno: "Date.now",
    operador: "&&",
    dos: " undefined",
    resultado: Date.now && undefined,
  },
  {
    uno: `{ nombre: "emilio" }`,
    operador: "&&",
    dos: "true",
    resultado: { nombre: "emilio" } && true,
  },
  {
    uno: `["a", "b", "c", "d"].includes("f")`,
    operador: "&&",
    dos: "[1, 2, 5, 7, 9].find(8)",
    resultado: ["a", "b", "c", "d"].includes("f") && [1, 2, 5, 7, 9].find(8),
  },
  {
    uno: " Math.E ** 2",
    operador: "&&",
    dos: `8 + "6"`,
    resultado: Math.E ** 2 && 8 + "6",
  },
  {
    uno: "new Map().size",
    operador: "&&",
    dos: "console.log(false)",
    resultado: new Map().size && console.log(false),
  },
  {
    uno: ` 10 === "10"`,
    operador: "&&",
    dos: "5 !== 6",
    resultado: 10 === "10" && 5 !== 6,
  },

  {
    uno: `NaN`,
    operador: "&&",
    dos: `{ clave: "valor" }`,
    resultado: NaN && { clave: "valor" },
  },

  {
    uno: "operador de corto circuito ||",
    operador: "",
    dos: "",
    resultado: "",
    clase: true,
  },

  {
    uno: `NaN`,
    operador: "||",
    dos: `{ clave: "valor" }.clave`,
    resultado: NaN || { clave: "valor" }.clave,
  },

  {
    uno: ` ""`,
    operador: "||",
    dos: `new Date()`,
    resultado: "" || new Date(),
  },

  {
    uno: `hola`,
    operador: "||",
    dos: `adios`,
    resultado: "hola" || "adios",
  },
  {
    uno: "false",
    operador: "||",
    dos: `0`,
    resultado: false || 0,
  },
  {
    uno: `"hola".split("") `,
    operador: "||",
    dos: `[1, 2, 3, 4, 5]`,
    resultado: "hola".split("") || [1, 2, 3, 4, 5],
  },
  {
    uno: `"0"`,
    operador: "||",
    dos: `"NaN"`,
    resultado: "0" || "NaN",
  },
  {
    uno: `["uno", "dos", "tres", "cuatro"].find((palabra) => palabra.length > 3)`,
    operador: "||",
    dos: "false",
    resultado:
      ["uno", "dos", "tres", "cuatro"].find((palabra) => palabra.length > 3) ||
      false,
  },
  {
    uno: `"0"`,
    operador: "||",
    dos: `"NaN"`,
    resultado: "0" || "NaN",
  },
  {
    uno: `new Date().getFullYear() `,
    operador: "||",
    dos: `new Map()`,
    resultado: new Date().getFullYear() || new Map(),
  },
  {
    uno: `(() => "hola")()`,
    operador: "||",
    dos: `(() => "adios")()`,
    resultado: (() => "hola")() || (() => "adios")(),
  },

  {
    uno: "operador de comparación no estricto ==",
    clase: true,
  },

  {
    uno: `10`,
    operador: "==",
    dos: `"10"`,
    resultado: 10 == "10",
  },
  {
    uno: `{}`,
    operador: "==",
    dos: `{}`,
    resultado: {} == {},
  },

  {
    uno: `[]`,
    operador: "==",
    dos: `[]`,
    resultado: [] == [],
  },
  {
    uno: `0`,
    operador: "==",
    dos: `false`,
    resultado: 0 == false,
  },
  {
    uno: `null`,
    operador: "==",
    dos: `undefined`,
    resultado: null == undefined,
  },
  {
    uno: "``",
    operador: "==",
    dos: `""`,
    resultado: `` == "",
  },
  {
    uno: ` console.log("hola")`,
    operador: "==",
    dos: ` console.log((() => "hola")())`,
    resultado: console.log("hola") == console.log((() => "hola")()),
  },
  {
    uno: `"larracilla.".indexOf("c")`,
    operador: "==",
    dos: `5`,
    resultado: "larracilla".indexOf("c") == 5,
  },
  {
    uno: `[]`,
    operador: "==",
    dos: `"[]"`,
    resultado: [] == "[]",
  },
  {
    uno: `5+8`,
    operador: "==",
    dos: `"5+8"`,
    resultado: "5+8" == 5 + 8,
  },

  {
    uno: "operador de comparación  estricto  ===",
    clase: true,
  },
  {
    uno: `"Emilio".toUpperCase()`,
    operador: "===",
    dos: `"EMILIO"`,
    resultado: "Emilio".toUpperCase() === "EMILIO",
  },
  {
    uno: `1/2`,
    operador: "===",
    dos: `0.5`,
    resultado: 1 / 2 === 0.5,
  },
  {
    uno: `Math.sqrt(16)`,
    operador: "===",
    dos: `16 ** 0.5`,
    resultado: Math.sqrt(16) === 16 ** 0.5,
  },
  {
    uno: `[1, 2, 3, 4, 5, 6, 7, 8].map((el) => el ** 2).find((el) => el == 25)`,
    operador: "===",
    dos: `25`,
    resultado:
      [1, 2, 3, 4, 5, 6, 7, 8].map((el) => el ** 2).find((el) => el === 25) ===
      25,
  },
  {
    uno: `"true"`,
    operador: "===",
    dos: `true`,
    resultado: "true" === true,
  },
  {
    uno: `undefined`,
    operador: "===",
    dos: `NaN`,
    resultado: undefined === NaN,
  },
  {
    uno: `infinity`,
    operador: "===",
    dos: `100/0`,
    resultado: Infinity === 100 / 0,
  },
  {
    uno: `{ a: 1 }.a`,
    operador: "===",
    dos: ` { b: 1 }.b`,
    resultado: { a: 1 }.a === { b: 1 }.b,
  },
  {
    uno: `Infinity / Infinity`,
    operador: "===",
    dos: `Infinity`,
    resultado: Infinity / Infinity === Infinity,
  },
  {
    uno: `0/ 0`,
    operador: "===",
    dos: `undefined`,
    resultado: 0 / 0 === undefined,
  },
];

expresionesAndArray = expresiones.map((expresion) =>
  expresion.clase
    ? (tbody.innerHTML += `<tr><td class ="rowYellow center" colspan="4">${expresion.uno}</td></tr>`)
    : (tbody.innerHTML += `<tr><td>${expresion.uno}</td><td class="center">${expresion.operador}</td><td>${expresion.dos}</td><td>${expresion.resultado}</td></tr>`)
);
console.log(expresiones);
console.log(expresionesAndArray);
