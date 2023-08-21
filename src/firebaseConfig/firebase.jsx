
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCIn_FG9_g2uYywtvu8t-p5RryvUAukqj4",
    authDomain: "react-e-commerce-1c23b.firebaseapp.com",
    projectId: "react-e-commerce-1c23b",
    storageBucket: "react-e-commerce-1c23b.appspot.com",
    messagingSenderId: "281259860197",
    appId: "1:281259860197:web:a721943b8351b2bb48740c"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();