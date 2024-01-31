import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  doc,
} from "firebase/firestore";

import { app } from "./config.js";
export const db = getFirestore(app);
export { collection, addDoc, getDocs, onSnapshot, orderBy, query, doc };
// Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);



// export function getPosts() {
//   const postsCollection = collection(db, "post");
//   const querySnapshot = getDocs(postsCollection);
//   return querySnapshot
//   // const posts = [];
//   // postsSnapshot.forEach((doc) => {
//   //   posts.push({ id: doc.id, ...doc.data() });
//   // });
//   // return posts;
// }

