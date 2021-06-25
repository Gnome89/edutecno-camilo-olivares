//Juego piedra papel o tijeras.
//Primera parte del juego, pregunta al usuario, ¿Quieres jugar Cachipún?: Si o No.
var juegoactual = 0;
var respuesta = prompt("Jueguemos Chachipún: Si o No");
var ganaUsuario = 0;
var ganaMaquina = 0;
var Empate = 0;

if (respuesta == "Si" || respuesta == "si" || respuesta == "SI") {
    var veces = prompt("cuántas veces quieres jugar");
    while (juegoactual < veces) {

        var decisionUsuario = prompt("¿Piedra, Papel o Tijera?");
        var decisionOrdenador = aleatorio();

        document.write("Usuario: " + capitalizeFirstLetter(decisionUsuario) + ", Ordenador: " + decisionOrdenador + " ");

        // console.log("Usuario: " + capitalizeFirstLetter(decisionUsuario) + ", Ordenador: " + decisionOrdenador);
        logicaJuego(capitalizeFirstLetter(decisionUsuario), decisionOrdenador);
        juegoactual++
    }

    // var decisionUsuario = prompt("¿Piedra, Papel o Tijera?");
    // logicaJuego(capitalizeFirstLetter(decisionUsuario), decisionOrdenador);
} else {
    alert("¡¡sniff sniff!!");
}

// while (juegoactual < veces) {
//     logicaJuego(capitalizeFirstLetter(decisionUsuario), decisionOrdenador);
//     Juegoactual++
// }


//Primera parte del juego, pide al usuario que elija entre piedra, papel o tijera.
// var decisionUsuario = prompt("¿Piedra, Papel o Tijera?");

//Segunda parte del juego. El ordenador "decide" su elección de forma aleatoria.
// var aleatorio = function() //SE CAMBIA POR DECLARAR FUNCION DE LINEA 32 
//declarando funcion para usarlo en linea 10
function aleatorio() {
    var numero = Math.floor((Math.random() * 3) + 1);
    var respuesta;
    if (numero === 1) {
        respuesta = "Piedra";
    } else if (numero === 2) {
        respuesta = "Papel";
    } else {
        respuesta = "Tijera";
    }
    return respuesta;
};

// var decisionOrdenador = aleatorio(); (a linea 10)
console.log("Usuario: " + capitalizeFirstLetter(decisionUsuario) + ", Ordenador: " + decisionOrdenador);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

//Tercera parte del juego. Se decide quién es el ganador

//logicaJuego es lo que ejecuta la "function logicajuego (LINEA 62)"
// logicaJuego(capitalizeFirstLetter(decisionUsuario), decisionOrdenador); COMENTADO PORQUE SE EJECUTA EN LA LINEA 16


//las variables ganaUsuario, ganaMaquina y Empate. Deben acumular valores cuantas veces ganaUsuario, ganaMaquina y Empate.

function logicaJuego(decisionUsuario, decisionOrdenador) {
    if (decisionUsuario == decisionOrdenador) {
        Empate++;
        // return console.log("Empate, los dos eligieron " + decisionUsuario);
        document.write("Empate, los dos eligieron " + decisionUsuario + '<br>');
        return "Empate"

    } else {
        if (decisionUsuario == "Piedra" && decisionOrdenador == "Papel") {
            ganaMaquina++;
            document.write("" + decisionUsuario + " vs " + decisionOrdenador + ", gana el ordenador." + '<br>');
            ganaMaquina++
            return false
        }
        if (decisionUsuario == "Piedra" && decisionOrdenador == "Tijera") {
            ganaUsuario++;
            document.write("" + decisionUsuario + " vs " + decisionOrdenador + ", gana el usuario." + '<br>');
            return true
        }
        if (decisionUsuario == "Papel" && decisionOrdenador == "Tijera") {
            ganaMaquina++;
            document.write("" + decisionUsuario + " vs " + decisionOrdenador + ", gana el ordenador." + '<br>');
            return false
        }
        if (decisionUsuario == "Papel" && decisionOrdenador == "Piedra") {
            ganaUsuario++;
            document.write("" + decisionUsuario + " vs " + decisionOrdenador + ", gana el usuario." + '<br>');
            return true
        }
        if (decisionUsuario == "Tijera" && decisionOrdenador == "Piedra") {
            ganaMaquina++;
            document.write("" + decisionUsuario + " vs " + decisionOrdenador + ", gana el ordenador." + '<br>');
            return false
        }
        if (decisionUsuario == "Tijera" && decisionOrdenador == "Papel") {
            ganaUsuario++;
            document.write("" + decisionUsuario + " vs " + decisionOrdenador + ", gana el usuario." + '<br>');
            return true
        }
    }
};

if (Empate > ganaMaquina && Empate > ganaUsuario) {
    document.write("" + "Empate" + '<br>');
} else if (ganaMaquina > ganaUsuario) {
    document.write("" + "Ganó la máquina" + '<br>');
} else if (ganaMaquina < ganaUsuario) {
    document.write("" + "Ganó el usuario" + '<br>');
}

// let puntuaciones = new Map()
// puntuaciones.set('nombrejugador', 0)


// ● Felicitar al ganador en caso de ser el usuario.
// ● Indicarle al usuario que ha perdido contra la máquina en caso de que ésta sea
// la que gane.
// ● Declarar un empate.