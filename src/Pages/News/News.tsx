import Heading from "@/components/Heading"
import Hero from "./components/Hero"
import RealEstateNews from "./components/RealEstateNews"
import Title from "@/components/Title"

const News = () => {
  return (
    <div className="flex flex-col min-h-screen w-full  bg-[#90BAE9CC] gap-4">
      <Title title="News - Nimi Developers" />
      <Heading title="News" />
      <Hero />
      <RealEstateNews />
    </div>
  )
}

export default News
