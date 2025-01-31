import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_APP_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING,
    appId: process.env.VUE_APP_FIREBASE_APP_ID,
    measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT,
};

const modoENV = process.env.NODE_ENV;
const modoAPP = process.env.VUE_APP_MODE_APP;
console.info("MODO:", modoENV, `(${modoAPP})`);
console.info("Config Firebase ", firebaseConfig);


export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);