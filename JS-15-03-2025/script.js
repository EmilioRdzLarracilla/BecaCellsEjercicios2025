// Metodos de object.prototype

// 1.- hasOwnProperty(prop); verifica si el objeto tiene una propiedad espeifica
let persona = {nombre: "saul", edad: 25};
console.log(persona.hasOwnProperty("nombre")); //true
console.log(persona.hasOwnProperty("sexo"));  //false


// 2.- toString(); convierte un objeto en una cadena de texto
const  fecha = new Date();
console.log(fecha.toString()); // Mon Mar 17 2025 15:27:02 GMT-0600 (hora estándar central)


// 3.- valueOf(); retorna el valor primitivo de un objeto
const num = new Number(25);
const str = new String("deporte");
console.log(num.valueOf()); //25
console.log(str.valueOf()); //"deporte"


// 4.- isPrototypeOf(obj); verifica  si un objeto esta en la cadena de prototipos de otro
function Persona(){}
const saul = new Persona();
console.log(Persona.prototype.isPrototypeOf(saul)); //true
console.log(Object.prototype.isPrototypeOf(saul)); // true (todos los objetos heredan de Object)


// 5.- propertyIsEnumerable(prop); vrefica si una propiedad es enumerable (puedes ser recorrida con -8for...in)
const carro = {marca: "Ford", modelo: "j¡mustang"};
console.log(carro.propertyIsEnumerable("marca")); //true
//  propiedad no enumerable 
Object.defineProperty(carro, "anio", {value: 2025, enumerable:false}); //false
console.log(carro.propertyIsEnumerable("anio"));


// 6.- to LocaleString(); convierte un objeto en una cadena dependiendo del idioma y la configuracion regional
const precio = 2923.50;
console.log(precio.toLocaleString("es-ES", { style:"currency", currency: "USD"})); // 2923.59 US$


// 7.- __proto__ o mejor Object.getPrototypeOf() para obtener el proto  y Object.setProtottypeOf() psrs cambiar el prototipo de un objeto
const animal = {tipo: "mamifero"};
const perro = {raza: "bullterrier"};
// __proto__
perro.__proto__ = animal;
console.log(perro.tipo); // "mamifero"
console.log(Object.getPrototypeOf(perro) === animal); //true
// Object.getPrototypeOf()
const gato = {sonido: "guau"};
const felino = Object.create(gato);
console.log(Object.getPrototypeOf(felino) === gato); // true
console.log(felino.sonido); // "guau" heredado del objeto gato
// Object.setPrototypeOf()
const vehiculo = {tipo: "transporte"};
const coche = {marca: "bmw"};
Object.setPrototypeOf(coche, vehiculo);
console.log(coche.tipo); //"transporte" heredado de vehiculo
console.log(Object.getPrototypeOf(coche) === vehiculo); // true


// tabla de expresiones y resultados del metodo Object.prototype
const resulObjectProto = [
    { expresion: 'persona.hasOwnProperty("nombre")', resultado: persona.hasOwnProperty("nombre") }, // true
    { expresion: 'persona.hasOwnProperty("sexo")', resultado: persona.hasOwnProperty("sexo") }, // false

    { expresion: 'fecha.toString()', resultado: fecha.toString() }, // "Mon Mar 17 2025 15:27:02 GMT-0600 (hora estándar central)"

    { expresion: 'num.valueOf()', resultado: num.valueOf() }, // 25
    { expresion: 'str.valueOf()', resultado: str.valueOf() }, // "deporte"

    { expresion: 'Persona.prototype.isPrototypeOf(saul)', resultado: Persona.prototype.isPrototypeOf(saul) }, // true
    { expresion: 'Object.prototype.isPrototypeOf(saul)', resultado: Object.prototype.isPrototypeOf(saul) }, // true

    { expresion: 'carro.propertyIsEnumerable("marca")', resultado: carro.propertyIsEnumerable("marca") }, // true
    { expresion: 'carro.propertyIsEnumerable("anio")', resultado: carro.propertyIsEnumerable("anio") }, // false

    { expresion: 'precio.toLocaleString("es-ES", { style: "currency", currency: "USD" })', resultado: precio.toLocaleString("es-ES", { style: "currency", currency: "USD" }) }, // "2.923,50 US$"

    { expresion: 'perro.tipo', resultado: perro.tipo }, // "mamifero"
    { expresion: 'Object.getPrototypeOf(perro) === animal', resultado: Object.getPrototypeOf(perro) === animal }, // true

    { expresion: 'Object.getPrototypeOf(felino) === gato', resultado: Object.getPrototypeOf(felino) === gato }, // true
    { expresion: 'felino.sonido', resultado: felino.sonido }, // "guau"

    { expresion: 'coche.tipo', resultado: coche.tipo }, // "transporte"
    { expresion: 'Object.getPrototypeOf(coche) === vehiculo', resultado: Object.getPrototypeOf(coche) === vehiculo } // true
];


