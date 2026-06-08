import React , { useEffect, useRef, useState }  from 'react'
import "./index.css"
import Gallery from"./about_us_gallery.jsx"
const about_us = () => {
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
                        threshold: 0.3, // trigger when 30% visible
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
        <div ref={sectionRef}
      id="welcome"
      className={`flex justify-center     flex-wrap  items-center  w-fit align-middle transition-all duration-1000 ${
        isVisible ? 'fade-in' : 'hidden-section'
      }`}>
            <div>
                <div className="flex justify-center items-center p-2">
                    <span className=" font-[otez] text-[2rem] text-center  max-md:text-[1.9rem]">
                        Where Knowledge Meets <br />
                        Innovation.
                    </span>
                </div>
                <div className="text-[1.2rem] p-3 font-[vanity] font-extrabold tracking-wider text-center flex justify-center items-center align-middle ">
                    <span className='w-[50%] max-md:w-[100%]'>
                        At Oxbridge School, we believe in returning minds and in for empowering future leaders through world-class education and a commitment to community impact.
                    </span>
                </div>
            </div>
            <div>
                <Gallery/>
            </div>
        </div>
    )
}

export default about_us
