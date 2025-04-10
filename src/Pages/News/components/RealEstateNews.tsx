import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import NewsFilter from "../components/NewsFilter";
import { fetchNewsByCategory } from "@/services/newsAPI";
import { Loader } from "lucide-react"; // Import the Loader component

type NewsArticle = {
  title: string;
  url: string;
  urlToImage: string;
  description: string;
};

const RealEstateNews: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [loading, setLoading] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false); // State to track screen size

  const loadNews = async (category: string) => {
    setLoading(true);
    try {
      const news = await fetchNewsByCategory(category);
      console.log(news);
      setArticles(news);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile screen size threshold
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize); // Add resize listener

    return () => window.removeEventListener("resize", handleResize); // Cleanup listener
  }, []);

  useEffect(() => {
    loadNews(selectedCategory);
  }, [selectedCategory]);

  // Limit articles to 7 on mobile screens
  const displayedArticles = isMobile ? articles.slice(0, 7) : articles;

  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#1B4C89]">
        Latest Real Estate News
      </h1>

      <NewsFilter
        selectedCategory={selectedCategory}
        onChange={setSelectedCategory}
      />

      {loading ? (
        <div className="flex justify-center items-center mt-10">
          <Loader className="animate-spin w-10 h-10 text-[#1B4C89]" />
        </div>
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {displayedArticles.map((article, idx) => (
            <NewsCard key={idx} article={article} />
          ))}
        </div>
      )}
    </section>
  );
};

export default RealEstateNews;