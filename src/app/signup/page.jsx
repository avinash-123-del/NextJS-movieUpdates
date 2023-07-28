import React from 'react'
import SignupForm from '../components/SignupForm'


const Login = () => {
  return (
    <div className='bg-login-bg h-[500px] py-4'>
      <h1 className='text-stone-200 text-5xl text-center'>Welcome to <span className='text-red-600 font-Courgette font-bold'>MovieBook</span></h1>
        <SignupForm/>
    </div>
  )
}

export default Login 