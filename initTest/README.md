#practical javascript Prueba de JavaScript

## Variables y operaciones
### ¿Que es una variable y para que sirve?
- Una variable es una espacio memoria en donde se puede guardar un dato.

### ¿Cuál es la diferencia entre declarar e inicializar una variable?
- Al declara una variabla solo le indicas al programa que vas a tener una variable con es nombre:

      var nombre;
- Al inicializar una variable le das el dato o valor que esta va a guardar:

      nombre = Camila;
### ¿Cuál es la diferencia entre sumar números y concatenar strings?
- Sumar numeros es una operación aritmetica, concatenar strings es la union de dos cadenas de texto.

### ¿Cuál operador me permite sumar o concatenar?
- El operador es = '+'

### Determina el nombre o tipo de dato para almacenar en variables la siguiente informacion:
- Nombre: string                       //"Pepito"
- Apellido: string                     //"Perez"
- Nombre de usuario en Platzi: string  //"Pepit0123"
- Edad: int                            //17
- Correo electrónico: string           //"pepito.perez123@gmail.com"
- Mayor de edad: bool                  //false
- Dinero ahorrado: int                 //10
- Deudas: int                          //0

### Traduce a código JavaScript las variables del ejemplo anterior.

```
var nombre = 'Pepito';
var apellido = 'Perez';
var nickName = 'Pepit0123';
var edad = 17;
var email = 'pepito.perez123@gmail.com';
var mEdad = false;
var ahorros = 10;
var deudas = 0;
```

```
var nombreCompleto= nombre + " " + apellido;
var dineroReal = ahorros - deudas;

console.log(`El nombre completo es: ${nombreCompleto} y su dinero es ${dineroReal}`);
```

## Funciones

## ¿Qué es una función?
- Una **funcion** es una pieza de codigo que determina un valor de manera independiente y esta puede ser reutilizada evita que sobreescribamos codigo

## ¿Cuándo me sirve usar una función en mi código?
- Sirve cuando necesitas hacer algo específico o **repetitivo** o hasta para hacerlo mas **legible**.

## ¿Cuál es la diferencia entre parámetros y argumentos de una función?
- **Paramatros** se definen en la funcion son internos, los **argumentos** son los datos que se le pasan a la funcion externamente.

## Convertir codigo a función
```
function presentacion(nom, apell, nick){
  console.log("Mi nombre es " + nom + " " + apell  + ", pero prefiero que me digas " + nick + ".");
}

presentacion("Juan David", "Castro Gallego","juandc");
```

## Condicionales

### ¿Qué es una condicional?
- Es una sentencia de codigo que evalua una condicion por medio de booleanos

### ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
- **if**: bloque de codigo que se ejecuta si la condicion es verdadera
- **if else**: nueva condicion que sera verificado si las anteriores condiciones son falsas
- **else**: codigo que se ejecuta si ninguna de las condiciones son verdaderas
- **switch**: diferentes acciones y condiciones basados en casos
- ternario

### ¿Puedo combinar funciones y condicionales?
- Sí

### Bloque de codigo con if
```
const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion == "Free"){
  console.log("Solo puedes tomar los cursos gratis");
}
else if (tipoDeSuscripcion == "Basic"){
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else if (tipoDeSuscripcion == "Expert"){
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else if (tipoDeSuscripcion == "ExpertPlus"){
  console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
else {
  console.log("No existe ese tipo de suscripcion");
}
```

## Ciclos

## ¿Qué es un ciclo?
- Un trozo de codigo que se repite.

## ¿Qué tipos de ciclos existen en JavaScript?
- for, for of, for in, while, do while

## ¿Qué es un ciclo infinito y por qué es un problema?
- Porque nunca acaba

## ¿Puedo mezclar ciclos y condicionales?
- Sipidipi

```
let i = 0;
while(i<5){
  console.log("El valor de i es: " + i);
  i++;
}

let j = 10;
while(j>=2){
  console.log("El valor de j es: " + j);
  j--;
}

let input = 0;

while(!(input === 4)){
  let input = prompt('¿Cual es el resultado de 2 + 2?');
}
```

## Listas
### ¿Qué es un array?
- Es un conjunto de datos

### ¿Qué es un objeto?
- Es como una caja con propiedades

### ¿Cuándo es mejor usar objetos o arrays?
- Cuando se necesite replicar codigo objetos, pero depende del tipo de problema

### ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
- Sipidipi

### Imprimir primer elemento
```
const array = [12123541,2,3];

function printFirst(ar) {
  console.log(ar[0]);
}

printFirst(array);
```
### Imprimir cada elemento
```
const array = [12123541,2,3];

function printFirst(ar) {
  array.forEach( (elem) =>{
    console.log(elem);  
  })
}
printFirst(array);
```
### Imprimir Objeto
```
let user = {
    nombre: 'Wiiii',
    apellido: 'Fake',
    edad: 4, 
}

function printObject(object){
    Object.values(object).forEach(element => console.log(element))
}

printObject(user)
```
