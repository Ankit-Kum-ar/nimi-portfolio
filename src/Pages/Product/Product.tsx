import ProductCard from "./components/ProductCard";
import VisitingcardBanner from "@/components/VisitingcardBanner";
import bg from "/images/Product-bg.png";
import gradient from "/images/product-gradient.png";
const Product = () => {
  return (
    <div className="min-h-screen bg-[#90BAE9]/80 relative">
      <img src={bg} alt="Product-bg" className="z-20 relative" />
      <div className="absolute top-0 left-0 w-full z-0 opacity-50">
            <img src={gradient} alt="" />
      </div>
      <div className="flex flex-col min-h-screen relative items-center justify-center py-14 z-20">
        <h1 className="text-[#284368] text-5xl font-bold text-left w-11/12 py-10">Our Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 z-20 py-10">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <VisitingcardBanner />
    </div>
  )
}

export default Product
