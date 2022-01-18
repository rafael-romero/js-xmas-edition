const $formulario = document.querySelector("#carta-a-santa");

const nombre = $formulario.nombre.value;
const ciudad = $formulario.ciudad.value;
const comportamiento = $formulario.comportamiento.value;
const descripcionRegalo = $formulario["descripcion-regalo"].value;

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

