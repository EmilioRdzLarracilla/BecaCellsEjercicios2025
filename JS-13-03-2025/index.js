//js para colocar los valores de la expresion y la salida en consola 

// trulhy - and 

const trulhyAND = [
    {expresion: "1 && 'Hola'", resultado: 1 && "Hola"},
    {expresion: "true && 'Texto'", resultado: true && "Texto"},
    {expresion: "[] && 'Array no vacío'", resultado: [] && "Array no vacío"},
    {expresion: "{} && 'Objeto vacío'", resultado: {} && "Objeto vacío"},
    {expresion: "42 && 'Número positivo'", resultado: 42 && "Número positivo"},
    {expresion: "'0' && 'String con cero'", resultado: '0' && "String con cero"},
    {expresion: "'false' && 'String con false'", resultado: 'false' && "String con false"},
    {expresion: "Infinity && 'Número infinito'", resultado: Infinity && "Número infinito"},
    {expresion: "-1 && 'numero negativo'", resultado: -1 && "Número negativo"},
    {expresion: "new Date() && 'Fecha válida'", resultado: new Date() && "Fecha válida"}
    ];

const trulhyAndTbody = document.querySelector('#trulhyand tbody');

trulhyAND.forEach(valor => {
    const row = document.createElement('tr');

    const expreCell = document.createElement('td');
    expreCell.textContent = valor.expresion;

    const resultCell  =document.createElement('td');
    resultCell.textContent = valor.resultado;

    row.appendChild(expreCell);
    row.appendChild(resultCell);
    trulhyAndTbody.appendChild(row);
});

// falsy -and

const falsyAND = [
    { expresion: "0 && 'Cero'", resultado: 0 && "Cero" },
    { expresion: "false && 'Falso'", resultado: false && "Falso" },
    { expresion: "'' && 'String vacío'", resultado: "" && "String vacío" },
    { expresion: "null && 'Nulo'", resultado: null && "Nulo" },
    { expresion: "undefined && 'Indefinido'", resultado: undefined && "Indefinido" },
    { expresion: "NaN && 'No es un número'", resultado: NaN && "No es un número" },
    { expresion: "0n && 'BigInt cero'", resultado: 0n && "BigInt cero" },
    { expresion: "false && null", resultado: false && null },
    { expresion: "undefined && NaN", resultado: undefined && NaN },
    { expresion: "0 && ''", resultado: 0 && "" }
];

const falsyAndTbody = document.querySelector('#falsyand tbody');

falsyAND.forEach(valor1 => {
    const row1 = document.createElement('tr');

    const expreCell1 = document.createElement('td');
    expreCell1.textContent = valor1.expresion;

    const resultCell1  = document.createElement('td');
    resultCell1.textContent = valor1.resultado;

    row1.appendChild(expreCell1);
    row1.appendChild(resultCell1);
    falsyAndTbody.appendChild(row1);
});


// true - and

const trueAND = [
    { expresion: "true && true", resultado: true && true },
    { expresion: "1 === 1 && 2 > 0", resultado: 1 === 1 && 2 > 0 },
    { expresion: `"hola".length > 0 && "mundo".length < 10`, resultado: "hola".length > 0 && "mundo".length < 10 },
    { expresion: "[] instanceof Array && {} instanceof Object", resultado: [] instanceof Array && {} instanceof Object },
    { expresion: "!!'string' && !!42", resultado: !!"string" && !!42 },
    { expresion: "Math.PI > 3 && Math.E < 3", resultado: Math.PI > 3 && Math.E < 3 },
    { expresion: "new Date().getFullYear() > 2000 && new Date().getFullYear() < 2100", resultado: new Date().getFullYear() > 2000 && new Date().getFullYear() < 2100 },
    { expresion: "10 > 5 && 5 < 10", resultado: 10 > 5 && 5 < 10 },
    { expresion: 'typeof "texto" === "string" && typeof 123 === "number"',resultado: typeof "texto" === "string" && typeof 123 === "number" },
    { expresion: "!![] && !!{}", resultado: !![] && !!{} }
];

