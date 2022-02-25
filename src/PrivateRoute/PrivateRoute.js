import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user} = useAuth();
    const location = useLocation();
    return user.email? children: <Navigate to="/login" state={{from: location.pathname}}/>
};

export default PrivateRoute;