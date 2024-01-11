
import patita from "./imagenes/patita.png"
 import { iniciar_sesion} from "./../firebase/auth";

// Crear elementos HTML
function login(navigateTo) {
    const section = document.createElement('section');
    const imgpatita = document.createElement('img')
    const title = document.createElement('h2');
    const buttonReturn = document.createElement('button');
    const form = document.createElement('form');
    const inputEmail = document.createElement('input');
    const inputPass = document.createElement('input');
    const buttonLogin = document.createElement('button');
    const buttonRegister = document.createElement('button');

      // Agregando estilo para section
  section.classList.add("section_class");

  form.classList.add("form_class");

  // Configurar la imagen patita
   imgpatita.src = patita
   imgpatita.setAttribute('class','patita')
   imgpatita.classList.add("imagen")

    // Configurar los elementos del formulario
    inputEmail.placeholder = 'Escribe tu Email';
    inputPass.placeholder = 'Contraseña';
  
   // Configurar el título
    title.textContent = 'Login';
    buttonLogin.textContent = 'Iniciar Sesion';
    buttonLogin.classList.add("boton")
    buttonLogin.addEventListener('click', (event) => {
      event.preventDefault();
      // Lógica para manejar el registro del usuario
      const email = inputEmail.value;
      const password = inputPass.value;
      // const confirmPassword = inputConfirmPass.value;
      iniciar_sesion(email, password)
      .then((user) => {
        // correcto logeo
        console.log("Sign-in successful", user);
        navigateTo("/muro")
      })
      .catch((error) => {
        // error en logeo
        console.error("Sign-in error", error);
      });

    });
    
   // Configurar el botón de Home
    buttonReturn.textContent = 'Return to home';
    buttonReturn.classList.add("boton")
    buttonReturn.addEventListener('click', () => {
       navigateTo('/');
    });

   // Configurar el enlace de registro
    buttonRegister.textContent = 'Regístrate aquí';
    buttonRegister.classList.add("boton")
    buttonRegister.addEventListener('click', () => {
      navigateTo('/register');
   });

  
   // Agregar elementos al formulario y a la sección
    form.append(inputEmail, inputPass, buttonLogin);
    section.append(imgpatita, title, form, buttonRegister, buttonReturn);
  
   // Devolver el contenedor <section>
    return section;
  }
  
  export default login;