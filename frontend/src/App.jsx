import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, googleProvide } from '../utils/firebase'
import api from '../utils/axios'

export default function App() {

  const handleLogin = async (token) => {
    try {
      const {data}  = await api.post("/auth/login",{token})
      
      console.log(data)
    }
    catch(error) {
      console.log(error.response);
      console.log(error.response?.data);
      console.log(error.message);
    }
  }

  const googleLogin = async () => {
    try {
      console.log("1. Before popup");
  
      const data = await signInWithPopup(auth, googleProvide);
  
      console.log("2. Popup success");
  
      const token = await data.user.getIdToken();
  
      console.log("3. Token:", token);
  
      await handleLogin(token);
  
      console.log("4. Backend success");
    } catch (error) {
      console.error("Google Login Error:", error);
      console.error("Code:", error.code);
      console.error("Message:", error.message);
    }
  };

  return (
    <div className='w-full h-screen bg-black flex items-center justify-center'>
      <button className='w-50 h-24 bg-white' onClick={googleLogin}> 
        continue with google
      </button>
    </div>
  )
}
