// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu8UNkWm8zCjmZYsELdYb934_YU06qWrI",
  authDomain: "loginbw-5750b.firebaseapp.com",
  projectId: "loginbw-5750b",
  storageBucket: "loginbw-5750b.appspot.com",
  messagingSenderId: "45104339981",
  appId: "1:45104339981:web:dd552b4ec50cd197ab4944",
  measurementId: "G-V9XHKDNVX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app