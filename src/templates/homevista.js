import patita from './imagenes/patita.png'

function login(navigateTo) {
    const seccion = document.createElement('seccion');
    const logopet = document.createElement('img');
    const buttonlogin = document.createElement ('button');
    const buttonregister = document.createElement ('button');

    seccion.setAttribute('id','seccionhome')
    buttonlogin.setAttribute('id','botonlogin')
    buttonregister.setAttribute('id','botonregister')

    logopet.src = patita
    logopet.setAttribute('id','patita')

    buttonlogin.textContent = 'Acceder a la Cuenta';

    buttonregister.textContent = 'Crear cuenta';

    buttonlogin.addEventListener('click',()=>{
        navigateTo('/loginvista')
    })

    buttonregister.addEventListener('click',()=>{
        navigateTo('/registervista')
    })

    seccion.append(logopet,buttonlogin,buttonregister);

    return seccion;
}

  export default login;