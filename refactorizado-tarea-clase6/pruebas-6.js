function probarValidarCantidadFamiliares(){
    console.assert(
        validarCantidadFamiliares("") === "Debe ingresar al menos un familiar",
        "ValidarCantidadFamiliares no valido que la cantidad sea mayor a cero"  
    );

    console.assert(
        validarCantidadFamiliares("1.23") === "Solo puede ingresar numeros enteros",
        "ValidarCantidadFamiliares no valido que el numero ingresado sea entero"
    );

    console.assert(
        validarCantidadFamiliares("101") === "Es asombroso que tenga tantos familiares",
        "ValidarCantidadFamiliares no valido que el numero ingresado sea coherente"
    );

    console.assert(
        validarCantidadFamiliares("7") === "",
        "ValidarCantidadFamiliares fallo la validacion con un numero valido"
    );

}


probarValidarCantidadFamiliares();
