const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
// const BASE_URL = "https://newsapi.org/v2/everything";

export const fetchNewsByCategory = async (category: string = "") => {
  const categories: Record<string, string> = {
    all: `"real estate" OR "property market" OR "housing finance" OR "home design" OR "real estate investment"`,
    property: `"property market"`,
    finance: `"housing finance"`,
    design: `"home design"`,
    investment: `"real estate investment"`,
  };

  const query = categories[category] || categories.all;
  const url = `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${API_KEY}&language=en&sortBy=publishedAt&pageSize=9`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error fetching news:", errorData);
      throw new Error(`Failed to fetch news: ${errorData.message || response.statusText}`);
    }

    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to fetch news. Please try again later.");
  }
};