// Metodos de Array.prototype 

// Metodos que modifican el array original

// 1.- push(item); agrega un elemento al final
let animales = ["perro", "gato", "perico"];
animales.push("zorro", "tortuga");
console.log(animales); // ["perro", "gato", "perico", "zorro", "tortuga"]


// 2.- pop(); elimina el ultimo elemento
let colores = ["rojo", "verde", "azul"];
colores.pop();
console.log(colores); // ["rojo", "verde"]


// 3.-shift(); elimina le primer elemento
let numeros = [1,2,3,4,5];
numeros.shift();
console.log(numeros); //[2,3,4,5]

// 4.-unshift(item); agrega un elemento al inicio 
let letras = [ "b", "c", "d"];
letras.unshift("a");
console.log(letras); // ["a", "b", "c", "d"]


// 5.-splice(index, num, item1 , item2, ...) agrega o elimina elementos en una posicion especifica
let animales1 = ["perro", "gato", "elefante"];
animales1.splice(1,1,"tigre");  //reemplaza "gato" con "tigre"
console.log(animales1); // ["perro", "tigre", "elefante"]


// 6.-sort() ordena los elementos 
let nombres = [ "carlos", "ana", "beatriz"];
nombres.sort();
console.log(nombres); //["ana", "beatriz", "carlos"]

let numeros1 = [30,20,40,10,50];
numeros1.sort((a, b) => a-b);
console.log(numeros1); //[10,20,30,40,50]

// 7.-reverse() invierte el orden de los elementos 
let dias = ["lunes", "martes", "miercoles"];
dias.reverse();
console.log(dias); // ["mieroles", "martes", "lunes"]



// Metodos que no modifican el array original

// 8.-slice(start, end)  extrae una parte el array
let numeros2 = [1,2,3,4,5];
let subArray = numeros2.slice(1,4);
console.log(subArray); // [2,3,4]


// 9.-concat(array2) une dos arrays
let a =[1,2,3];
let b = [4,5,6];
let resultado = a.concat(b);
console.log(resultado); //[1,2,3,4,5,6]

// 10.-join(separator) une los elemtos en un string
let palabras = ["Hola", "Mundo"];
let resultado1 = palabras.join(" ");
console.log(resultado1); // "Hola Mundo" 

//indexOf(item) encuentra la primera posicion de un elemento
let frutas = ["manzana", "pera", "uva", "pera"];
console.log(frutas.indexOf("pera")); // 1 (la primera aparicion de "pera")
console.log(frutas.indexOf("platano")); //-1 (no existe)

// las indexOf(item) encuentra la ultima aparicion de un elemento 
let frutas1 = ["manzana", "pera", "uva", "pera"];
console.log(frutas1.lastIndexOf("pera"));  // 3 (la ultima aparicion de "pera")
console.log(frutas1.lastIndexOf("platano")); // -1 no existe

// includes(item) verifica si el array contiene un valor
let numeros3 = [10,20,30,40];
console.log(numeros3.includes(20)); //true
console.log(numeros3.includes(50)); //false


// Metodos de iteracion

// forEach(callback) itera sobre cada elemento y ejecuta la funcion
let numeros4 = [1,2,3,4,5];
numeros4.forEach(num => {
    console.log(num * 2); //multiplica cada numero por 2 
});


// map(callback) crea un nuevo array transfomado
let numeros5 = [1,2,3,4,5];
let duplicados = numeros5.map(num => num * 2);
console.log(duplicados); // [2,4,6,8,10]


// filter(callback) crea un nuevo array con elementos que cumplen una condicion
let numeros6 = [1,2,3,4,5,6,7,8,9];
let pares = numeros6.filter(num => num % 2 === 0);
console.log(pares); // [2,4,6,8]

