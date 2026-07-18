// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "virtueai-a8e05.firebaseapp.com",
  projectId: "virtueai-a8e05",
  storageBucket: "virtueai-a8e05.firebasestorage.app",
  messagingSenderId: "923814709451",
  appId: "1:923814709451:web:5d53baf0099239da8ff34e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvide = new GoogleAuthProvider()