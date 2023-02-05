import { ConstructionOutlined } from "@mui/icons-material";
import { CollectionReference, doc, addDoc, getDocs,query, Query, where, updateDoc, setDoc, collection, getDoc , deleteDoc} from "firebase/firestore";
import { db } from './firebase';
import {sort_state} from '../components/EntryModal.js';

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
export async function updateEntry(entry, docID, uid, usr) {
   console.log(uid);
   const docref = doc(db, "entries", docID);
    await updateDoc(docref, {
      name: entry.name,
      link: entry.link,
      description: entry.description,
      user: usr,
      category: entry.category,
      userid: uid,
   });
}

//delete the passed entry
export async function deleteEntry(entry) {
   const docref = doc(db, "entries", entry.id);
   await deleteDoc(docref, {
   });
}

//trigger event listener in App.js, to update order
export async function editOrder(state, user) {
   const q = user?.uid ? query(collection(db, "entries"), where("userid", "==", user.uid)) : collection(db, "entries");
   const query_snap = await getDocs(q);
   var arr = query_snap.docs.map(doc => ({ ...doc.data(), id: doc.id }));

   const event = new CustomEvent("sort called", {detail: {arr : arr}});
   document.dispatchEvent(event);
}