import React, { useEffect, useRef, useState } from 'react'
import "./index.css"
import Hr from "./hr.jsx"
import Parents from "./assets/bg-parents.png"
import Teachers from "./assets/bg-teachers.png"
const footer = () => {
     
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
      className={`flex justify-center items-center align-middle bg-blue-500 transition-all duration-1000 ${
        isVisible ? 'fade-in' : 'hidden-section'
      }`}>
            <div className='grid justify-center items-center align-middle m-5'>
                <div className="up flex flex-wrap max-md:text-center justify-evenly  items-start align-middle gap-15">
                    <div className="grid justify-center items-center align-middle">
                        <div className='font-bold text-[2rem] p-2 font-sans  tracking-wider text-white'>
                            Quick Links
                        </div>
                        <div>
                            <ul className=" text-white text-[1rem] p-2.5 tracking-wider font-sans footer_link">
                                <a href="#" className=" hover:text-purple-700 transition-all">
                                    <li>
                                        Admission Instructions
                                    </li>
                                </a>
                                <a href="#" className=" hover:text-purple-700 transition-all">
                                    <li>
                                        Online Admission
                                    </li>
                                </a>
                                <a href="#" className=" hover:text-purple-700 transition-all">
                                    <li>
                                        Fee Structure
                                    </li>
                                </a>
                                <a href="#" className=" hover:text-purple-700 transition-all">
                                    <li>
                                        Prospectus
                                    </li>
                                </a>
                                <a href="#" className=" hover:text-purple-700 transition-all">
                                    <li>
                                        Download TC
                                    </li>
                                </a>
                                <a href="#" className=" hover:text-purple-700 transition-all">
                                    <li>
                                        Download Files
                                    </li>
                                </a>

                            </ul>
                        </div>
                    </div>
                    <div className="grid justify-center items-center align-middle">
                        <div className='font-bold text-[2rem] p-2 font-sans  tracking-wider text-white'>
                            Useful Links
                        </div>
                        <div>
                            <ul className=" text-white text-[1rem] p-2.5 tracking-wider font-sans footer_link">
                                <a href="#" className=" hover:text-purple-700 transition-all">
                                    <li>
                                        Home
                                    </li>
                                </a>
                                <a href="#" className=" hover:text-purple-700 transition-all">
                                    <li>
                                        About Us
                                    </li>
                                </a>
                                <a href="#" className=" hover:text-purple-700 transition-all">
                                    <li>
                                        Our Mission
                                    </li>
                                </a>
                                <a href="#" className=" hover:text-purple-700 transition-all">
                                    <li>
                                        Our Vision
                                    </li>
                                </a>
                                <a href="#" className=" hover:text-purple-700 transition-all">
                                    <li>
                                        Gallery
                                    </li>
                                </a>
                                <a href="#" className=" hover:text-purple-700 transition-all">
                                    <li>
                                        Media Watch
                                    </li>
                                </a>
                                <a href="#" className=" hover:text-purple-700 transition-all">
                                    <li>
                                        Blogs
                                    </li>
                                </a>

                            </ul>
                        </div>
                    </div>
                    <div className="grid justify-center items-center align-middle">
                        <div className='font-bold text-[2rem] p-2 font-sans  tracking-wider text-white'>
                            Extra Links
                        </div>
                        <div>
                            <ul className=" text-white text-[1rem] p-2.5 tracking-wider font-sans footer_link">
                                <a href="#" className=" hover:text-purple-700 transition-all">
                                    <li>
                                        IIT
                                    </li>
                                </a>
                                <a href="#" className=" hover:text-purple-700 transition-all">
                                    <li>
                                        KVPY
                                    </li>
                                </a>
                                <a href="#" className=" hover:text-purple-700 transition-all">
                                    <li>
                                        NEET
                                    </li>
                                </a>
                                <a href="#" className=" hover:text-purple-700 transition-all">
                                    <li>
                                        CPT
                                    </li>
                                </a>
                                <a href="#" className=" hover:text-purple-700 transition-all">
                                    <li>
                                        NDA
                                    </li>
                                </a>
                                <a href="#" className=" hover:text-purple-700 transition-all">
                                    <li>
                                        Olympiad
                                    </li>
                                </a>

                            </ul>
                        </div>
                    </div>
                    <div className="grid justify-center items-center align-middle">
                        <div className='font-bold text-[2rem] p-2 font-sans  tracking-wider text-white'>
                            Our Country
                        </div>
                        <div>
                            <ul className=" text-white text-[1rem] p-2.5 tracking-wider font-sans footer_link">
                                <a href="#" className=" hover:text-purple-700 transition-all">
                                    <li>
                                        <span className="font-bold text-[1.3rem] ">
                                            700+
                                        </span>
                                        <span>
                                            STUDENTS
                                        </span>
                                    </li>
                                </a>
                                <a href="#" className=" hover:text-purple-700 transition-all">
                                    <li>
                                        <span className="font-bold text-[1.3rem] ">
                                            50+
                                        </span>
                                        <span>
                                            CERTIFIED GURUS
                                        </span>
                                    </li>
                                </a>
                                <a href="#" className=" hover:text-purple-700 transition-all">
                                    <li>
                                        <span className="font-bold text-[1.3rem] ">
                                            24+
                                        </span>
                                        <span>
                                            YEARS IN SERVICES
                                        </span>
                                    </li>
                                </a>
                                <a href="#" className=" hover:text-purple-700 transition-all">
                                    <li>
                                        <span className="font-bold text-[1.3rem] ">
                                            1+
                                        </span>
                                        <span>
                                            INSTITUTIONS
                                        </span>
                                    </li>
                                </a>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex  justify-center  items-center align-middle'>
                    <hr className="bg-gray-700 text-gray-700 h-[3px] m-3 w-[75vw]" />
                </div>
                <div className='middle flex flex-wrap max-md:text-center  justify-center gap-13 flex-wrap items-end align-middle'>
                    <div>
                        <a href="">
                            <div className="grid justify-center gap-3 items-center align-middle">
                                <span className="text-[2rem]  tracking-[5px]  text-white  font-bold font-[aveline]">
                                    Oxbridge School
                                </span>
                                <span className='font-semibold font-[serif] text-[17px] text-white'>
                                    Address: IconSector-5, M2K County Dharuhera(HR) <br />
                                    Mail to:schooloxbridge@gmail.com &nbsp; &nbsp;<br />  Call to: +91-9812890577, 8683850414
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className='login flex justify-center items-center align-middle gap-3'>
                        <div className=" rounded-2xl  flex   justify-center items-center align-middle border-white border-2 hover:border-blue-400 transition-all">
                            <a href="#" className="bg-white rounded-2xl p-2 w-[150px] h-[50px] border-2 border-blue-400 flex text-[0.7rem] font-semibold tracking-wider justify-evenly items-center align-middle hover:border-white transition-all">
                                <span className=' max-md:-translate-y-[3px]'>
                                    <img src={Teachers} alt="" className="w-10 max-md:w-18" />
                                </span>
                                <span>
                                    Teachers <br />
                                    Login
                                </span>
                            </a>
                        </div>
                        <div className=" rounded-2xl  flex   justify-center items-center align-middle border-white border-2 hover:border-blue-40 transition-all">
                            <a href="#" className="bg-white rounded-2xl p-2 w-[150px] h-[50px] border-2 border-blue-400 flex text-[0.7rem] font-semibold tracking-wider justify-evenly items-center align-middle hover:border-white transition-all">
                                <span className=' max-md:-translate-y-2 flex   justify-center items-center align-middle'>
                                    <img src={Parents} alt="" className="w-10 max-md:w-18" />
                                </span>
                                <span>
                                    Parents <br />
                                    Login
                                </span>
                            </a>
                        </div>
                    </div>
<div className="down flex justify-center items-center align-middle">
                    <span className="text-white font-[serif]  font-semibold text-[0.9rem]">
                   &copy;Copyright Oxbridge School | Design by  <a href="#" className="text-purple-800">Are.Tech</a> |  Powered by <a href="#"  className="text-purple-800" >Campus Pro</a>
                    </span>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default footer
