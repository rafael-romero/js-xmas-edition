function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
}

probarValidarNombre();

function probarValidarCiudad(){
    console.assert(
        validarCiudad('') === 'Debe elegir una ciudad por favor!', 
        'validar ciudad no valido que ciudad es elegida');
}

probarValidarCiudad();

function probarValidarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo(0) === 'Debe escribir que le gustaria recibir', 
        'Debe escribir que le gustaria recibir');
}

probarValidarDescripcionRegalo();
