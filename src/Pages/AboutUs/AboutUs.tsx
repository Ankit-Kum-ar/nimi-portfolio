import Heading from "@/components/Heading"
import Hero from "./components/Hero"
import Banner from "./components/Banner"
import Gallery from "./components/Gallery"

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Heading title="About Us" />
      <Hero />
      <Banner />
      <Gallery />
    </div>
  )
}

export default AboutUs