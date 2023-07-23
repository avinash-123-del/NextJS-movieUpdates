'use client'
import Link from "next/link"
import Image from "next/image"
import 'aos/dist/aos.css'
import Aos from "aos"
import { useEffect } from "react";
const MovieCard = ({item}) => {
const data = item.jawSummary

useEffect(() =>{
  Aos.init({duration:100})
  },[])
// console.log(data);
  return (
        <div data-aos="fade-up" className="px-1 py-2 w-[250px] m-auto">
            <Image src={data.backgroundImage.url} width={280} height={150} alt={data.title}
            className="rounded-md hover:scale-110 duration-300 " />
            <h1 className="py-1 text-stone-200 ">{data.title}</h1>
            <p className="text-[10px] text-stone-400 pb-1">{data.synopsis.substr(0,98)+'...'}</p>
            <Link href={`/movie/${data.id}`}>
                <button className="text-stone-100 text-[12px] rounded-lg px-2 py-1 mb-2 bg-gradient-to-r from-black to-gray-900 hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-700 hover:scale-110 duration-200">Read more</button>
            </Link>
            
        </div>
  )
}

export default MovieCard