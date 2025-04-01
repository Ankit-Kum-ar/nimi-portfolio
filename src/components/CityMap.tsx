import React, { useState } from 'react';
import Form from './Form';

const cityIframes: Record<string, string> = {
  DL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.79337375125!2d76.81306452443274!3d28.613895441148672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1da7a22543%3A0xc86e6a01c3f912f8!2sDelhi!5e0!3m2!1sen!2sin!4v1675752030825!5m2!1sen!2sin",
  UP: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244020.842772535!2d79.18994252564165!3d26.846693700573567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c38702b4ee2b5%3A0xe2e69849e9804b56!2sUttar%20Pradesh!5e0!3m2!1sen!2sin!4v1675752198294!5m2!1sen!2sin",
  HR: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563977.807423738!2d73.39608329825728!3d29.269199805456363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db00b8670400b%3A0x732eaab4aaa6c143!2sHaryana!5e0!3m2!1sen!2sin!4v1743421449151!5m2!1sen!2sin",
  BR: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d389014.18066598264!2d77.35073663309417!3d12.953847722420327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c3b4a54b%3A0x97a2bd395fd3f5a4!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1675752130736!5m2!1sen!2sin",
  MH: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7737336.90465383!2d71.4657962604599!3d18.753691786581918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcfc41e9c9cd6f9%3A0x1b2f22924be04fb6!2sMaharashtra!5e0!3m2!1sen!2sin!4v1743421043799!5m2!1sen!2sin",
  MP: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7471130.761039083!2d73.1191373880145!3d23.889155331284776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39667381d35aea05%3A0xe0106b0d4e701c1e!2sMadhya%20Pradesh!5e0!3m2!1sen!2sin!4v1743421158530!5m2!1sen!2sin"
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