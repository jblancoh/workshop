"use strict";
//Te daremos un arreglo de enteros, tu trabajo es sumar todos los enteros y regresar la suma total de ellos.
//

// ejemplo...
//
// 1+2+3+4+5+6 = 21
//
// Recuerda que siempre es una buena idea hacer pseudocodigo antes de iniciar a tirar codigo.
//
// Identifica el input.
// Identifica el output.
// Haz el pseudocodigo.
// A tirar codigo...

// Input
  // Array(Integers)
// Output
  // Integer(Integer, resulting in the addition of values in the Array)
//PSEUDOCODE

  //iteramos el arreglo
  //obtenemos el resutado de la iteracion y sumamos el siguiente numeros
  //obtenemos la suma total de la iteracion y la imprimimos


// let numeros = [1,2,3,4,5,6];
// let total = 0;
//
// for (var i=0; i<numeros.length; i++){
//   total =total + numeros[i];
//
// }
// console.log(total);

//REFACTORIZAR

let numeros = [1,2,3,4,5,6].reduce(function(a,b){
  return a+b;

})
console.log(numeros);
