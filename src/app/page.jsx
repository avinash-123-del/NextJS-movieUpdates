import React from 'react'
import LoginForm from './components/LoginForm'


const Login = () => {
  return (
    <div className='bg-login-bg h-[500px] py-20'>
      <h1 className='text-stone-200 text-5xl text-center'>Welcome to <span className='text-red-600 font-Courgette font-bold'>MovieBook</span></h1>
        <LoginForm/>
    </div>
  )
}

export default Login 