// reduce(calback, valorInicial) reduce el arraya un solo valor
let numeros7 = [1,2,3,4,5];
let suma = numeros7.reduce((acumulador, num) => acumulador + num, 0);
console.log(suma); // 15

// find(callback) rncuentra el primer elemento que cumple con la condiocion
let personas = [
    {nombre: "ana", edad: 20 },
    {nombre: "pedro", edad: 23 },
    {nombre: "jan", edad: 45}
];
let personamayor =  personas.find(persona => persona.edad > 21);
console.log(personamayor); //{nombre: 'pedro', edad: 23}


// findIndex(callback) retorna la posicion del primer elemento que cumple una condicion
let numeros8 = [5,12,6,7,98,34];
let indice = numeros8.findIndex(num => num > 10);
console.log(indice); // 1


//every(callback) cerifica si todos los elemetos cumplen una condicion
let edades = [25,30,35,40];
let adultos  = edades.every(edad => edad >= 18);
console.log(adultos); //true


// some(callback) verifivca si al menos un elemento cumple una condicion
let numeros9 = [2,3,6,8,9];
let impar = numeros9.some(num => num % 2 !== 0);
console.log(impar); // true porque 3 y 9 son impares


// tabla de expresiones y resultados del metodo Array.prototype
const resulArrayProto = [
    { expresion: `animales.push("zorro", "tortuga")`, resultado: ["perro", "gato", "perico", "zorro", "tortuga"] },
    { expresion: `colores.pop()`, resultado: ["rojo", "verde"] },
    { expresion: `numeros.shift()`, resultado: [2, 3, 4, 5] },
    { expresion: `letras.unshift("a")`, resultado: ["a", "b", "c", "d"] },
    { expresion: `animales1.splice(1,1,"tigre")`, resultado: ["perro", "tigre", "elefante"] },
    { expresion: `nombres.sort()`, resultado: ["ana", "beatriz", "carlos"] },
    { expresion: `numeros1.sort((a, b) => a - b)`, resultado: [10, 20, 30, 40, 50] },
    { expresion: `dias.reverse()`, resultado: ["miércoles", "martes", "lunes"] },
    { expresion: `numeros2.slice(1,4)`, resultado: [2, 3, 4] },
    { expresion: `a.concat(b)`, resultado: [1, 2, 3, 4, 5, 6] },
    { expresion: `palabras.join(" ")`, resultado: "Hola Mundo" },
    { expresion: `frutas.indexOf("pera")`, resultado: 1 },
    { expresion: `frutas.indexOf("platano")`, resultado: -1 },
    { expresion: `frutas1.lastIndexOf("pera")`, resultado: 3 },
    { expresion: `frutas1.lastIndexOf("platano")`, resultado: -1 },
    { expresion: `numeros3.includes(20)`, resultado: true },
    { expresion: `numeros3.includes(50)`, resultado: false },
    { expresion: `numeros4.forEach(num => num * 2)`, resultado: [2, 4, 6, 8, 10] }, // Simulación
    { expresion: `numeros5.map(num => num * 2)`, resultado: [2, 4, 6, 8, 10] },
    { expresion: `numeros6.filter(num => num % 2 === 0)`, resultado: [2, 4, 6, 8] },
    { expresion: `numeros7.reduce((acumulador, num) => acumulador + num, 0)`, resultado: 15 },
    { expresion: `personas.find(persona => persona.edad > 21)`, resultado: { nombre: "pedro", edad: 23 } },
    { expresion: `numeros8.findIndex(num => num > 10)`, resultado: 1 },
    { expresion: `edades.every(edad => edad >= 18)`, resultado: true },
    { expresion: `numeros9.some(num => num % 2 !== 0)`, resultado: true }
];




// Metodos de String.prototype

//charAt(index) obtiene el caracter en una posicion
let texto = "hola";
console.log(texto.charAt(1)); // "o"
console.log(texto.charAt(3)); // "a"

//charCodeAt(index) obtiene el codigo ASCII de un caracter
console.log("Hola".charCodeAt(0)); // 72 (codigo ASCCI de "H")
console.log("Hola".charCodeAt(3)); // 97 (codigo ASCII de "a")

//concat(str1, str2,...) une cadenas
let saludo = "Hola".concat(" ", "Mundo","!" );
console.log(saludo); //"Hola Mundo"

// includes(substring) verifica si una cadena contiene otra
let frase = "Javascript es genial";
console.log(frase.includes("genial")); //true
console.log(frase.includes("pyhton")); //false


