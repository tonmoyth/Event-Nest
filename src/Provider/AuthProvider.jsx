import React from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/Firebase.config';




const AuthProvider = ({children}) => {

    const userSignUp = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }
    

    const authData = {
        userSignUp
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