const trueAndTbody = document.querySelector('#trueand tbody');

trueAND.forEach(valor2 => {
    const row2 = document.createElement('tr');

    const expreCell2 = document.createElement('td');
    expreCell2.textContent = valor2.expresion;

    const resultCell2  = document.createElement('td');
    resultCell2.textContent = valor2.resultado;

    row2.appendChild(expreCell2);
    row2.appendChild(resultCell2);
    trueAndTbody.appendChild(row2);
});


//false - and

const falseAND = [
    { expresion: "false && true", resultado: false && true },
    { expresion: "0 > 1 && 1 < 0", resultado: 0 > 1 && 1 < 0 },
    { expresion: "\"\" && 'hola'", resultado: "" && "hola" },
    { expresion: "null && undefined", resultado: null && undefined },
    { expresion: "NaN && 100", resultado: NaN && 100 },
    { expresion: "0n && 'BigInt'", resultado: 0n && "BigInt" },
    { expresion: "[] === [] && {} === {}", resultado: [] === [] && {} === {} },
    { expresion: "true && false", resultado: true && false },
    { expresion: "5 > 10 && 10 < 5", resultado: 5 > 10 && 10 < 5 },
    { expresion: "!true && !!false", resultado: !true && !!false }
];

const falseAndTbody = document.querySelector('#falseand tbody');

falseAND.forEach(valor3 => {
    const row3 = document.createElement('tr');

    const expreCell3 = document.createElement('td');
    expreCell3.textContent = valor3.expresion;

    const resultCell3  = document.createElement('td');
    resultCell3.textContent = valor3.resultado;

    row3.appendChild(expreCell3);
    row3.appendChild(resultCell3);
    falseAndTbody.appendChild(row3);
});


//truthy - or

const trulhyOR = [
    { expresion: "1 || 'Hola'", resultado: 1 || "Hola" },
    { expresion: "true || 'Texto'", resultado: true || "Texto" },
    { expresion: "[] || 'Array no vacío'", resultado: [] || "Array no vacío" },
    { expresion: "{} || 'Objeto vacío'", resultado: {} || "Objeto vacío" },
    { expresion: "42 || 'Número positivo'", resultado: 42 || "Número positivo" },
    { expresion: "'0' || 'String con cero'", resultado: "0" || "String con cero" },
    { expresion: "'false' || 'String con false'", resultado: "false" || "String con false" },
    { expresion: "Infinity || 'Número infinito'", resultado: Infinity || "Número infinito" },
    { expresion: "-1 || 'Número negativo'", resultado: -1 || "Número negativo" },
    { expresion: "new Date() || 'Fecha válida'", resultado: new Date() || "Fecha válida" }
];

const trulhyORTbody = document.querySelector('#trulhyor tbody');

trulhyOR.forEach(valor4 => {
    const row4 = document.createElement('tr');

    const expreCell4 = document.createElement('td');
    expreCell4.textContent = valor4.expresion;

    const resultCell4  = document.createElement('td');
    resultCell4.textContent = valor4.resultado;

    row4.appendChild(expreCell4);
    row4.appendChild(resultCell4);
    trulhyORTbody.appendChild(row4);
});

// falsy - or 

const falsyOR = [
    { expresion: "0 || false", resultado: 0 || false },
    { expresion: "false || 0", resultado: false || 0 },
    { expresion: "'' || null", resultado: "" || null },
    { expresion: "null || undefined", resultado: null || undefined },
    { expresion: "undefined || NaN", resultado: undefined || NaN },
    { expresion: "NaN || 0", resultado: NaN || 0 },
    { expresion: "0n || false", resultado: 0n || false },
    { expresion: "null || ''", resultado: null || "" },
    { expresion: "0 || ''", resultado: 0 || "" },
    { expresion: "undefined || NaN", resultado: undefined || NaN }
];

