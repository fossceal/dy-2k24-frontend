// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {GoogleAuthProvider ,getAuth ,signInWithRedirect,onAuthStateChanged,getRedirectResult} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js"
const firebaseConfig = {
  apiKey: "AIzaSyBNqIDQX040wZlP7UfsXD2e-dQIsJhvHh4",
  authDomain: "daksha-yanthra.firebaseapp.com",
  projectId: "daksha-yanthra",
  storageBucket: "daksha-yanthra.appspot.com",
  messagingSenderId: "265739934931",
  appId: "1:265739934931:web:0f9bb2fa74629315cc8826",
  measurementId: "G-E4P178CSQY"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
elem("promptSignin").addEventListener('click',()=>{signInWithRedirect(auth,provider)});


onAuthStateChanged(auth,(user) => {
    if (user !== null) {
        location.href = "/";

    }
    else{
    }
})