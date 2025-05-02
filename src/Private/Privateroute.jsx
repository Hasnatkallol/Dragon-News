import React, { use } from 'react';
import { FirebaseAuthContext } from '../Firebase/FirebaseAuthContext';
import { Navigate } from 'react-router';
import Loading from '../Components/Loading';

const Privateroute = ({children}) => {
    const {user,loading} = use(FirebaseAuthContext)
    if(loading) {
        return  <Loading></Loading>
    }
    if(user && user?.email) {
        return children;
       
    }
    return <Navigate to={"/auth/login"}></Navigate>;
};

export default Privateroute;