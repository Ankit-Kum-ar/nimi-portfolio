import Product from "/images/productlogo.png"
import Luminus from "/images/luminouslogo.png"
import Umbrella from "/images/umbrellalogo.png"
import Border from "/images/borderlogo.png"
import Homey from "/images/homeylogo.png"
const Banner = () => {
  return (
    <section className="banner bg-[#90BAE9]/80 w-full px-10 md:py-10 py-4 ">
      <div className=" flex justify-center items-center gap-4 overflow-clip max-w-7xl mx-auto ">
        
        <img src={Product} alt="Product" className="h-10 md:h-16 w-auto " loading="lazy" decoding="async" />
        <img src={Luminus} alt="Luminus" className="h-10 md:h-16 w-auto " loading="lazy" decoding="async" />
        <img src={Umbrella} alt="Umbrella" className="h-10 md:h-16 w-auto " loading="lazy" decoding="async" />
        <img src={Border} alt="Border" className="h-10 md:h-16 w-auto " loading="lazy" decoding="async" />
        <img src={Homey} alt="Homey" className="h-10 md:h-16 w-auto " loading="lazy" decoding="async" />
    </div>
    </section>
  )
}

export default Banner
