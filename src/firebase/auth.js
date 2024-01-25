/*
Importación de funciones específicas de Firebase Authentication y el objeto app 
desde un archivo config.js. Esto incluye las funciones getAuth, signInWithEmailAndPassword, 
y createUserWithEmailAndPassword.
*/
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { app } from "./config.js";
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export function register_user(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log("se creo un usuario");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("ERROR" + error);
    });
}

export function iniciar_sesion(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      throw error;
    });
}
