import { doc, updateDoc, deleteDoc } from "../firebase/store";

export const updatePost = (postId, updatedComment) => {
  const postRef = doc(postCollection, postId);
  return updateDoc(postRef, { comment: updatedComment });
};

export const deletePost = (postId) => {
  const postRef = doc(postCollection, postId);
  return deleteDoc(postRef);
};
