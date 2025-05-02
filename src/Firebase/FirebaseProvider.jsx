import React, { useEffect, useState } from 'react';
import { FirebaseAuthContext } from './FirebaseAuthContext';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from './firebase.init';





const FirebaseProvider = ({children}) => {

    const [ user,setUser ] = useState(null)
    const [ loading, setLoading ] =  useState(true)




   const createUser = (email,password) => {
    setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)
   }

   const logIn = (email,password) => {
    setLoading(true)
     return signInWithEmailAndPassword(auth, email, password)

   }

   const logOut = () => {
    setLoading(true)
    return signOut(auth)  
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
           console.log(currentUser);  
           setUser(currentUser) 
           setLoading(false)
         })
         return ()=>{
          unsubscribe()
         
         }
  },[])


  
    const userInfo = {
        createUser,
        logIn,
        logOut,
        user,
        setUser,
        loading
    }
    return (
       <FirebaseAuthContext value={userInfo}>
        {children}
       </FirebaseAuthContext>
    );
};

export default FirebaseProvider;