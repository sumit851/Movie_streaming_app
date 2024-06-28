// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTWtMAS7Qq9F_4eGm3ThijvQ980lVOvbQ",
  authDomain: "netflix-clone-4aa61.firebaseapp.com",
  projectId: "netflix-clone-4aa61",
  storageBucket: "netflix-clone-4aa61.appspot.com",
  messagingSenderId: "990370760739",
  appId: "1:990370760739:web:b09a77fc371f47fe5a8996",
  measurementId: "G-SDPH8L7THG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
