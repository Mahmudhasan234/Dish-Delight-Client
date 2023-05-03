import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null)
const auth = getAuth(app)

const googleprovider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([]);

    /*Signup section*/
    const signUpUser = (email, password, name, photoUrl) => {
        return createUserWithEmailAndPassword(auth, email, password, name, photoUrl)
    }
    /*update user profile*/
    
    
    /*Signin section*/
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    /*SignOut Section*/
    const signOutUser = () => { 
        signOut(auth)
    }
    /*signin With google*/
    
    const signInWithGoogle =()=>{
         return signInWithPopup(auth,googleprovider)
    }
    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return (() => {

            unSubscribe()
        })
    }, [])

    const authInfo = {
        signInUser,
        signUpUser,
        signOutUser,
        signInWithGoogle,
        user,
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