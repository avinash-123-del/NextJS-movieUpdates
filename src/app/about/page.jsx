'use client'
import '../globals.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const about = () => {

  useEffect(() => {
    Aos.init({duration:2000})
  },[])
  return (
    <div className="w-full m-auto relative bg-gradient-to-t from-black to-red-900 h-screen overflow-hidden">
      <img src="/moviebg.jpg" alt="" />
      <div className="absolute lg:w-[50%] w-[90%] text-sm sm:text-sm md:text-base sm:top-[300px] tab-min:top-[180px] sm:p-0 p-4 lg:top-[100px] lg:right-6">
        <p className="text-stone-200 text-5xl font-extrabold mb-10">Our <span className="text-red-600">Stories</span> </p>
        <p className="text-gray-400 sm:w-[80%]">MovieBook offers a grand collection of cinema formats. From its Mainstream to Gold Class Cinemas, Directors Cut to the latest sub brands - MovieBook ICON and MovieBook Superplex, the company has made exceptional technology like the IMAX®, 4DX and ECX (Enhanced Cinema Experience) accessible to its audience. VRs recent addition has been P[XL]  Indias first premium extra-large home grown big screen format for a truly enigmatic movie watching experience.</p>
        <br />

        <div data-aos='fade-up'>
          <ul className="ourstory">
            <li>Founded in <span>2006</span></li>
            <li>Ownership <span>Public</span></li>
            <li>Founder <span>A.Chandraker</span></li>
            <li>Headquater <span>Rajnandgaon,India</span></li>
            <li>Employess <span>5k-10k</span></li>
            <li>Ratings <span>4.5/5</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default about