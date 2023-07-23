'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
  const [menu,setMenu] = useState(false)
  function handleMenu(){
    setMenu(!menu)
  }
  return (
    <div className='shadow-lg py-2 bg-stone-200 w-screen'>
        <div className='flex items-center justify-between w-[80%] m-auto relative'>
            <Link href='/'>
                <Image src='/logo.png' width={100} height={50} alt='logo'/>
            </Link>
            <div className='hidden sm:flex font-semibold items-center justify-between gap-2 w-[40%]'>
                <Link href='/'><span>Home</span></Link>
                <Link href='/about'><span>About</span></Link>
                <Link href='/movie'><span>Movie</span></Link>
                <Link href='/contact'><span>Contact</span></Link>
            </div>
            <div className='sm:hidden font-bold' onClick={handleMenu}>Menu</div>

            <div onClick={() => setMenu(!menu)} style={menu ? {top:'70px'} : {top:'-400px'} } className={'font-semibold flex sm:hidden absolute flex-col items-center justify-between gap-8 text-xl z-10 transition-all duration-300 right-[-30px] rounded-md py-3 bg-gradient-to-b from-red-950 to-red-900 w-[50%] text-stone-400'}>
                <Link href='/'><span>Home</span></Link>
                <Link href='/about'><span>About</span></Link>
                <Link href='/movie'><span>Movie</span></Link>
                <Link href='/contact'><span>Contact</span></Link>
            </div>
            
        </div>
    </div>
  )
}

export default Header