import {
  db,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  doc,
  updateDoc,
  deleteDoc,
} from "../firebase/store";

const postCollection = collection(db, "post");

export const addPost = (comment) => {
  //   // Add a new document in collection "cities"
  addDoc(postCollection, {
    // name: "Los Angeles",
    comment,
    date: Date.now(),
  });
};

export const querySnapshot = getDocs(collection(db, "post"));

// En lib/index.js
export function myFunction() {
  // Código de la función...
}

const q = query(postCollection, orderBy("date", "desc"));

export const paintRealtime = (callback) => onSnapshot(q, callback);

export const updatePost = (postId, updatedComment) => {
  const postRef = doc(postCollection, postId);
  return updateDoc(postRef, { comment: updatedComment });
};

export const deletePost = (postId) => {
  const postRef = doc(postCollection, postId);
  return deleteDoc(postRef);
};

export default addPost;
