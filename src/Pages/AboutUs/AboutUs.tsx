import Heading from "@/components/Heading"
import Hero from "./components/Hero"
import Banner from "./components/Banner"

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Heading title="About Us" />
      <Hero />
      <Banner />
    </div>
  )
}

export default AboutUs