var dias_totales = prompt("Ingrese la cantidad de días que desea calcular");
var dias_totales = parseInt(dias_totales);
var años = Math.floor(dias_totales / 365); //1 //1
var meses = Math.floor((dias_totales % 365) / 30); //10 / 30 //4 15
var semanas = Math.floor(((dias_totales % 365) % 30) / 7); //10 0.333 / 7 = 1 //2
var dias = Math.floor((((dias_totales % 365) % 30) % 7)); //3  //1
alert(`Son ${años} años, ${meses} meses, ${semanas} semanas, ${dias} dias`);



// const dias = 1 & 6
// const dias = 2
// const dias = 3
// const dias = 4

// const semana = 7
// const año = 365

// var total_dias = prompt("ingrese cantidad de dias");
// var total_dias = parseInt(total_dias);
// console.log(total_dias);

// Math.floor

// if (total_dias >= 1 && total_dias < 7) {
//     console.log("functiona")
//     total_dias = dias
// } else {
//     total_dias
// }


// if total_dias < año

//     (total_dias / semana) %



// total_dias / año =

//     Crear un programa que pida al usuario una cantidad de días y que muestre su
// equivalente en Años, Semanas y Días.Por ejemplo, si el usuario ingresa 373, el
// resultado debe ser 1 año, 1 semana y 1 día.
// Se debe considerar lo siguiente: ●1 año tiene 365 días● 1 semana tiene 7 días
// Se recomienda usar la función Math.floor para obtener la parte entera de un número
// decimal.