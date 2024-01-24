import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

import { app } from "./config.js";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export async function savePost(text) {
  // Add a new document in collection "cities"
  await addDoc(collection(db, "post"), {
    // name: "Los Angeles",
    description: text,
  });
}

export function getPosts() {
  const postsCollection = collection(db, "post");
  const querySnapshot = getDocs(postsCollection);
  return querySnapshot
  // const posts = [];
  // postsSnapshot.forEach((doc) => {
  //   posts.push({ id: doc.id, ...doc.data() });
  // });
  // return posts;
}

