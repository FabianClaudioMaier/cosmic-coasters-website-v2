import React from 'react';
import { SectionWrapper } from '../hoc';
import { bot } from '../assets';
import ReactTyped from 'react-typed';
import { useState } from 'react';
const Robot = () => {
    const [isAnimating, setIsAnimating] = useState(true);


    const handleToggle = () => {
      setIsAnimating((prevState) => !prevState);
    };
    return (
        <div>
                      <div className="flex">
  <div className="w-1/5">
    <img src={bot} className="w-full h-auto" alt="Cosmic Coasters Chatbot" />
  </div>
  <div className="w-4/5 bg-zinc-900 rounded-2xl p-6 relative mb-7 rounded-es-none">
    <ReactTyped
      smartBackspace={true}
      loop={false}
      strings={[
        `Hi there! I'm Cosmic Coasters Chatbot, your friendly chat companion. I'm here to provide you with information, answer your questions, and engage in interesting conversations. Whether you have something on your mind or just want to chat about various topics, I'm ready to keep the conversation going. Feel free to join me and let's have a delightful conversation together.`,
        `<a href="https://6ghfh4.csb.app/" className="text-white border border-white  bg-transparent hover:bg-black py-2 px-4 rounded inline-flex items-center mt-10">let's go? Click here</a>`
      ]}
      typeSpeed={10}
      startDelay={500}
      stop={!isAnimating} // Pauses the animation when isAnimating is false
    />


      <button className="bg-gray-700 hover:bg-gray-900 text-white py-2 px-4 rounded absolute bottom-0 right-0 m-3" onClick={handleToggle}>
        Replay
      </button>

  </div>
</div>
        </div>
    );
}

export default SectionWrapper(Robot, "bot");