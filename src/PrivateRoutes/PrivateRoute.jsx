import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Header/Loading/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const {pathname} = useLocation();
    console.log(location);
    if(loading){
        return <Loading></Loading>
    }

    if(!user){
        return <Navigate state={pathname} to='/login'></Navigate>
    }
    return children;
};

export default PrivateRoute;