import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null)
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
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
         return signInWithPopup(auth,googleProvider)
    }
    const signInWithGithub =()=>{
         return signInWithPopup(auth,githubProvider)
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
        signInWithGithub,
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