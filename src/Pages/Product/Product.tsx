import VisitingcardBanner from "@/components/VisitingcardBanner";
import bg from "/images/Product-bg.png";
const Product = () => {
  return (
    <div className="min-h-screen bg-[#90BAE9]/80">
      <img src={bg} alt="Product-bg" />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[#284368] text-5xl font-bold text-left w-full px-10">Our Projects</h1>
        
      </div>
      <VisitingcardBanner />
    </div>
  )
}

export default Product
