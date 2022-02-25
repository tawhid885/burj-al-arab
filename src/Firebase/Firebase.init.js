import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

// Initialize Firebase
const FirebaseInit=()=>{
    initializeApp(firebaseConfig);
}

export default FirebaseInit;
