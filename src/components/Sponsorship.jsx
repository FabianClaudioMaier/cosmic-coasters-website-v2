import React from 'react';
import {  bronze, gold, platinum, silver } from '../assets';


import { SectionWrapper } from '../hoc';


const Sponsorship = () => {


 
    return (
        <div>

    <section className="about-section bg-dark">
  <div className="py-8 px-4 md:py-16 md:px-8 mb-8 bg-[#232631] rounded-[20px] ">
  
    <div className="container mx-auto sm:px-4">
      <h2 className="text-2xl font-montserrat font-semibold text-white">Sponsoring Concept</h2>
      <p className="text-justify text-base font-montserrat text-white">
        Cooperations and partnerships lay the foundation for the successful work of the Altair Spaceworks.
        Therefore, we are always looking for partners who enable, support and advance our projects. This can
        include not only in-kind sponsorships but also machine hours, technical know-how or financial support. As a
        partner, you will also benefit from the success of Altair Spaceworks by gaining access to our qualified expert
        potential, and we will present you at trade fairs, on our flight equipment or our team clothing.
      </p>
      <hr className="my-4" />
      <p className="text-justify text-base font-montserrat text-gray-700">
        For your support we would like to thank you with
        We would like to thank you for your support with the following services (higher categories include all lower ones):
      </p>
    </div>
  </div>
  <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    <div className="bg-[#232631] rounded-[20px] p-4">
    <img
            src={platinum}
            alt='platinum'
            className='w-[100%] h-[30%] object-contain '
          />
      <h3 className="text-xl font-semibold text-white text-center">Platin</h3>
      <p className="text-white">Sponsorship fee: 15 000 €</p>
      <ul className="flex flex-col pl-0 mt-4 space-y-4">
        <li className="text-white">Explicit mention of the sponsor in interactions with public media</li>
        <li className="text-white">Possibility to display own brochures or flyers at events</li>
        <li className="text-white">Personalized branding of a missile</li>
        <li className="text-white">Own booth at the annual Space Event</li>
        <li className="text-white">Further we are open for further ideas for individual return services</li>
      </ul>
    </div>
    <div className="bg-[#232631] rounded-[20px] p-4">
    <img
            src={gold}
            alt='gold'
            className='w-[100%] h-[30%] object-contain '
          />
      <h3 className="text-xl font-semibold text-white text-center">Gold</h3>
      <p className="text-white">Sponsorship fee: 5000 €</p>
      <ul className="flex flex-col pl-0 mt-4 space-y-4">
        <li className="text-white">Logo on website with high visibility</li>
        <li className="text-white">Blog entry on website Logo in brochures</li>
        <li className="text-white">Logo on aircraft</li>
      </ul>
    </div>
    <div className="bg-[#232631] rounded-[20px] p-4">
    <img
            src={silver}
            alt='silver'
            className='w-[100%] h-[30%] object-contain '
          />
      <h3 className="text-xl font-semibold text-white text-center">Silver</h3>
      <p className="text-white">Sponsorship fee: 2500 €</p>
      <ul className="flex flex-col pl-0 mt-4 space-y-4">
        <li className="text-white">Logo on team clothing</li>
        <li className="text-white">Logo on roll-ups</li>
        <li className="text-white">Logo on flyers and posters</li>
        <li className="text-white">Logo on PowerPoint slide shown at every public presentation</li>
      </ul>
    </div>
    <div className="bg-[#232631] rounded-[20px] p-4">
    <img
            src={bronze}
            alt='bronze'
            className='w-[100%] h-[30%] object-contain '
          />
      <h3 className="text-xl font-semibold text-white text-center">Bronze</h3>
      <p className="text-white">Sponsorship fee: 1000 €</p>
      <ul className="flex flex-col pl-0 mt-4 space-y-4">
        <li className="text-white">Logo in YouTube credits of videos, as well as mention in video description</li>
        <li className="text-white">Collaboration on social media</li>
      </ul>
    </div>
  </div>
  <div className="container mx-auto sm:px-4 p-2">
    <p className="text-justify text-sm font-montserrat text-gray-700">
      The mentioned points are exemplary, the concrete realization may differ depending on the agreement.
      Altair Spaceworks reserves the right to increase the categorization of sponsors in exceptional cases. For
      software sponsorships, we can further not categorize you based on the official license prices in exceptional cases.
      If a consideration requires the printing or ordering of items, such as new team clothing, the logo will be
      added at the next opportunity or order.
    </p>
  </div>
</section>



<div>

</div>
        </div>
    );
}

export default  SectionWrapper(Sponsorship, "sponsorship");
