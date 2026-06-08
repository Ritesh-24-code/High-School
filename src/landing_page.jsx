import React from 'react'
import "./index.css"
import { meta } from '@eslint/js'
const landing_page = () => {
  return (
    <div className=" grid  justify-between  gap-30  flex-wrap opacity-0 "  >
      <div className="max-w-fit animate__animated animate__fadeInLeft">
        <div className='  border-2 border-red rounded-2xl   m-7 text-[1rem] border-blue-500     hover:border-white hover:text-white text-blue-500 transition-all'>
          <div className='bg-white transition  hover:bg-blue-500 p-3 rounded-2xl hover:scale-101' >
            <span className=" font-serif  ">
              Education is the key to unclocking <br />
              the world.A passport to a better tomorrow.
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-end  w-[100vw]  p-20   animate__animated animate__fadeInRight">
        <div className=" border-blue-500 border-2 w-fit max-h-fit rounded-2xl p-2  max-md:translate-x-10   m-3">
          <div className='bg-white rounded-2xl p-2  overflow-hidden w-[400px] max-md:w-[280px]'>
            <div className="text-bold font-serif text-black w-[100%] text-[20px] max-md:w-[100%] max-md:text-[1rem]">
              <span>
                We empower students with top-tier educaton, 
                research, and an inclusive community.
              </span>
            </div>
            <div className=" font-semibold font-sans bg-blue-500 text-white   rounded-2xl text-center  items-center justify-center flex  hover:text-blue hover:bg-white    hover:border-2 border-blue-500 hover:text-blue-500  w-45 h-13  text-[20px] m-4 transition-all cursor-pointer">
              <a href="#">
                <button className="cursor-pointer">
                  Enroll Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default landing_page
