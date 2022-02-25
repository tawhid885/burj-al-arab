import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./Login.css";
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const navigate = useNavigate();
    const {setUser, signInWithGoogle} = useAuth();
    const location = useLocation();
    const redirect_uri = location.state?.from || "/";

    const handleGoogleSignIn=()=>{
        signInWithGoogle()
        .then(result=>{
            setUser(result.user);
            console.log("google user ", result.user);
            navigate(redirect_uri);
        })
    }
    console.log(location.state?.from);
    return (
        <div>
            <h1>This is Login</h1>
            <button onClick={handleGoogleSignIn}>GoogleSignIn</button>
        </div>
    );
};

export default Login;