// Factoriales
//
// Un factorial es el producto resultante de todos los enteros desde el 1 hasta el numero en si, se representa con un signo de admiracion.
//
// 5! es 1x2x3x4x5 = 120
//
// Tu mision es hacer una funcion en la que encuentres el factorial de cualquier numero que se ingrese.
//
// Recuerdas como usar un for?

// INPUT
  // Interger(Integer, Number input in the function.)
// OUTPUT
  // Integer(Integer, product resulting from all the numbers from one to the number itself )
//PSEUDOCODE
  //Crear una funcion con un bucle.
  //se multiplica numero resultante por cada numero de la iteracion hasta llegar al numero en si
  //Imprimir el producto resultante.

  // Create a function with a loop.
  // Resulting number is multiplied by each iteration number until the number itself
   // Print the resulting product.

'use strict';

//let numero = prompt("Ingresa un numero");
let total = 1;

function factorial(numero){
  for (var i=1;i<=numero;i++){
    total *= i;
  }
console.log(total);
}
factorial(5);
