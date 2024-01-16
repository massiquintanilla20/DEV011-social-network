import { getFirestore, collection, addDoc} from "firebase/firestore";

import { app } from "./config.js";


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export async function savePost (text) {
    // Add a new document in collection "cities"
await addDoc(collection(db, "post"), {
    // name: "Los Angeles",
    description: text,
  });
}

