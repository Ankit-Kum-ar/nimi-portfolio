import React from "react";

type Props = {
  article: {
    title: string;
    url: string;
    image: string; // GNews uses `image`
    description: string;
    publishedAt: string; // Published date
    source: {
      name: string; // Source name
      url: string; // Source URL
    };
  };
};

const NewsCard: React.FC<Props> = ({ article }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Article Image */}
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 object-cover"
      />

      {/* Article Content */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-lg font-bold text-[#1B4C89] mb-2">{article.title}</h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">{article.description}</p>

        {/* Published Date */}
        <p className="text-gray-500 text-xs mb-2">
          Published on: {new Date(article.publishedAt).toLocaleDateString()}
        </p>

        {/* Source */}
        <p className="text-gray-500 text-xs mb-4">
          Source:{" "}
          <a
            href={article.source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1B4C89] font-medium hover:underline"
          >
            {article.source.name}
          </a>
        </p>

        {/* Read More Link */}
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1B4C89] font-medium hover:underline"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;