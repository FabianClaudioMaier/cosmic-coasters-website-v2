import { motion } from "framer-motion";

import { styles } from "../styles";
import { RocketCanvas } from "./canvas";
import { offi,oni } from "../assets";
import { useState } from 'react';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(true);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const imageSrc = isHovered ? offi :oni ;
  return (
    <div className="flex">
     
    
    <section className={`relative w-full h-screen mx-auto`}>
       
      <div
        className={`absolute inset-0 top-[160px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
      

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
          Cosmic Coasters
          </h1>
          
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Join us in our mission to explore  <br className='sm:block hidden' />
          the universe and master the art of rocketry.
          </p>
   
       <a href="#about" className="text-white border border-white py-4 px-6 rounded inline-flex items-center my-3">
  Learn More
  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" className="w-6 h-6 ml-2">
    <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
</a>

        </div>
      </div>

 

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
         
        </a>
      </div>
    </section>  <section className={`relative w-32 h-screen mx-auto`}> <a href="#bot"><img className="absolute  bottom-0 right-0 m-5 w-36 "  src={imageSrc}   onMouseEnter={handleHover}
        onMouseLeave={handleHover} alt="boticon" /></a></section></div>
  );
};

export default Hero;
