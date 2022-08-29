var uno = parseInt(prompt("JUEGO DE PIEDRA, PAPEL O TIJERA  \n Selecciona una opcion (Jugador 1)\n 1.- Piedra\n 2.- Papel\n 3 .- Tijera"));
var dos = parseInt(prompt("JUEGO DE PIEDRA, PAPEL O TIJERA  \n Selecciona una opcion (Jugador 2)\n 1.- Piedra\n 2.- Papel\n 3 .- Tijera"));

var jugadores = {
    1:{
        1:'empate',
        2:'perdedor',
        3:'ganador'
    },
    2:{
        1:'ganador',
        2:'empate',
        3:'perdedor'
    },
    3:{
        1:'perdedor',
        2:'ganador',
        3:'empate'
    }

}
function validador (uno, dos) {
    let resultado;
    let opciones = {1:"piedra", 2:"papel", 3:"tijera"}

    if (!isNaN(uno) && !isNaN(dos)){
        if (jugadores[uno][dos] == 'ganador') {
            resultado = "Gano el jugador 1 porque eligio " + " " + opciones[uno] +" "+ "y el jugador 2 eligio " + " " + opciones[dos];  
        }
        else if (jugadores[uno][dos] == 'perdedor'){
            resultado = "Gano el jugador 2 porque eligio " + " " + opciones[dos] +" "+ "y el jugador 1 eligio " + " " + opciones[uno];  
        }
        else if (jugadores[uno][dos] == 'empate'){
            resultado = "Hubo un empate porque el jugador 1 eligio" + " " + opciones[uno] +" "+ "y el jugador 2 eligio " + " " + opciones[dos];  
        }
        else {
            resultado = "Hubo un error o no ingresaste la opcion correcta"; 
        }
        console.log(resultado);
    }
    else {
        console.log("la opcion no es un numero o no esta en la seleccion")
    }

}
validador(uno,dos);