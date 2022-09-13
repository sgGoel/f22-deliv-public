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
      userid: entry.userid,
   });
}

//update the doc where entry.id == passed ID
export async function updateEntry(entry, docID) {
   const docref = doc(db, "entries", docID);
    await updateDoc(docref, {
      name: entry.name,
      link: entry.link,
      description: entry.description,
      user: entry.user,
      category: entry.category,
   });
}

//delete the passed entry
export async function deleteEntry(entry) {
   const docref = doc(db, "entries", entry.id);
   await deleteDoc(docref, {
   });
}

export async function editOrder(state) {
   if (state==0){
   }
   if (state == 1){
   }
   return;
}