import patita from "./imagenes/patita.png"
import { savePost } from "../firebase/store";


function muro(navigateTo) {
    const section = document.createElement('section');

    const imgpatita = document.createElement('img')
    console.log("este es el muro")

    // Configurar la imagen patita
    imgpatita.src = patita
    imgpatita.setAttribute('class', 'patita')
    imgpatita.classList.add("imagen1")

    const formPost = document.createElement("form")
    const post = document.createElement("textarea")
    const btnSubmit = document.createElement('button');
    btnSubmit.addEventListener("click", function (e) {
        e.preventDefault();
        //guardar el valor
        const postValue = post.value
        savePost(postValue)
    })

    // Agregar elementos al contenedor section
    formPost.append(post, btnSubmit)
    section.append(imgpatita, formPost);

    // Devolver el contenedor section
    return section;
}
export default muro;

