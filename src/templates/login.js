
import patita from "./imagenes/patita.png"


function login(navigateTo) {
    const section = document.createElement('section');
    const imgpatita = document.createElement('img')
    const title = document.createElement('h2');
    const buttonReturn = document.createElement('button');
    const form = document.createElement('form');
    const inputEmail = document.createElement('input');
    const inputPass = document.createElement('input');
    const buttonLogin = document.createElement('button');
    const registerLink = document.createElement('a');


   imgpatita.src = patita
   imgpatita.setAttribute('class','patita')
   imgpatita.classList.add("imagen")

  
    inputEmail.placeholder = 'Escribe tu Email';
    inputPass.placeholder = 'Contraseña';
  
    title.textContent = 'Login';
    buttonLogin.textContent = 'Iniciar Sesion';
    buttonLogin.classList.add("boton")


    buttonReturn.textContent = 'Return to home';
    buttonReturn.classList.add("boton")

    buttonReturn.addEventListener('click', () => {
       navigateTo('/');
    });

    registerLink.textContent = '¿No tienes una cuenta? Regístrate aquí';
    registerLink.href = '#'; // Cambia '#' por la ruta real de tu página de registro
    registerLink.addEventListener('click', () => {
        navigateTo('/registro');
    });
  
    form.append(inputEmail, inputPass, buttonLogin);
    section.append(imgpatita, title, form, registerLink, buttonReturn);
  
    return section;
  }
  
  export default login;