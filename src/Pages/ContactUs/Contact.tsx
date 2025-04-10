import VisitingcardBanner from "@/components/VisitingcardBanner";
// import bg from "/images/Product-bg.png";
// import gradient from "/images/product-gradient.png";
import GetInTouch from "./components/GetInTouch";
import Title from "@/components/Title";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#90BAE9]/80 ">
      {/* <img src={bg} alt="Product-bg" className="relative z-20" /> */}
      {/* <div className="absolute top-0 left-0 w-full z-0 opacity-70 md:block hidden">
          <img src={gradient} alt="" />
      </div> */}
      <Title title="Contact Us - Nimi Developers" />
      <GetInTouch />
      
      <VisitingcardBanner />
    </div>
  )
}

export default Contact
