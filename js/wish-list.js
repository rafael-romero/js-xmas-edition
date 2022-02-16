let indexAlmacenamientoLocal = localStorage.length;

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

function mostrarDeseos(){
    const $ul = document.querySelector(".wish-list")
    for(i = 0; i < localStorage.length; i++){
      const $li = document.createElement("li");
      const datosAlmacenados = JSON.parse(localStorage.getItem(`usuario${[i]}`)).descripcionRegalo;
      $li.appendChild(document.createTextNode(datosAlmacenados));
      $ul.appendChild($li);
    }
  }
