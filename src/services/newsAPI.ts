const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2/everything";

export const fetchNewsByCategory = async (category: string = "") => {
  const categories: Record<string, string> = {
    all: `"real estate" OR "property market" OR "housing finance" OR "home design" OR "real estate investment"`,
    property: `"property market"`,
    finance: `"housing finance"`,
    design: `"home design"`,
    investment: `"real estate investment"`
  };

  const query = categories[category] || categories.all;
  const url = `${BASE_URL}?q=${encodeURIComponent(query)}&apiKey=${API_KEY}&language=en&sortBy=publishedAt&pageSize=10`;

  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch news");

  const data = await response.json();
  return data.articles;
};
