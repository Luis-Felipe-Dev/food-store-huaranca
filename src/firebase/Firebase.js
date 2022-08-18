import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAgaiokG-4B6DjAQsnpZ0CQDQ8RkfSczDY",
    authDomain: "proyecto-coderhouse-ee6be.firebaseapp.com",
    projectId: "proyecto-coderhouse-ee6be",
    storageBucket: "proyecto-coderhouse-ee6be.appspot.com",
    messagingSenderId: "75015279247",
    appId: "1:75015279247:web:b5be3660e30ab3ede156fa"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)