//indexOf(dubstring) encuenta la posicion de una subcadena
let mensaje = "aprender javascript es divertido";
console.log(mensaje.indexOf("javascript")); // 9
console.log(mensaje.indexOf("javascript")); // -1 no se encontro la palabra


// lastIndexOf(substring) encuentra la ultima posicion de una subcadena 
let texto2 = "javascript, Typescript y mas javascript"
console.log(texto2.lastIndexOf("javascript")); //29



//slice(start, end) extrae una parte de la cadena 
let palabra = "programacion";
console.log(palabra.slice(0,6)); // "progra"
console.log(palabra.slice(-4)); // "cion"

//substring(start, end) similar a slice, pero no acepta negativos
let palabra2 = "desarrollo web";
console.log(palabra2.substring(0,10)); // "desarrollo"


//toUpperCase() convierte a mayusculas 
let texto3 = "javascript";
console.log(texto3.toUpperCase()); //"JAVASCRIPT"


//toLowerCase() convierte a minusculas
let texto4 = "HTML Y CSS";
console.log(texto4.toLowerCase()); //"html y css" 

// trim() elimina espacios en blanco al inicio y al final
let entrada = "   Hola Mundo   ";
console.log(entrada.trim()); // "Hola Mundo"   


//replace(pattern, replacement) reemplaza texto
let oracion = "me gusta javascript";
console.log(oracion.replace("javascript", "python")); // "me gusta python"

//split(separator) divide una cadena en un array
let csv = "rojo,verde,azul";
console.log(csv.split(",")); //["rojo", "verde", "azul"]


// tabla de expresiones y resultados del metodo String.prototype
const resulStringProto = [
    { expresion: '"hola".charAt(1)', resultado: "hola".charAt(1) }, // "o"
    { expresion: '"hola".charAt(3)', resultado: "hola".charAt(3) }, // "a"

    { expresion: '"Hola".charCodeAt(0)', resultado: "Hola".charCodeAt(0) }, // 72
    { expresion: '"Hola".charCodeAt(3)', resultado: "Hola".charCodeAt(3) }, // 97

    { expresion: '"Hola".concat(" ", "Mundo", "!")', resultado: "Hola".concat(" ", "Mundo", "!") }, // "Hola Mundo!"

    { expresion: '"Javascript es genial".includes("genial")', resultado: "Javascript es genial".includes("genial") }, // true
    { expresion: '"Javascript es genial".includes("python")', resultado: "Javascript es genial".includes("python") }, // false

    { expresion: '"aprender javascript es divertido".indexOf("javascript")', resultado: "aprender javascript es divertido".indexOf("javascript") }, // 9
    { expresion: '"aprender javascript es divertido".indexOf("phyton")', resultado: "aprender javascript es divertido".indexOf("phyton") }, // -1

    { expresion: '"javascript, Typescript y mas javascript".lastIndexOf("javascript")', resultado: "javascript, Typescript y mas javascript".lastIndexOf("javascript") }, // 29

    { expresion: '"programacion".slice(0,6)', resultado: "programacion".slice(0,6) }, // "progra"
    { expresion: '"programacion".slice(-4)', resultado: "programacion".slice(-4) }, // "cion"

    { expresion: '"desarrollo web".substring(0,10)', resultado: "desarrollo web".substring(0,10) }, // "desarrollo"

    { expresion: '"javascript".toUpperCase()', resultado: "javascript".toUpperCase() }, // "JAVASCRIPT"
    { expresion: '"HTML Y CSS".toLowerCase()', resultado: "HTML Y CSS".toLowerCase() }, // "html y css"

    { expresion: '"   Hola Mundo   ".trim()', resultado: "   Hola Mundo   ".trim() }, // "Hola Mundo"

    { expresion: '"me gusta javascript".replace("javascript", "python")', resultado: "me gusta javascript".replace("javascript", "python") }, // "me gusta python"

    { expresion: '"rojo,verde,azul".split(",")', resultado: "rojo,verde,azul".split(",") } // ["rojo", "verde", "azul"]
];




// Metodos de Number.prototype

//toFixed(n) redondea el numeto con n decimales
let num1 = 23.456;
console.log(num1.toFixed(2)); //23.45 redondea a dos decimale
console.log(num1.toFixed(0)); //23 sin decimales
console.log(num1.toFixed(1)); //23.4 un decimal


