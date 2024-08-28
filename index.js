//1. Declara una variable llamada nombre y asígnale tu nombre como valor.
let nombre = "Scarlet";
console.log(nombre);


//2. Crea una variable llamada edad y asígnale tu edad.
let edad = "20";
console.log (edad);


//3. Declara una variable ‘esEstudiante’ y asígnale un valor booleano.
let nom = Scarlet
let esEstudiante = true;
let age = 20
if (esEstudiante && edad >= 18) {
  console.log(nom + " es estudiante universitaria y tiene descuento.");
} else {
  console.log(age + " no cumple con los requisitos para el descuento.");
}
//4. Utiliza un if para verificar si un número es positivo, negativo o cero e imprime el
//resultado.
let numero = prompt("Ingrese un número:");
numero = Number(numero);

if (numero > 0) {
  console.log("El número es positivo.");
} else if (numero < 0) {
  console.log("El número es negativo.");
} else {
  console.log("El número es cero.");
}

//5. Declara una variable hobbies que contenga un array con tus hobbies.
let hobbies = ["Cocinar", "leer", "Bailar", "escuchar música"];
console.log(hobbies[1]);
console.log(hobbies[3]);

//6. Crea un objeto persona que contenga tres propiedades: nombre, edad y Estudiante.

let persona = {
  nombre: "Scarlet",
  edad: 20,
  esEstudiante: true
};
console.log(persona.nombre);
console.log(persona.edad);   
console.log(persona.esEstudiante); 

//7. Declara una variable nullVar y asígnale el valor null.
let nullVar = "null";
console.log (nullVar)
//8. Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los
//años que ha cumplido (desde 1 hasta su edad).
let eda = prompt("¿Cuál es tu edad?");

eda = Number(eda);

if (isNaN(eda)) {
  console.log("Por favor, ingresa un número válido.");
} else {
  for (let año = 1; año <= eda; año++) {
    console.log("Has cumplido " + año + " años.");
  }
}

//9. Declara una variable numeroHex que contenga un número hexadecimal.
let numeroHex = "0xAF";
console.log (numeroHex) ;

//10. Crea una variable nombreCompleto que concatene tu nombre y tu apellido.
let nombreCompleto = "Scarlet Castillo";
console.log (nombreCompleto) ;
//11. Suma dos números y almacena el resultado en una variable suma.
let num1 = 8;
let num2 = 7;

let suma = num1 + num2;

console.log("La suma es:", suma);

//12. Resta dos números y guarda el resultado en una variable resta.

let numero1 = 10;
let numero2 = 3;

let resta = numero1 - numero2;

console.log("La resta es:", resta);

//13. Multiplica dos números y asigna el resultado a una variable multiplicacion.
let nume1 = 7;
let nume2 = 5;

let multiplicacion = nume1 * nume2;
console.log ("La multiplicacios es: ", multiplicacion);

//14. Divide dos números y almacena el resultado en una variable division.
let dividendo = 20;
let divisor = 4;

let division = dividendo / divisor;

console.log("La división es:", division);

//15. Usa el operador de módulo para encontrar el residuo de 10 dividido por 3 y almacena el resultado en una variable modulo.
let dividend = 10;
let divis = 3;

let modulo = dividend % divis;

console.log("El residuo de la división es:", modulo);

//16. Incrementa el valor de una variable contador en 1 usando el operador de incremento.
let contador = 3;
let resultado = ++contador;

console.log("contador:", contador);  
console.log("resultado:", resultado); 

//17. Decrementa el valor de una variable contadorDec en 1 usando el operador de decremento.

let contadorDec = 3;
let result = --contadorDec;

console.log("contadorDec:", contadorDec);  
console.log("resultado:", result); 

//18. Crea una lista con al menos 5 elementos y luego imprime toda la lista.

let miLista = ["papaya", "cereza", "quiwi", "uva", "fresa"];

console.log(miLista);
//19. Verifica si un valor está presente en una lista.
const viveres = ["aceite", "sal", "azucar"];

const estaelAzucar = viveres.includes("azucar");
console.log (estaelAzucar); 

//20. Añade un elemento al final de la lista y otro en una posición específica.
const frutas = ["manzana", "banana", "pera"];
frutas.push("uva");

console.log(frutas); 

//21. Elimina un elemento de la lista por su valor y otro por su índice.
const fruts = ["manzana", "banana", "pera", "uva"];
const frutsAEliminar = "banana";

const frutsFiltradas = fruts.filter(fruts => fruts !== frutsAEliminar);

console.log(frutsFiltradas); 

//22. Compara dos números para ver si son iguales y almacena el resultado (booleano) en una variable sonIguales.
let numer1 = 8;
let numer2 = 3;

let sonIguales = numer1 === numer2;

console.log(sonIguales); 

//23. Comprueba si un número es mayor que otro y guarda el resultado (booleano) en una variable esMayor.

let num_1 = 15;
let num_2 = 10;
let esMayor = num_1 > num_2;
console.log(esMayor);



//24. Escribir un programa que almacene la cadena de caracteres contraseña en una
//variable, pregunte al usuario por la contraseña e imprima por pantalla si la contraseña
//introducida por el usuario coincide con la guardada en la variable sin tener en cuenta
//mayúsculas y minúsculas.
const contraseñaCorrecta = "micontraseñasecreta".ScarcasM3();

const contraseñaUsuario = prompt("Ingrese su contraseña:");

const contraseñaUsuarioMinuscula = contraseñaUsuario.ScarcasM3();

if (contraseñaUsuarioMinuscula === contraseñaCorrecta) {
  console.log("¡Contraseña correcta!");
} else {
  console.log("Contraseña incorrecta.");
}


//25. Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos
//ingresos iguales o superiores a 1000 € mensuales. Escribir un programa que pregunte 
const  adad= parseInt(prompt("Ingrese su edad:"));
const ingresosMensuales = parseFloat(prompt("Ingrese sus ingresos mensuales en euros:"));

if (edad >= 16 && ingresosMensuales >= 1000) {
  console.log("Usted está obligado a tributar.");
} else {
  console.log("Usted no está obligado a tributar.");
}











