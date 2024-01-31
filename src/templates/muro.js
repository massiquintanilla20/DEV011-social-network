// import { createPost } from "../lib";
import patita from "./imagenes/patita.png";
// import { querySnapshot } from "../lib/index";
import { addPost, querySnapshot, paintRealtime } from "../lib/index";
import { QuerySnapshot } from "firebase/firestore";

// Declaración de la función muro. Esta función crea elementos HTML dinámicamente para formar una sección de la interfaz de usuario.
const muro = () => {
  // Crear elementos
  const section = document.createElement("section");
  const inputPost = document.createElement("input");
  inputPost.id = "inPost";
  const imgpatita = document.createElement("img");
  // const formPost = document.createElement("form");
  // const post = document.createElement("textarea");
  const btnSend = document.createElement("button");
  btnSend.textContent = "publicar";
  btnSend.id = "btnSend";
  const postSection = document.createElement("article");
  postSection.className = "post_section";
  // const ul=document.createElement('ul');
  // ul.classList.add("posts_contenedor")
  section.append(imgpatita, inputPost, btnSend, postSection);

  // Configurar la imagen patita
  imgpatita.src = patita;
  imgpatita.setAttribute("class", "patita");
  imgpatita.classList.add("imagen1");

  // btnSend.addEventListener("click", () => {
  //   const comment = inputPost.value;
  //   console.log("Funciona el click", comment);
  // });

  section.querySelector("#btnSend")?.addEventListener("click", () => {
    const comment = section.querySelector("#inPost").value || "no comment";
    addPost(comment);
    section.querySelector("#inPost").value = "";
  });

  // querySnapshot.then((docs) => {
  //   docs.forEach((doc)=> {
  //       console.log(doc.id);
  //       console.log(doc.data());
  //     const post = document.createElement("input");
  //     post.value = doc.data().comment;
  //       postSection.append(post);
  //   });
  // });

  paintRealtime((querySnapshot) => {
    postSection.textContent = "";
    if (querySnapshot instanceof QuerySnapshot) {
      querySnapshot.forEach((doc) => {
        console.log(doc.id);
        console.log(doc.data());
        const post = document.createElement("input");
        post.value = doc.data().comment;
        postSection.append(post);
      });
    } else {
      console.error("Invalid querySnapshot:", querySnapshot);
    }
  });
  


  // // Configurar el formulario
  // btnSubmit.textContent = "Publicar post";
  // btnSubmit.addEventListener("click", function (e) {
  //   alert("Tu post ha sido publicado");
  //   e.preventDefault();
  //   // Guardar el valor del post
  //   const postValue = post.value;
  //   savePost(postValue);
  // });
  // // Agregar elementos al formulario y al contenedor section
  // formPost.append(post, btnSubmit);

  // Con getDocs obtenemos los datos de firebastore, luego en esos datos creamos li para mostrarlos, y estos elementos se agregan a la lista ul.
  // getPosts().then((docs)=>{
  //  docs.forEach((doc) => {
  //   console.log(doc.id)
  //   const docData = doc.data()
  //       const li=document.createElement('li');
  //   li.textContent = docData.description;
  //    ul.appendChild(li);
  // });
  // })

  // Devolver el contenedor section
  return section;
};

export default muro;
