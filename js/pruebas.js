function probarValidarNombre() {
  console.assert(
    validarNombre("") === "Este campo debe tener algun caracter",
    "Validar nombre no validó que el nombre no sea vacío"
  );

  console.assert(
    validarNombre(
      "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
    ) === "Este campo debe tener menos de 50 caracteres",
    "Validar nombre no validó que el nombre sea menor a 50 caracteres"
  );
}

function probarValidarCiudad() {
  console.assert(
    validarCiudad("") === "Debe elegir una ciudad por favor!",
    "validar ciudad no valido que ciudad es elegida"
  );
}

function probarValidarDescripcionRegalo() {
  console.assert(
    validarDescripcionRegalo("") === "Debe escribir que le gustaria recibir",
    "Validar descripcion no valido que la descripcion no sea vacia"
  );
}

function ejecutarpruebas() {
  probarValidarNombre();
  probarValidarCiudad();
  probarValidarDescripcionRegalo();
}

ejecutarpruebas();
