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
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
    >
      <img src={article.urlToImage} alt="news" className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{article.title}</h3>
        <p className="text-sm text-gray-600">{article.description?.slice(0, 100)}...</p>
      </div>
    </a>
  );
};

export default NewsCard;
