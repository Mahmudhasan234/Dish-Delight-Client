import React, { useContext } from 'react';
import { AuthContext } from '../component/Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    
    const location = useLocation()
    const {user,loading}= useContext(AuthContext)
    // console.log(location)
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }
   
    return <Navigate state={{from: location}} to='/login' replace></Navigate>;
};

export default PrivateRoute;