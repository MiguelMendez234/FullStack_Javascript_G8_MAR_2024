// OPERADORES LOGICOS
/*
    En el mundo de la programación, los operadores lógicos son herramientas que nos permiten tomar decisiones basadas en condiciones.
    Imaginemos que tenemos una caja mágica que puede responder preguntas con "sí" o "no".
    Los operadores lógicos son como las preguntas que haces a esta caja para tomar decisiones.
*/

// Operador AND (Y)
// El operador AND se utiliza cuando queremos asegurarnos de que dos condiciones sean verdaderas para que una acción se realice. 
// Es como decir: "¿Quiero ir al cine y tengo suficiente dinero?" Solo si tengo ambas cosas, podré ir al cine.
const quieroIrAlCine = false;
const tengoSuficienteDinero = false;

if (quieroIrAlCine && tengoSuficienteDinero) {
    console.log('Puedo ir al cine');
} else {
    console.log('No puedo ir al cine');
}

// Operador OR (O)
// El operador OR se utiliza cuando queremos que al menos una de dos condiciones sea verdadera para que una acción se realice.
// Es como decir: "¿Quieres un refresco o una limonada?" Si respondes "sí" a cualquiera de las opciones, ¡puedes tener algo para beber!
const quieroRefresco = false;
const quieroLimonada = false;

if (quieroRefresco || quieroLimonada) {
    console.log('Tengo algo para tomar');
} else {
    console.log('No quiero ninguna de las dos');
}

// Operador NOT (NO)
// El operador NOT se utiliza para negar una condición. Es como decir lo opuesto de lo que se pregunta.
// Por ejemplo, recordando el dicho popular que dice "Al que no quiere caldo, se le dan dos tazas"
// En la primera frase se puede deducir que se esta negando una afirmacion (querer caldo) y al negarlo
// la respuesta que obtendremos sera "se le dan dos tazas"
let quieroCaldo = false;

if (!quieroCaldo) {
    console.log('Me dan dos tazas');
} else {
    console.log('Me encanta el caldo');
}

// CONDICION TERNARIA
const edad = 17;
console.log(edad >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad');

const ciudad = 'rfdh';
let gentilicio = '';

if (ciudad === 'Bogota') {
    gentilicio = 'rolo';
} else if (ciudad === 'Medellin') {
    gentilicio = 'paisa';
} else {
    gentilicio = 'otro';
}

console.log(gentilicio);

const gentilicio2 = ciudad === 'Bogota' ? 'rolo' : ciudad === 'Medellin' ? 'paisa' : 'otro';
console.log(gentilicio2);


// OPERADORES NULLISH COALESCING (Fusion de nulos) ?? y ||
// valores truthy: 'abcd', true, -1 >= 1
// valores falsy: '', false, 0, NaN, null, undefined

// ??
const esValida = true;
let val = esValida ?? 'Otra cosa';
// console.log('val: ', val);

// Esto es lo que haria javascript por debajo
let val1;
if (esValida !== null && esValida !== undefined) {
    val1 = esValida;
} else {
    val1 = 'Otra cosa';
}

//console.log(val1);

// ||
const esValida2 = false;
const validation = esValida2 || 'Another thing'; // Este es mas estricto, no permite ningun valor falsy
console.log(validation);

let val2;
if (esValida2 !== null && esValida2 !== undefined && esValida2 !== false && esValida2 !== 0 && esValida2 !== '') {
    val2 = esValida2;
} else {
    val2 = 'Another thing';
}
console.log('val2: ', val2);


// OPERADORES con AGRUPACION ()
// Al igual que en operaciones matematicas los parentesis tienen prioridad sobre las operaciones que
// estan encerradas dentro de ellos, es decir se deben resolver primero antes de continuar
console.log(true && (false || false)); // false
console.log(true || true && (true && false)); // true
console.log((true || false) && true && (false && true && true)); // false
console.log((true || false) && true && (false && true || true)); // true

// ORDEN DE PRIORIDAD
// 1. ! negacion
// 2. ()
// 3. && and
// 4. || or

// RETOS
// 1. !false && (!false || !false)
// 2. true && true || (!!true && !false) && ((!true && false) || false)

console.log(!false && (!false || !false)); // true
console.log(true && true || (!!true && !false) && ((!true && false) || false)); // true
