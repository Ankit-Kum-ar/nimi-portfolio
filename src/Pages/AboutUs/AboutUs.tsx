import Heading from "@/components/Heading"
import Hero from "./components/Hero"
import Banner from "./components/Banner"
import Gallery from "./components/Gallery"
import Title from "@/components/Title"

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Title title="About Us - Nimi Developers" />
      <Heading title="About Us" />
      <Hero />
      <Banner />
      <Gallery />
    </div>
  )
}

export default AboutUs