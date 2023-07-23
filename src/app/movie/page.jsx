'use client'
require('dotenv').config()

import { BallTriangle } from "react-loader-spinner";

import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const Movie = ({ searchParams }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  let [currentPage, setCurrentPage] = useState(1)

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '411c1f9918msh0fea9d5fc77e92fp1d3827jsn8d81b03d00ae',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
  console.log(process.env.HOST);
  function handlePrev() {
    setCurrentPage(currentPage -= 1)
  }
  function handleNext() {
    setCurrentPage(currentPage += 1)
  }

  const dataPerPage = 8
  const totalPage = 10

  if (searchParams.page >= 1) {
    setCurrentPage(searchParams.page)
  }

  let offset = (currentPage - 1) * dataPerPage       // (2-1)*8 || (3-1)*8 itna data chhod ke age ka dikhana hai
  console.log(offset);

  const url = `https://netflix54.p.rapidapi.com/search/?query=stranger&offset=${offset}&limit_titles=${dataPerPage}&limit_suggestions=177&lang=en`;


  async function fetchData() {
    const response = await fetch(url, options);
    const result = await response.json();
    setData(result.titles)
    console.log(data.length);
  }

  useEffect(() => {
    setTimeout(() => {
      fetchData()
      setIsLoading(false)
    }, 500);
  }, [currentPage])

  return (
    <div>

      {
        isLoading ?
          <div className="h-screen flex items-center justify-center bg-red-100">
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#800000"
              ariaLabel="ball-triangle-loading"
              wrapperClass={{}}
              wrapperStyle=""
              visible={true}
            />
          </div> :
          (
            <div className="bg-gradient-to-b from-black to-red-800 ">
              <h1 className="text-center text-5xl font-bold pt-8 text-stone-200 ">Series and <span className="text-red-600">Movies</span> </h1>
              <div className="lg:h-screen">

                <div className="lg:grid lg:grid-cols-4 flex flex-wrap justify-evenly items-center w-[80%] m-auto pt-8">
                  {
                    data.map((item, index) => (
                      <MovieCard item={item} key={index} />
                    ))
                  }
                </div>
                <br />

                <div>
                  {data.length > 1 ? <div className="pagination ">
                    {currentPage > 1 && <button onClick={handlePrev}>Prev</button>}
                    <p className="text-stone-200">{currentPage} of {totalPage}</p>
                    {currentPage < totalPage ? <button onClick={handleNext}>Next</button> : ''}
                  </div> : ''}
                </div>
              </div>

            </div>
          )
      }



    </div>


  )

}

export default Movie