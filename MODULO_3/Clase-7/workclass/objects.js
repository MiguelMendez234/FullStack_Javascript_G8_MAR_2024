// OBJETOS
// Los objetos en JavaScript son estructuras de datos que permiten almacenar datos y funcionalidades relacionadas.
// Comparados con otros tipos de datos como strings, números y booleanos, los objetos pueden contener múltiples valores y métodos.

// Sintaxis
const objeto = {
    propiedad1: 'valor1',
    propiedad2: true,
    propiedad3: false,
    edad: 18,
    animales: ['perro', 'gato'],
    saludar: () => {
        console.log('Hello world')
    },
    objetoInterno: {
        a: 1,
        b: 'hola'
    }
};

console.log(objeto);

// La forma antigua de hacerlo
let persona = {};
persona.nombre = 'Juan';
persona.apellido = 'Perez';
persona.edad = 18;
persona.nacionalidad = 'colombiana';

console.log(persona);

// Acceder a las propiedades: objeto.propiedad.?.?.?
console.log(objeto.edad);
console.log(objeto.animales);
console.log(objeto.objetoInterno.b);
objeto.saludar();
objeto.profesion = 'ingeniero';
console.log(objeto.profesion);


// Otras formas de crear objetos

// Object.create
const infoPersona = {
    nombre: 'Ana',
    apellido: 'Suarez',
    edad: 20,
    direccion: 'Calle 1',
    ciudad: 'Bogota'
};

const infoProfesion = Object.create(infoPersona);
console.log(infoProfesion.nombre);
console.log(infoProfesion.apellido);
infoProfesion.profesion = 'diseñadora';
infoProfesion.experiencia = 5;
infoProfesion.cargo = 'jefe';
console.log(infoProfesion.profesion);
console.log(infoProfesion.experiencia);
console.log(infoProfesion.cargo);

// Object.assign
const objeto1 = { a: 'cualquier cosa', b: 2 };
const objeto2 = { b: 3, c: 4 };
const objeto3 = { c: 5, d: 6 };

const resultadoObj = Object.assign({}, objeto1, objeto2, objeto3);
console.log(resultadoObj);
resultadoObj.w = 5;
console.log(resultadoObj);

// Otros metodos de los objetos

// Object.freeze
const personFreeze = {
    nombre: 'Cesar',
    edad: 30,
    mascotas: ['tortuga', 'iguana']
};

Object.freeze(personFreeze);
personFreeze.nombre = 'Pedro'; // No tiene efecto porque no se puede modificar una propiedad
personFreeze.edad = 18;
personFreeze.direccion = 'Calle # 2'; // No tiene efecto porque no se permite agregar ninguna propiedad
// Si se agrega porque no se modifica el valor de la variable como tal (no modifica la referencia en memoria)
// solo agrego un elemento mas
personFreeze.mascotas.push('perrito');
personFreeze.mascotas.pop();
personFreeze.mascotas = [];

console.log(personFreeze);

// Object.keys
console.log(Object.keys(personFreeze));
const keys = Object.keys(personFreeze);
for (let i = 0; i < keys.length; i++) {
    const element = keys[i];
    console.log(element);
}

console.log('-------------------');

// Object.values
console.log(Object.values(personFreeze));
const values = Object.values(personFreeze);
for (let i = 0; i < values.length; i++) {
    const element = values[i];
    console.log(element);
}

console.log('-------------------');

// Object.entries
console.log(Object.entries(personFreeze));
const entries = Object.entries(personFreeze);
for (let i = 0; i < entries.length; i++) {
    const element = entries[i];
    console.log(element);
}


// Referencia vs valor en objetos
const object1 = { a: 1, b: true };
const object2 = { a: 1, b: true };
console.log(object1 === object2);

const object3 = object1; // Comparten la misma referencia en memoria: object3 -> object1 -> { a: 1, b: true }
console.log(object1 === object3);
console.log(object2 === object3);

// Que pasa si cambio algun dato de una propiedad o agrego una nueva en object3? afecta al object1?
object3.a = 78;
console.log(object3.a);
console.log(object1.a);

// Como lo evito?
// Esto es lo que hace Object.create -> const object4 = { a: object1.a, b: object1.b };
const object4 = Object.create(object1);
object4.a = 45;
console.log(object4.a);
console.log(object1.a);