'use client'
import {AiOutlinePoweroff} from 'react-icons/ai'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { GiHamburgerMenu} from 'react-icons/gi'
import {GrFormClose} from 'react-icons/gr'
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
    <div className='shadow-lg py-2 bg-stone-200 w-screen overflow-x-hidden'>
        <div className='flex items-center justify-between w-[80%] m-auto relative'>
            <Link href='/'>
                <Image src='/logo.png' width={100} height={50} alt='logo'/>
            </Link>
            <div className='hidden sm:flex font-semibold items-center justify-between gap-2 w-[40%]'>

                <Link href='/movies/home'><span>Home</span></Link>
                <Link href='/movies/about'><span>About</span></Link>
                <Link href='/movies/movie'><span>Movie</span></Link>
                <Link href='/movies/contact'><span>Contact</span></Link>

                <span className='flex items-center justify-around gap-1 cursor-pointer' onClick={handleLogout}><AiOutlinePoweroff/><span>Logout</span></span>
            </div>

            <div className='sm:hidden font-bold ' onClick={handleMenu} >
              {
                menu ?  <GrFormClose size={40} width={30}/> : <GiHamburgerMenu size={30}/>
              }
              
              </div>

            <div onClick={() => setMenu(!menu)} 
             className={`font-semibold flex sm:hidden fixed flex-col items-start pl-[40px] justify-between gap-8 text-xl transition-all duration-300 right-[-50px] top-[75px] rounded-md py-3 bg-gradient-to-b from-red-950 to-red-900 w-[60%] text-stone-400 z-40
             ${menu ? 'translate-x-0' : 'translate-x-full'} `}>

                <Link href='/movies/home'><span>Home</span></Link>
                <Link href='/movies/about'><span>About</span></Link>
                <Link href='/movies/movie'><span>Movie</span></Link>
                <Link href='/movies/contact'><span>Contact</span></Link>

                <span className='flex items-center justify-around gap-1 cursor-pointer' onClick={handleLogout}><AiOutlinePoweroff/><span>Logout</span></span>
            </div>
            
        </div>
    </div>
  )
}

export default Header