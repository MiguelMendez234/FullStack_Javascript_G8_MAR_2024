/*function retornarNumeroRandom() {
    return Promise.resolve(Math.round(Math.random() * 10));
}

retornarNumeroRandom()
    .then(numero => console.log(numero))
    .catch(err => console.log(err));*/

async function retornarNumeroRandom2() {
    return Math.round(Math.random() * 10);
}

const getRandomNumber = async () => {
    const numero = await retornarNumeroRandom2();
    console.log(numero);
}

const mostrarPrimeroNumero = async () => {
    await getRandomNumber();
    console.log('Tarea 2...');
}

//mostrarPrimeroNumero();


// Callbacks vs Promises vs async/await

// callbacks
const tarea1 = (callback) => {
    setTimeout(() => {
        console.log('Ejecutando tarea 1...');
        callback();
    }, 3000);
};

const tarea2 = (callback) => {
    setTimeout(() => {
        console.log('Ejecutando tarea 2...');
        callback();
    }, 2000);
};

const tarea3 = (callback) => {
    setTimeout(() => {
        console.log('Ejecutando tarea 3...');
        callback();
    }, 1000);
};

const tarea4 = () => console.log('Ejecutando tarea 4...');

/*tarea1(() => {
    tarea2(() => {
        tarea3(() => {
            tarea4();
        });
    })
});*/

// Promise con .then y .catch
function generatePromise(number, milliseconds) {
    return new Promise((resolve) => {
        if (milliseconds > 0) {
            setTimeout(() => {
                resolve(`Task ${number}...`);
            }, milliseconds);
        } else {
            resolve(`Task ${number}...`);
        }
    });
}

/*const promesaTarea1 = generatePromise(1, 5000);
const promesaTarea2 = generatePromise(2, 800);
const promesaTarea3 = generatePromise(3, 1000);
const promesaTarea4 = generatePromise(4, 350);

promesaTarea1
    .then(res => {
        console.log(res);
        return promesaTarea2;
    })
    .then(res => {
        console.log(res)
        return promesaTarea3;
    })
    .then(res => {
        console.log(res);
        return promesaTarea4;
    })
    .then(res => console.log(res));*/


// const resultadoPromesas = Promise.all([promesaTarea1, promesaTarea2, promesaTarea3, promesaTarea4]);


// async/await

const task1 = () => generatePromise(1, 5000);
const task2 = () => generatePromise(2, 2000);
const task3 = () => generatePromise(3, 5000);
const task4 = () => generatePromise(4, 1000);

async function executeTasks() {
    console.log(await task1());
    console.log(await task2());
    console.log(await task3());
    console.log(await task4());
}

executeTasks();