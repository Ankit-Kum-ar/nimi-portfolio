import React, { useState } from 'react';
import Form from './Form';

const cityIframes: Record<string, string> = {
  DL: 
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218.9842580341358!2d77.03551315385069!3d28.577325129222128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1aeb7d8d192d%3A0x8fd7a6d09c7e455c!2sNIMI%20GROUP!5e0!3m2!1sen!2sin!4v1742303871361!5m2!1sen!2sin",
  UP:
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1752.9958861428854!2d77.37982466565812!3d28.509895267245113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce882fa6d9973%3A0xd46f16a9642662a5!2sATS%20BOUQUET%2C%20Block%20B%2C%20Sector%20132%2C%20Noida%2C%20Uttar%20Pradesh%20201304!5e0!3m2!1sen!2sin!4v1744867558272!5m2!1sen!2sin",
  HR:
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112309.9366584533!2d76.9012326905334!3d28.398564923289896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d194b145ad4fd%3A0xd71048b0d3d937cb!2sWorld%20Trade%20Centre%2C%20Gurugram!5e0!3m2!1sen!2sin!4v1744867642843!5m2!1sen!2sin", 
  BR: 
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.667712817981!2d85.118159173614!3d25.6159557146155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5830af2dd157%3A0x1f9151f5ac1f28b6!2sBoring%20Canal%20Rd%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1744867708507!5m2!1sen!2sin",
  JH:
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.9546756952564!2d85.32294867351905!3d23.31740320526495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1d64d852a77%3A0xab8a7372c349c9e2!2sBirsa%20Munda%20Airport%2C%20Ranchi!5e0!3m2!1sen!2sin!4v1744867814321!5m2!1sen!2sin",
  MH:
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30222.039503959226!2d73.53507715132326!3d18.76448025719312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2abf1867b9187%3A0x7ec39c03e715fbdb!2sKamshet%2C%20Maharashtra%20410405!5e0!3m2!1sen!2sin!4v1744867890952!5m2!1sen!2sin", 
  MP:
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14690.574416833799!2d77.57509012393463!3d23.000129519078822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c367258c5582d%3A0x41fc1c628c7549c4!2sObaidullaganj%2C%20Madhya%20Pradesh%20464993!5e0!3m2!1sen!2sin!4v1744867959947!5m2!1sen!2sin",
};

const CityMap: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>('DL'); // Default to Delhi

  const handleLocationChange = (city: string) => {
    setSelectedCity(city);
  };

  return (
    <div className="flex flex-col h-screen w-full">
      {/* Form Section */}
      <div className="flex-shrink-0 p-4 md:p-0 bg-[#F0F4FA]">
        <Form />
      </div>

      {/* Map Section */}
      <div className="flex-grow relative">
        <iframe
          src={cityIframes[selectedCity]}
          className="h-full w-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        >
        </iframe>

        {/* Buttons Section */}
        <div className="absolute bottom-4 left-0 right-0 flex flex-row md:flex-col gap-2 overflow-x-auto px-15 justify-center md:justify-start">
          {Object.keys(cityIframes).map((city) => (
            <button
              key={city}
              onClick={() => handleLocationChange(city)}
              className="bg-[#284368] text-[#C4DAF3] text-xs md:text-lg font-bold w-8 h-8 md:w-16 md:h-16 rounded-full cursor-pointer flex items-center justify-center"
            >
              {city.charAt(0).toUpperCase() + city.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CityMap;