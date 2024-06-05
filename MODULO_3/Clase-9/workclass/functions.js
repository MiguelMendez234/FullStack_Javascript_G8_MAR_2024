// FUNCIONES
// ¿Qué es una función?
// Una función en JavaScript es un bloque de código que realiza una tarea específica. 
// Puedes pensar en ella como una especie de máquina que toma algo (entradas), hace algo con eso, y luego produce un resultado (salida).

// ¿Por qué usar funciones?
// Las funciones nos permiten escribir código reutilizable y modular.
// En lugar de escribir el mismo código una y otra vez, podemos definir una función que realice esa tarea y simplemente llamar a esa función cuando la necesitemos.

// Sintaxis básica:
// Para definir una función en JavaScript, usamos la palabra clave function, seguida del nombre de la función y paréntesis (), donde opcionalmente podemos especificar 
// los parámetros de entrada y de salida. Después, viene un bloque de código encerrado entre llaves {} que contiene las instrucciones que queremos que la función realice.

function nombreDeLaFuncion() {
    console.log('Hello world!');
}

// funcion con parametros
function nombreDeLaFuncionConParametros(parametro1, parametro2) {
    console.log(parametro1);
    console.log(parametro2);
}

// LLamar a una función
// Una vez que hemos definido una función, podemos llamarla o invocarla en cualquier parte de nuestro código
// simplemente escribiendo su nombre seguido de los parentesis ()
nombreDeLaFuncion();

const numero = 1;
nombreDeLaFuncionConParametros(numero, 'Hola');
nombreDeLaFuncionConParametros(2, 'Hola 2');

// Parámetros y argumentos:
// Los parámetros son variables que se utilizan en la definición de la función para representar los valores que se pasan a la función cuando se llama.
// Los argumentos son los valores reales que se pasan a la función cuando se llama.

// Valor de retorno
// Las funciones pueden devolver un valor utilizando la palabra clave return.
// Esto es útil cuando queremos que nuestra función produzca algún resultado que podamos usar más tarde en nuestro programa.
function sumar(numero1, numero2) {
    return numero1 + numero2;
}

let resultado = sumar(5,4);
let resultado2 = sumar(10,100);
console.log(resultado);
console.log(resultado2);

// RETO
// 1. Mostrar el nombre y la edad de una persona usando una funcion. Si la persona es mayor de edad debe decir que
// es mayor de edad y si no menor de edad.
function verificarMayorDeEdad(nombre, edad) {
    if (edad > 17) {
        console.log(`La persona ${nombre} tiene ${edad} años por lo tanto es mayor de edad`)
    } else {
        console.log(`La persona ${nombre} tiene ${edad} años por lo tanto es menor de edad`)
    }
}
verificarMayorDeEdad("julian", 17)
verificarMayorDeEdad("Felipe", 23)
verificarMayorDeEdad("Antonia", 18)
verificarMayorDeEdad("Paula", 13)


// Arrow functions
// Son funciones declaradas con una sintaxis mas practica para evitar escribir codigo de mas.
// Necesita ser guardada en una variable para poder ser ejecutada.
const restar = (numero1, numero2) => numero1 - numero2;
const resultadoRestar = restar(8,7);
console.log(resultadoRestar);

const mostrarObjeto = (numero1, numero2) => ({
    a: numero1,
    b: numero2
});

const objeto = mostrarObjeto(1, 2);
console.log(objeto);


// Funciones anónimas y expresiones de función:
// Además de las funciones con nombre que acabamos de ver, también puedes crear funciones anónimas (sin nombre).
// Las funciones anónimas deben guardarse en memoria para poder ser ejecutadas ya que no tienen un nombre o identificador definido. 
// Como la creación de una función ocurre en el contexto de una expresión de asignación, (el lado derecho de =), esto es una Expresión de función.
// Si queremos ejecutar una funcion anónima sin guardarla en memoria debemos usar las IIFE (sigla en inglés).

// funcion anoninma sin retorno
const saludar = function() {
    console.log('hola');
};

saludar();

// funcion anonima con retorno
const multiplicar = function(num1, num2) {
    return num1 * num2;
}

const resultadoMultiplicar = multiplicar(7, 4);
console.log(resultadoMultiplicar);

// Las expresiones de función ejecutadas inmediatamente (IIFE por su sigla en inglés) son funciones que se ejecutan tan pronto como se definen.
(function() {
    console.log('Greetings');
})();

(() => console.log('Hello from arrow function'))();

// IIFE con retorno
let greetings = function() {
    return 'Greetings';
}();
console.log(greetings);

let greetings2 = (() => 'Greetings2')();
console.log(greetings2);