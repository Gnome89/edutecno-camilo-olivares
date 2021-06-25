var num1 = prompt("ingresa aca n1 > 0");
var num1 = parseInt(num1);
var operar = prompt("ingrese operador +, -, /, *, MOD");
var num2 = prompt("ingrese aca n2 > 0");
var num2 = parseInt(num2);
if (operar == "+") {
    var resultado = num1 + num2;
} else if (operar == "-") {
    var resultado = num1 - num2;
} else if (operar == "*") {
    var resultado = num1 * num2;
} else if (operar == "/") {
    var resultado = num1 / num2;
} else if (operar == "%") {
    var resultado = num1 % num2;
} else {
    alert("Operador no valido");
}
alert(resultado);


// var prueba = "12+4";
// var split = prueba.split("+");
// console.log(split);
// console.log(split[0]);









// function (split) 

// var funcion = prompt("ingrese operacion"); + - / *

// function suma() {
//     var n1 = prompt("ingresa aca n1");
//     var n1 = parseInt(n1);
//     var n2 = prompt("ingrese aca n2");
//     var n2 = parseInt(n2);
//     var resultado = n1 + n2;
//     alert(resultado);
// }

// function resta(n1, n2) {
//     alert(n1 - n2);
// }

// function multiplicacion(n1, n2) {
//     alert(n1 * n2);
// }

// function divicion(n1, n2) {
//     alert(n1 / n2);
// }

// suma(4, 2);

// var resultado = parseInt(resultado);
// alert(resultado);

// var operar parseInt(+)
// var operar