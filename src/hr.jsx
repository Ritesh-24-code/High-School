import React , { useEffect, useRef, useState }from 'react'
import "./index.css"
const hr = () => {
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
      className={`  flex justify-center items-center align-middle transition-all duration-1000 ${
        isVisible ? 'fade-in' : 'hidden-section'
      }`}>
      <div className=" my-5 w-[90vw] bg-gray-400 h-[5px]">
        <hr  className='text-gray-400'/>
      </div>
    </div>
  )
}

export default hr
