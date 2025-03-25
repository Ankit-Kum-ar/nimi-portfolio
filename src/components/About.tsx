import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import DispImg from "/images/display1.jpg";
import Disp2Img from "/images/display2.jpg";
import Disp3Img from "/images/display3.jpg";
import { Link } from "react-router-dom";

const About = () => {
    const aboutRef = useRef(null);
  const imagesRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-in and slide-up animation for the text section
      gsap.fromTo(
        ".top", 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 }
      );

      // Image scaling animation
      if (imagesRef.current?.children) {
        gsap.fromTo(
          imagesRef.current.children,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out", stagger: 0.2, delay: 0.5 }
        );
      }

      // Button subtle pulse animation
      gsap.fromTo(
        buttonRef.current,
        { scale: 1 },
        { scale: 1.1, repeat: -1, duration: 0.8, yoyo: true, ease: "sine.inOut" }
      );
    }, aboutRef);

    return () => ctx.revert(); // Clean up GSAP animations on unmount
  }, []);

  return (
    <section ref={aboutRef} className="about bg-[#90BAE9]/80 w-full md:px-20 px-10 py-10 ">
        <div className="flex flex-col md:flex-row md:gap-5 gap-2 max-w-7xl mx-auto">
            <div className="left flex flex-col aspect-square md:gap-5 gap-2 md:w-[50%]">
                <div className="top bg-[#1E5AA0] text-white rounded-3xl md:rounded-4xl p-4 md:p-4 relative md:h-[50%]">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-normal ">ABOUT US</h4>
                    <p className="w-[85%] xl:w-[90%] text-xs md:text-xs lg:text-sm xl:text-lg font-light pb-8 text-justify p-2">  Where we turn your real estate dreams into reality.
                         With a commitment to excellence, integrity, and 
                         personalized service, we specialize in helping 
                         buyers, sellers, and investors navigate the 
                         dynamic real estate market with confidence.
                    </p>
                    <Link to ="/about">
                    <button ref={buttonRef} className="cursor-pointer bg-[#E5EDF9] rounded-full absolute bottom-4 md:bottom-8 right-4 md:right-8 h-8 md:h-10 aspect-square text-[#284368] flex justify-center items-center"><ArrowRight className="h-4 md:h-8" /></button>
                    </Link>
                </div>
                <div className="bottom flex md:gap-7 gap-2 md:h-[50%] ref={imagesRef}">
                <div className="right aspect-square w-[50%] rounded-2xl overflow-hidden">
                <img 
                src={Disp2Img} 
                alt="Nimi Developers"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async" />
                
            </div>
            <div className="right aspect-square w-[50%] rounded-2xl overflow-hidden">
                <img 
                src={Disp3Img} 
                alt="Nimi Developers"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async" />
                
            </div>
                </div>
            </div>
            <div className="right aspect-square  md:w-[50%] lg:w-[50%] rounded-2xl overflow-hidden h-[50%] md:h-[100%] my-3">
                <img 
                src={DispImg} 
                alt="Nimi Developers"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async" />
                
            </div>
        </div>
      
    </section>
  )
}

export default About
