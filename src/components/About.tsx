import { ArrowRight } from "lucide-react";
import DispImg from "/images/display1.jpg";
import Disp2Img from "/images/display2.jpg";
import Disp3Img from "/images/display3.jpg";

const About = () => {
  return (
    <section className="about bg-[#90BAE9]/80 w-full md:px-20 px-10 py-10 ">
        <div className="flex flex-col md:flex-row gap-7 max-w-7xl mx-auto">
            <div className="left flex flex-col aspect-square gap-7 md:w-[50%]">
                <div className="top bg-[#1E5AA0] text-white rounded-3xl md:rounded-4xl p-4 md:p-8 relative ">
                    <h4 className="text-lg md:text-2xl font-normal p-2 ">ABOUT US</h4>
                    <p className="w-[90%] text-xs md:text-sm font-light pb-8 text-justify p-2">  Where we turn your real estate dreams into reality.
                         With a commitment to excellence, integrity, and 
                         personalized service, we specialize in helping 
                         buyers, sellers, and investors navigate the 
                         dynamic real estate market with confidence.
                    </p>
                    <button className="bg-[#E5EDF9] rounded-full absolute bottom-4 md:bottom-8 right-4 md:right-8 h-8 md:h-12 aspect-square text-[#284368] flex justify-center items-center"><ArrowRight className="h-4 md:h-10" /></button>

                </div>
                <div className="bottom flex gap-7">
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
            <div className="right aspect-square  md:w-[50%] rounded-2xl overflow-hidden h-[50%] md:h-[100%]">
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
