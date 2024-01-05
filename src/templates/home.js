
  import patita from "./imagenes/patita.png"

function home(navigateTo) {
    // Crear elementos HTML
    const section = document.createElement('section');
    const imgpatita = document.createElement('img')
    const title = document.createElement('h2');
    const button = document.createElement('button');

    // Configurar la imagen patita
    imgpatita.src = patita
    imgpatita.setAttribute('class','patita')
    imgpatita.classList.add("imagen")
  
    // Configurar el botón
    button.textContent = 'iniciar';
    button.classList.add("boton")
    button.addEventListener('click', () => {
      navigateTo('/login');
    });
  
    // Configurar el título
    title.textContent = 'Welcome to my project';
     title.classList.add("prueba")

  
    // Agregar elementos al contenedor section
    section.append(imgpatita, title, button);
   // Devolver el contenedor section
    return section;
  }
  
  // Exporta la función home para que pueda ser importada y utilizada en otros archivos.
  export default home;

  