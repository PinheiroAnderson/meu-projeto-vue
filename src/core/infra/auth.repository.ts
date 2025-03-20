//https://firebase.google.com/docs/auth/web/start?hl=pt&authuser=0#web-namespaced-api_1

import { app } from "./firebase";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
} from "firebase/auth";

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export function addAuth(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function removeAuth() {
    return auth.currentUser?.delete();
}

export function postLoginEmail(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
}

export async function loginGoogle() {
    try {
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        return { user, token };
    } catch (error) {
        return await Promise.reject(error);
    }
}
export function getLogOff() {
    return signOut(auth);
}

export function getInfoUser() {
    const user = auth.currentUser;
    if (user) {

        return {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified,
            uid: user.uid,
        };
    }
    return null;
}
