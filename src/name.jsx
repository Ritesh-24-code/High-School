
import"./index.css"
import logo from "./assets/logo.png"
const name = () => {
  return (
    <div  className='flex justify-center  max-md:justify-evenly max-md:w-[100%] items-center align-middle max-md:w-[100%] max-md:justify-items-start max-md:text-start  items-top  '>
      <div className='p-2 max-md:p-0  flex justify-start  align-middle items-center '>
        <img src={logo} alt="Logo" className='w-20 h-23  max-md:w-25 max-md:h-25 ' />
      </div>
      <div className=' grid p-2 max-md:w-[100%]'>
        <span className='text-[60px] flex max-md:justify-start items-center align-middle  tracking-[5px] max-md:w-[100%] text-red-700   font-bold font-[aveline] max-md:text-[1.3rem] max-md:tracking-widest'>
            OXBRIDGE SCHOOL
        </span>
        <span className="font-semibold font-[serif] text-[15px] w-[70%] max-md:w-[80%] max-md:text-[0.5rem] text-white ">
            AFFILIATED WITH CISCE,AFFILIATION NO.HA040  
            FIRST CISCE AFFILIATED SCHOOL BETWEEN  
            GURUGRAM AND JAIPUR
        </span>
      </div>
    </div>
  )
}

export default name