const falsyORTbody = document.querySelector('#falsyor tbody');

falsyOR.forEach(valor5 => {
    const row5 = document.createElement('tr');

    const expreCell5 = document.createElement('td');
    expreCell5.textContent = valor5.expresion;

    const resultCell5  = document.createElement('td');
    resultCell5.textContent = valor5.resultado;

    row5.appendChild(expreCell5);
    row5.appendChild(resultCell5);
    falsyORTbody.appendChild(row5);
});


// true - or

const trueOR = [
    { expresion: "true || false", resultado: true || false },
    { expresion: "1 === 1 || 2 < 0", resultado: 1 === 1 || 2 < 0 },
    { expresion: "'hola'.length > 0 || 'mundo'.length < 10", resultado: "hola".length > 0 || "mundo".length < 10 },
    { expresion: "[] instanceof Array || {} instanceof Object", resultado: [] instanceof Array || {} instanceof Object },
    { expresion: "!!'string' || !!42", resultado: !!"string" || !!42 },
    { expresion: "Math.PI > 3 || Math.E > 3", resultado: Math.PI > 3 || Math.E > 3 },
    { expresion: "new Date().getFullYear() > 2000 || new Date().getFullYear() < 2100", resultado: new Date().getFullYear() > 2000 || new Date().getFullYear() < 2100 },
    { expresion: "10 > 5 || 5 > 10", resultado: 10 > 5 || 5 > 10 },
    { expresion: "typeof 'texto' === 'string' || typeof 123 === 'boolean'", resultado: typeof "texto" === "string" || typeof 123 === "boolean" },
    { expresion: "!![] || !!{}", resultado: !![] || !!{} }
];

const trueORTbody = document.querySelector('#trueor tbody');

trueOR.forEach(valor6 => {
    const row6 = document.createElement('tr');

    const expreCell6 = document.createElement('td');
    expreCell6.textContent = valor6.expresion;

    const resultCell6  = document.createElement('td');
    resultCell6.textContent = valor6.resultado;

    row6.appendChild(expreCell6);
    row6.appendChild(resultCell6);
    trueORTbody.appendChild(row6);
});

// false - or

const falseOR = [
    { expresion: "false || false", resultado: false || false },
    { expresion: "0 > 1 || 1 < 0", resultado: 0 > 1 || 1 < 0 },
    { expresion: "'' || ''", resultado: "" || "" },
    { expresion: "null || null", resultado: null || null },
    { expresion: "NaN || NaN", resultado: NaN || NaN },
    { expresion: "0n || 0", resultado: 0n || 0 },
    { expresion: "[] === [] || {} === {}", resultado: [] === [] || {} === {} },
    { expresion: "false || false", resultado: false || false },
    { expresion: "5 > 10 || 10 < 5", resultado: 5 > 10 || 10 < 5 },
    { expresion: "!true || !!false", resultado: !true || !!false }
];


const falseORTbody = document.querySelector('#falseor tbody');

falseOR.forEach(valor7 => {
    const row7 = document.createElement('tr');

    const expreCell7 = document.createElement('td');
    expreCell7.textContent = valor7.expresion;

    const resultCell7  = document.createElement('td');
    resultCell7.textContent = valor7.resultado;

    row7.appendChild(expreCell7);
    row7.appendChild(resultCell7);
    falseORTbody.appendChild(row7);
});


// trthy - not

const trulhyNot = [
    {expresion:"!!1", resultado: !!1},
    {expresion:"!!'Hola'",resultado: !!'Hola'},
    {expresion:"!![]", resultado: !![] },
    {expresion:"!!{}", resultado: !!{}},
    {expresion:"!!42", resultado: !42 },
    {expresion:"!!'0'", resultado: !'0'},
    {expresion:"!!'false'", resultado: !!'false' },
    {expresion:"!!Infinity", resultado: !!Infinity },
    {expresion:"!!-1", resultado: !!-1},
    {expresion:"!!new Date()",resultado: !!new Date()}
];

