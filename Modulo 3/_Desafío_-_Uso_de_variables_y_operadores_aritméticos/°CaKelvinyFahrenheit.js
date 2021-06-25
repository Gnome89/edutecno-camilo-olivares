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