import { firebaseConfig } from "./firebaseconfig.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import {  getFirestore,
    collection,
    addDoc,
    getDocs,
    setDoc,
    query,
    where } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js"


const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export {
    collection,
  addDoc,
  getDocs,
  setDoc,
  query,
  where
}




