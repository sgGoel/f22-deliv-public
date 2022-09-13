import { ConstructionOutlined } from "@mui/icons-material";
import { doc, addDoc, updateDoc, setDoc, collection, getDoc , deleteDoc} from "firebase/firestore";
import { db } from './firebase';

// Functions for database mutations

export const emptyEntry = {
   name: "",
   link: "",
   description: "",
   user: "",
   category: 0,
}

export async function addEntry(entry) {
   await addDoc(collection(db, "entries"), {
      name: entry.name,
      link: entry.link,
      description: entry.description,
      user: entry.user,
      category: entry.category,
      // The ID of the current user is logged with the new entry for database user-access functionality.
      // You should not remove this userid property, otherwise your logged entries will not display.
      userid: entry.userid,
   });
}

export async function updateEntry(entry, docID) {
   // TODO: Create Mutation to Edit Entry
   const docref = doc(db, "entries", docID);
   //console.log(docID);
   /*const docSnap = await getDoc(docref);

   if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
   } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
   }*/

   //check if doc.userID = Auth.userID

    await updateDoc(docref, {
      name: entry.name,
      link: entry.link,
      description: entry.description,
      user: entry.user,
      category: entry.category,
   });
}

export async function deleteEntry(entry) {
   // TODO: Create Mutation to Delete Entry
   const docref = doc(db, "entries", entry.id);
   await deleteDoc(docref, {
   });
}