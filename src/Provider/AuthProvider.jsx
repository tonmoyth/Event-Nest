import React from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword,GithubAuthProvider,GoogleAuthProvider,signInWithEmailAndPassword, signInWithPopup  } from "firebase/auth";
import { auth } from '../Firebase/Firebase.config';




const AuthProvider = ({children}) => {

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


    const authData = {
        userSignUp,
        userSignIn,
        userLoginAndSignInGoogle,
        userLoginAndSigninGithub
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