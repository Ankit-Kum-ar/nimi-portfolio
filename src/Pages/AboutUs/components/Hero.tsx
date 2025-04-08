import { aboutCardData, aboutDescription } from "@/utils/constant"
import Card from "./Card"

const Hero = () => {
  return (
    <div>
        <img src="/images/about-img.png" alt="" className="w-full" />
        <div className="flex flex-col items-center justify-center bg-[#90BAE9] py-16">
            <p className="text-[#1B4C89] w-10/12 font-poppins md:text-2xl font-medium">{aboutDescription}</p>
            <div className="flex flex-col md:flex-row md:gap-16 gap-6 mt-10 md:w-9/12 w-10/12">
                {
                    aboutCardData.map((item, index) => (
                        <Card key={index} title={item.title} description={item.description} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Hero
