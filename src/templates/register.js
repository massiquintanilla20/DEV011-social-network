// Importar la imagen de la patita y funciones de autenticación desde otros archivos
import patita from "./imagenes/patita.png";
import { register_user } from "../firebase/auth.js";

// Definir la función register que crea y configura elementos HTML
function register(navigateTo) {
  // Crear elementos HTML
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

  // Agregar clases y atributos a los elementos
  section.classList.add("section_class");
  form.classList.add("form_class");
  imgpatita.src = patita;
  imgpatita.setAttribute('class', 'patita');
  imgpatita.classList.add("imagen");
  inputEmail.placeholder = 'Escribe tu Email';
  inputPass.placeholder = 'Contraseña';
  inputConfirmPass.placeholder = 'Confirmar Contraseña';
  inputPass.type = 'password';
  inputConfirmPass.type = 'password';
  title.textContent = 'Registro';
  buttonRegister.textContent = 'Registrarse';
  buttonRegister.classList.add("boton");
  buttonLogin.textContent = 'Inicia Sesion Aqui';
  buttonLogin.classList.add("boton");
  buttonReturn.textContent = 'Return to home';
  buttonReturn.classList.add("boton");

  // Configurar el evento de clic para el botón de registro
  buttonRegister.addEventListener('click', () => {
    navigateTo('/register');
    const email = inputEmail.value;
    const password = inputPass.value;
    register_user(email, password).then(() => {
        alert('Tu cuenta fue creada con éxito');
      })
      .catch((error) => {
        console.error('Error al registrar usuario', error);
      });
  });

   // Configurar el botón de Home
   buttonLogin.textContent = 'Inicia Sesion Aqui';
   buttonLogin.classList.add("boton")
   buttonLogin.addEventListener('click', () => {
      navigateTo('/login');
   });
  // Configurar el evento de clic para el botón de regreso a la página de inicio
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  // Agregar elementos al formulario y a la sección
  form.append(inputEmail, inputPass, inputConfirmPass, buttonRegister, buttonLogin);
  section.append(imgpatita, title, form, buttonReturn);

  // Devolver la sección creada
  return section;
}

// Exportar la función register como el valor predeterminado del módulo
export default register;


