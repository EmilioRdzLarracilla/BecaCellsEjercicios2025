function animal(tipo, habitat, sonido) {
  let animal = {
    tipo,
    habitat,
    sonido,

    presentacion() {
      console.log(
        `soy un animal del tipo ${tipo} mi habita es ${habitat} y mi sonido es ${sonido}`
      );
    },
  };

  return animal;
}

function carro(tipo, motor, marca) {
  let carro = {
    tipo,
    motor,
    marca,

    presentacion() {
      console.log(
        `soy un carro del tipo ${tipo} mi motor es de combusitoion a ${motor} y mi marca es ${marca}`
      );
    },
  };

  return carro;
}

const mono = animal("mono", "selva", "auauaua");
mono.presentacion();
const perro = animal("perro", "casa", "gua gua");
perro.presentacion();
const gato = animal("gato", "casa", "miau miau");
gato.presentacion();

const suv = carro("SUV", "gasolina", "toyota");
const trailer = carro("trailer", "diesel", "keenhwood");
const autobus = carro("autobus", "diesel", "mercedez benz");

function persona(nombre, edad, sexo) {
  let persona = {
    nombre,
    edad,
    sexo,
    saludar() {
      console.log("hola te saluda :  " + this.nombre);
    },

    caminar() {},
    comer() {},
  };

  return persona;
}

/* podemos generar n objetos del tipo persona */

const Emilio = persona("emilio", 29, "m");
Emilio.saludar();
const sonia = persona("sonia", 23, "F");
sonia.saludar();

const juan = persona("Juan", 23, "M");
juan.saludar();

function Persona(nombre, edad, sexo) {
  this.nombre = nombre;
  this.edad = edad;
  this.sexo = sexo;

  this.saludar = function () {
    console.log("hola soy : " + this.nombre);
  };
}

const jaime = new Persona("jaime", 29, "M");

console.log(jaime);
jaime.saludar();

/* const personaArrow = (nombre, edad, sexo) => {
  this.nombre = nombre;
  this.edad = edad;
  this.sexo = sexo;

  this.saludar = function () {
    console.log("hola soy : " + this.nombre);
  };
}; */
/*  no es posible utilizar arrow function para crear objetos */
/* tampoco funcionan bin aplly ni call */
/* tampoco se pueden usar como metodos dentro de una clase */
/* const Larry = new personaArrow("larry", 29, "M"); */
/* console.log(Larry); */

/* construyendo una lcase perosna con la azucar sintactica */

class Person {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

  saludar() {
    console.log(`hello my name is : ${this.name}`);
  }
}

const jeronimo = new Person("jeronimo", 25, "M");
console.log(jeronimo.name);
jeronimo.saludar();

let telefono = 2218195541;
telefono.toFixed(20);

const aa = [1, 2, 3, 4];
aa.reduce((acc, item) => acc * item);

class Carro {
  constructor(puertas = "3", anio) {
    this.puertas = puertas;
    this._modelo = "generico";
    this.__anio = anio ?? "2025"; /* nullish coleasing operator */
  }

  mover() {
    if (this.__anio > 2024) {
      this._modelo = "s4";
    }

    console.log(`el ${this._modelo} hace run run`);
  }
}

const miCarro = new Carro(5);

miCarro.mover();

class Personaje extends Carro {
  constructor(nombre, edad, sex) {
    super(4, 2025);
    this.nombre = nombre;
    this.edad = edad;
    this.sex = sex;
  }

  saludar() {
    console.log("saludando");
  }
}

const yoOtraVez = new Personaje("emilio", 25, "m");
yoOtraVez.mover();
