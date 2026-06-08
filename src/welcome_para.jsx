
import React, { useEffect, useRef, useState } from 'react';
import "./index.css";
import Stu from "./stu_gif.jsx";
import Para from "./para.jsx";

const WelcomePara = () => {

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
    <div
      ref={sectionRef}
      id="welcome"
      className={`  flex  max-md:grid justify-evenly  items-center align-middle p-5 transition-all duration-1000 ${isVisible ? 'fade-in' : 'hidden-section'
        }`} >
        <div className="p-5">
          <Stu />
        </div>

        <div className="p-5">
          <Para />
        </div>
    </div>
  );
};

export default WelcomePara;