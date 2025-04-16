
import Product from "/images/productlogo.png";
import Luminus from "/images/luminouslogo.png";
import Umbrella from "/images/umbrellalogo.png";
import Border from "/images/borderlogo.png";
import Homey from "/images/homeylogo.png";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Banner = ({ bgColor = "bg-[#90BAE9]/80", px = "10" }) => {
  const [duration, setDuration] = useState(10); // Default duration

  useEffect(() => {
    // Adjust duration based on screen width
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDuration(5); // Faster animation for mobile
      } else {
        setDuration(10); // Default animation for larger screens
      }
    };

    handleResize(); // Set initial duration
    window.addEventListener("resize", handleResize); // Listen for screen size changes

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return (
    <section className={`${bgColor}  px-10 md:px-${px}  font-roboto`}>
      <div className="text-center mb-8 flex justify-start items-center gap-4">
        <h4 className="text-lg text-left font-semibold text-[#1B4C89] mb-2">
          OUR SUPPORTERS
        </h4>
        <hr className="border-2 border-[#1B4C89] w-10/12 " />
      </div>
      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-20 items-center w-max"
          animate={{ x: ["0%", "-50%"] }} // Move halfway to create seamless effect
          transition={{
            repeat: Infinity,
            duration: duration, // Dynamic duration based on screen size
            ease: "linear",
          }}
        >
          {/* Logos */}
          <div className="flex gap-20">
            <img src={Product} alt="Supporter 1" className="mx-auto" />
            <img src={Luminus} alt="Supporter 2" className="mx-auto" />
            <img src={Umbrella} alt="Supporter 3" className="mx-auto" />
            <img src={Border} alt="Supporter 4" className="mx-auto" />
            <img src={Homey} alt="Supporter 5" className="mx-auto" />
          </div>
          {/* Duplicate Logos for Seamless Scrolling */}
          <div className="flex gap-20">
          <img src={Product} alt="Supporter 1" className="mx-auto" />
            <img src={Luminus} alt="Supporter 2" className="mx-auto" />
            <img src={Umbrella} alt="Supporter 3" className="mx-auto" />
            <img src={Border} alt="Supporter 4" className="mx-auto" />
            <img src={Homey} alt="Supporter 5" className="mx-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;