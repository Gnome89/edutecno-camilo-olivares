// const tempC = tempC + 273.15 K;
// const tempC = tempC + 32 F;
// var tempC = prompt("Ingrese temperatua de grados celsius");
// var C = parseInt(°C)

// const 273.15 + 0 c = 273.15 k;
// const 32 + 0 c = 32 f;

// 0° C + 273.15 = 273.15 K(0° C× 9 / 5) + 32 = 32° F

// var celsius = prompt("ingresa temperatura de grados celsius");
// var celsius = parseInt(celsius);
// var medida = prompt("ingrese kelvin o farenheit");
// var kelvin = celsius + 273.15
// var farenheit = celsius + 32

// ---------------------------


const K = 273.15;
const F = 32;

function aKelvin(gradosCentigrados) {
    return gradosCentigrados + K
}

function aFahrenheit(gradosCentigrados) {
    return (gradosCentigrados * 9 / 5) + F
}

var celsius = prompt("ingresa temperatura en grados celsius");
var celsius = parseInt(celsius);
var kelvin = aKelvin(celsius)
var fahrenheit = aFahrenheit(celsius)

console.log("Temperatura en Kelvin: " + kelvin);
console.log("Temperatura en Fahrenheit: " + fahrenheit)