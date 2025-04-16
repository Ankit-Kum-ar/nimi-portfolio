import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

interface ProductCardProps {
  title: string;
  description: string;
  location: string;
  id: string;
  src: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, description, location, src }) => {
  return (
    <div className="flex flex-col p-6 bg-[#284368] rounded-2xl gap-5">
      {/* Image with fixed ratio */}
      <div className="w-full aspect-video overflow-hidden rounded-xl">
        <img src={src} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Title */}
      <h1 className="text-white text-2xl font-bold">{title}</h1>

      {/* Description - only 2 lines */}
      <p className="text-white w-11/12 line-clamp-2">{description}</p>

      {/* Location */}
      <div className="flex items-center gap-1">
        <MapPin className="w-5 h-5 text-white" />
        <p className="text-white">{location}</p>
      </div>

      {/* View More button */}
      <Link to={`${id}`} className="flex justify-start">
        <Button className="bg-[#C4DAF3] rounded-full text-[#284368] hover:bg-[#C4DAF3] hover:cursor-pointer">
          View More
        </Button>
      </Link>
    </div>
  )
}

export default ProductCard
