import { MapPin } from "lucide-react"
import cardImage from "/images/product-card-image.png"
import { Button } from "@/components/ui/button"
const ProductCard = () => {
  return (
    <div className="flex flex-col p-6 bg-[#284368] rounded-2xl gap-7">
        <img src={cardImage} alt="" />
        <h1 className="text-white text-2xl font-bold">Chatrapati Shivaji</h1>
        <p className="text-white w-11/12">4 acre township project of about 524 Flats and 29 commercial shops </p>
        <div className="flex justify-start gap-1 item-center">
            <MapPin className="w-6 h-6 text-white" />
            <p className="text-white">Bhogipur,Patna.</p>
        </div>
        <Button className="bg-[#C4DAF3] rounded-full text-[#284368] hover:bg-[#C4DAF3] hover:cursor-pointer">View More</Button>
    </div>
  )
}

export default ProductCard
