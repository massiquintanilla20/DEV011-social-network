
  import patita from "./imagenes/patita.png"

function home(navigateTo) {
    const section = document.createElement('section');
    const imgpatita = document.createElement('img')
    const title = document.createElement('h2');
    const button = document.createElement('button');

    imgpatita.src = patita
    imgpatita.setAttribute('class','patita')
    imgpatita.classList.add("imagen")
  
    button.textContent = 'iniciar';
    button.classList.add("boton")
    button.addEventListener('click', () => {
      navigateTo('/login');
    });
  
    title.textContent = 'Welcome to my project';
     title.classList.add("prueba")

  
    section.append(imgpatita, title, button);
    return section;
  }
  
  export default home;

  