//toPrecision(n) redondea en n cifras significativas
let num2 = 123.456;
console.log(num2.toPrecision(4)); // 123.5 4 cifras significativas
console.log(num2.toPrecision(2)); // 1.2e+2 2 cifras significativas usa notacioncinetifica
console.log(num2.toPrecision(6)); // 123.456 contiene el numero completo


//tiExponential(n) convierte a notacion cientifica 

let num3 = 123456;
console.log(num3.toExponential(2)); // "1.23e+4" (12345 = 1.23 x 10^4)
console.log(num3.toExponential(4)); // "1.2345e+4"
console.log((0.000123).toExponential(2)); // "1.2e-4" (0.000123 = 1.23 x 10-4)

//value() retorna el valor numerico
let numObj = new Number(42);
console.log(numObj.valueOf()); // 42
console.log(typeof numObj); // "object"
console.log(typeof numObj.valueOf()); // "number"

// toString(base) convierte a striing en la base dada 
let num4 =  255;
console.log(num4.toString()); // "255" por defecto es base 10
console.log(num4.toString(2)); // "11111111" base 2 - binario 
console.log(num4.toString(8)); // "377" base 8 - octal 
console.log(num4.toString(16)); // "ff" base 16 - hexadecimal 



// tabla de expresiones y resultados del metodo Number.prototype
const resulNumberProto = [
    // toFixed(n)
    { expresion: "23.456.toFixed(2)", resultado: (23.456).toFixed(2) }, // "23.46"
    { expresion: "23.456.toFixed(0)", resultado: (23.456).toFixed(0) }, // "23"
    { expresion: "23.456.toFixed(1)", resultado: (23.456).toFixed(1) }, // "23.5"

    // toPrecision(n)
    { expresion: "123.456.toPrecision(4)", resultado: (123.456).toPrecision(4) }, // "123.5"
    { expresion: "123.456.toPrecision(2)", resultado: (123.456).toPrecision(2) }, // "1.2e+2"
    { expresion: "123.456.toPrecision(6)", resultado: (123.456).toPrecision(6) }, // "123.456"

    // toExponential(n)
    { expresion: "123456.toExponential(2)", resultado: (123456).toExponential(2) }, // "1.23e+5"
    { expresion: "123456.toExponential(4)", resultado: (123456).toExponential(4) }, // "1.2345e+5"
    { expresion: "(0.000123).toExponential(2)", resultado: (0.000123).toExponential(2) }, // "1.23e-4"

    // valueOf()
    { expresion: "new Number(42).valueOf()", resultado: new Number(42).valueOf() }, // 42
    { expresion: "typeof new Number(42)", resultado: typeof new Number(42) }, // "object"
    { expresion: "typeof new Number(42).valueOf()", resultado: typeof new Number(42).valueOf() }, // "number"

    // toString(base)
    { expresion: "255.toString()", resultado: (255).toString() }, // "255"
    { expresion: "255.toString(2)", resultado: (255).toString(2) }, // "11111111"
    { expresion: "255.toString(8)", resultado: (255).toString(8) }, // "377"
    { expresion: "255.toString(16)", resultado: (255).toString(16) } // "ff"
];





//Metodos de function.prototype

//call(thisArg, arg1, arg2, ...) llama a la funcion con un this y argumentos especificos 
function saludar(nombre, edad){
    console.log(`Hola soy ${nombre} y tengo ${edad} años`);
}
saludar.call(null, "carlos", 25); // thisArg es null

let persona1 = {
    nombre: "saul"
};
function presentar(){
    console.log(`Hola, mi nombre es ${this.nombre}`);

}
presentar.call(persona1);


//apply(thisArg, [args]) similar a call(), pero los argumentos se pasan en un array

function sumar(a,b,c) {
    return a +  b + c;
}
let resultado2 = sumar.apply(null, [3,4,5]);
console.log(resultado2);


// bind(thisArg) devulve una nueva funcion con un this fijado

let usuario = {
    nombre: "Cristian",
    edad: 25
}
function mostrarInfo() {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
}

const nuevaFuncion = mostrarInfo.bind(usuario);
nuevaFuncion();

