import React, { useEffect, useRef, useState } from 'react'
import "./index.css"
const bar = () => {
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
      className={`flex justify-center w-[100%]  items-center   align-middle transition-all duration-1000 ${
        isVisible ? 'fade-in' : 'hidden-section'
      }`}>
            <div className='bg-blue-500 text-white w-[80vw] p-3.5  flex-wrap   rounded-2xl flex justify-evenly items-center align-middle  text-[1.5rem] max-[1070px]:text-[1rem] max-[720px]:text-[0.7rem] max-[522px]:text[0.1rem] '>
                <span className="text-center font-bold  grid justify-center items-center align-middle">
                    <span>
                        700 +
                    </span>
                    <span>
                        STUDENTS
                    </span>
                </span> 
                <span className="text-center font-bold  grid justify-center items-center align-middle">
                    <span>
                        50 +
                    </span>
                    <span>
                        GURUS
                    </span>
                </span>
                 <span className="text-center font-bold  grid justify-center items-center align-middle">
                    <span>
                        24 +
                    </span>
                    <span>
                        YEARS IN SERVICES
                    </span>
                </span> 
                <span className="text-center font-bold  grid justify-center items-center align-middle">
                    <span>
                        1 +
                    </span>
                    <span>
                        INSTITUTIONS
                    </span>
                </span>
            </div>
        </div>
    )
}

export default bar
