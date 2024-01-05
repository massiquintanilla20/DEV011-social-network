// file error.js
function error() {
    // Crear un elemento de título <h2>
    const title = document.createElement('h2');
    // Establecer el texto del título
    title.textContent = 'Error 404 page no found, please go home';
    // Devolver el elemento de título
    return title;
  }
  // Exporta la función error para que pueda ser importada y utilizada en otros archivos.
  export default error;