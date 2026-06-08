import React, { useEffect, useRef, useState } from 'react'
import "./index.css"
import Success from "./assets/success.png"
import Building from "./assets/building.png"
import Community from "./assets/community.png"
import Deep from "./assets/deep_thinking.png"
import Sports from "./assets/sports.png"
import Teachers from "./assets/teachers.png"
const facilities = () => {
    
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
        <div   ref={sectionRef}
      id="welcome"
      className={`flex justify-evenly items-center align-middle p-5 transition-all duration-1000 ${
        isVisible ? 'fade-in' : 'hidden-section'
      }`}>
            <div>
                <div className="flex justify-center items-center align-middle p-5">
                    <span className='text-black font-[sans] font-bold text-[1.5rem] text-center'>
                        OUR FACILITIES
                    </span>
                </div>
                <div className="flex justify-center items-center align-middle  gap-5 flex-wrap">
                    <div className=" flex justify-center items-center align-middle p-3  hover:scale-107 rounded-2xl transition-all">
                        <div className="shadow-[0_15px_35px_rgba(0,0,0,0.2)]   w-fit h-[200px] p-2">
                            <span className='grid justify-center items-center align-middle'>
                                <div className='w-30 h-30 flex justify-center items-center align-middle'>
                                    <img src={Success} alt="" className="w-70 h-30" />
                                </div>
                                <div >
                                    <span className="text-black text-xs font-semibold w-full font-sans text-center flex justify-center items-center align-middle">
                                        High Success Rate
                                    </span>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center align-middle  p-3 hover:scale-107  transition-all">
                        <div className="shadow-[0_15px_35px_rgba(0,0,0,0.2)]  w-fit h-[200px] p-2">
                            <span className='grid justify-center items-center align-middle'>
                                <div className='w-30 h-30 flex justify-center items-center align-middle'>
                                    <img src={Building} alt="" className="w-70 h-30" />
                                </div>
                                <div >
                                    <span className="text-black  text-xs font-semibold font-sans text-center flex justify-center items-center align-middle">
                                        State-Of-The-Art
                                    </span>
                                </div>
                            </span>
                        </div>
                    </div><div className=" flex justify-center items-center align-middle  p-3  hover:scale-107 transition-all">
                        <div className="shadow-[0_15px_35px_rgba(0,0,0,0.2)] w-fit h-[200px] p-2">
                            <span className='grid justify-center items-center align-middle'>
                                <div className='w-30 h-30 flex justify-center items-center align-middle'>
                                    <img src={Sports} alt="" className="w-70 h-30" />
                                </div>
                                <div >
                                    <span className="text-black text-xs font-semibold font-sans text-center flex justify-center items-center align-middle">
                                        Diverse Extracurricular <br />
                                        Activity
                                    </span>
                                </div>
                            </span>
                        </div>
                    </div><div className=" flex justify-center items-center align-middle  p-3  hover:scale-107  transition-all">
                        <div className="shadow-[0_15px_35px_rgba(0,0,0,0.2)]  w-fit h-[200px] p-2">
                            <span className='grid justify-center items-center align-middle'>
                                <div className='w-30 h-30 flex justify-center items-center align-middle'>
                                    <img src={Teachers} alt="" className="w-70 h-30" />
                                </div>
                                <div >
                                    <span className="text-black text-xs font-semibold font-sans text-center flex justify-center items-center align-middle">
                                        Interactive Classes
                                    </span>
                                </div>
                            </span>
                        </div>
                    </div><div className=" flex justify-center items-center align-middle  p-3  hover:scale-107  transition-all">
                        <div className="shadow-[0_15px_35px_rgba(0,0,0,0.2)] w-fit h-[200px] p-2">
                            <span className='grid justify-center items-center align-middle'>
                                <div className='w-30 h-30 flex justify-center items-center align-middle'>
                                    <img src={Deep} alt="" className="w-70 h-30" />
                                </div>
                                <div >
                                    <span className="text-black text-xs  font-semibold font-sans text-center flex justify-center items-center align-middle">
                                        Advanced Technology <br />
                                        Integration
                                    </span>
                                </div>
                            </span>
                        </div>
                    </div><div className=" flex justify-center items-center align-middle  p-3  hover:scale-107  transition-all">
                        <div className="shadow-[0_15px_35px_rgba(0,0,0,0.2)]  w-fit h-[200px] p-2">
                            <span className='grid justify-center items-center align-middle'>
                                <div className='w-30 h-30 flex justify-center items-center align-middle'>
                                    <img src={Community} alt="" className="w-70 h-30" />
                                </div>
                                <div >
                                    <span className="text-black  text-xs font-semibold font-sans text-center flex justify-center items-center align-middle">
                                        Community Patnership
                                    </span>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default facilities
