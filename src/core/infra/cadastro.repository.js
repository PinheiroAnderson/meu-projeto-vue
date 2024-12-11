import { collection, addDoc, db, query, where, getDocs } from "./firebase.js"


export async function addClient(client) {
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