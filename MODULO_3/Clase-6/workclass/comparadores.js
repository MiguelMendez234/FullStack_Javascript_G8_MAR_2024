// Los operadores de comparacion son símbolos o palabras reservadas que se utilizan
// para comparar dos valores y devolver SIEMPRE un resultado booleano (true o false)
// que indica si la comparación es verdadera o falsa.
// Igualdad (== o ===)
// Desigualdad (!= o !==)
// Mayor que (>)
// Menor que (<)
// Mayor o igual que (>=)
// Menor o igual que (<=)
let edad = 20;
console.log('Eres mayor de edad? ', edad > 17);
console.log('Eres menor de edad? ', edad < 18);
console.log('Tienes 18 años? ', edad === 18);
console.log('Tienes una edad distinta a 18 años? ', edad !== 18);
console.log('Puedes entrar a una discoteca? ', edad >= 18);
console.log('Tu edad es menor o igual a 18? ', edad <= 18);

// Algunas funciones/metodos propios de los strings que provee javascript
// tambien devuelven booleanos en base a comparaciones
const curso = 'Curso javascript';
console.log('Contiene la palabra java? ', curso.includes('script'));
console.log('Contiene la letra e? ', curso.includes('e'));
console.log('Empieza con la letra C? ', curso.startsWith('C'));
console.log('Termina con la letra t? ', curso.endsWith('t'));
console.log('La longitud del string es mayor a 10? ', curso.length < 20);

// RETO 1
// Hacer un programa que solicite al usuario ingresar dos numeros y realizar las siguientes validaciones
// 1. El numero1 es igual que el numero2
// 2. El numero1 es diferente que el numero2
// 3. El numero2 es mayor que el numero1
// 4. El numero1 es menor que el numero2
// 5. El numero1 es mayor o igual que el numero2
// 6. El numero2 es menor o igual que el numero1
let num1 = 3;
let num2 = 6;

console.log("el num1 es igual al num2?", num1 === num2);
console.log("el num1 es diferente a num2", num1 !== num2);
console.log("el num2 es mayor al num1", num2 > num1);
console.log("el num1 es menor al num2", num1 < num2);
console.log("el num1 es mayor o igual que el num2", num1 >= num2);
console.log("el num2 es menor o igual que el num1", num2 <= num1);

