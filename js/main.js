window.localStorage.clear();
let indexAlmacenamientoLocal = localStorage.length;

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

function redirigirAListaDeDeseos(){
  window.location.href = "wishlist.html";
}                      

function validarFormulario(event) {
  const nombre = $formulario.nombre.value;
  const ciudad = $formulario.ciudad.value;
  const descripcionRegalo = $formulario["descripcion-regalo"].value;

  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

  const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    "descripcion-regalo": errorDescripcionRegalo,
  };

  esExito = manejarErrores(errores) === 0;

  if (esExito) {
    guardarInformacionEnAlmacenamientoLocal();
    $formulario.className = "oculto";
    document.querySelector("#exito").className = "";
    const tiempoDeEspera = setTimeout(redirigirAListaDeDeseos, 5000);
  }

  event.preventDefault();
}

function manejarErrores(errores) {
  const llaves = Object.keys(errores);
  const $errores = document.querySelector("#errores");
  let cantidadErrores = 0;

  llaves.forEach(function (llave) {
    const error = errores[llave];

    if (error) {
      cantidadErrores++;
      $formulario[llave].className = "error";

      const $error = document.createElement("li");
      $error.innerText = error;
      $error.id = llave + "errorEnLi";
      if (!document.querySelector(`#${llave}errorEnLi`)) {
        $errores.appendChild($error);
      }
    } else {
      $formulario[llave].className = "";
      if (document.querySelector(`#${llave}errorEnLi`)) {
        document.querySelector(`#${llave}errorEnLi`).remove();
      }
    }
  });
  return cantidadErrores;
}


function guardarInformacionEnAlmacenamientoLocal(){
  const $nombre = document.querySelector("#nombre").value;
  const $descripcionRegalo = $formulario["descripcion-regalo"].value;
  const clave = "usuario"+indexAlmacenamientoLocal;
  localStorage.setItem(clave, JSON.stringify(
    {
      nombreDeUsuario:$nombre,
      descripcionRegalo:$descripcionRegalo
    }
  ));
  indexAlmacenamientoLocal++;

}

const $formulario = document.querySelector("#carta-a-santa");
$formulario.onsubmit = validarFormulario();

