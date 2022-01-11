const $formulario = document.querySelector('#carta-a-santa')

const nombre = $formulario.nombre.value;
const ciudad = $formulario.ciudad.value;
const comportamiento = $formulario.comportamiento.value;
const descripcionRegalo = $formulario['descripcion-regalo'].value;


function validarNombre(nombre){
    if (nombre.length === 0 ){
        return 'Este campo debe tener algun caracter'
    }

    if (nombre.length > 50){
        return 'Este campo debe tener menos de 50 caracteres'
    }
    return '';
}


function validarCiudad(ciudad){
    if (ciudad === ''){
        return 'Debe elegir una ciudad por favor!'
    }
} 

function validarDescripcionRegalo(descripcionRegalo){
    if (descripcionRegalo.length === 0){
        return 'Debe escribir que le gustaria recibir'
    }
    
}
