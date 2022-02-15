function mostrarDeseos(){
    const $ul = document.querySelector(".wish-list")
    for(i = 0; i < localStorage.length; i++){
      const $li = document.createElement("li");
      const datosAlmacenados = JSON.parse(localStorage.getItem(`usuario${[i]}`));
      $li.appendChild(document.createTextNode(datosAlmacenados.descripcionRegalo));
      $ul.appendChild($li);
    }
  }