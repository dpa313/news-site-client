// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "newsportal-b435e.firebaseapp.com",
  projectId: "newsportal-b435e",
  storageBucket: "newsportal-b435e.appspot.com",
  messagingSenderId: "1038020004668",
  appId: "1:1038020004668:web:15df231b5908f748bf6c39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;