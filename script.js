function VerificarContra() {
    const contra1 = document.getElementById("contra").value;
    const contra2 = document.getElementById("contraveri").value;
    const msjError = document.getElementById("contraCoincide");
    
    if (contra1 !== contra2) {
        msjError.innerHTML = "Contraseñas no coinciden";
        return false;
    } else {
        msjError.innerHTML = ""; 
        return true;
    }
}

function Verificar3car() {
    const nombre = document.getElementById("nomb").value;
    const msjError = document.getElementById("nomb3car");
    
    if (nombre.length < 4) {
        msjError.innerHTML = "El nombre debe ser mayor a 3 caracteres.";
        return false;
    } else {
        msjError.innerHTML = ""; 
        return true;
    }
}

function Verificar3car2() {
    const apellido = document.getElementById("ape").value;
    const msjError = document.getElementById("ape3car");
    
    if (apellido.length < 4) {
        msjError.innerHTML = "El apellido debe ser mayor a 3 caracteres.";
        return false;
    } else {
        msjError.innerHTML = ""; 
        return true;
    }
}

function VerificarFuerteContra() {
    const contra = document.getElementById("contra").value;
    const msjError = document.getElementById("contraError");
    let correcto = "";

    const regex = /[a-zA-Z]/;
    const regexNumero = /\d/;

    if (contra.length < 8 || !regex.test(contra) || !regexNumero.test(contra)) {
        if (contra.length < 8) {
            correcto += "La contraseña debe tener más de 7 caracteres. ";
        }
        if (!regex.test(contra)) {
            correcto += "Debe incluir un mínimo de una letra. ";
        }
        if (!regexNumero.test(contra)) {
            correcto += "Debe incluir al menos un número. ";
        }
        msjError.innerHTML = correcto;
        return false;
    } else {
        msjError.innerHTML = ""; 
        return true;
    }
}

function VerificarMail() {
    const mail = document.getElementById("mail").value;
    const msjError = document.getElementById("mailError");
    
    if (!mail.includes("@") || !mail.includes(".com")) {
        msjError.innerHTML = "El mail ingresado no es válido";
        return false;
    } else {
        msjError.innerHTML = ""; 
        return true;
    }
}

function VerificarForm(event) {
    event.preventDefault();

    const nombreValido = Verificar3car();
    const apellidoValido = Verificar3car2();
    const emailValido = VerificarMail();
    const contraValida = VerificarFuerteContra();
    const contrasCoinciden = VerificarContra();

    if (nombreValido && apellidoValido && emailValido && contraValida && contrasCoinciden) {
        alert("Formulario enviado exitosamente!");
        document.getElementById("miFormulario").submit();
    } else {
        alert("Por favor, corrige los errores antes de enviar el formulario.");
    }
}


