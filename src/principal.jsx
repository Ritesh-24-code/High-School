import React, { useEffect, useRef, useState }  from 'react'
import "./index.css"
import Director from"./assets/director.png"
const diractor = () => {
     
          const sectionRef = useRef(null);
          const [isVisible, setIsVisible] = useState(false);
        
          useEffect(() => {
        
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting) {
                  setIsVisible(true);
                }
              },
              {
                threshold: 0.5, // trigger when 30% visible
              }
            );
        
            if (sectionRef.current) {
              observer.observe(sectionRef.current);
            }
        
            return () => {
              if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
              }
            };
        
          }, []);
  return (
    <div  ref={sectionRef}
      id="welcome"
      className={`flex justify-evenly m-1  text-white items-center   w-fit align-middle p-5 transition-all duration-1000 ${
        isVisible ? 'fade-in' : 'hidden-section'
      }`}>
      <div  className='p-5 bg-blue-500 w-[80%] max-md:w-[100%] rounded-2xl  shadow'> 
        <div className="flex justify-center  items-center align-middle ">
            <span className='text-white text-center font-bold text-[1.3rem]  max-md:text-[1.3rem] font-[serif] underline underline-offset-4  decoration-white'>
                From The Principal's Desk
            </span>
        </div>
        <div className='flex p-5 justify-evenly flex-wrap'>
        <div className=" grid justify-center items-center align-middle p-2">
            <img src={Director} alt="" className="w-40 h-40 rounded-2xl max-md:w-55 max-md:h-55 " />
                <span className="font-[otez] text-center p-1 text-[1.3rem]">
                Dr. Vikram Singh
            </span>
        </div>
        <div className="w-[50%]   max-md:w-[100%] max-md:text-center p-5 font-[bodoni] text-start">
            <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ipsam facere quam inventore numquam adipisci aspernatur dolorem porro fugit tempora, eaque provident totam delectus cumque ea ab beatae? Modi dicta eius eos harum sed cum reiciendis ut odio inventore doloremque magnam vitae quibusdam exercitationem, aut error perferendis alias quasi aperiam.
            </span>
        </div>
      </div>
        </div>
    </div>
  )
}

export default diractor
