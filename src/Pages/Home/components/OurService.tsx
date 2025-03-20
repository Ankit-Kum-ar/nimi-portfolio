import nimi from "/images/nimi.png";
import developers from "/images/developers.png";
import HomeCard from "./HomeCard";
import C1 from "/images/C1.png";
import C2 from "/images/C2.png";
import C3 from "/images/C3.png";

const OurService = () => {
  return (
    <section className="bg-[#90BAE9]/80 w-full relative pt-10">
        <div className="flex w-11/12 mx-auto justify-between items-center">
            <div className="flex md:w-3/12 w-9/12 text-[#1A4272] font-poppins md:text-5xl text-3xl font-semibold z-20">
                Our Excellent Services
            </div>
            <div className="md:flex w-6/12 text-[#1B4C89] font-poppins md:text-lg hidden font-medium leading-9">
                Check out our best service you can possibly orders in building your company and don't forget to ask via our email or our customer service if you are interested in using our services
            </div>
        </div>
        <div className="absolute z-10 w-9/12 left-10 md:top-30 top-10">
            <img src={nimi} alt="NIMI" className="" />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-4 mt-10 pb-10 w-11/12 mx-auto">
            <HomeCard imgSrc={C1} title="Industrial" desc="Industrial development is our main line of business. We do Factory Construction, Warehouse and others" />
            <HomeCard imgSrc={C2} title="Commercial" desc="Our experience building in the Commercial field includes Showrooms, Supermalls and Office Buildings" />
            <HomeCard imgSrc={C3} title="Resedential" desc="Residential development is the beginning that has shaped us to this day. Our development includes Houses & Apartments" />
        </div>
        <div className="absolute z-10 w-9/12 right-10">
            <img src={developers} alt="DEVELOPERS" />
        </div>
    </section>
  )
}

export default OurService
