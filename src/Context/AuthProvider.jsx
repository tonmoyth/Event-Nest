import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword,GithubAuthProvider,GoogleAuthProvider,onAuthStateChanged,sendPasswordResetEmail,signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile  } from "firebase/auth";
import { auth } from '../Firebase/Firebase.config';




const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true);
    const [user,setUser] = useState(null);
    const [email,setEmail] = useState('')
    
    const userSignUp = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const userSignIn = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleProvider = new GoogleAuthProvider();
    const userLoginAndSignInGoogle = () => {
        return signInWithPopup(auth,googleProvider);
    }

    const githubProvider = new GithubAuthProvider();
    const userLoginAndSigninGithub = () => {
        return signInWithPopup(auth,githubProvider)
    }
    
    const userLogOut = () => {
        return signOut(auth);
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth,email)
    }

    const userUpdateProfile = (data) => {
        return updateProfile(auth.currentUser,data)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    },[])

    const authData = {
        user,
        loading,
        email,
        setUser,
        userSignUp,
        userSignIn,
        userLoginAndSignInGoogle,
        userLoginAndSigninGithub,
        userLogOut,
        resetPassword,
        setEmail,
        userUpdateProfile
    }
    return (
        <div>
            <AuthContext value={authData}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;