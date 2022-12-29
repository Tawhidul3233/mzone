import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import { app } from '../Firebase/Firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({children}) => {

     const [user , setUser] = useState(null)
     const [loading , setLoading] = useState(true)

     // create user with email and password
     const registerWithEmail = (email, password)=>{
          setLoading(true)
          return createUserWithEmailAndPassword(auth, email, password)
     }

     // Sing in with email and password
     const loginWithEmail =(email, password)=>{
          setLoading(true)
          return signInWithEmailAndPassword(auth, email, password)
     }

     // sing with google 
     const singInWithGoogle = (provider)=>{
          return signInWithPopup(auth, provider)
     }

     // LogOut 
     const logOut = ()=>{
          return signOut(auth)
     }

     // update user information
     const updateUser = (userInfo)=>{
          setLoading(true)
          return updateProfile(auth.currentUser , userInfo)
     }

     const authInfo = {
          registerWithEmail,
          loginWithEmail,
          user,
          logOut,
          updateUser,
          setLoading,
          loading,
          singInWithGoogle
     }

     useEffect(()=>{
          const unsubscribe =  onAuthStateChanged(auth, currentUser => {
               setUser(currentUser)
               setLoading(false)
          })
          return ()=> unsubscribe()
     },[])

     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;