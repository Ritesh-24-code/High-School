import React from 'react'
import "./index.css"
import One from "./assets/ptm.webp"
const card = () => {
    return (
        <div className='flex justify-evenly items-center align-middle flex-wrap'>
            <div className='bg-gray-200  shadow hover:scale-105 transition-all w-fit m-3  p-2  rounded-2xl grid justify-center items-center align-middle '>
                <div className="  flex w-[100%]  justify-center  items-center align-middle">
                    <img src={One} alt="" className=" rounded-2xl w-[280px]" />
                </div>
                <div className="  text-center flex  justify-center align-middle items-center">
                    <span className='text-[0.7rem] text-center font-bold text-gray-800'>
                        Sep 11,2026 / 03:30 PM
                    </span>
                </div>
                <div className="w-[320px]  grid  justify-center text-center gap-1 items-center align-middle">
                    <span className="text-[1rem]  font-[otez] font-semibold tracking-wider">
                        Parents Teachers Meeting
                    </span>
                    <span className="text-[0.8rem] font-[bodoni]  font-light w-[90%]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure laboriosam non deb! Voluptas, perferendis.
                    </span>
                </div>
            </div>
            <div className='bg-gray-200  shadow hover:scale-105 transition-all w-fit m-3  p-2  rounded-2xl grid justify-center items-center align-middle '>
                <div className="  flex w-[100%]  justify-center  items-center align-middle">
                    <img src={One} alt="" className=" rounded-2xl w-[280px]" />
                </div>
                <div className="  text-center flex  justify-center align-middle items-center">
                    <span className='text-[0.7rem] text-center font-bold text-gray-800'>
                        Sep 11,2026 / 03:30 PM
                    </span>
                </div>
                <div className="w-[320px]  grid  justify-center text-center gap-1 items-center align-middle">
                    <span className="text-[1rem]  font-[otez] font-semibold tracking-wider">
                        Parents Teachers Meeting
                    </span>
                    <span className="text-[0.8rem] font-[bodoni]  font-light w-[90%]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure laboriosam non deb! Voluptas, perferendis.
                    </span>
                </div>
            </div><div className='bg-gray-200  shadow hover:scale-105 transition-all w-fit m-3  p-2  rounded-2xl grid justify-center items-center align-middle '>
                <div className="  flex w-[100%]  justify-center  items-center align-middle">
                    <img src={One} alt="" className=" rounded-2xl w-[280px]" />
                </div>
                <div className="  text-center flex  justify-center align-middle items-center">
                    <span className='text-[0.7rem] text-center font-bold text-gray-800'>
                        Sep 11,2026 / 03:30 PM
                    </span>
                </div>
                <div className="w-[320px]  grid  justify-center text-center gap-1 items-center align-middle">
                    <span className="text-[1rem]  font-[otez] font-semibold tracking-wider">
                        Parents Teachers Meeting
                    </span>
                    <span className="text-[0.8rem] font-[bodoni]  font-light w-[90%]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure laboriosam non deb! Voluptas, perferendis.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default card
