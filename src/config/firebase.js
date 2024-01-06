// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDo59dpKhra5d5Th7hpesCkwqXK7xEoLr8",
  authDomain: "vite-contact-2d3f7.firebaseapp.com",
  projectId: "vite-contact-2d3f7",
  storageBucket: "vite-contact-2d3f7.appspot.com",
  messagingSenderId: "447220535488",
  appId: "1:447220535488:web:cd5dfc85463415bc2f9d25",
  measurementId: "G-TTV4KFDDSR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);