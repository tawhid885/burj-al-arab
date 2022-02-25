import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth"; 
import { useEffect } from "react";
import { useState } from 'react';
import FirebaseInit from '../Firebase/Firebase.init';


FirebaseInit();
const useFirebase=()=>{
    const [user, setUser] = useState({});


    const auth = getAuth();

    const googleProvider =new GoogleAuthProvider();

    // control user settings 
    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                console.log("form internal ", user)
                setUser(user);
            }
            else{
    
            }
        })
    },[]);
    const signInWithGoogle=()=>{
        console.log("google sign in clicked!")
        return signInWithPopup(auth, googleProvider)   
    }

    const logOut=()=>{
        signOut(auth).then(() => {
            console.log("Sign-out successful.")
            setUser({});
          }).catch((error) => {
            // An error happened.
          });
    }

    return {
        user, 
        setUser,
        signInWithGoogle,
        logOut
    }
}

export default useFirebase;