import React from "react";

type NewsArticle = {
  title: string;
  url: string;
  urlToImage: string;
  description: string;
};

const NewsCard: React.FC<{ article: NewsArticle }> = ({ article }) => {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#F0F4FA] rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 flex flex-col"
    >
      {/* Image Section */}
      <img
        src={article.urlToImage || "/images/placeholder.png"} // Fallback image
        alt="news"
        className="h-48 w-full object-cover sm:h-56"
      />

      {/* Content Section */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h3 className="font-bold text-base sm:text-lg mb-2 line-clamp-2 text-[#1B4C89]">
          {article.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 line-clamp-3">
          {article.description?.slice(0, 100) || "No description available."}...
        </p>
      </div>
    </a>
  );
};

export default NewsCard;