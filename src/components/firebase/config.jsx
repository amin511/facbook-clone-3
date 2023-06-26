import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyCh83f5Mim-A0VxP9L3D1syDRxg_k8zEVs",
    authDomain: "facebook-clone-67d35.firebaseapp.com",
    projectId: "facebook-clone-67d35",
    storageBucket: "facebook-clone-67d35.appspot.com",
    messagingSenderId: "23682743058",
    appId: "1:23682743058:web:a93ffabe8a1b4646a191cb",
    measurementId: "G-GY12Y0B9YX"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app, "gs://facebook-clone-67d35.appspot.com")


