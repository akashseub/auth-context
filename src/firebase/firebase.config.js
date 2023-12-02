// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDFXHtkS_Ro2d404793yat4l1ig1Wg1-U",
  authDomain: "auth-cotext.firebaseapp.com",
  projectId: "auth-cotext",
  storageBucket: "auth-cotext.appspot.com",
  messagingSenderId: "165137307646",
  appId: "1:165137307646:web:54def84964162b367c52af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth; 