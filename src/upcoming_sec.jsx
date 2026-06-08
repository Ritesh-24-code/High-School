import React , { useEffect, useRef, useState }from 'react'
import "./index.css"
import Card from "./card.jsx"
const upcoming_sec = () => {
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
      className={`m-2    transition-all duration-1000 ${
        isVisible ? 'fade-in' : 'hidden-section'
      }`}>
            <div className="grid justify-center  items-center align-middle">
                <div className=" ">
                    <div className="flex justify-center items-center align-middle tracking-wider text-[2.2rem] font-[otez_italic] font-extrabold p-1"> 
                        <span>
                            News & Events
                        </span>
                    </div>
                    <div className="flex justify-center items-center align-middle  font-[vanity] text-[1.2rem] font-extrabold tracking-wider">
                        <span className="w-[50%] max-md:w-[100%] text-center">
                            Stay informed and be part of what's next.Explore our upcomng events and never miss any oppotunity to connect,learn,and grow.
                        </span>
                    </div>
                </div>
                <div>
                    <Card/>
                </div>
            </div>
        </div>
    )
}

export default upcoming_sec
