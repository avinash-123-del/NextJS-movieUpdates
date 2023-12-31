'use client'
import Link from "next/link"
import Aos from "aos";
import 'aos/dist/aos.css'
import Image from "next/image";
// import avener from '@/images'
import { useEffect } from "react";

const Home = () => {

  const trending_movies = [
    {
      "id": 1,
      "title": "Wanted",
      "image_url": "/images/wanted.JPG"
    },
    {
      "id": 2,
      "title": "Iron man 3",
      "image_url": "/images/ironman.JPG"
    },
    {
      "id": 3,
      "title": "After Earth",
      "image_url": "/images/afterEarth.PNG"
    },
    {
      "id": 4,
      "title": "Avengers",
      "image_url": "/images/avengers.JPG"
    },
    {
      "id": 5,
      "title": "New Enemy",
      "image_url": "/images/cloudy.JPG"
    },
    {
      "id": 6,
      "title": "Your Move",
      "image_url": "/images/yourMove.PNg"
    }
  ]

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div className="w-full m-auto relative bg-gradient-to-t from-black to-red-900 ">
      <img src="/moviebg.jpg" alt="bgc" />
      <div data-aos='fade-down' className="absolute w-[50%] flex flex-col items-start justify-center md:top-[50px] lg:top-[100px] top-[20px] sm:right-6 right-0">
        <p className="text-stone-200 tab-min:text-2xl lg:text-5xl text-xl font-extrabold mb-5">Let&apos;s Watch <span className="text-red-600">Movies</span> Together</p>
        <p className="text-gray-400 hidden sm:inline w-[80%] tab:text-base text-[10px]">Together, we&apos;ll laugh, cry, and embark on a shared emotional journey that transcends the confines of our screens. With each scene, we&apos;ll uncover hidden meanings, ponder life&apos;s mysteries, and discover new perspectives.  So, grab your popcorn, dim the lights, and let&apos;s immerse ourselves in the magic of cinema, forging bonds that time and space cannot break.</p>
        <Link href='/movie' rel="preload">
          <button className="text-stone-100 sm:my-4 tab:text-sm text-[10px] rounded-lg tab:px-3 tab:py-2 p-2  bg-gradient-to-r from-black to-gray-900 hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-700 hover:scale-110 duration-200 ">Explore Movies</button>
        </Link>
      </div>
      <div className="flex flex-wrap  sm:gap-8 gap-3 justify-center items-center px-2 py-4 transition-opacity opacity-100 duration-300 ">
        {
          trending_movies.map((movie) => (
            <span key={movie.id} data-aos='fade-up' className="relative group ">
              <Image src={movie.image_url} alt={movie.title} width={400} height={100} className="rounded-md shadow-lg group-hover:scale-110 duration-300 hover:opacity-30" />
              <span className="absolute -z-10 group-hover:z-10 text-stone-200 bottom-[100px] right-[150px] text-xl font-bold font-kanit">{movie.title}</span>
            </span>
          ))
        }
      </div>

    </div>
  )
}

export default Home