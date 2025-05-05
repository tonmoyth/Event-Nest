import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword,GithubAuthProvider,GoogleAuthProvider,onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, signOut  } from "firebase/auth";
import { auth } from '../Firebase/Firebase.config';




const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    
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

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    },[])

    const authData = {
        user,
        setUser,
        userSignUp,
        userSignIn,
        userLoginAndSignInGoogle,
        userLoginAndSigninGithub,
        userLogOut
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