import React from 'react'
import "./index.css"
import stu from "./assets/stu.gif"
const stu_gif = () => {
  return (
    <div>
      <div className="w-fit">
        <img src={stu} alt="" className='w-[60rem] h-[15rem] max-md:w-[30rem] max-h-[25rem] ' />
      </div>
    </div>
  )
}

export default stu_gif
