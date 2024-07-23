const numeros = [2, 4, 5, 8, 3, 7, 9, 1, 6]

const sumaNumeros = numeros.reduce((acumulador, numero) => acumulador + numero)
console.log(sumaNumeros)
// const amigos = [
//     { nombre: 'sebas', profesion: 'DJ'},
//     { nombre: 'juan', profesion: 'Veterinario'},
//     { nombre: 'luis', profesion: 'Ingeniero'},
//     { nombre: 'maria', profesion: 'Diseñadora'},
// ]
// const hayDoctor = amigos.some((amigo) => amigo.profesion === 'Doctor')

// console.log(hayDoctor)
// const estudiantes = [
//     { nombre: "Sultano", nota: 3.0 },
//     { nombre: "Perano", nota: 2.9 },
//     { nombre: "Mandano", nota: 3.7 },
//     { nombre: "Mendano", nota: 3.9 },
//     { nombre: "Multano", nota: 4.2 },
//     { nombre: "Pepe", nota: 4.3 },
//     { nombre: "Pedrito", nota: 4.7 },
//     { nombre: "Ricardito", nota: 2.1 },
//     { nombre: "Fulano", nota: 1.9 },
//     { nombre: "Isabelita", nota: 5.0 },
//     { nombre: "Laurita", nota: 4.0 },
// ];

// const estudiantesAprobados = estudiantes.filter((estudiante) => estudiante.nota >= 3.0);
// console.log(estudiantesAprobados);

// let miArreglo = [2, 5, 7, 1, 3, 4]

// const numerosPares = []
// for (let numero of miArreglo){
//     numerosPares.push(numero * 2)
// }
// const numerosPares = miArreglo.map(numero => numero * 2)
// console.log(numerosPares)

// let mi_array = ['U','N','I','V','E','R','S','O'];

// for(let index = 0; index < mi_array.length; index++){
//     const element = mi_array[index];
//     console.log(element);
// }

// const arregloUsuarios = [
//     {
//         nombre: 'Juan',
//         apellido: 'Perez',
//         edad: 25
//     },
//     {
//         nombre: 'Maria',
//         apellido: 'Gomez',
//         edad: 30
//     },
//     {
//         nombre: 'Luis',
//         apellido: 'Fernandez',
//         edad: 35
//     }
// ]

// const nuevoArreglo = arregloUsuarios.map((usuario, index) => {
//     return {
//         ...arregloUsuarios[index],
//         nombreCompletoEdad: `Nombre: ${usuario.nombre} ${usuario.apellido} edad: ${usuario.edad}`
//     }
// })

// console.log(nuevoArreglo);



