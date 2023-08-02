import React from "react";


import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { sponsors } from "../constants";
import Sponsorship from './Sponsorship';

const FeedbacksCard = ({
  index,
 reach,
  name,
  description,

  image,
}) => (
  <div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-[#121212] p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <div className='mt-1'>
    <h3 className='text-white text-[24px] font-bold'>{name}</h3>
       <img src={image}  alt={name} className="rounded-md"/>
      <p className='text-white tracking-wider text-[18px]'>{description}</p>

     <div>{reach}</div>
    </div>
  </div>
);

const Sponsers = () => {
  return <>
    <div className={`mt-12 bg-[#1a1c24] rounded-[20px]`}>
      <div
        className={`bg-[#232631] rounded-2xl ${styles.padding} min-h-[100px]`}
      >
        <div variants={textVariant()}>
          
          <h2 className={`${styles.sectionHeadText} text-center py-8`}>Our Sponsors</h2>
        </div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 `}>
        {sponsors.map((sponsors, index) => (
          <FeedbacksCard key={sponsors.name} index={index} {...sponsors} />
        ))}
      </div>

    </div>
   {/*<div className="mt-8"> <Sponsorship/></div> */} 
   </>
 ;
};

export default SectionWrapper(Sponsers, "sponsors");
