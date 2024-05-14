import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const loaction = useLocation()
    if(user){
        return children;
    }
    // if(loading){
    //     return <Loader/>
    // }
    return <Navigate state={loaction.pathname} to={"/login"}/>
};

export default PrivateRoute;