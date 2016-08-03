// ''' var mensaje = 'S23984203948023948234o34234345453y52345435345 345345345345345345u3453453453223452452345n324534545346654768780807896784865 535624643531453245234154g24366464565346r645634564576573a4573435735468n45684568 456d845e684658654867497465732456s246534a7567r456r74568465865865o86l7845685735743573457354735l67645865478564864584658658a45685484658456d456845684684563562453754o73573457437567345635688r' '''
//
// este mensaje contiene letras y numeros, elimina los numeros usando splice, de esa manera el arreglo resultante sera el mensaje que tenemos preparado para ti.

// INPUT
  // String (Cadena de caracteres con numeros)
// OUPUT
  //  Array (Array con Cadena de caracteres)
// PSEUDOCODE
  //Convertir cadena de caracteres a un arreglo.
  //Realizar un bucle para separar cada elemento del arreglo
  //se compara cada iteracion para determinar numeros y letras
  //utilizar metodo splice para quitar elementos
  //imprimir el resultado en un array

  // Convert string to array
  // Make a loop to separate each array element.
  // Each iteration is compared to determine numbers and letters
  // Use splice method to merove items
  // print the result in an array

// 'use strict';
// let mensaje = 'S23984203948023948234o34234345453y52345435345 345345345345345345u3453453453223452452345n324534545346654768780807896784865 535624643531453245234154g24366464565346r645634564576573a4573435735468n45684568 456d845e684658654867497465732456s246534a7567r456r74568465865865o86l7845685735743573457354735l67645865478564864584658658a45685484658456d456845684684563562453754o73573457437567345635688r';
//
// let resultado = [];
//
// for(var i=0 ;i<mensaje.length;i++){
//       if(isNaN(mensaje[i]) === true)  {
//         resultado += mensaje[i];
//       }
// }
// console.log(resultado);
//

//REFACTORIZAR


'use strict';
let mensaje = 'S23984203948023948234o34234345453y52345435345 345345345345345345u3453453453223452452345n324534545346654768780807896784865 535624643531453245234154g24366464565346r645634564576573a4573435735468n45684568 456d845e684658654867497465732456s246534a7567r456r74568465865865o86l7845685735743573457354735l67645865478564864584658658a45685484658456d456845684684563562453754o73573457437567345635688r';
let arrMensaje = mensaje.split('');

for(var i=0 ;i<arrMensaje.length;i++){

      if(isNaN(parseInt(arrMensaje[i])) === false )  {

        arrMensaje.splice(i,1);
        i--;
        // console.log('Este es el indice > '+i);
        // console.log('Este es el valor > '+arrMensaje[i]);
        // console.log('Esto se borro > '+arrMensaje.splice(i,1) );

      }
}
console.log(' > '+ arrMensaje);
