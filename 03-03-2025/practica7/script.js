const usuario="obed";
const password="castro123";

const formulario = document.getElementById("loginform");//constante para llamar el formulario
// Función que se ejecuta cuando se envía el formulario
formulario.addEventListener("submit", function(event) 
{
    event.preventDefault(); // Evita que el formulario se envíe
   
    const user = document.getElementById("usuario").value;
    const passd = document.getElementById("passwd").value;

  if(user === usuario && passd === password)//condicional para dar acceso al sistema
  {
  window.location.href="index.html";
  }
  else
   { 
     console.log(
        '%cError de inicio de sesion!',
        'color:rgb(255, 4, 4); font-style: italic; text-decoration: underline; font-size: 1.5em;'
      );

   
    
    }
      // Limpiar el formulario
     formulario.reset();
});

