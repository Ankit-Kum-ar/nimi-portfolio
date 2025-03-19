import houseModel from "/images/3d-house-model.png";


const Hero = () => {
  return (
    <section className="hero relative text-[#1E5AA0] bg-[#90BAE9]/80 w-full px-10 md:pb-40">
        <div className="flex flex-col items-center gap-2 max-w-7xl mx-auto ">
            <h2 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl">WE ARE THE LEADING</h2>
            <h1 className="text-3xl md:text-6xl lg:text-8xl xl:text-8xl">REAL ESTATE <span className="text-[#DC702F] italic">AGENCY</span></h1>

        </div>
        <div className="max-w-7xl mx-auto flex justify-center relative h-[20vh] md:h-[60vh] "> 
            <img 
                src={houseModel} 
                alt="3d House Model" 
                className="absolute -top-6 md:-top-8 lg:-top-12 xl:-top-20 object-cover w-[80%]  " 
                loading="lazy" 
                decoding="async" />
        </div>
      
    </section>
  )
}

export default Hero
