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
    var correcto =[];
    const contra = document.getElementById("contra").value;
    if(contra.length < 8)
    {
        correcto.push("La contrasña debe ser mayor que 7 caracteres");
    }
    const tieneLetra = [a-zA-Z].test(contra);
    if(!tieneLetra)
    {
        correcto.push("La contrasña debe contener un minimo de 1 letra");
    }
    const tieneNumero = d.test(contra);
    if(!tieneNumero)
    {
        correcto.push("La contrasña debe contener un minimo de 1 numero");
    }
    document.getElementById("contraError").innerHTML = correcto;
}