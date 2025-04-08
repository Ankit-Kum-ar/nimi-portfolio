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

  const loadNews = async (category: string) => {
    setLoading(true);
    try {
      const news = await fetchNewsByCategory(category);
      setArticles(news);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadNews(selectedCategory);
  }, [selectedCategory]);

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
          {articles.map((article, idx) => (
            <NewsCard key={idx} article={article} />
          ))}
        </div>
      )}
    </section>
  );
};

export default RealEstateNews;