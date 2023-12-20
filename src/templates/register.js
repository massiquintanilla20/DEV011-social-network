import patita from "./imagenes/patita.png";

function register(navigateTo) {
  const section = document.createElement('section');
  const imgpatita = document.createElement('img');
  const title = document.createElement('h2');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const inputConfirmPass = document.createElement('input');
  const buttonRegister = document.createElement('button');
  const loginLink = document.createElement('a');

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
  buttonRegister.addEventListener('click', (event) => {
    event.preventDefault();
    // Lógica para manejar el registro del usuario
    const email = inputEmail.value;
    const password = inputPass.value;
    const confirmPassword = inputConfirmPass.value;

    // Realiza validaciones y envía los datos al servidor para el registro
    if (password === confirmPassword) {
      // Aquí debes implementar la lógica para enviar los datos al servidor
      // Por ejemplo, puedes usar fetch() o alguna librería para manejar las solicitudes HTTP
      // y enviar los datos al servidor para el registro del usuario.
    } else {
      // Muestra un mensaje de error si las contraseñas no coinciden
      alert('Las contraseñas no coinciden. Intenta de nuevo.');
    }
  });

  loginLink.textContent = '¿Ya tienes una cuenta? Inicia sesión aquí';
  loginLink.href = '#'; // Cambia '#' por la ruta real de tu página de inicio de sesión
  loginLink.addEventListener('click', () => {
    navigateTo('/login');
  });

  form.append(inputEmail, inputPass, inputConfirmPass, buttonRegister);
  section.append(imgpatita, title, form, loginLink);

  return section;
}

export default register;


