
let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados= [];
let numeroMaximo= 10;
console.log (numeroSecreto);

function AsignarTextoElemento(elemento, texto){
    let elementoHtml= document.querySelector(elemento);
    elementoHtml.innerHTML= texto;
    return;

}
function verificarIntento(){
  
    let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value);
    //console.log(typeof(numeroDeUsuario));
    //console.log(typeof(numeroSecreto));
    //console.log(numeroDeUsuario===numeroSecreto);
    console.log(intentos);
    if (numeroDeUsuario=== numeroSecreto){
        AsignarTextoElemento('p', (`acertaste el numero en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}`));
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(numeroDeUsuario>numeroSecreto){
            AsignarTextoElemento('p', 'el numero secreto es menor');

        } else{
            AsignarTextoElemento('p', 'el numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    let numeroGenerado= Math.floor((Math.random()*numeroMaximo)+1);
    console.log (numeroGenerado);
    console.log (listaNumeroSorteados);

    // validar si ya sorteamos todos los numeros
    if (listaNumeroSorteados.length == numeroMaximo){
        listaNumeroSorteados= [];
        return generarNumeroSecreto();
    
    } else {
        // validar si el numero no esta en la lista, jugamos, si ya esta incluido no lo vamos ajugar
    if(listaNumeroSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
 
     }else{
         listaNumeroSorteados.push(numeroGenerado);
         return numeroGenerado;
     }
    }
    
}

function reiniciarJuego (){
    //limpiar la caja
    limpiarCaja();

    // Indicar mensaje de inicio intervalo de numero
    //generar numero aleatorio
    //inicializar el numero de intentos 
     condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

function condicionesIniciales(){
AsignarTextoElemento('h1', 'Juego del número secreto');
AsignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}.`);
numeroSecreto = generarNumeroSecreto();
intentos=1;
}
condicionesIniciales();