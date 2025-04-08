import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  selectedCategory: string;
  onChange: (category: string) => void;
};

const categories = [
  { key: "all", label: "All" },
  { key: "property", label: "Property Market" },
  { key: "finance", label: "Housing Finance" },
  { key: "design", label: "Home Design" },
  { key: "investment", label: "Investment" },
];

const NewsFilter: React.FC<Props> = ({ selectedCategory, onChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-8">
      {categories.map(({ key, label }) => (
        <Button
          key={key}
          className={`px-3 md:px-4 py-1 md:py-2 text-sm md:text-base rounded-full border font-medium transition-all duration-300 cursor-pointer ${
            selectedCategory === key
              ? "bg-[#1B4C89] text-white"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
          onClick={() => onChange(key)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

export default NewsFilter;