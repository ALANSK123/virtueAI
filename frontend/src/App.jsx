import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, googleProvide } from '../utils/firebase'

export default function App() {

  const googleLogin = async () => {
    const data = await signInWithPopup(auth, googleProvide)
    console.log(data)
  }

  return (
    <div className='w-full h-screen bg-black flex items-center justify-center'>
      <button className='w-50 h-24 bg-white' onClick={googleLogin}> 
        continue with google
      </button>
    </div>
  )
}
