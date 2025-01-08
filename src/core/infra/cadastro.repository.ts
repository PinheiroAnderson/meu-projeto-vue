import { Client } from "../domain/Client";
import { app } from "./firebase";
import { getFirestore, collection, getDocs, addDoc, query, where } from 'firebase/firestore/lite';

const db = getFirestore(app);

export async function addClient(client:Client) {
    return await addDoc(collection(db, "client"), {...client});
}

export async function queryClient() {
   

const q = query(collection(db, "client"), where("isActive", "==", true));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  
  console.log(doc.id, " => ", doc.data());
});

return querySnapshot

}