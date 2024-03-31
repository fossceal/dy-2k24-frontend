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


getRedirectResult(auth).then((result) => {
    var token
    if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
         token = credential.accessToken;
    }else{
        token = result.user.accessToken ;
    }

    runAxios(formatRequest(formatData(result.user.uid,token),'/loginUser')).then((response)=>{
        console.log(response);
    });

    const user = result.user;
    console.log('User signed in');
    console.log(user);

}).catch((error) => {
        console.warn(error)
            var signinDialog = new DialogMaster('signinDialog');
    signinDialog.setDialog('Please sign in to continue',()=>{signInWithRedirect(auth,provider)},()=>{},false);
    signinDialog.show();
    }
    );

// onAuthStateChanged(auth, (user) => {

// if(user){
//     console.log('User already signed in');
//     console.log(user);

//     runAxios(formatRequest(formatData(user.uid,user.accessToken),'/me')).then((response)=>{
//         console.log(response);
//     });

//     var signinDialog = new DialogMaster('signinDialog');
//     signinDialog.setDialog('You are already signed in as '+ user.displayName,()=>{},()=>{},false);
//     signinDialog.show();

// }else{
//     var signinDialog = new DialogMaster('signinDialog');
//     signinDialog.setDialog('Please sign in to continue',()=>{signInWithRedirect(auth,provider)},()=>{},false);
//     signinDialog.show();


// }
// });