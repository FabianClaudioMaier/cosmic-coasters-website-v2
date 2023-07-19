import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";



const ExperienceCard = ({ experience }) => {
  return <>
   
    <VerticalTimelineElement
      contentStyle={{
        background: "#232631",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.title}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <img src={experience.image}  alt={experience.title} className="rounded-md"/>
      <div className='mt-5 list-disc  space-y-2'>
        {experience.points.map((point, index) => (
          <div
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
           
            {point}
          </div>
         
        ))}
      </div>
    </VerticalTimelineElement>


 </>;
};

const UpcomingEvents = () => {
  return (
    <>
    
      
        <h2 className={`${styles.sectionHeadText} text-center`}>
        Upcoming Events
        </h2>
    

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
      
    
     
    </>
  );
};

export default SectionWrapper(UpcomingEvents, "events");
