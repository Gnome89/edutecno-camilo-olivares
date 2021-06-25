var juegoactual = 0;
var respuesta = prompt("Jueguemos Chachipún: Si o No");
var ganaUsuario = 0;
var ganaMaquina = 0;
var empate = 0;

if (respuesta == "Si" || respuesta == "si" || respuesta == "SI") {
    var veces = prompt("cuántas veces quieres jugar");
    while (juegoactual < veces) {

        var decisionUsuario = prompt("¿Piedra, Papel o Tijera?");
        var decisionOrdenador = aleatorio();

        document.write("Usuario: " + capitalizeFirstLetter(decisionUsuario) + ", Ordenador: " + decisionOrdenador + " ");

        //    logicaJuego(capitalizeFirstLetter(decisionUsuario), decisionOrdenador);
        //     if (ganaUsuario === true) {
        //         ganaUsuario++
        //     } else if (ganaMaquina === false) {
        //         ganaMaquina++
        //     } else if (Empate === "Empate") {
        //         Empate++
        //     }
        //     juegoactual++
        // }

        var gana = logicaJuego(capitalizeFirstLetter(decisionUsuario), decisionOrdenador);
        if (gana === true) {
            ganaUsuario++
        } else if (gana === false) {
            ganaMaquina++
        } else if (gana === "Empate") {
            empate++
        }
        juegoactual++
    }

} else {
    console.log("¡¡sniff sniff!!");
}

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


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function logicaJuego(decisionUsuario, decisionOrdenador) {
    if (decisionUsuario == decisionOrdenador) {
        document.write("Empate, los dos eligieron " + decisionUsuario + '<br>');
        return "Empate"

    } else {
        if (decisionUsuario == "Piedra" && decisionOrdenador == "Papel") {
            document.write("" + decisionUsuario + " vs " + decisionOrdenador + ", gana el ordenador." + '<br>');
            return false
        }
        if (decisionUsuario == "Piedra" && decisionOrdenador == "Tijera") {
            document.write("" + decisionUsuario + " vs " + decisionOrdenador + ", gana el usuario." + '<br>');
            return true
        }
        if (decisionUsuario == "Papel" && decisionOrdenador == "Tijera") {
            document.write("" + decisionUsuario + " vs " + decisionOrdenador + ", gana el ordenador." + '<br>');
            return false
        }
        if (decisionUsuario == "Papel" && decisionOrdenador == "Piedra") {
            document.write("" + decisionUsuario + " vs " + decisionOrdenador + ", gana el usuario." + '<br>');
            return true
        }
        if (decisionUsuario == "Tijera" && decisionOrdenador == "Piedra") {
            document.write("" + decisionUsuario + " vs " + decisionOrdenador + ", gana el ordenador." + '<br>');
            return false
        }
        if (decisionUsuario == "Tijera" && decisionOrdenador == "Papel") {
            document.write("" + decisionUsuario + " vs " + decisionOrdenador + ", gana el usuario." + '<br>');
            return true
        }
    }
};
console.log();
if (empate > ganaMaquina && empate > ganaUsuario) {
    document.write("" + "Se declara un empate" + '<br>');
} else if (ganaMaquina > ganaUsuario) {
    document.write("" + "Haz perdido contra la máquina" + '<br>');
} else if (ganaMaquina < ganaUsuario) {
    document.write("" + "Felicidades haz ganado" + '<br>');
}



// ● Felicitar al ganador en caso de ser el usuario.
// ● Indicarle al usuario que ha perdido contra la máquina en caso de que ésta sea
// la que gane.
// ● Declarar un empate.