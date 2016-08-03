// String
//
// Ahora ya sabes como recorrer un array, pero que pasa con las cadenas (strings)?
//
// ''' var string = 'ollorased'; // el string es desarrollo al reves '''
// Tu objetivo es crear un array que este en orden, recuerda el uso de for,
// tambien ten en cuenta de los incrementos y decremetos que puedes hacer en un for...

// INPUT
  // String (Cadena de caracteres en orden al reves)
// OUPUT
  //  Array (Array con caracteres acomodadas en orden resultado de un buble)
// PSEUDOCODE
  //Crear un bucle para iterar un arreglo iniciando desde la ultima letra
  //la condicion se decrementa en cada iteracion
  //imprimir el resultado de la cadena de texto en orden correcto

  // Create a loop for iter an array, starting from the last letter.
  // the condition is decremented in each iteration
  // print the result of the string in correct order.
'use strict';
let string = 'ollorrased';
let resultado = [];

for(var i=string.length-1;i>=0;i--){
  resultado += string[i];
  // console.log(resultado);
}
console.log(resultado);
