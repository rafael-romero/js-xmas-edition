function probarValidarNombre() {
  console.assert(
    validarNombre("") === "Este campo debe tener algun caracter",
    "validarNombre no validó que el nombre no sea vacío"
  );

  console.assert(
    validarNombre(
      "11111111111111111111111111111111111111111111111111111111111111"
    ) === "Este campo debe tener menos de 50 caracteres",
    "validarNombre no validó que el nombre sea menor a 50 caracteres"
  );

  console.assert(
    validarNombre("asdasda2138941") === "El campo nombre solo acepta letras",
    "validarNombre no valido que el nombre solo contenga letras"
  );

  console.assert(
    validarNombre("Rafael") === "",
    "validarNombre fallo la validacion con un nombre valido"
  );
}

function probarValidarCiudad() {
  console.assert(
    validarCiudad("") === "Debe elegir una ciudad por favor!",
    "validarCiudad no valido que ciudad es elegida"
  );
  console.assert(
    validarCiudad("Buenos Aires") === "",
    "validarCiudad fallo con un nombre de ciudad valido!"
  );
}

function probarValidarDescripcionRegalo() {
  console.assert(
    validarDescripcionRegalo("") === "Debe escribir que le gustaria recibir",
    "validarDescripcion no valido que la descripcion no sea vacia"
  );

  console.assert(
    validarDescripcionRegalo(
      "afgdfasdnmopodsfnlnwernafgdfasdnmopodsfnlnwernafgdfasdnmopodsfnlnwernafgdfasdnmopodsfnlnwernafgdfasdnmopodsfnlnwern"
    ) === "El texto que escribio es demasiado largo, debe achicarlo",
    "validarDescripcionRegalo no valido que lo escrito sea tan largo"
  );

  console.assert(
    validarDescripcionRegalo("pelota") === "",
    "validarDescripcionRegalo no valido lo escrito con un texto correcto"
  );
  console.assert(
    validarDescripcionRegalo(",.,...,") ===
      "El campo descripcion solo puede tener numeros y letras",
    "validarDescripcionRegalo no valido que lo ingresado solo sean numeros y letras"
  );
}

function ejecutarpruebas() {
  probarValidarNombre();
  probarValidarCiudad();
  probarValidarDescripcionRegalo();
}

ejecutarpruebas();
