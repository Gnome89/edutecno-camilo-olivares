var año = 365;
var semana = 7;

var numero = prompt("ingrese numero");
console.log(numero);

if (numero < año) {
    weeks = Math.floor(numero / semana);
    days = Math.floor(numero % semana)
    console.log("semanas : ", weeks);
    console.log("dias: ", days);
} else {
    years = Math.floor(numero / año); //1
    weeks = Math.floor((numero % año) / semana); //10/7 = 1
    days = Math.floor((numero % año) % semana);
    console.log("años: ", years);
    console.log("semanas: ", weeks);
    console.log("dias: ", days)
}