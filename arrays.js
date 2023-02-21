// Encontrar el nombre de una sociedad secreta segun los datos de los nombres para cada integrante
// secretName(["Felipe", "Fer", "Zabdiel"]) -> FFZ
// secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']) -> CJMPRR
// secretName(['Harry', 'Ron', 'Hermione']) -> HHR

const secretSociety = (array) => {
  const init = array.map((name) => name[0]).sort();
  return init.join('');
};

console.log("Ejercicio 1:");
console.log(secretSociety(["Felipe", "Fer", "Zabdiel"])); // -> FFZ
console.log(secretSociety(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])); // -> CJMPRR
console.log(secretSociety(['Harry', 'Ron', 'Hermione'])); // -> HHR
console.log("-------------------");

  

// onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']) -> 'mockIng99, J0eyPunch and one 1 more online'

const onlineStatus = (u) => {
  const count = u.length;
  if (count === 0) return 'Looks like the party\'s over, everyone\'s gone offline.';   
  let message = '';
  if (count === 1) {
    message = `${u[0]} is online`;
  } else if (count === 2) {
    message = `${u[0]} and ${u[1]} are online`;
  } else {
    const extraCount = count - 2;
    message = `${u[0]}, ${u[1]} and ${extraCount} more are online`;
  }
  return message;
}; 

console.log("Ejercicio 2:");
console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));
console.log("-------------------");

// Crear una funcion que tome 2 parametros, (numero, longitud) y regrse un array de longitud cantidad de numeros multiplos del numero por parametro
// arrayMultiplos(2, 10) -> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// arrayMultiplos(17, 6) -> [17, 34, 51, 68, 85, 102]


const arrayMultiplos = (numero, longitud) => {
  const array = [];
  for (let cont = 1; cont <= longitud; cont++) {
    array.push(numero * cont);
  }
  return array;
};

console.log("Ejercicio 3:");
console.log(arrayMultiplos(2, 10)); // -> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
console.log(arrayMultiplos(17, 6)); // -> [17, 34, 51, 68, 85, 102]
console.log("-------------------");



// Escrbir una funcion que descubra si el array es dominante positivo
// Un array es positivo dominante cuando la mayoria de sus elementos son positivos -> [1, -2, 55, 10]
// positiveDom([-1, -3, -5, 4, 6767]) -> false

const positiveDom = (arr) => {
  const positiveElems = arr.filter(elem => elem > 0);
  return positiveElems.length > arr.length / 2;
};

console.log("Ejercicio 4:");
console.log(positiveDom([1, -2, 55, 10])); // -> true
console.log(positiveDom([-1, -3, -5, 4, 6767])); // -> false
console.log("-------------------");


// Promedio antipode
// Dado un array, devolver un array de menor longitud de acuerdo a los siguentes pasos:
// - Dividir el array en 2 partes iguales*. Si no son iguales, eliminar el elemento en medio para obtener 2 arrays iguales
// - Sumar cada numero de la primera parte con los numeros inversos de la segunda parte
// [1,2,3] [5,22,6] -> 1 + 6, 2 + 22, 3 + 5 -> [7, 24, 8]
// - Dividir cada numero del array final entre 2  -> [3.5, 12, 4]

const antipodeAvg = arr => {
  const len = arr.length;
  const mid = len / 2;

  // Si la longitud del array no es par, eliminar el elemento en medio
  if (len % 2 !== 0) {
    arr.splice(Math.floor(mid), 1);
  }

  // Dividir el array en 2 partes iguales
  const arr1 = arr.slice(0, mid);
  const arr2 = arr.slice(mid).reverse();

  // Sumar cada numero de la primera parte con los números inversos de la segunda parte
  const sumArr = arr1.map((n, i) => n + arr2[i]);

  // Dividir cada numero del array final entre 2
  const result = sumArr.map(n => n / 2);

  return result;
};

console.log("Ejercicio 5:");
console.log(antipodeAvg([1, 2, 3, 5, 22, 6])); // -> [3.5, 12, 4]
console.log(antipodeAvg([1, 2, 3, 4, 5])); // -> [3, 3]
console.log("-------------------");




