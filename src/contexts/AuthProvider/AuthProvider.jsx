import app from '@/firebase/firebase.config'
import React, { createContext, useEffect, useState } from 'react'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const providerLogin = (provider) =>{
      setLoading(true)
     return signInWithPopup(auth,provider)
    }

    const createUser = (email,password) =>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password) =>{
      setLoading(true)
      return signInWithEmailAndPassword(auth, email,password)
    }

    const updateUserInfo = (profile) =>{
      return updateProfile(auth.currentUser, profile)
    }

    const verifyEmail = () =>{
      return sendEmailVerification(auth.currentUser)
    }
    const logOut = () =>{
      setLoading(true)
      return signOut(auth)
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        if(currentUser == null || currentUser.emailVerified){
          setUser(currentUser)
        }
        setLoading(false)
      });
      return () => {
        unsubscribe()
      }
    },[])

    const authInfo = {user,loading,setLoading,providerLogin,updateUserInfo,logOut,createUser,signInUser,verifyEmail}
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider