
var piedra = document.getElementById("piedra");
var papel = document.getElementById("papel");
var tijera = document.getElementById("tijera");
// ahi traigo los botones
// hola leon

function jugar(event){
    var usuario = event.target.getAttribute('data-num');
    var computadora = aleatorio(1, 3);

    if(usuario == computadora){
        document.write("<h1>empataste mi bro, para jugar de vuelta aprieta f5</h1>");
    }
    if(usuario == 1 && computadora == 2){
        document.write("<h1>perdiste capo,a seguir participando. Para jugar de vuelta aprieta f5</h1>");
    }
    else if(usuario == 1 && computadora == 3){
        document.write("<h1>ganaste mastodonte, para jugar de vuelta aprieta f5</h1>");
    }
    if(usuario == 2 && computadora == 1){
        document.write("<h1>ganaste mastodonte, para jugar de vuelta aprieta f5</h1>");
    }
    else if(usuario == 2 && computadora == 3){
        document.write("<h1>perdiste capo,a seguir participando. Para jugar de vuelta aprieta f5</h1>");
    }
    if(usuario == 3 && computadora == 1){
        document.write("<h1>perdiste capo,a seguir participando. Para jugar de vuelta aprieta f5</h1>");
    }
    else if(usuario == 3 && computadora == 2){
        document.write("<h1>ganaste mastodonte, para jugar de vuelta aprieta f5</h1>");
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




