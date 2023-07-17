// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCE_JOGpSnKP5W_cI8vfDUVvXpBGv1vNU",
  authDomain: "travel-blog-a62ef.firebaseapp.com",
  projectId: "travel-blog-a62ef",
  storageBucket: "travel-blog-a62ef.appspot.com",
  messagingSenderId: "222559825035",
  appId: "1:222559825035:web:11925875a1a1000714788e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
