// ARRAYS
// Es una estructura de datos que puede contener múltiples elementos, 
// accesibles a través de un índice numérico.
// Cada elemento que se guarda dentro de un arreglo o lista
// puede ser de cualquier tipo de dato, tanto primitivo como objetos y arrays.
const arr = ['1', 2, 3, 'texto', true, false, ['estudiante1', 'estudiante2']]; // n
console.log(arr);

// Acceso a un elemento detro de un array
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

console.log('LENGTH: ', arr.length);
console.log(arr[arr.length - 1]);

console.log(arr[arr.length - 1][1]);

const arrEstudiantes = arr[arr.length - 1]; // ['estudiante1', 'estudiante2']
console.log(arrEstudiantes[arrEstudiantes.length - 1]);

// Modificar un valor dentro de un array (manual)
arr[0] = true;
arr[1] = 'string';
arr[2] = 25;
arr[arr.length - 1] = 'random';
console.log(arr);


// CICLOS
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// Iteración en los arrays
// Podemos usar ciclos para acceder a cada elemento dentro de un array
// Ciclo for
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}

// Ciclo forEach -> built-in
arr.forEach((element, index) => console.log(`${element} - ${index}`));

// Ciclo for of
for (const element of arr) {
    console.log(element);
}

// Probemos algunos metodos (y propiedades) que por defecto tienen los arrays en js
const animals = ['perro', 'gato', 'oso', 'leon', 'elefante', 'pajaro'];

// length -> Muestra la cantidad de elementos que hay en un array
console.log(animals.length);

// push -> Agrega uno o mas elementos al array (al final) y retorna el nuevo length
animals.push('tigre', 'tortuga');
console.log(animals);
console.log(animals.length);

// pop -> Elimina el ultimo elemento dentro de un array y lo retorna
const animalRemoved = animals.pop();
console.log(animals);
console.log(animalRemoved);
console.log(animals.length);

// shift -> Elimina el primer elemento dentro de un array y lo retorna
const animalRemovedWithShift = animals.shift();
console.log(animals);
console.log(animalRemovedWithShift);
console.log(animals.length);

// unshift -> Agrega uno o mas elementos al inicio del array y retorna la nueva de longitud array
animals.unshift('liebre', 'tortuga');
console.log(animals);
console.log(animals.length);

// split -> En realidad es un metodo de los strings pero convierte un string a un array
const palabra = 'reconocer';
const splittedArray = palabra.split('');
console.log(splittedArray);

// reverse -> Iniverte el orden de los elementos de un array. El primer elemento pasa a ser el ultimo y vicerversa
const numbers = [1,2,3,4,5,6];
console.log(numbers.reverse());

const reversedArray = splittedArray.reverse();
console.log(reversedArray);

// join -> Une todos los elementos de un array en un string y retorna ese string
const palabraInvertida = reversedArray.join('');
console.log('es palindrome? ', palabraInvertida === palabra);


// RETO
// 1. Tomando este array ['bmw', 'bugatti', 'lamborgini', 'ferrari', 'fiat', 'mclaren', 'mazda']
// Debe retornar un array con los carros que empiezan en b y otro con los que terminan en i
// starsWith('f')
// endsWith('i')
const cars = ['bmw','bugatti','ferrari','fiat','mclaren','mazda'];
const starsWithF = [];
const endsWithI = [];

cars.forEach((element) => {
    if(element.startsWith('f')) {
        starsWithF.push(element);
    }

    if (element.endsWith('i')) {
        endsWithI.push(element);
    }
});

console.log(starsWithF);
console.log(endsWithI);

// Comparación entre arrays (referencia vs valor)
// En arrays y objetos la comparación se hace por referencia y no por valor

// Comparacion en primitivos
const num1 = 1;
const num2 = 1;
console.log(num1 === num2);

// Comparacion entre arrays
const arr1 = [1,7,8];
const arr2 = [1,7,8];
console.log(arr1 === arr2);

const arr3 = arr1; // arr3 -> arr1 -> [1,7,8]
console.log(arr1 === arr3);
arr3[0] = 2;
console.log(arr1);
console.log(arr3);