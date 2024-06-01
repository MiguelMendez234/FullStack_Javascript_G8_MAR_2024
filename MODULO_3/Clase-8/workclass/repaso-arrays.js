/*
Crea un array llamado estudiantes que contenga objetos representando a tres estudiantes. Ejemplo
    const estudiantes = [
        { nombre: "Camilo", edad: 33, promedio: 10 },
        { nombre: "Juan", edad: 30, promedio: 6 },
        { nombre: "Andres", edad: 29, promedio: 8.7 },
    ];
  - Cada objeto debe tener las siguientes propiedades: nombre, edad, y promedio.
  - Imprime en la consola el nombre del segundo estudiante.
  - Actualiza la edad del primer estudiante a 25 años.
  - Imprime en la consola la información completa del primer estudiante después de la actualización
*/

// Array ->  [{...}, {...}]
// Objeto -> { animales: [ {...} ] }
const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

// Imprime en la consola el nombre del segundo estudiante.
console.log(estudiantes[1].nombre);

// Actualiza la edad del primer estudiante a 25 años.
estudiantes[0].edad = 25;
console.log(estudiantes[0]);

/*
    Dado el siguiente array de objetos que representan estudiantes:

    let estudiantes = [
        { nombre: "Juan", edad: 20 },
        { nombre: "María", edad: 22 },
        { nombre: "Pedro", edad: 19 },
    ];

    Utiliza un bucle for para incrementar la edad de cada estudiante en 1 año. Luego, imprime el array modificado.
*/
let estudiantes2 = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
];

for (let i = 0; i < estudiantes2.length; i++) {
    ++estudiantes2[i].edad;
}
    
let numero = 20;
console.log('numero: ', ++numero);
console.log('numero: ', numero++);
console.log(numero);

console.log(estudiantes2);

