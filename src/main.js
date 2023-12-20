// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
myFunction();

import home from './templates/home.js';
import login from './templates/login.js';
import error from './templates/error.js';
import register_template from './templates/register.js';
// import about from "./templates/about.js"

const routes = [
   { path: '/', component: home },
   { path: '/login', component: login },
   { path: '/error', component: error },
   {path: '/register', component: register_template},
  //  {path: "/about", component: about}
 ];

 
 const defaultRoute = '/';
 const root = document.getElementById('root');
 
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
 
 window.onpopstate = () => {
   navigateTo(window.location.pathname);
 };
 
 navigateTo(window.location.pathname || defaultRoute);