const trulhyNotTbody = document.querySelector('#trulhynot tbody');

trulhyNot.forEach(valor8 => {
    const row8 = document.createElement('tr');

    const expreCell8 = document.createElement('td');
    expreCell8.textContent = valor8.expresion;

    const resultCell8  = document.createElement('td');
    resultCell8.textContent = valor8.resultado;

    row8.appendChild(expreCell8);
    row8.appendChild(resultCell8);
    trulhyNotTbody.appendChild(row8);
});

// falsy - not

const falsyNot = [
    { expresion: "!!0", resultado: !!0 },
    { expresion: "!!false", resultado: !!false },
    { expresion: "!!''", resultado: !!"" },
    { expresion: "!!null", resultado: !!null },
    { expresion: "!!undefined", resultado: !!undefined },
    { expresion: "!!NaN", resultado: !!NaN },
    { expresion: "!!0n", resultado: !!0n },
    { expresion: "!!(null || undefined)", resultado: !!(null || undefined) },
    { expresion: "!!(0 && false)", resultado: !!(0 && false) },
    { expresion: "!!(NaN && null)", resultado: !!(NaN && null) }
];

const falsyNotTbody = document.querySelector('#falsynot tbody');

falsyNot.forEach(valor9 => {
    const row9 = document.createElement('tr');

    const expreCell9 = document.createElement('td');
    expreCell9.textContent = valor9.expresion;

    const resultCell9  = document.createElement('td');
    resultCell9.textContent = valor9.resultado;

    row9.appendChild(expreCell9);
    row9.appendChild(resultCell9);
    falsyNotTbody.appendChild(row9);
});

// true - not

const trueNot = [
    { expresion: "!false", resultado: !false },
    { expresion: "!(0 > 1)", resultado: !(0 > 1) },
    { expresion: "!''", resultado: !"" },
    { expresion: "!null", resultado: !null },
    { expresion: "!undefined", resultado: !undefined },
    { expresion: "!NaN", resultado: !NaN },
    { expresion: "!0", resultado: !0 },
    { expresion: "!0n", resultado: !0n },
    { expresion: "!(5 < 3)", resultado: !(5 < 3) },
    { expresion: "!(null && undefined)", resultado: !(null && undefined) }
];

const trueNotTbody = document.querySelector('#truenot tbody');

trueNot.forEach(valor => {
    const row = document.createElement('tr');

    const expreCell = document.createElement('td');
    expreCell.textContent = valor.expresion;

    const resultCell  = document.createElement('td');
    resultCell.textContent = valor.resultado;

    row.appendChild(expreCell);
    row.appendChild(resultCell);
    trueNotTbody.appendChild(row);
});

const falseNot = [
    { expresion: "!true", resultado: !true },
    { expresion: "!1", resultado: !1 },
    { expresion: "!'Texto'", resultado: !"Texto" },
    { expresion: "![]", resultado: ![] },
    { expresion: "!{}", resultado: !{} },
    { expresion: "!42", resultado: !42 },
    { expresion: "!'false'", resultado: !"false" },
    { expresion: "!Infinity", resultado: !Infinity },
    { expresion: "!-1", resultado: !-1 },
    { expresion: "!new Date()", resultado: !new Date() }
];


// false - not

const falseNotTbody = document.querySelector('#falsenot tbody');

falseNot.forEach(valor => {
    const row = document.createElement('tr');

    const expreCell = document.createElement('td');
    expreCell.textContent = valor.expresion;

    const resultCell  = document.createElement('td');
    resultCell.textContent = valor.resultado;

    row.appendChild(expreCell);
    row.appendChild(resultCell);
    falseNotTbody.appendChild(row);
});




