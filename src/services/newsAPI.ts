const BASE_URL = "https://gnews.io/api/v4/search";
const API_KEY = import.meta.env.VITE_GNEWS_API_KEY; // Ensure you have this in your .env file

export const fetchNewsByCategory = async (category: string = "") => {
  const categories: Record<string, string> = {
    all: `"real estate" OR "property market" OR "housing finance" OR "home design" OR "real estate investment"`,
    property: `"property market"`,
    finance: `"housing finance"`,
    design: `"home design"`,
    investment: `"real estate investment"`,
  };

  const query = categories[category] || categories.all;
  const url = `${BASE_URL}?q=${encodeURIComponent(query)}&token=${API_KEY}&lang=en&sortby=publishedAt&max=9`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error fetching news:", errorData);
      throw new Error(`Failed to fetch news: ${errorData.message || response.statusText}`);
    }

    const data = await response.json();
    return data.articles; // GNews API returns articles in the `articles` field
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to fetch news. Please try again later.");
  }
};