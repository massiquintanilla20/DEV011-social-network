import patita from "./imagenes/patita.png"


function muro(navigateTo) {
    const section = document.createElement('section');

    const imgpatita = document.createElement('img')
    console.log ("este es el muro")
    
        // Configurar la imagen patita
        imgpatita.src = patita
        imgpatita.setAttribute('class','patita')
        imgpatita.classList.add("imagen1")
      
            // Agregar elementos al contenedor section
    section.append(imgpatita);
    // Devolver el contenedor section
     return section;
}
export default muro;
  