// tabla de expresiones y resultados del metodo Function.prototype
const resulFunctionProto = [
    {
        expresion: `saludar.call(null, "carlos", 25)`,
        resultado: "Hola soy carlos y tengo 25 años"
    },
    {
        expresion: `presentar.call(persona1)`,
        resultado: "Hola, mi nombre es saul"
    },
    {
        expresion: `sumar.apply(null, [3,4,5])`,
        resultado: 12
    },
    {
        expresion: `const nuevaFuncion = mostrarInfo.bind(usuario); nuevaFuncion();`,
        resultado: "Nombre: Cristian, Edad: 25"
    }
];




//Metodos de Date.prototype

let fecha1 = new Date();
console.log(fecha1);

//getFullYear() obtiene el año
console.log(fecha1.getFullYear()); // 2025

//getMonth() obtiene el mes(0-11)
console.log(fecha1.getMonth()); // 2

//getDay() obtiene el dia de la semana ( 0-6)
console.log(fecha.getDate()); // 17

//getHours() obtiene la hora
console.log(fecha1.getHours()); // 23

//getMinutes() obtiene los minutos
console.log(fecha1.getMinutes()); //27

//getSeconds() obtiene los segundos 
console.log(fecha1.getSeconds()); //10

//getSeconds() obtiene los milisegundos 
console.log(fecha1.getMilliseconds()); //96


//toISOStrings() convierte la fecha a formato ISO
console.log(fecha1.toISOString());  // 2025-03-18T05:30:54.139Z

//toLocaleDateString() covierte la fecha a formato local 
console.log(fecha1.toLocaleDateString()); // 17/3/2025


// tabla de expresiones y resultados del metodo Date.prototype

const resulDateProto = [
    { expresion: "new Date()", resultado: fecha1 },
    { expresion: "fecha1.getFullYear()", resultado: fecha1.getFullYear() },
    { expresion: "fecha1.getMonth()", resultado: fecha1.getMonth() },
    { expresion: "fecha1.getDate()", resultado: fecha1.getDate() },
    { expresion: "fecha1.getHours()", resultado: fecha1.getHours() },
    { expresion: "fecha1.getMinutes()", resultado: fecha1.getMinutes() },
    { expresion: "fecha1.getSeconds()", resultado: fecha1.getSeconds() },
    { expresion: "fecha1.getMilliseconds()", resultado: fecha1.getMilliseconds() },
    { expresion: "fecha1.toISOString()", resultado: fecha1.toISOString() },
    { expresion: "fecha1.toLocaleDateString()", resultado: fecha1.toLocaleDateString() }
];



// Metodos de RegExp.prototype

//test(string) verifica si la expresion regular coincide con la cadena 
const regex = /\d+/; // Busca uno o mas digitos 
console.log(regex.test("Hola123")); // true
console.log(regex.test("Hola mundo")); // false


//exec(string) devuelve el primer resultado de la coincidencia 

const regex1 = /\d+/;
const resultado3   = regex1.exec("Hola 123 mundo 456");
console.log(resultado3); //["123",  index: 5, input: "Hola 123 mundo 456", group: undefined]

// tabla de expresiones y resultados del metodo RegExp.prototype

const resulRegExpProto = [
    {
        expresion: `/\\d+/.test("Hola123")`,
        resultado: /\d+/.test("Hola123") // true
    },
    {
        expresion: `/\\d+/.test("Hola mundo")`,
        resultado: /\d+/.test("Hola mundo") // false
    },
    {
        expresion: `/\\d+/.exec("Hola 123 mundo 456")`,
        resultado: /\d+/.exec("Hola 123 mundo 456") // ["123", index: 5, input: "Hola 123 mundo 456", groups: undefined]
    }
];




/**
 * Funcion para agregar las expresiones y los resultados en las tablas 
 *  
 */

function llenarTabla(idTbody, arrayDatos) {
    const tbody = document.querySelector(`#${idTbody}`);

    arrayDatos.forEach(valor => {
        const row = document.createElement('tr');
        const expreCell  = document.createElement('td');
        expreCell.textContent = valor.expresion;

        const resulCell = document.createElement('td');
        resulCell.textContent = valor.resultado;

        row.appendChild(expreCell);
        row.appendChild(resulCell);
        tbody.appendChild(row);
    });
}

llenarTabla('object', resulObjectProto);
llenarTabla('array', resulArrayProto);
llenarTabla('string', resulStringProto);
llenarTabla('number', resulNumberProto);
llenarTabla('function', resulFunctionProto);
llenarTabla('date', resulDateProto);
llenarTabla('regexp', resulRegExpProto);
