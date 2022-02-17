const comportamiento = {
    1: "muy bueno",
    2: "bueno",
    3: "malo"
}
function generaNumeroAleatorio(limite){
    return Math.floor(Math.random() * limite) + 1;
}

function obtenerComportamientoRandom(){
    const numeroDeComportamientos = 3;
    const numeroAleatorio = generaNumeroAleatorio(numeroDeComportamientos);
    const comportamientoAleatorio = comportamiento[numeroAleatorio];
    document.querySelector(".attitude").textContent = comportamientoAleatorio; 
}

function obtenerRegaloAleatorio(){
    const cantidadDeDeseos = localStorage.length;
    const numeroDeRegaloAleatorio = generaNumeroAleatorio(cantidadDeDeseos);
    const regaloSeleccionado = JSON.parse(localStorage.getItem(`usuario${[numeroDeRegaloAleatorio]}`)).descripcionRegalo;
    document.querySelector(".santa-gift-text").textContent = regaloSeleccionado;
}   
