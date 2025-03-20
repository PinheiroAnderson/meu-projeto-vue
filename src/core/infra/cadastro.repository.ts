import { Client } from "../domain/Client";
import { addAuth, removeAuth } from "./auth.repository";
import { app } from "../infra/firebase";
import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
    doc,
    setDoc,
    getDoc,
    updateDoc,
} from "firebase/firestore/lite";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";

const storage = getStorage(app);

const db = getFirestore(app);

 export async function uploadProfilePhoto(file: File, userId: string): Promise<string> {
    const storageRef = ref(storage, `avatars/${userId}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {
                reject(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
                    resolve(downloadURL);
                });
            }
        );
    });
}

export async function addClient(client: Client) {
    return addAuth(client.email, client.password)
        .then(async userCredential => {
            const user = userCredential.user;
            client.id = user.uid;
            client.password = "";
            await setDoc(doc(db, "client", user.uid), { ...client });
            return user.uid;
        })
        .catch(error => {
            removeAuth();
            throw new Error(error);
        });
}
export async function queryClient() {
    const q = query(collection(db, "client"), where("isActive", "==", true));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {});

    return querySnapshot;
}

 export async function getClient(id: string) {
     const docRef = doc(db, "client", id);
     const docSnap = await getDoc(docRef);

     if (!docSnap.exists()) {
         return null;
     }

     return { id: docSnap.id, ...docSnap.data() };
 }

export async function editClient(idDoc: string, client: Client) {
    const docRef = doc(db, "client", idDoc);
    client.password = "";
    return await updateDoc(docRef, { ...client });
}
