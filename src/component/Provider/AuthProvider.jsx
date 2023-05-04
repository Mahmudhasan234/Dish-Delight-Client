import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null)
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([]);
const [loading, setLoading]= useState(true)
    /*Signup section*/
    const signUpUser = (email, password, name, photoUrl) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password, name, photoUrl)
    }
    /*update user profile*/
    
    
    /*Signin section*/
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    /*SignOut Section*/
    const signOutUser = () => { 
        setLoading(true)
        signOut(auth)
    }
    /*signin With google*/
    
    const signInWithGoogle =()=>{
        setLoading(true) 
        return signInWithPopup(auth,googleProvider)
    }
    const signInWithGithub =()=>{
        setLoading(true)
         return signInWithPopup(auth,githubProvider)
    }
    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
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