'use strict';
// Muy bien, ya sabes sumar arreglos, ahora que pasaria si solo queremos sumar los numeros pares en un arreglo?
//
// Dado [1,2,3,4,5,6,7,8,9,10] el resultado debe ser
//
// INPUT
  // Array(Integers)
// OUTPUT
  // Integer(Integer, resulting in the sum of the numbers pairs of the array )
//PSEUDOCODE
  //Crear un bucle.
  //Sumamos los numeros pares al resultado del bucle en cada iteracion.
  //Imprimir la suma total de los resultados del bucle.

  // Create a loop.
  // We add even numbers to result in each iteration of the loop.
  // print the total sum of the result of th loop.

let numeros = [1,2,3,4,5,6,7,8,9,10];
let total = 0;

for(var i=0;i<numeros.length;i++){
  if (numeros % 2 == 0){
  }
  i++;
  console.log(numeros[i]);
  total = total + numeros[i];
}
console.log(total);
