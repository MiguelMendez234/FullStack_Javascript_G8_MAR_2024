// Promesa
// Una promesa en JavaScript es un objeto que representa el resultado eventual de una operación asíncrona.
// Puede estar en uno de tres estados: pendiente (pending), cumplida (fulfilled) o rechazada (rejected).
// Puedes crear una nueva promesa utilizando el constructor Promise. Este constructor toma una función ejecutora con dos argumentos: resolve y reject.
// resolve se utiliza cuando la operación asíncrona se ha completado correctamente, y reject se utiliza cuando ha ocurrido un error.

const miPromesa = new Promise((resolve, reject) => {
    const todoOk = true;
    if (todoOk) {
        resolve('Operación exitosa');
    } else {
        reject('Algo salió mal');
    }
});

// Las promesas poseen dos metodos: then y catch.
// El metodo then obtiene el resultado exitoso de la promesa.
// El metodo catch captura el error en caso de que la promesa tenga un resultado fallido.
// El metodo finally siempre se ejecutará pase lo que pase, si la promesa es resulta o si es fallida.

miPromesa
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log('Finally'));

// Encadenamiento de promessas:
// Una de las características más poderosas de las promesas es la capacidad de encadenar múltiples operaciones asíncronas de forma secuencial.

miPromesa
    .then(resultado => {
        console.log('Resultado promesa 1: ', resultado);
        return 1;
    })
    .then(resultado => {
        console.log('Resultado promesa 2: ', resultado);
        return true;
    })
    .then(resultado => {
        console.log('Resultado promesa 3: ', resultado);
        return 'Tercer resultado';
    })
    .then(resultado => console.log('Resultado promesa 4: ', resultado))
    .catch(err => console.log(err))
    .finally(() => console.log('Se acabo'));

// RETO
// Hacer un programa usando promesas en donde una madre pueda verificar si su hijo se porta bien o mal.
// Si se porta bien le regala un telefono celular. Si no se porta bien, le cancela el regalo y lo castiga.

function verificarComportamiento(comportamiento) {
    return new Promise((resolve, reject) => {
        if (comportamiento) {
            resolve('Te ganaste un telefono');
        } else {
            reject('Te mereces un castigo');
        }
    });
}

verificarComportamiento(true)
    .then(res => console.log(res))
    .catch(err => console.log(err));


// Callbacks vs Promises

// Garantizar orden de ejecucion con callbacks
const tarea1 = (callback) => {
    setTimeout(() => {
        console.log('Tarea 1...');
        callback();
    }, 7000);
};

const tarea2 = (callback) => {
    setTimeout(() => {
        console.log('Tarea 2...');
        callback();
    }, 2000);
};

const tarea3 = (callback) => {
    setTimeout(() => {
        console.log('Tarea 3...');
        callback();
    }, 5000);
};

const tarea4 = () => console.log('Tarea 4...');

/*tarea1(() => {
    tarea2(() => {
        tarea3(() => {
            tarea4();
        })
    });
});*/

// Garantizar orden de ejecucion con promises
function generatePromise(tareaId, milliseconds) {
    return new Promise((resolve, reject) => {
        if (milliseconds > 0) {
            setTimeout(() => {
                resolve(`Tarea ${tareaId}...`);
            }, milliseconds);
        } else {
            resolve(`Tarea ${tareaId}...`);
        }
    });
}

const promiseTarea1 = generatePromise(1, 5000);
const promiseTarea2 = generatePromise(2, 1000);
const promiseTarea3 = generatePromise(3, 7000);
const promiseTarea4 = generatePromise(4, 1000);

promiseTarea1
    .then(res => {
        console.log(res);
        return promiseTarea2;
    })
    .then(res => {
        console.log(res);
        return promiseTarea3;
    })
    .then(res => {
        console.log(res);
        return promiseTarea4;
    })
    .then(res => console.log(res));


// Manejo de multiples promesas

// Promise.all
// Este método toma un array de promesas y devuelve una nueva promesa que se resuelve cuando todas las promesas en el array se han resuelto,
// o se rechaza tan pronto como una de las promesas en el array es rechazada.
// El valor resuelto es un array con los valores de resolución de cada una de las promesas en el mismo orden que el array original.
// Respeta el orden de llegada de las promesas

const promesa1 = Promise.resolve(1);
const promesa2 = Promise.resolve('Promesa 2');
const promesa3 = Promise.reject({ a: 1 }); // Si hay una promesa que se rechaza, esta tendra prioridad sobre las demas y sera retornada
const promesa4 = Promise.resolve(true);

// Resultado si todos son resolve: [ 1, 'Promesa 2', { a: 1 }, true ]
// Resultado si hay tan solo un reject: { a: 1 }
Promise.all([ promesa1, promesa2, promesa3, promesa4 ])
    .then(res => console.log(res))
    .catch(err => console.log(err));

// Promise.allSettled
// Similar a Promise.all, pero espera a que todas las promesas se resuelvan o se rechacen, sin importar su resultado.
// Retorna una promesa que se resuelve con un array de objetos que describen el resultado de cada promesa.
// Respeta el orden de llegada de las promesas

const promesaSettled1 = new Promise(resolve => setTimeout(() => resolve(1), 2000));
const promesaSettled2 = Promise.reject('Oops');
const promesaSettled3 = Promise.resolve(7);

/* Resultado: [
  { status: 'fulfilled', value: 1 },
  { status: 'rejected', reason: 'Oops' },
  { status: 'fulfilled', value: 7 }
]*/
Promise.allSettled([ promesaSettled1, promesaSettled2, promesaSettled3 ])
    .then(res => console.log(res))
    .catch(err => console.log(err));

// Promise.race
// Este método toma un array de promesas y devuelve una nueva promesa que se resuelve o se rechaza tan pronto como una de las promesas en el array se resuelve o se rechaza,
// con el valor o la razón de resolución de esa primera promesa.
// No respeta el orden de llegada.
// No prioriza los resultados exitosos, le da igual la primera que llegue la toma.

const promesaRace1 = new Promise(resolve => setTimeout(() => resolve('Promesa 1 resuelta'), 2000));
const promesaRace2 = new Promise((_, reject) => setTimeout(() => reject('Promesa 2 fallida'), 1000));
const promesaRace3 = Promise.reject('Promesa 3 resuelta'); // Esta promesa gano la carrera y es la promesa que se muestra en el resultado final

Promise.race([ promesaRace1, promesaRace2, promesaRace3 ])
    .then(res => console.log(res))
    .catch(err => console.log(err));

// Promise.any
// Este método toma un array de promesas y devuelve una nueva promesa que se resuelve tan pronto como una de las promesas en el array se resuelve.
// Si todas las promesas son rechazadas, la promesa devuelta es rechazada con un AggregateError que contiene todos los errores de rechazo.
// No respeta el orden de llegada siempre y cuando no haya promesas rechazadas.
// Prioriza los resultados exitosos

const promesaAny1 = Promise.reject('Promise 1 rejected');
const promesaAny2 = new Promise(resolve => setTimeout(() => resolve('Promesa 2 resolved'), 5000));
const promesaAny3 = Promise.reject('Promesa 3 rejected');

Promise.any([ promesaAny1, promesaAny2, promesaAny3 ])
    .then(res => console.log(res))
    .catch(err => console.log(err));


