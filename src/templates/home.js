// import patita from './imagenes/patita.png'

// function login(navigateTo) {
//     const section = document.createElement('section');
//     const logopet = document.createElement('img');
//     const buttonlogin = document.createElement ('button');
//     const buttonregister = document.createElement ('button');

//     section.setAttribute('id','seccionhome')
//     buttonlogin.setAttribute('id','botonlogin')
//     buttonregister.setAttribute('id','botonregister')

//     logopet.src = patita
//     logopet.setAttribute('id','patita')

//     buttonlogin.textContent = 'Acceder a la Cuenta';

//     buttonregister.textContent = 'Crear cuenta';

//     buttonlogin.addEventListener('click',()=>{
//         navigateTo('/login')
//     })

//     buttonregister.addEventListener('click',()=>{
//         navigateTo('/register')
//     })

//     section.append(logopet,buttonlogin,buttonregister);

//     return section;
// }

//   export default home;

  // file home.js
  import patita from "./imagenes/patita.png"

function home(navigateTo) {
    const section = document.createElement('section');
    const imgpatita = document.createElement('img')
    const title = document.createElement('h2');
    const button = document.createElement('button');

    imgpatita.src = patita
    imgpatita.setAttribute('class','patita')
  
    button.textContent = 'iniciar';
    button.addEventListener('click', () => {
      navigateTo('/login');
    });
  
    title.textContent = 'Bienvenid@ a la Patita Red Social';
  
    section.append(title, button);
    return section;
  }
  
  export default home;

  