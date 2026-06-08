import React from 'react'
import "./index.css"
import one from "./assets/01.jpg"
import Sec from "./assets/02.jpg"
import Three from "./assets/03.jpg"
import Four from "./assets/04.jpg"
import Five from "./assets/05.jpg"

const about_us_gallery = () => {
    
    return (
        <div className="flex justify-center     gap-2 flex-wrap text-white items-center  w-fit align-middle transition-all duration-1000 ">
            <div className='flex justify-center items-center align-middle'>
                <img src={one} alt="" className='w-[80%] h-[50%]' />
            </div>
            <div className='flex justify-center items-center align-middle'>
                <img src={Sec} alt="" className='w-[80%] [h-50%]' />
            </div>
            <div className='flex justify-center items-center align-middle'>
                <img src={Three} alt="" className='w-[80%] [h-50%]' />
            </div>
            <div className='flex justify-center items-center align-middle'>
                <img src={Four} alt="" className='w-[80%] [h-50%]' />
            </div>
            <div className='flex justify-center items-center align-middle'>
                <img src={Five} alt="" className='w-[80%] [h-50%]' />
            </div>
        </div>
    )
}

export default about_us_gallery
