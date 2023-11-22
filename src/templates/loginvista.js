import{login} from "../lib/services";
import patita from "./imagenes/patita.png"

function loginvista(navigateTo) {
    const seccion = document.createElement("seccion");
    const title = document.createElement("h2");
    const buttonreturn = document.createElement("button");
    const logopet = document.createElement("img");
    const form = document.createElement("div");
    const inputemail = document.createElement("input");
    const inputpass = document.createElement("input");
    const buttonlogin = document.createElement("button");
     
    logopet.src = patita
    logopet.setAttribute('class','llogopet')

    form.setAttribute('class','divform')
    inputemail.placeholder = 'Write email';
    inputemail.setAttribute('class', 'inputlog')
    inputpass.placeholder = 'pass';
    inputpass.setAttribute('class', 'inputlog')
    title.textContent = 'login';
    title.setAttribute('class', 'logintitle')
    buttonlogin.textContent = 'go';
    buttonlogin.setAttribute('id', 'botongo')

    buttonreturn.textContent = 'Retorna a Home';
    buttonreturn.setAttribute('id', 'botonreturn')

    buttonreturn.addEventListener('click', ()=>{
        navigateTo('/home')
    })
    buttonlogin.addEventListener('click', ()=>{
        const result = login(inputemail.value. inputpass.value)
        if(result){
            navigateTo('/muro')
        }else{
            alert('Usuario no renoconocido')
        }
    })
    form.append(title,inputemail, inputpass, buttonlogin, buttonreturn);
    seccion.append(logopet, form);

    return seccion;
}

export default loginvista;