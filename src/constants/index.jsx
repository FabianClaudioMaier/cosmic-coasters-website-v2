import {



  rocket,
  rocketlunch,
  concept,
  conceptlogo,
  party,
  jobmesse,
  partylogo,
  jobmesselogo,
  joinus,
  proj1,
  proj2,
  logo,
  fhlogo,
  elvis,
  you,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  }, 
  {
    id: "events",
    title: "Events",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "sponsors",
    title: "Sponsors",
  },
  {
    id: "contact",
    title: "Contact",
  },
 
];





const experiences = [
  {
    title: "Rocket Launch",
    image:rocketlunch,
    icon: rocket,
    iconBg: "#232631",
    reach:"mailto:software@cosmic-coasters.at",
    date: "March 2020 - April 2021",
    points: [
     "Join us for an exciting rocket launch event as we put our latest creation to the test. Project Manching is due to launch on August 18th."
   
    ],
  },
  {
    title: "Concept Contest",
    image: concept,
    icon: conceptlogo,
    iconBg: "white",
    points: [
      `In our next rocket we want to carry a small experiment (1,5kg). If you have a concept or suggestion
      feel free to reach out to us. Our Team of highly trained semi-professionals will pick the best send-ins and 
      give them a ride to the edges of space. `,
    <a href="mailto:software@cosmic-coasters.at" className="text-white border border-white  bg-transparent hover:bg-black py-2 px-4 rounded inline-flex items-center my-3">Reach out</a>,
    ],
  },
  
  {
    title: "summerbreak party",
   image:party,
    icon: partylogo,
    iconBg: "white",
  
    points: [
     `In July there will be a small coming together at the FH Campus Spritzerstand A great opportunity to get to know the team and ask us about our endavours. `,
      
    ],
  },
  {
    title: "Jobfair",
  image:jobmesse,
    icon: jobmesselogo,
    iconBg: "#232631",
  
    points: [
      "Visit the Cosmic Coasters stand at the annual Job and carier exhibition on June 16th",
      <a href="https://www.fh-campuswien.ac.at/studium-weiterbildung/aktuell/news-und-events/job-und-karrieremesse-technik-6.html" className="text-white border border-white  bg-transparent hover:bg-black py-2 px-4 rounded inline-flex items-center my-3">Learn more</a>,

    ],
  },
  {
    title: "Recruting Event",
  image:joinus,
    icon: logo,
    iconBg: "black",
  
    points: [
      `You want to join the team and participate? Visit our Recruting Event in the fall of 2023. Or contact us now.`,
      <a href="mailto:software@cosmic-coasters.at" className="text-white border border-white  bg-transparent hover:bg-black py-2 px-4 rounded inline-flex items-center my-3">Reach out</a>,

    ],
  },
];

const sponsors = [
  {name:'FH Campus Wien',
    image:fhlogo,
     description:
      `Our biggest contributor is the FH Campus Wien. The university provides the team with a lot of aid.
      Accomodations, financially and technically. Without its support, this team would not exist as it is now. 
 `,
reach:<a href="https://www.fh-campuswien.ac.at/" className="text-white border border-white  bg-transparent hover:bg-black py-2 px-4 rounded inline-flex items-center my-3">Visit our sponsor</a>,

  },
  { name:'Elvis LAB',
    image:elvis,
    description:
`The Embedded Lab Vienna for IoT & Security (short ELVIS) is contributing electrical parts and technical details
to our latest attempt on constructing our own On-Board Firmware.`  ,
reach:<a href="https://elvis.science/" className="text-white border border-white  bg-transparent hover:bg-black py-2 px-4 rounded inline-flex items-center mt-10">Visit our sponsor</a>,

  
  },
  { name:'Maybe you?',
  image:you,
     description:
      "We are always glad to welcome new contributors. You want to support us in our endavours? Feel free to reach out to us! ",
      reach:<a href="mailto:sponsoring@comsic-coasters.at" className="text-white border border-white  bg-transparent hover:bg-black py-2 px-4 rounded inline-flex items-center my-3">Reach out</a>,

  
  },
];

const projects = [
  {
    name: "Project Galaxy",
    description:
      "Project Galaxy was our first attempt to construct, build and launch a model rocket. On April the 28th we succesfully launched the Project Galaxy 60, marking the first big milestone for the team.",
    
    image: proj1,
  

  },
  {
    name: "Project Manching",
    description:
      "In this next step we will take things further. Building a rocket that is 3 times as large as our first attempt and construct the flight-electronics all by ourself. This will propell the team in our pursuit to gather knowledge and experience.",
  
    image: proj2,
  
  },
  {
    name: "EuRoc 24",
    description:"One of the big goals we are working on is to take part at the EuRoc 24",
    learn: <a href="https://euroc.pt/" className="text-white border border-white  bg-transparent hover:bg-black py-2 px-4 rounded  items-center my-3">Learn more</a>,

  
    image: rocketlunch,
   

  },
];

export { experiences, sponsors, projects };
