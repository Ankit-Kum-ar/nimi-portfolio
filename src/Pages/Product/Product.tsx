import { useState } from "react";
import ProductCard from "./components/ProductCard";
import VisitingcardBanner from "@/components/VisitingcardBanner";
import bg from "/images/Product-bg.png";
// import gradient from "/images/product-gradient.png";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalItems = 6; // Total number of ProductCards
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderProductCards = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return Array.from({ length: totalItems })
      .slice(startIndex, endIndex)
      .map((_, index) => <ProductCard key={index} />);
  };

  return (
    <div className="min-h-screen bg-[#90BAE9]/80">
      <img src={bg} alt="Product-bg" />
      <div className="flex flex-col min-h-screen relative items-center justify-center py-14">
        {/* <div className="absolute top-0 left-0 w-full z-0 opacity-70">
          <img src={gradient} alt="" />
        </div> */}
        <h1 className="text-[#284368] text-5xl font-bold text-left w-11/12 py-10">Our Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 z-20 pb-10">
          {renderProductCards()}
        </div>
        <Pagination className="z-20">
          <PaginationContent>
            <PaginationItem>
              {currentPage > 1 && (
                <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
              )}
            </PaginationItem>
            {Array.from({ length: totalPages }).map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink isActive={currentPage === index + 1} onClick={() => handlePageChange(index + 1)}>
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <VisitingcardBanner />
    </div>
  );
};

export default Product;