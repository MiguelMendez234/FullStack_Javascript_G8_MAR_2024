// VAR vs LET vs CONST

/* VAR */
var edad = 18;
edad = 20;
edad = 5;

var edad = 15;
console.log(edad);

var pais;
console.log(pais); // undefined

/* LET */
let ciudad = 'Bogota';
ciudad = 'Medellin';
console.log(ciudad);

// let ciudad = 'Armenia'; -> Lanza un error porque ya esta declarada la variable ciudad

let ciudadano;
console.log(ciudadano); // undefined

/* CONST */
const nombre = 'Juan';
// nombre = 'Pedro'; -> Lanza un error porque una constante no se puede reasignar
// const nombre = 'Sergio'; -> Lanza un error porque una constante no se puede redeclarar

const animales = ['perro', 'gato'];
animales.push('tortuga');
console.log(animales);

// animales = ['tortuga']; -> Lanza un error porque una constante no se puede reasignar

// const departamento; -> Lanza un error porque una constante debe estar inicializada con un valor


/*
    VAR
    - Scope: Función
    - Re asignar: Sí
    - Re declarar: Sí
    - Declarar sin valor inicial: Sí
    - Hoisting: undefined


    LET
    - Scope: Bloque
    - Re asignar: Sí
    - Re declarar: No
    - Declarar sin valor inicial: Sí
    - Hoisting: TDZ (zona de muerte temporal)


    CONST
    - Scope: Bloque
    - Re asignar: No
    - Re declarar: No
    - Declarar sin valor inicial: No
    - Hoisting: TDZ (zona de muerte temporal)
*/


// SCOPE
// El "scope" en JavaScript se refiere al alcance de una variable, es decir, dónde en tu código puedes usar y acceder a esa variable.
// Imagina que tienes un montón de cajas, cada una con un nombre escrito en ella.
// El "scope" sería como el lugar donde puedes ver y usar esas cajas.
// En Js los scopes se determinan por las llaves { } (Scope de bloque) o por funciones (Scope de funcion).
// Todos parten de un scope global (donde se empieza a ejecutar un programa)
// Las variables definidas dentro de una función sólo son accesibles dentro de esa función, a menos que sean variables globales.
// Nota: La clave para entender scopes tanto de bloque como de funcion es preguntar dónde estoy usando una variable y cómo la estoy declarando (let, const o var)

// Scope de bloque
// Javascript, cuando se encuentra con multiples scopes anidados, verifica las variables de adentro hacia afuera
// Si no existe una variable en el scope mas interno (inner scope) la buscará en el scope mas externo (outer scope)
let objeto = 'Computador';
console.log('objeto: ', objeto);

if (true) {
    console.log('objeto dentro del if: ', objeto);
}

if (true) {
    if (true) {
        console.log('objeto dentro del if anidado: ', objeto);
    }
}

let fruta = 'Fresa';
var fruta2 = 'Mora';

if (true) {
    let fruta = 'Mango';
    var fruta2 = 'Limon';
    console.log(fruta);
    console.log(fruta2);
}

console.log(fruta);

// Al final si se declara con var, el valor mostrado es Limon porque es la ultima asignacion que tuvo esa variable
console.log(fruta2); 


// Scope de funcion
var estudiante = 'Julian';

function doSomething() {
    let estudiante2 = 'Camilo';
    var estudiante = 'Felipe';
    console.log('estudiante2: ', estudiante2);
    console.log('estudiante: ', estudiante);
}

doSomething();

console.log(estudiante);


// var vs let en scopes
let car = 'Ferrari';
function printCar() {
    var car2 = 'Audi';
    if (true) {
        if (true) {
            if (true) {
                if (true) {
                }
            }
        }
        let car3 = 'BMW';
        console.log('car desde scope interno: ', car);
        console.log('car2 desde scope interno: ', car2);
        console.log('car3 desde scope interno: ', car3);
    }

    console.log('car desde scope de funcion: ', car);
    console.log('car2 desde scope de funcion: ', car2);
}


console.log(materia);
const materia = 'Matematicas';