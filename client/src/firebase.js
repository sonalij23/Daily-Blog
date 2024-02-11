// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-5c7c2.firebaseapp.com",
  projectId: "mern-blog-5c7c2",
  storageBucket: "mern-blog-5c7c2.appspot.com",
  messagingSenderId: "1077163607034",
  appId: "1:1077163607034:web:c5e18d4d7a9a39f6169a43"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);