'use client'

import { useState } from "react"


const Pagination = () => {
    let [currentPage , setCurrentPage] = useState(1)
    const totalPage = 10

    function handlePrev(){
        setCurrentPage(currentPage -= 1)
    }
    function handleNext(){
       setCurrentPage(currentPage += 1)
    }

    return (

        <div>
            <div className="text-center">
                {currentPage}
            </div>

            <div className="flex items-center justify-center gap-7">
                {currentPage>1 && <button onClick={handlePrev}>prev</button>}
                <p>{currentPage} of {totalPage}</p>
                {currentPage < totalPage ? <button onClick={handleNext}>next</button> : ''}
            </div>

        </div>
    )
}

export default Pagination