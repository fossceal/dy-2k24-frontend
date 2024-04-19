import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth ,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js"
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
const auth = getAuth();
var promptSignin = elem('promptSignin');
// _libDEBUG = true;
onAuthStateChanged(auth, async (user) => {
    if (user !== null) {

        const token = user.accessToken;
        const uid = user.uid;
        // check if user is registered 
        let data = formatData("login",uid,token);
        let config = formatRequest(data,"/me","get");
        let response = await runAxios(config);
        if(response.success){
            console.log(response);
        }else{
            let data = formatData("login",uid,token);
            let config = formatRequest(data,"/loginUser","post");
            let response = await runAxios(config);
            if(response.success){
                console.log(response);
                console.log("User logged in");
                await sleep(1000)
                let v = await ME();
                console.log(v);
            }
        }


        promptSignin.style.display = "none";


    }
    else{
        console.log("No user signed in");
        promptSignin.style.opacity = "1";
        promptSignin.style.display = "block";
    }


})

promptSignin.addEventListener('click',()=>{
    location.href = "/auth";
})