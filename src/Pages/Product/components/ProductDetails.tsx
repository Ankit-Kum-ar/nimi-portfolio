import { Link, useParams } from "react-router-dom";
import gradient from "/images/product-gradient.png";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Loader } from "lucide-react";

type Product = {
  title: string;
  src: string;
  description: string;
  location: string;
  id: string;
  amenities_list: string;
  community_list: string;
  planning: string;
  design: string;
  amenities_title: string;
  community_title: string;
  conclusion: string;
  image1: string;
  image2: string;
  image3: string;
};

export default function ProductDetailPage() {
  const productData = useSelector((state: RootState) => state.product.productData) as Array<Product>;

  const { id: productId } = useParams<{ id: string }>();
  

  const product = productData.find((item) => item.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader className="animate-spin w-10 h-10 text-[#284368]" />
      </div>
    );
  }

  // Parse amenities list
  const amenitiesArray = product.amenities_list
    ? product.amenities_list.includes("\n")
      ? product.amenities_list.split("\n").map((i) => i.replace(/"/g, "").trim())
      : product.amenities_list.split(",").map((i) => i.replace(/"/g, "").trim())
    : [];

  // Parse community list
  const communityList = product.community_list
    ? product.community_list.includes("\n")
      ? product.community_list.split("\n").map((i) => i.replace(/"/g, "").trim())
      : product.community_list.split(",").map((i) => i.replace(/"/g, "").trim())
    : [];

  const relatedProducts = productData.filter((item) => item.id !== productId);

  return (
    <div className="min-h-screen bg-[#90BAE9]/80">
      <div className="absolute top-0 left-0 w-full z-0 opacity-70 md:block hidden">
        <img src={gradient} className="w-full" alt="Background Gradient" />
      </div>

      <div className="flex flex-col min-h-screen relative items-center w-full justify-center md:py-0 pb-10">
        <div className="p-8">
          {/* Main Product Detail */}
          <div className="rounded-2xl w-full items-center mx-auto">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center">
              {/* Left Side - Image */}
              <div className="w-full h-[100%] aspect-video overflow-hidden">
                <img
                  src={product.src}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Right Side - Details */}
              <div className="flex flex-col justify-center border-[#406089] pb-4 border-b-2 md:border-b-0">
                <h2 className="text-3xl md:text-4xl pt-2 font-bold text-[#284368] mb-4">
                  {product.title}
                </h2>
                <p className="text-[#406089] text-lg mb-4">{product.description}</p>
                <p className="text-[#284368] font-medium mb-2">
                  📍 Location: <span className="text-[#406089]">{product.location}</span>
                </p>

                <Link
                  to={`/contact`}
                  className="mt-6 w-48 bg-[#284368] text-white px-6 py-3 rounded-lg hover:bg-[#1f3554] transition-all"
                >
                  Contact for Details
                </Link>
              </div>
            </div>
          </div>

          {/* Planning and Development */}
          {product.planning && (
            <div>
              <h1 className="text-[#284368] md:text-5xl text-3xl font-bold text-left py-10">
                Planning and Development
              </h1>
              <p className="text-[#406089] text-lg font-normal py-2">{product.planning}</p>
              {product.image1 && (
                <div className="w-full h-80 overflow-hidden rounded-xl">
                  <img
                    src={product.image1}
                    alt="Planning Image"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              )}
            </div>
          )}

          {/* Design and Architecture */}
          {product.design && (
            <div>
              <h1 className="text-[#284368] md:text-5xl text-3xl font-bold text-left py-10">
                Design and Architecture
              </h1>
              <p className="text-[#406089] text-lg font-normal py-2">{product.design}</p>
              {product.image2 && (
                <div className="w-full h-80 overflow-hidden rounded-xl">
                  <img
                    src={product.image2}
                    alt="Design Image"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              )}
            </div>
          )}

          {/* Amenities */}
          {product.amenities_title && (
            <div>
              <h1 className="text-[#284368] md:text-5xl text-3xl font-bold text-left py-10">
                Amenities
              </h1>
              <p className="text-[#406089] text-lg font-normal py-2">{product.amenities_title}</p>
              <ul className="list-disc px-2 list-inside text-[#406089] font-normal py-2">
                {amenitiesArray.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              {product.image3 && (
                <div className="w-full h-80 overflow-hidden rounded-xl">
                  <img
                    src={product.image3}
                    alt="Amenities Image"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              )}
            </div>
          )}

          {/* Community */}
          {product.community_title && (
            <div>
              <h1 className="text-[#284368] md:text-5xl text-3xl font-bold text-left py-10">
                Community
              </h1>
              <p className="text-[#406089] text-lg font-normal py-2">{product.community_title}</p>
              <ul className="list-disc px-2 list-inside text-[#406089] font-normal py-2">
                {communityList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Conclusion */}
          {product.conclusion && (
            <div>
              <h1 className="text-[#284368] md:text-5xl text-3xl font-bold text-left py-10">
                Conclusion
              </h1>
              <p className="text-[#406089] text-lg font-normal py-2">{product.conclusion}</p>
            </div>
          )}

          {/* Related Items */}
          <div>
            <h1 className="text-[#284368] md:text-5xl text-3xl font-bold text-left w-11/12 py-10">
              You may also like
            </h1>
            <p className="text-[#284368] text-lg font-normal py-2 px-2">
              You may also want to check the following projects we worked on.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {relatedProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProductCard
                    src={product.src}
                    title={product.title}
                    description={product.description}
                    location={product.location}
                    id={product.id}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}