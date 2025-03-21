function VerificarContra()
{
    var correcto;
    const contra1 = document.getElementById("contra").value;
    const contra2 = document.getElementById("contraveri").value;
    if(contra1 != contra2)
    {
        correcto = "Contraseñas no coinciden";
    }
    else
    {
        correcto="";
    }
    
    document.getElementById("contraCoincide").innerHTML = correcto;
    
}
function Verificar3car()
{
    var correcto;  
    const nombre = document.getElementById("nomb").value;
    if (nombre.length < 3) 
    {
        correcto = "El nombre debe ser mayor a 3 caracteres."
    } 
    else 
    {
        correcto="";
    }
    document.getElementById("nomb3car").innerHTML = correcto;
} 

function Verificar3car2()
{
    var correcto;  
    const apellido = document.getElementById("ape").value;
    if (apellido.length < 3) 
    {
        correcto = "El apellido debe ser mayor a 3 caracteres."
    } 
    else 
    {
        correcto="";
    }
    document.getElementById("ape3car").innerHTML = correcto;
} 

function VerificarFuerteContra()
{
    const contra = document.getElementById("contra").value;
    var correcto = "";
    if(contra.length < 8)
    {
        correcto += "La contraseña debe tener mas de 7 caracteres"
    }
    const regex = /[a-zA-Z]/;
    if (!regex.test(contra)) {
        correcto += " Debe incluir un mínimo de una letra. ";
    }

    const regexNumero = /\d/; 
    if (!regexNumero.test(contra)) {
        correcto += " Debe incluir al menos un número. ";
    }
    document.getElementById("contraError").innerHTML = correcto;
}
function VerificarMail()
{
    const mail = document.getElementById("mail").value;
    var correcto = "";
    if(!mail.includes("@") || !mail.includes(".com"))
    {
        correcto = "El mail ingresado no es valido"
    }
    document.getElementById("mailError").innerHTML = correcto;
} 

function ValidarForm()
{
    Verificar3car(); 
    Verificar3car2(); 
    VerificarContra(); 
    VerificarMail(); 
    VerificarFuerteContra(); 

    const errores = document.querySelectorAll('.error');
    let hayErrores = false;  
    var text; 

    errores.forEach((error) => {
        if (error.innerHTML !== "") {
            hayErrores = true;
        }
    });  

    if (hayErrores) {
        event.preventDefault(); // Prevenir el envío del formulario
        text = "Por favor, corrige los errores antes de enviar el formulario.";
    } 
    document.getElementById("formError").innerHTML = text;
}

