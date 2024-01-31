import patita from "./imagenes/patita.png";
import { addPost, paintRealtime, updatePost, deletePost } from "../lib/index";
import { QuerySnapshot } from "firebase/firestore";

// Declaración de la función muro. Esta función crea elementos HTML dinámicamente para formar una sección de la interfaz de usuario.
const muro = () => {
  // Crear elementos
  const section = document.createElement("section");
  const inputPost = document.createElement("input");
  inputPost.id = "inPost";
  const imgpatita = document.createElement("img");
  const btnSend = document.createElement("button");
  btnSend.textContent = "publicar";
  btnSend.id = "btnSend";
  const postSection = document.createElement("article");
  postSection.className = "post_section";
  section.append(imgpatita, inputPost, btnSend, postSection);

  // Configurar la imagen patita
  imgpatita.src = patita;
  imgpatita.setAttribute("class", "patita");
  imgpatita.classList.add("imagen1");

  section.querySelector("#btnSend")?.addEventListener("click", () => {
    const comment = section.querySelector("#inPost").value || "no comment";
    addPost(comment);
    section.querySelector("#inPost").value = "";
  });

  const handleEditPost = (postId, postElement) => {
    const newComment = prompt("Edita tu publicación:", postElement.value);
    if (newComment !== null) {
      updatePost(postId, newComment)
        .then(() => {
          console.log("Publicación editada exitosamente");
          // Actualizar el valor del campo de entrada
          postElement.value = newComment;
        })
        .catch((error) =>
          console.error("Error al editar la publicación:", error)
        );
    }
  };

  const handleDeletePost = (postId, postContainer) => {
    const confirmDelete = confirm(
      "¿Estás seguro de que quieres borrar esta publicación?"
    );
    if (confirmDelete) {
      deletePost(postId)
        .then(() => {
          console.log("Publicación borrada exitosamente");
          // Eliminar el contenedor de la publicación
          postContainer.remove();
        })
        .catch((error) =>
          console.error("Error al borrar la publicación:", error)
        );
    }
  };

  paintRealtime((querySnapshot) => {
    postSection.textContent = "";
    if (querySnapshot instanceof QuerySnapshot) {
      querySnapshot.forEach((doc) => {
        const postContainer = document.createElement("div");
        postContainer.className = "post-container";

        const post = document.createElement("input");
        post.value = doc.data().comment;

        const editButton = document.createElement("button");
        editButton.textContent = "Editar";
        editButton.addEventListener("click", () =>
          handleEditPost(doc.id, post)
        );

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Borrar";
        deleteButton.addEventListener("click", () =>
          handleDeletePost(doc.id, postContainer)
        );

        postContainer.append(post, editButton, deleteButton);
        postSection.appendChild(postContainer);
      });
    } else {
      console.error("Invalid querySnapshot:", querySnapshot);
    }
  });

  // Devolver el contenedor section
  return section;
};

export default muro;
