import houseModel from "/images/3d-house-model.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";



const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Fade-in & Slide-up Animation for Text
    gsap.fromTo(
      ".heroRef.current",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
      }
    );

    // Floating Effect for Image (Moves Up & Down)
    gsap.to(imageRef.current, {
      y: -5, // Moves 15px up
      repeat: -1, // Infinite loop
      yoyo: true, // Moves back & forth
      duration: 10, // Smooth transition
      ease: "sine.inOut", // Natural floating effect
    });
  }, []);

  return (
    <section 
    ref={heroRef}
     className="hero relative text-[#1E5AA0] bg-[#90BAE9]/80 w-full px-10 md:pb-40">
        <div className="flex flex-col items-center gap-2 max-w-7xl mx-auto ">
            <h2 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl">WE ARE THE LEADING</h2>
            <h1 className="text-3xl md:text-6xl lg:text-8xl xl:text-8xl">REAL ESTATE <span className="text-[#DC702F] italic">AGENCY</span></h1>

        </div>
        <div className="max-w-7xl mx-auto flex justify-center relative h-[20vh] md:h-[60vh] "> 
            <img 
                ref={imageRef}
                src={houseModel} 
                alt="3d House Model" 
                className="absolute -top-6 md:-top-8 lg:-top-12 xl:-top-20 object-cover w-[80%]  " 
                loading="eager" 
                decoding="async" />
        </div>
      
    </section>
  )
}

export default Hero
