// Importamos y ejecutamos la funcion

import { myFunction } from './lib/index.js';
myFunction();

import home from './templates/home.js';
import login from './templates/login.js';
import error from './templates/error.js';
import register_template from './templates/register.js';

// importando firebase
import "./firebase/config.js"

// Define un array routes que mapea las rutas a los componentes correspondientes.
const routes = [
   { path: '/', component: home },
   { path: '/login', component: login },
   { path: '/error', component: error },
   {path: '/register', component: register_template},
 ];

 // Establece la ruta predeterminada y obtiene el elemento con el id "root" del documento HTML.
 const defaultRoute = '/';
 const root = document.getElementById('root');
 
 // La función navigateTo maneja la navegación entre rutas.
// Utiliza window.history.pushState para cambiar la URL sin recargar la página.
// Remueve el contenido actual del elemento con id "root".
// Agrega el componente correspondiente a la ruta actual al "root".
// Si la ruta no existe, redirige a la ruta de error.
 function navigateTo(hash) {
   const route = routes.find((routeFound) => routeFound.path === hash);
   
   if (route && route.component) {
     window.history.pushState(
       {},
       route.path,
       window.location.origin + route.path,
     );
 
     if (root.firstChild) {
       root.removeChild(root.firstChild);
     }
     root.appendChild(route.component(navigateTo));
    } else {
     navigateTo('/error');
   }
 }
 
 // Define un manejador que llama a navigateTo cuando se produce un cambio en el historial del navegador (por ejemplo, al usar los botones de retroceso/adelante).
 window.onpopstate = () => {
   navigateTo(window.location.pathname);
 };
 
 // Realiza la primera navegación al cargar la aplicación.
 navigateTo(window.location.pathname || defaultRoute);