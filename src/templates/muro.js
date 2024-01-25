import patita from "./imagenes/patita.png";
import { savePost , getPosts } from "../firebase/store";
//import { QuerySnapshot } from "firebase/firestore";

// Declaración de la función muro. Esta función crea elementos HTML dinámicamente para formar una sección de la interfaz de usuario.
function  muro() {
  // Crear elementos
  const section = document.createElement("section");
  const imgpatita = document.createElement("img");
  const formPost = document.createElement("form");
  const post = document.createElement("textarea");
  const btnSubmit = document.createElement("button");
  const postSection = document.createElement("div");
  const ul=document.createElement('ul');
  ul.classList.add("posts_contenedor")

  // Configurar la imagen patita
  imgpatita.src = patita;
  imgpatita.setAttribute("class", "patita");
  imgpatita.classList.add("imagen1");
  section.append(imgpatita, formPost,ul);
  section.append(imgpatita, formPost,ul);


  // Configurar el formulario
  btnSubmit.textContent = "Publicar post";
  btnSubmit.addEventListener("click", function (e) {
    alert("Tu post ha sido publicado");
    e.preventDefault();
    // Guardar el valor del post
    const postValue = post.value;
    savePost(postValue);
  });
  // Agregar elementos al formulario y al contenedor section
  formPost.append(post, btnSubmit);

  // Con getDocs obtenemos los datos de firebastore, luego en esos datos creamos li para mostrarlos, y estos elementos se agregan a la lista ul.
  getPosts().then((docs)=>{
   docs.forEach((doc) => {
    console.log(doc.id)
    const docData = doc.data()
        const li=document.createElement('li');
    li.textContent = docData.description;
     ul.appendChild(li);
  });
  })

   

  // Devolver el contenedor section
  return section;
}

 export default muro;
