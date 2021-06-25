const tipos = {
    'piedra': {
        'papel': 'Papel envuelve piedra. *Perdiste*, LOSER.',
        'tijera': 'Piedra rompe tijera. *Ganaste* :wink:'
    },
    'papel': {
        'piedra': 'Papel envuelve piedra. *Weeeena* :wink:',
        'tijera': 'Tijera corta papel. *Chuuuuuuu*'
    },
    'tijera': {
        'papel': 'Tijeras cortan papel. *¡Súper!* :wink:',
        'piedra': 'Piedra rompe tijera. *¡Amermelao!*'
    }
};

const respuestas = function(msg, userChoice, robot) {
    let resultado;
    const choices = ['piedra', 'papel', 'tijera'];
    const i = Math.floor(Math.random() * choices.length);
    const choice = choices[i];
    const seleccion = tipos[userChoice];

    if (seleccion[choice] != null) { // user wins
        resultado = tipos[userChoice][choice];
    } else { // hubot wins
        resultado = tipos[choice][userChoice];
    }

    if (!resultado) { resultado = "*¡Empate!*"; }

    msg.send(`${robot.name} escoge ${choice}`);

    return msg.send(resultado);
};

module.exports = robot =>
    robot.respond(/cachip[uú]n (piedra|papel|tijera)/i, function(msg) {
        const userChoice = msg.match[1].toLowerCase();
        return respuestas(msg, userChoice, robot);
    });
//------------------------------------------------------------------------------

// Tijera le gana a papel
// ● Papel le gana a piedra
// ● Piedra le gana a tijera
// ● Si ambos jugadores eligen la misma opción es un empate


// var Piedra = prompt("Has escogido piedra")
// const Papel
// const Tijera


// Math.floor(Math.random() * 3)
// ----------------------------------------------------------------------------
// var respuesta = prompt("¿Quieres jugar Cachipún?: Si o No");

// if (respuesta == "Si" || respuesta == "si" || respuesta == "SI") {

// } else {
//     alert("¡¡sniff sniff!!");
// }


// var veces = prompt("cuántas veces quieres jugar");


// function jugar(usuario) {
//     var maquina = maquina;
//     var opcion = ["piedra", "papel", "tijera"];
//     maquina = Math.floor(Math.random() * 3);
//     opcionUsuario = opcion[usuario];
//     opcionMaquina = opcion[maquina]
//     document.write(opcion[usuario]);
//     document.write(opcion[maquina]);

//     if (opcionUsuario === opcionMaquina) {
//         document.write("empate");
//     } else if (opcionUsuario === 0) {
//         if (opcionMaquina === 2);
//         document.write("ganador");
//     } else if (opcionUsuario === 1) {
//         if (opcionMaquina === 2);
//         document.write("perdedor");
//         if (opcionMaquina === 0)
//             document.write("ganador");
//     } else if (opcionUsuario === 2) {
//         if (opcionMaquina === 0);
//         document.write("perdedor");
//     }
//     if (opcionMaquina === 1);
//     document.write("ganador");
// }


// ------------------------------------------------------------------------


/*switch (resultado) {
    case "empate":
        document.write("empate");
        break
    case "ganador":
        document.write("ganaste");
        breack
    case "perdedor":
        document.write("perdiste");
        breack
}*/

//-----------------------------------------------------------------------------