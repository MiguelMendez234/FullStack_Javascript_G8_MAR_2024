// Async/await es una característica introducida en ECMAScript 2017 (también conocido como ES8) que simplifica el trabajo con funciones asíncronas y promesas en JavaScript.
// Esta característica permite escribir código asíncrono de manera más legible y mantenible, especialmente cuando se trabaja con múltiples operaciones asíncronas.

/*
La sintaxis de async/await se compone de dos palabras clave principales: async y await.

async: Se utiliza para declarar que una función devuelve una promesa. Dentro de una función async, podemos utilizar la palabra clave await para esperar a que se resuelva una promesa.
await: Se utiliza para pausar la ejecución de una función async hasta que una promesa se resuelva. Esto permite que el código asíncrono se comporte de manera más similar al código síncrono.
*/

// Como usar async await

async function getPosts() {
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
        console.log(resp);
        const posts = await resp.json();
        console.log(posts);
    } catch(error) {
        console.log('Error:::::: ', error);
    }
}

//getPosts();

// RETO: Hacer un programa que le ayude a una madre saber si su hijo se portara bien y si obtendra buenas calificaciones
// Si se porta bien y obtiene buenas calificaciones entonces le compran un telefono
// Si se porta mal U obtiene malas califaciones lo castigan

const sePortaBien = true;
const obtieneBuenasCalificaciones = true;

const verificarComportamiento = new Promise((resolve, reject) => {
    if (sePortaBien) {
        resolve(true);
    } else {
        reject('Te portaste muy mal');
    }
});

const verificarCalificaciones = new Promise((resolve, reject) => {
    if(obtieneBuenasCalificaciones) {
        resolve(true);
    } else {
        reject('Te falto estudiar mas');
    }
});


async function pedirTelefoNuevo() {
    try {
        const [ respComportamiento, respCalificaciones ] = await Promise.all([ verificarComportamiento, verificarCalificaciones ]);
        console.log('comportamiento: ', respComportamiento);
        console.log('calificaciones: ', respCalificaciones);
        if (respComportamiento && respCalificaciones) {
            console.log('Te compraré un teléfono');
        }
    } catch (error) {
        console.log(`${error} por lo tanto te castigaré`);
    }
}

pedirTelefoNuevo();