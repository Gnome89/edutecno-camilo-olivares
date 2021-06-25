var n1 = prompt("ingresa aca n1");
var n1 = parseInt(n1);
var operar = prompt("ingrese operador +, -, /, *");
var n2 = prompt("ingrese aca n2");
var n2 = parseInt(n2);
if (operar == "+") {
    var resultado = n1 + n2;
} else if (operar == "-") {
    var resultado = n1 - n2;
} else if (operar == "*") {
    var resultado = n1 * n2;
} else if (operar == "/") {
    var resultado = n1 / n2;
} else {
    alert("Operador no valido");
}
alert("resultado");
var prueba = "12+4";
var split = prueba.split("+");
console.log(split);
console.log(split[0]);

var n1 = prompt("ingresa operacion");
// var prueba = "12+4";
var split = n1.split("+");
console.log(split);
console.log(split[0]);