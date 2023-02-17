// Reto 03 
// crear el sistema de calendario para verificar si el día actual, junto a la hora es considerada día y horario laboral estándar: 9am - 6pm es horario laboral. usa new Date().getDay() resulta en el día de la semana del 0 - 6. Función businessHours. Parametros: hour = hora actual. Return: True/False si la hora actual es horario laboral. Función businessDay. parametros: day. Return: True/False si el día es laboral. Verificación de la resolucion de ambas funciones debe mostrar un mensaje.

const businessHours = (hour) => hour >= 9 && hour <= 18;
const businessDay = (day) => day >= 1 && day <= 5;
const isBusinessHours = businessDay(new Date().getDay()) && businessHours(new Date().getHours());

// Display on the console
console.log(isBusinessHours ? "La hora actual marca que es horario laboral" : "La hora actual marca que no es horario laboral");

////////////////////////////////////////////////////////////////////////

// Ejercicio 04
// Escribir una funcion que regrese la cantidad de valores true que hay en un array
/* 
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
 */
// Regresar 0 si el array es vacio
// usar recurcion

const countTrue = (arr) => arr.length === 0 ? 0 : (arr[0] ? 1 : 0) + countTrue(arr.slice(1));

// Example of use
const arr = [true, false, false, true, false];
//const arr = [false, false, false, false, false]; //➞ 0
//const arr = []; //➞ 0

// Display 2 on the console
console.log(countTrue(arr)); 

////////////////////////////////////////////////////////////////////////

//Ejercicio 05
// Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros
// Usar recursion

const greatestCommonDivisor = (a, b) => b === 0 ? a : greatestCommonDivisor(b, a % b);

// Example of use
// The result should be 14
console.log(greatestCommonDivisor(14, 56));


// Encontrar los primeros n elementos de la serie fibonacci
// Usar recursion 

const fi = (n) => {
   if( n === 0){
    return [];
} else if (n === 1) {
    return [0];
} else if (n === 2) {
    return [0, 1];
} else {
const array = fi(n - 1);
    array.push(array[array.length - 1] + array[array.length - 2])
    return array; } }

// Example of use
// The result should be [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fi(10));

////////////////////////////////////////////////////////////////////////

// Encontrar el numero n de una figura piramidal triangular (tetrahedron)
// (nivel) -> cantidad de numeritos

const tetrahedralNumber = (n) => {
    return n === 1 ? 1 : n + tetrahedralNumber(n - 1);
  };

// Example of use
// The result should be 21
console.log(tetrahedralNumber(6));  

////////////////////////////////////////////////////////////////////////

// Crear una funcion que tome el nombre de un pais y su area
// (nombre, a)
// Debe regresar la proporcion del area del pais en acorde a el area de tierra en el planeta
//('Russia', 17098242) -> Russia is 11.48%
// ("USA", 9372610) -> "USA is 6.29%

// According to the International Union for Conservation of Nature (IUCN), the total land area is approximately 148.9 million km².

const countryAreaPercentage = (name, a) => {
    const earthLandArea = 148940000;
    const percent = ((a / earthLandArea) * 100).toFixed(2);
    return `${name} is ${percent}%`;
  };

// Example of use
// The result should be Russia is 11.48% and USA is 6.29%
console.log(countryAreaPercentage('Russia', 17098242));
console.log(countryAreaPercentage('USA', 9372610));


// Escribir una funcion que retorne 0 si el input es 1 y 1 si el input es 0
// No se pueden utilizar condicionales, ternarios, negaciones ni operatores bit

const functionWithoutConditionals = (n) => {
    const array = [1, 0];
    return array[n];
  };

// Example of use
// The result should be 1 and 0
console.log(functionWithoutConditionals(0));
console.log(functionWithoutConditionals(1));


// Messenger bzzz
// (0 ) n
// Si no hay nadie -> "No hay nadie en linea"
// Si hay 1 persona -> "user1 esta en linea"
// Si hay 2 personas -> "user1 y user2 estan en linea"
// Si hay n>2 personas, "user1 y n-1 mas estan en linea"

const messenger = (n) => {
    switch (n) {
        case 0:
          return "No hay nadie en línea";
        case 1:
          return "user1 está en línea";
        case 2:
          return "user1 y user2 están en línea";
        default:
          return `user1 y ${n - 1} más están en línea`;
      }
    };

// Example of use
// The result should be user1 y user2 están en línea
console.log(messenger(2));
