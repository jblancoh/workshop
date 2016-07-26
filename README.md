<<<<<<< HEAD
g# workshop
=======
# workshop
---
>>>>>>> 172eaa68ed93ce37832fc189637922166f6905fd
## Workshop sobre javascripting
---
## Cuantos pomodoros te tomo terminar?

Lo realize en 4 pomodoros, dos temas se me complicaron, y me puse a investigar un poco sobre ello, lo cual me llevo mas tiempo comprender.

## Que temas son con lo que mas luchaste? (Del mas dificil al menos dificil...)

###### Looping Through Arrays
Se trata este tema de acceder y manipular valores de un array.

El reto me creo algunas confusiones, es sencillo solo que no recorde utilizar el length, para que el loop limitara la consulta a el numero de palabras en el array, lo hice primero de esta manera
```
var pets = ['cat','dog','rat'];

for(i = 0;i<pets;i++){

  pets[i] = pets[i] + 's';

}
console.log(pets);
```
luego investigando recorde del uso de length para que me diera el numero de palabras en el arrays.
```
var pets = ['cat','dog','rat'];

for(i = 0;i<pets.length;i++){

  pets[i] = pets[i] + 's';

}
console.log(pets);
```

###### For Loop
El loop for es como lo siguiente:
```
for (var i = 0; i < 10; i++) {  
     // imprime los números del 0 al 9  
     console.log(i);  
   }  

```
la variable i la utiliza como contador, ahi se almacenara la cantidad de veces que se ejecute el loop, la segunda expresion la utiliza para limitar el numero de veces que se ejecuta el loop, hasta que la condicion llegue al limite que le indicamos, la expresion i++ incremente la variable i en uno en cada iteracion.

El reto se me complico ya que al hacer el for no imprimia lo que realmente pedia el reto, lo hice de esta manera
```
var total= 0;
var limit = 10;

for (i = 0 ;i<limit;i++){
  total += i;
  console.log(total);
}
```
Tenia que imprimir el total de la iteracion entonces tenia que declarar el console.log por fuera del loop
```
var total = 0;
var limit = 10;

for(i = 0;i < limit;i++){
	total += i ;

}
console.log(total)

```
###### Scope
Esto es el conjunto de variables, objetos y funciones a las que tiene un acceso, comprendi el uso de las variables locales y globales, y su utilizacion en funciones anidadas, y como variables dentro de otras funciones no pueden ser utilizadas por la funcion anterior, o fuera de ellas.

Reto con complicaciones para determinar la ubicacion del console.log , pero rapido al revisar todas las funciones y sus variables pude detectar en que ubicacion podria realizar dicha consulta

```
var a = 1, b = 2, c = 3;
  (function firstFunction(){
    var b = 5, c = 6;
      (function secondFunction(){
        var b=8;
        console.log("a: " +a+", b: " +b+", c: "+c);
          (function thirdFunction(){
            var a = 7, c = 9;
            (function fourthFunction(){
              var a = 1, c = 8;
            })();
          })();
      })();
  })();
```
###### Function Arguments
Las funciones pueden recibir cual cantidad de argumentos, los cuales pueden ser string, un numero, un array o incluso otra funcion.

Reto sin complicaciones
```
function math (farg,sarg,targ){
  return farg + (sarg * targ ) ;

}
console.log(math(53,61,67));
```
###### Functions
Es un bloque de codigo que puede recibir un input y devolver un output

Reto sin complicaciones
```
function eat(food){
  return food + ' tasted really good.';

}
  console.log(eat('bananas'));
```
###### Object Properties
Muestra como podriamos manipular las propiedades de un objeto.

Reto sin complicaciones
```
var food = {
  types: 'only pizza'
};

console.log(food['types']);
```
###### Objects
Los objetos los define como contenedores o como diccionarios.

Reto sin complicaciones
```
var pizza = {
  toppings:['cheese','sauce','pepperoni'],
  crust:'deep dish',
  serves: 2
};
console.log(pizza)
```
###### Accessing Array Values
Vemos como acceder a un elemento de un array atraves de un numero de indice.


Reto sin complicaciones
```
var food = ['apple','pizza','pear'];
console.log(food[1]);
```
###### Array Filtering
Metodo para filtrar algunos valores de algun array.

Reto sin complicaciones
```
var numbers = [1,2,3,4,5,6,7,8,9,10];
var filtered = numbers.filter(function evenNumbers(number){
  return number % 2 === 0;
})
console.log(filtered);
```
###### Array
Lista ordenada de elementos

Reto sin complicaciones
```
var pizzaToppings = ['tomato sauce','cheese','pepperoni'];

console.log(pizzaToppings);
```

###### If Statement
Utilizado para alterar el control de flujo de un programa

Reto sin complicaciones
```
var fruit = 'orange';
	if(fruit.length > 5){

		console.log('The fruit name has more than five characters.');
}else{
		console.log('The fruit name has five characters of less.');
}
```

###### Number to String
Convertir numero a un String

Reto sin complicaciones
```
var n = '128';

n = n.toString();

console.log(n);
```

###### Rounding Numbers
Redondear un tumero con el objeto Math.

Reto sin complicaciones

```
var roundUp = Math.round(1.5);

var rounded = roundUp;

console.log(rounded);
```
###### Numbers
Numeros pueden ser enteros o decimales

Reto sin complicaciones
```
var example = 123456789;
  console.log(example);
```
###### Revising Strings
Modificando strings con el metodo .replace()
Reto sin complicaciones
```
var pizza = 'pizza is alright';
  pizza = pizza.replace('alright', 'wonderful');
  console.log(pizza);
```

###### String Length
Propiedad .length, para revisar el numero de caracteres que hay en un string.

Reto sin complicaciones
```
var example = 'example string';
  console.log(example.length);
```

###### Strings
Variable tipo string

Reto sin complicaciones
```
var someString = 'this is a string';
console.log(someString);
```
###### Variables
Referencia a un valor utilizando la palabra reservada var.
Reto sin complicaciones
```
var example = 'some string';
console.log(example);
```
###### Introduction
Introduccion a javascripting,instrucciones para creacion de carpeta y archivos.
Se crea archivo para comprobar el uso y verificacion de esto workshop
```
console.log('hello');
```
## Que es npm?

El proyecto “npm” es nombrado luego de la utilidad de la linea de comandos, la cual fue organicamente selecionada para ser fácilmente escrita por un programador de mano derecha usando un teclado US QWERTY, terminando con el dedo del anillo derecho en una posición para escribir - seguido de parámetros o “flags”. Esta utilidad de linea de comandos siempre es en minúsculas.

npm es el encargado de los manejos de dependencias o modulos de node.js los usos comunes de esta linea de comando son para publicar, descubrir, instalar y desarrollar programas en node.

Su funcion va a la gestion de paquetes que otros desarrolladores han realizado para facilitar las tareas de algunos programas, estos paquetes son codigos reutilizables, que puede ayudar a trabajar mejor con javascript.

## Para que usamos el ```alias js=javascripting```

Reemplaza la palabra javascripting por "js", para el uso rapido del comando, es una manera de personalizar nuestra terminal.
