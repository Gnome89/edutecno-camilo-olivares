// Var num1 y num2 definidas por el usuario. prompt pride datos y parseInt los muestras cuando son Numeros
var num1 = prompt("ingresa aca n1 > 0");
var num1 = parseInt(num1);
var num2 = prompt("ingrese aca n2 > 0");
var num2 = parseInt(num2);
// Var (+ - * / %)
var suma = num1 + num2;
var resta = num1 - num2;
var multiplicacion = num1 * num2;
var division = num1 / num2;
var modulo = num1 % num2;
// alert = mensaje en ventana emergente sobre el resultado con sus variables
alert("El resultado de la suma es " + suma);
alert("El resultado de la resta es " + resta);
alert("El resultado de la multiplicacion es " + multiplicacion);
alert("El resultado de la division es " + division);
alert("El resultado de la modulo es " + modulo);