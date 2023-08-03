import React from 'react'
import SignupForm from '../components/SignupForm'
import Image from 'next/image'

const Login = () => {
  return (
    <div>
      <div className='bg-login-bg h-screen py-20'>
        <h1 className='text-stone-200 text-5xl text-center'>Welcome to <span className='text-red-600 font-Courgette font-bold'>MovieBook</span></h1>
        <div className='flex justify-center items-center shadow-black border-4 border-transparent shadow-2xl mt-8 lg:w-[70%] md:w-[95%] gap-2  m-auto'>
          <Image src='/homebg.jpg' width={500} height={200} alt='homeImage' className='md:inline md:w-[60%]  hidden'/>
          <SignupForm />
        </div>
      </div>

    </div>
  )
}

export default Login 