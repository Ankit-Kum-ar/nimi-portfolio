import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./components/ProductCard";
import VisitingcardBanner from "@/components/VisitingcardBanner";
import gradient from "/images/product-gradient.png";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Product = () => {
    const productData = useSelector((state: RootState) => state.product.productData) as Array<{
        title: string;
        src: string;
        description: string;
        location: string;
        id: number;
    }>;



  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalItems = productData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderProductCards = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return productData.slice(startIndex, endIndex).map((product) => (
      <motion.div
        key={product.title}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <ProductCard src={product.src}  title={product.title} description={product.description} location={product.location} id={product.id} />





      </motion.div>
    ));
  };

  const renderPaginationItems = () => {
    const paginationItems = [];

    for (let i = 1; i <= totalPages; i++) {
      paginationItems.push(
        <PaginationItem key={i}>
          <PaginationLink isActive={currentPage === i} onClick={() => handlePageChange(i)}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return paginationItems;
  };

  return (
    <div className="min-h-screen bg-[#90BAE9]/80 ">
      {/* <img src={bg} alt="Product-bg" className="relative z-20" /> */}
      <div className="absolute top-0 left-0 w-full z-0 opacity-70 md:block hidden">
        <img src={gradient} className="w-full h-[150vh]" alt="" />
      </div>

      <div className="flex flex-col min-h-screen relative items-center w-full justify-center md:py-14 pb-10">
        <h1 className="text-[#284368] md:text-5xl text-3xl font-bold text-left w-11/12 py-10">Our Projects</h1>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-10/12 z-20 pb-10">
          <AnimatePresence mode="wait" key={currentPage}>
            {renderProductCards()}
          </AnimatePresence>
        </div>


        
        <div className="w-11/12 flex justify-end z-20 pb-10">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                {currentPage > 1 && (
                  <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
                )}
              </PaginationItem>
              {renderPaginationItems()}
              {currentPage < totalPages && (
                <PaginationItem>
                  <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
      </div>
      <VisitingcardBanner />
    </div>
  );
};

export default Product;