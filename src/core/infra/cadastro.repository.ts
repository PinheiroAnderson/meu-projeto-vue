import { Client } from "../domain/Client";
import { addAuth, removeAuth } from "./auth.repository";
import { app } from "./firebase";
import {
    getFirestore,
    collection,
    getDocs,
    setDoc,
    doc,
    query,
    where,
} from "firebase/firestore/lite";

const db = getFirestore(app);

export async function addClient(client: Client) {
    return addAuth(client.email, client.password)
        .then(async userCredential => {
            const user = userCredential.user;
            client.password = "";
            return await setDoc(doc(db, "client", user.uid), { ...client });
        })
        .catch(error => {
            removeAuth();
            const errorCode = error.code;
            const errorMessage = error.message;
            throw new Error(error);
        });
}
export async function queryClient() {
    const q = query(collection(db, "client"), where("isActive", "==", true));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
        console.log(doc.id, " => ", doc.data());
    });

    return querySnapshot;
}
