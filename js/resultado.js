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
    const numeroDeRegaloAleatorio = generaNumeroAleatorio(cantidadDeDeseos)-1;
    const regaloSeleccionado = JSON.parse(localStorage.getItem(`usuario${[numeroDeRegaloAleatorio]}`)).descripcionRegalo;
    document.querySelector(".santa-gift-text").textContent = regaloSeleccionado;
}   

const listaDeImagenesURL = {
    1: 'img/gifts/goldGift.jpg',
    2: 'img/gifts/groupGift.jpeg',
    3: 'img/gifts/redGift.jpg'
}

function obtenerImagenRegalo(){
    const NUMERO_REGALOS_EN_CARPETA = 3;
    const numeroRegaloElegido = generaNumeroAleatorio(NUMERO_REGALOS_EN_CARPETA);
    document.querySelector(".santa-gift").src = listaDeImagenesURL[numeroRegaloElegido];
}

function cargarFuncionesAlIniciar(){
    obtenerComportamientoRandom();
    obtenerRegaloAleatorio();
    obtenerImagenRegalo();
}
