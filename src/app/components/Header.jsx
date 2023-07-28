'use client'
import {AiOutlinePoweroff} from 'react-icons/ai'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
  const [menu,setMenu] = useState(false)
const router = useRouter()
  function handleMenu(){
    setMenu(!menu)
  }

  const handleLogout = async() => {
    try {
        const logOutApi = await fetch('/api/logout' , {
            cache:'no-store'
        })
        if(logOutApi.ok){
            toast.success('logged out')
            router.push('/')
            router.refresh()

        }
    } catch (error) {
        console.log(error.message);
        toast.error('failed to logOut');
    }
}

  return (
    <div className='shadow-lg py-2 bg-stone-200 w-screen'>
        <div className='flex items-center justify-between w-[80%] m-auto relative'>
            <Link href='/'>
                <Image src='/logo.png' width={100} height={50} alt='logo'/>
            </Link>
            <div className='hidden sm:flex font-semibold items-center justify-between gap-2 w-[40%]'>
                <Link href='/home'><span>Home</span></Link>
                <Link href='/about'><span>About</span></Link>
                <Link href='/movie'><span>Movie</span></Link>
                <Link href='/contact'><span>Contact</span></Link>
                <span className='flex items-center justify-around gap-1 cursor-pointer' onClick={handleLogout}><AiOutlinePoweroff/><span>Logout</span></span>
            </div>
            <div className='sm:hidden font-bold' onClick={handleMenu}>Menu</div>

            <div onClick={() => setMenu(!menu)} style={menu ? {top:'70px'} : {top:'-400px'} } className={'font-semibold flex sm:hidden absolute flex-col items-center justify-between gap-8 text-xl z-10 transition-all duration-300 right-[-30px] rounded-md py-3 bg-gradient-to-b from-red-950 to-red-900 w-[50%] text-stone-400'}>
                <Link href='/home'><span>Home</span></Link>
                <Link href='/about'><span>About</span></Link>
                <Link href='/movie'><span>Movie</span></Link>
                <Link href='/contact'><span>Contact</span></Link>
                <span className='flex items-center justify-around gap-1 cursor-pointer' onClick={handleLogout}><AiOutlinePoweroff/><span>Logout</span></span>
            </div>
            
        </div>
    </div>
  )
}

export default Header