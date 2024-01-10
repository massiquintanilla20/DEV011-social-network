import patita from "./imagenes/patita.png";
import { register_user } from "../firebase/auth.js";
import { iniciar_sesion} from "./../firebase/auth";


function register(navigateTo) {

  const section = document.createElement('section');
  const imgpatita = document.createElement('img');
  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const form = document.createElement('form');  
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const inputConfirmPass = document.createElement('input');
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');

  // Agregando estilo para section
  section.classList.add("section_class");

  form.classList.add("form_class");

  imgpatita.src = patita;
  imgpatita.setAttribute('class', 'patita');
  imgpatita.classList.add("imagen");

  inputEmail.placeholder = 'Escribe tu Email';
  inputPass.placeholder = 'Contraseña';
  inputConfirmPass.placeholder = 'Confirmar Contraseña';
  inputPass.type = 'password'; // Para ocultar la contraseña
  inputConfirmPass.type = 'password';

  title.textContent = 'Registro';

  buttonRegister.textContent = 'Registrarse';
  buttonRegister.classList.add("boton");
  buttonRegister.addEventListener('click', () => {
    navigateTo('/register');

    // Lógica para manejar el registro del usuario
    const email = inputEmail.value;
    const password = inputPass.value;
    // const confirmPassword = inputConfirmPass.value;
    register_user(email, password) 
    alert('Tu cuenta fue creada con exito');

     
    // } else {
    //   // Muestra un mensaje de error si las contraseñas no coinciden
    //   alert('Las contraseñas no coinciden. Intenta de nuevo.');
    // }
  });


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

  form.append(inputEmail, inputPass, inputConfirmPass, buttonRegister);
  section.append(imgpatita, title, form, buttonRegister, buttonLogin, buttonReturn);

  return section;
}

export default register;


