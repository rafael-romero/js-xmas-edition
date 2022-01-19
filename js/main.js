function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "Este campo debe tener algun caracter";
  }

  if (nombre.length > 50) {
    return "Este campo debe tener menos de 50 caracteres";
  }

  if (!/^[a-z]+$/i.test(nombre)) {
    return "El campo nombre solo acepta letras";
  }

  return "";
}

function validarCiudad(ciudad) {
  if (ciudad === "") {
    return "Debe elegir una ciudad por favor!";
  }
  return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
  if (descripcionRegalo.length === 0) {
    return "Debe escribir que le gustaria recibir";
  } else if (descripcionRegalo.length >= 100) {
    return "El texto que escribio es demasiado largo, debe achicarlo";
  } else if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
    return "El campo descripcion solo puede tener numeros y letras";
  } else {
    return "";
  }
}

function validarFormulario(event){
  const nombre = $formulario.nombre.value;
  const ciudad = $formulario.ciudad.value;
  const descripcionRegalo = $formulario["descripcion-regalo"].value;
  
  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarNombre(ciudad);
  const errorDescripcionRegalo = validarNombre(descripcionRegalo);

  const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    descripcionRegalo: errorDescripcionRegalo
  }

  manejarErrores(errores);

  event.preventDefault();
}

function manejarErrores(errores){
  errorNombre = errores.nombre;
  errorCiudad = errores.ciudad;
  errorDescripcionRegalo = errores.descripcionRegalo;

  if (errorNombre){
    $formulario.nombre.className = "error";
  } else {
    $formulario.nombre.className = "";
  }
  if (errorCiudad){
    $formulario.ciudad.className = "error";
  } else {
    $formulario.ciudad.className = "";
  }
  if (errorDescripcionRegalo){
    $formulario["descripcion-regalo"].className = "error";
  } else {
    $formulario["descripcion-regalo"].className = "";
  }
}

const $formulario = document.querySelector("#carta-a-santa");
$formulario.onsubmit = validarFormulario;
