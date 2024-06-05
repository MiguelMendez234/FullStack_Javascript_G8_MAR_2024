// CODIGO SINCRONO
// Una tarea sincrona es una tarea que tiene un tiempo de ejecucion especifico
// y que el lenguaje ejecutara inmediatamente no importa cuanto tarde, por lo
// que hará esperar a la siguiente linea del codigo hasta que la anterior linea
// se haya terminado de ejecutar.
// Tradicionalmente, JavaScript es single-threaded (de un solo hilo)
// thread(hilo --> proceso que la aplicacion puede usar para completar tareas)
// En JavaScript sincrono, las tareas se ejecutan en secuencia (1, 2, 3, 4, etc.)

// Ejemplo de Javascript sincrono
let numeroFinal = 0;
for (let i = 1; i <= 15000000; i++) {
    numeroFinal += 5;
}

//console.log(numeroFinal);
//console.log('...ejecutando tarea 2');
//console.log('...ejecutando tarea 3');


// CODIGO ASINCRONO
// Una tarea asincrona es una tarea que se va a ejecutar en el futuro
// bien sea con un tiempo establecido o no y que no sabemos con exactitud 
// cuando va a terminar.
// JavaScript asincrono nos permite ejecutar tareas simultaneamente
/*setTimeout(() => {
    console.log('Ejecutando tarea 1...')
}, 5000);

setInterval(() => {
    console.log('Ejecutando tarea 2...')
}, 2000);

console.log('Ejecutando tarea 3...');*/

// Hay tres tecnicas para implementar JavaScript asincrono:
//1. callbacks
//2. promises
//3. async await

// Callbacks
// ¿Qué es una callback?
// Una callback es una función que se pasa como argumento a otra función y que se ejecuta después de que cierto proceso o tarea haya finalizado.
// Es como dejar un número de teléfono para que te llamen cuando algo esté listo.

// ¿Cómo se usa una callback?
// En JavaScript, las callbacks son comunes en situaciones donde se realiza una operación asíncrona, como cargar un archivo o realizar una solicitud a un servidor.
// En lugar de bloquear el código y esperar a que se complete la operación, se pasa una función callback que se ejecutará una vez que la operación haya terminado.
// Tambien se pueden usar en funciones de orden superior, que son funciones que pueden recibir como parametro una funcion y/o retornar dicha funcion


// Sync callbacks -> Se ejecutan inmediatamente (dentro de un proceso) y son bloqueantes
const getRandomNumber1To10 = () => Math.floor(Math.random() * 10);
const getRandomNumber1To5 = () => Math.floor(Math.random() * 5);
const getRandomNumberWithLimit = (limit) => Math.floor(Math.random() * limit);

// En este ejemplo showNumber vendria siendo una funcion de orden superior (High order function)
const showNumber = (callback) => {
    //console.log(typeof callback);
    const number = callback();
    //console.log(number);
}

showNumber(getRandomNumber1To10);
showNumber(getRandomNumber1To5);
showNumber(() => getRandomNumberWithLimit(7));


// Veamos como funciona el forEach por debajo
const animals = ['perro', 'gato'];
//animals.forEach(animal => console.log(animal));
animals.filter(animal => animal.startsWith('p'));

function myForEach(list, callback) {
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        callback(element, i);
    }
}

//myForEach(animals, (animal, index) => console.log(`${animal} - ${index}`));


function myFilter(list, callback) {
    const filterArr = [];
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        const condition = callback(element);
        if (condition) {
            filterArr.push(element);
        }
    }

    return filterArr;
}

const myFilterArray = myFilter(animals, animal => animal.startsWith('p'));
//console.log(myFilterArray);


// Async callbacks -> Se ejecutan cuando algo pasa (un evento ocurre)
const tarea1 = (callback) => {
    setTimeout(() => {
        console.log('Ejecutando tarea 1...');
        callback();
    }, 2000);
}

const tarea2 = (callback) => {
    setTimeout(() => {
        console.log('Ejecutando tarea 2...');
        callback();
    }, 3000);
};
const tarea3 = () => console.log('Ejecutando tarea 3...');

// Esto se conoce como callback hell
tarea1(() => {
    tarea2(() => {
        tarea3()
    });
});

// El objetivo de Javascript era este
// tarea1();
// tarea2();
// tarea3();
// tarea4();

// El orden de ejecucion aqui es asi le enviemos 0 en el timeout:
// 1. tarea 1
// 2. tarea 3
// 3. tarea 2
console.log('tarea 1');
setTimeout(() => {
    console.log('tarea 2');
}, 0);
console.log('tarea 3');

