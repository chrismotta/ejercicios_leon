
var piedra = document.getElementById("piedra");
var papel = document.getElementById("papel");
var tijera = document.getElementById("tijera");
// ahi traigo los botones
// hola leon

function jugar(event){
    var usuario = event.target.getAttribute('data-num');
    var computadora = aleatorio(1, 3);

    // los mensajes los podes poner en variables asi no repetis codigo y lo mantenes en un solo lugar
    var mensajeEmpataste = "<h1>empataste mi bro, para jugar de vuelta aprieta f5</h1>";
    var mensajeGanaste = "<h1>ganaste mastodonte, para jugar de vuelta aprieta f5</h1>";
    var mensajePerdiste = "<h1>perdiste capo,a seguir participando. Para jugar de vuelta aprieta f5</h1>";

    if(usuario == computadora){
        document.write(mensajeEmpataste);
    }
    if(usuario == 1 && computadora == 2){
        document.write(mensajePerdiste);
    }
    else if(usuario == 1 && computadora == 3){
        document.write(mensajeGanaste);
    }
    if(usuario == 2 && computadora == 1){
        document.write(mensajeGanaste);
    }
    else if(usuario == 2 && computadora == 3){
        document.write(mensajePerdiste);
    }
    if(usuario == 3 && computadora == 1){
        document.write(mensajePerdiste);
    }
    else if(usuario == 3 && computadora == 2){
        document.write(mensajeGanaste);
    }
}
//la funcion con la q funciona todo

function aleatorio(min, maxi){
    var cpu = Math.floor(Math.random() * ((maxi+1) - min) + min);
    return cpu;
}
//funcion de numeros aleatorios

piedra.addEventListener("click", jugar);
papel.addEventListener("click", jugar);
tijera.addEventListener("click", jugar);




