import React from 'react'
import Link from 'next/link'
const Notfound = () => {
  return (
    <div className='flex flex-col items-center pt-[250px] gap-4'>
      <h1 className='text-4xl'>404 | Page Not Found</h1>
      <Link href='/'>
        <button className="text-stone-100 text-base rounded-lg px-2 py-1 mb-2 bg-gradient-to-r from-black to-gray-900 hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-700 hover:scale-110 duration-200">Back to Home page</button>
      </Link>
    </div>
  )
}

export default Notfound