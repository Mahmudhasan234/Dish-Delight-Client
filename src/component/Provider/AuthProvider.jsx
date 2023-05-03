import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ({ children }) => {

    const [user, setUser]= useState([]);

    /*Signup section*/
    const signUpUser = (email, password, name) => {
        return createUserWithEmailAndPassword(auth, email, password, name)
    }
    /*Signin section*/
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password, name)
    }
useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
setUser(currentUser)
    })
    return(()=>{

        unSubscribe()
    })
},[])
    
    const authInfo = {
        signInUser,
        signUpUser,
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;