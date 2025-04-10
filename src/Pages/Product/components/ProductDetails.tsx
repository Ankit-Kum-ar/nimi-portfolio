// ProductDetailPage.jsx
import { Link, useParams } from "react-router-dom";
import gradient from "/images/product-gradient.png";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function ProductDetailPage() {
  const productData = useSelector((state: RootState) => state.product.productData) as Array<{
    title: string;
    src: string;
    description: string;
    location: string;
    id: number;
  }>;


  const { id } = useParams();

  const product = productData.find((item) => item.id == Number(id));


  let amenitiesArray = [];
  if (product?.amenities_list) {
    if (product.amenities_list.includes('\n')) {
      amenitiesArray = product.amenities_list.split('\n').map(i => i.replace(/"/g, '').trim());
    } else {
      amenitiesArray = product.amenities_list.split(',').map(i => i.replace(/"/g, '').trim());
    }
  }

let communityList = [];
if (product?.community_list) {
  if (product.community_list.includes('\n')) {
    communityList = product.community_list
      .split('\n')
      .map(i => i.replace(/"/g, '').trim());
  } else {
    communityList = product.community_list
      .split(',')
      .map(i => i.replace(/"/g, '').trim());
  }
}



  
  const relatedProducts = productData.filter((item) => item.id != Number(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="min-h-screen bg-[#90BAE9]/80">
      {/* <img src={bg} alt="Product-bg" className="relative z-20" /> */}
      <div className="absolute top-0 left-0 w-full z-0 opacity-70 md:block hidden">
        <img src={gradient} className="w-full" alt="" />
      </div>

      <div className="flex flex-col min-h-screen relative items-center w-full justify-center md:py-0 pb-10">
        {/* <h1 className="text-[#284368] md:text-5xl text-3xl font-bold text-left w-11/12 py-10">
          Our Projects
        </h1> */}

        <div className="p-8">
          {/* Main Product Detail */}
          <div className="">
            <div className="">
              {/* Main Product Detail Container */}
              <div className=" rounded-2xl  w-full   items-center mx-auto">
                <div className="grid md:grid-cols-2  grid-cols-1 gap-8 items-center">
                  {/* Left Side - Image */}
                  <div className="w-full h-[100%] aspect-video overflow-hidden ">
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
                    <p className="text-[#406089] text-lg mb-4">
                      {product.description}
                    </p>
                    <p className="text-[#284368] font-medium mb-2">
                      📍 Location:{" "}
                      <span className="text-[#406089]">{product.location}</span>
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

              {/* Planning and Development*/}
              <div>
                <h1 className="text-[#284368] md:text-5xl text-3xl font-bold text-left  py-10">
                  Planning and Development
                  <p className="text-[#406089] text-lg font-normal py-2 ">
                    {product?.planning}
                  </p>
                </h1>

                {/* src 1 Image */}
                <div className="w-full h-80 overflow-hidden rounded-xl">
                  <img
                    src={product.image1}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              {/* Design and Architecture*/}
              <div>
                <h1 className="text-[#284368] md:text-5xl text-3xl font-bold text-left  py-10">
                  Design and Architecture
                  <p className="text-[#406089] text-lg font-normal py-2 ">
                    {product.design}
                  </p>
                </h1>

                {/* src 1 Image */}
                <div className="w-full h-80 overflow-hidden rounded-xl">
                  <img
                    src={product.image2}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              {/* Amenities*/}
              <div>
                <h1 className="text-[#284368] md:text-5xl text-3xl font-bold text-left  py-10">
                  Amenities
                  <p className="text-[#406089] text-lg font-normal py-2 ">
                    {product.amenities_title}
                    <ul className="list-disc px-2 list-inside text-[#406089] font-normal py-2">
                      {amenitiesArray?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </p>
                </h1>

                {/* src 1 Image */}
                <div className="w-full h-80 overflow-hidden rounded-xl">
                  <img
                    src={product.image3}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              {/* Community*/}
              <div>
                <h1 className="text-[#284368] md:text-5xl text-3xl font-bold text-left  py-10">
                  Community
                  <p className="text-[#406089] text-lg font-normal py-2 ">
             {product.community_title}
                    <ul className="list-disc px-2 list-inside text-[#406089] font-normal py-2">
                      {communityList?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </p>
                </h1>
              </div>

              {/* Conclusion*/}
              <div>
                <h1 className="text-[#284368] md:text-5xl text-3xl font-bold text-left  py-0">
                  Conclusion
                  <p className="text-[#406089] text-lg font-normal py-2 ">
                 {product.conclusion}
                  </p>
                </h1>
              </div>
            </div>
          </div>

          {/* Related Items */}

          <div>
            <h1 className="text-[#284368] md:text-5xl text-3xl font-bold text-left w-11/12 py-10">
              You may also like
              <p className="text-[#284368] text-lg font-normal py-2 px-2">
                You may also want to check the following projects we worked on.
              </p>
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {relatedProducts.map((product) => (
                <motion.div
                  key={product.title}
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
