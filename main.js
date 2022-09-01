let askAgain = true;
for (; askAgain; askAgain = askAgain) {
    let userEmail = prompt('Ingrese su nombre de usuario');
    let confirmUserEmail = prompt('Confirme su nombre de usuario');
    if (userEmail === confirmUserEmail){
        alert('El nombre ha sido guardado con exito!');
        askAgain = false;
    }
    else{
        alert('Los nombres ingresados no coinciden')
    }
}