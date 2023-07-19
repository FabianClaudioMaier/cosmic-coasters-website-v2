import React from "react";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { history, mission, team } from "../assets";



const About = () => {
  return (
    <>
   
           <div variants={textVariant()}>
        
        <h2 className={`${styles.sectionHeadText} text-center pt-1`}>About us</h2>
      
        <p className={`${styles.sectionSubText} text-center `}>Our History</p>
      </div>
          <img alt="Coasters History" className="img-fluid rounded inline-block" src={history
        } />
      <p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]'
      >

       Founded in 2022,
                    Cosmic Coasters started as a small club of space enthusiasts at our university. In the time since,
                    we've grown into a robust student union that's made significant contributions to amateur rocketry.
                    Quickly we were able to launch our first rocket and other projects in the broad context of arial engineering.
                    We're proud to have sparked an interest in space exploration across the university and beyond.
      </p>
<hr className="my-6 "/>
      <div variants={textVariant()}>
       
        <h2 className={`${styles.sectionHeadText} text-center pt-5`}>Our Mission</h2>
      
        
      </div>
           <img alt="Coasters mission" className="img-fluid rounded inline-block" src={mission
        } />
      <p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]'
      >

At Cosmic
                    Coasters, our mission is to expand knowledge of rocketry and space exploration among the student
                    body. We strive to inspire the next generation of scientists, engineers, and innovators by giving
                    them hands-on experience in designing, building, and launching rockets. We also aim to collaborate
                    with industry professionals to provide our members with unique learning opportunities. Our vision is
                    a world where everyone has the opportunity to contribute to the exploration of space.
      </p>
<hr className="my-6 "/>
      <div variants={textVariant()}>
       
       <h2 className={`${styles.sectionHeadText} text-center pt-5`}>Meet the Team
</h2>
     
       
     </div>
<img alt="Cosmic Coasters team picture" className="img-fluid rounded" src={team} />
     <p
       variants={fadeIn("", "", 0.1, 1)}
       className='mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]'
     >

Our team consists of students from various disciplines who share a common interest in space exploration and rocket science. Our diverse backgrounds and perspectives fuel our innovative approach to rocketry. With a blend of theoretical knowledge and practical skills, we are constantly pushing the envelope, exploring new ideas, and challenging the status quo in rocket design and space exploration. Come meet the dedicated individuals who are making a difference at Cosmic Coasters.
     </p>

   
    </>

  );
};

export default SectionWrapper(About, "about");
