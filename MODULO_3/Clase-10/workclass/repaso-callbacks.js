const numbers = [1,2,3,4,5];

const sumaArray = (arregloNumbers, callback) => {
    let saveSuma = 0;

    arregloNumbers.forEach((numero) => {
        saveSuma += numero;
    });

    callback(saveSuma);
};

const mostrarResultadoCallback = (resultado) => {
    console.log(resultado); // Debería imprimir 15
}

sumaArray(numbers, mostrarResultadoCallback);

function generateRandom(limit) {
    return Math.random() * limit;
}

function sumarDosRandoms(callbackNumber1, callbackNumber2) {
    console.log(typeof callbackNumber1);
    console.log(typeof callbackNumber2);
    const number1 = callbackNumber1();
    const number2 = callbackNumber2();

    return number1 + number2;
}

console.log(sumarDosRandoms(() => generateRandom(10), () => generateRandom(7)));


const estudiantes = [
    {
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 27
    },
    {
        nombre: 'Catalina',
        apellido: 'jimenez',
        edad: 25
    },
    {
        nombre: 'Federico',
        apellido: 'Martinez',
        edad: 26
    },
];

estudiantes.forEach(estudiante => {
    if (estudiante.edad > 18) {
        console.log(estudiante);
    }
});

// RETO
// 1. Hacer el ejercicio anterior de estudiantes, con su propio forEach
const forEach = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        callback(element);
    }
};

const obtenerMayoresEdadCallback = (estudiante) => {
    if (estudiante.edad > 18) {
        console.log(estudiante);
    }
};

const obtenerMenoresEdadCallback = (estudiante) => {
    if (estudiante.edad < 18) {
        console.log(estudiante);
    }
};

forEach(estudiantes, obtenerMayoresEdadCallback);
forEach(estudiantes, obtenerMenoresEdadCallback);
forEach(estudiantes, (estudiante) => console.log('estudiante: ', estudiante));


// 2. Doblar los numeros de un array
const numeros = [1,2,3,4,5,6,7,8,9,10];

const doubled = numeros.map(numero => numero * 2);
console.log(doubled);

const multiplyByTwo = numero => numero * 2; 
const multiplyByFive = numero => numero * 5; 

function map(list, callback) {
    const resultArray = [];
    for (let i = 0; i < list.length; i++) {
        const number = list[i];
        const result = callback(number);
        resultArray.push(result);
    }

    return resultArray;
}

const byTwo = map(numeros, multiplyByTwo);
const byFive = map(numeros, multiplyByFive);
const byTen = map(numeros, numero => numero * 10);
const newObjectArray = map(numeros, numero => ({ numero }));
console.log(byTwo);
console.log(byFive);
console.log(byTen);
console.log(newObjectArray);

// 3. Verificar si hay algun estudiante mayor de edad
const hayMayoresDeEdad = estudiantes.some(estudiante => estudiante.edad > 18);
console.log(hayMayoresDeEdad);

function some(array = estudiantes, callback = (estudiante) => estudiante.edad > 18) {
    for (let i = 0; i < array.length; i++) {
        const estudiante = array[i];
        const condicion = callback(estudiante);
        if (condicion) {
            return true;
        }
    }

    return false;
}

const resultadoMayorEdad = some(estudiantes, (estudiante) => estudiante.edad > 18);
const resultadoMenorEdad = some(estudiantes, (estudiante) => estudiante.edad < 18);
const empiezaNombrePorJ = some(estudiantes, (estudiante) => estudiante.nombre.startsWith('J'));
const terminaApellidoPorZ = some(estudiantes, (estudiante) => estudiante.apellido.endsWith('z'));
console.log('resultadoMayorEdad: ', resultadoMayorEdad);
console.log('resultadoMenorEdad: ', resultadoMenorEdad);
console.log('empiezaNombrePorJ: ', empiezaNombrePorJ);
console.log('terminaApellidoPorZ: ', terminaApellidoPorZ);


// 4. Hacer un programa que me simule el proceso de descargar un video.
// Hay que garantizar el orden de estos pasos:
// 1. Descargar el video: 2 segundos
// 2. Procesando video: 7 segundos
// 3. Video descargado: 0 segundos

const descargarVideo = (callback) => {
    setTimeout(() => {
        console.log('Descargando video...');
        callback();
    }, 2000);
};

const procesarVideo = (callback) => {
    setTimeout(() => {
        console.log('Procesando video...');
        callback();
    }, 7000);
};

const videoDescargado = () => console.log('Video descargado...');


descargarVideo(() => {
    procesarVideo(() => {
        videoDescargado();
    });
});
