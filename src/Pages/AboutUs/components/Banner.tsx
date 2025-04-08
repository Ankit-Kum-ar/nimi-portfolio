import { Button } from "@/components/ui/button"
import { BannerCard_1, BannerCard_2 } from "./BannerCards"
import { Link } from "react-router-dom"

const Banner = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center bg-[#284368] py-16 w-full">
      <div className="w-7/12 md:px-0 px-8 flex flex-col justify-center items-center">
        <div className="md:w-9/12">
            <h1 className="text-[#C4DAF3] md:text-8xl text-4xl font-extrabold">Why Choose Us?</h1>
            <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <Button className="bg-[#C4DAF3] text-[#284368] hover:bg-[#accef5] cursor-pointer md:text-lg rounded-4xl font-extrabold mt-6 md:p-7 p-5">
                  GET IN TOUCH
              </Button>
            </Link>
        </div>
      </div>
      <div className="flex w-auto justify-center items-center md:mt-0 mt-10 gap-2">
        <div className="flex flex-col gap-2 justify-end md:w-4/12 w-9/12">
          <BannerCard_1 imgSrc="/images/bannerCard-1.png" title="Proven Results" desc="From first-time homebuyers to seasoned investors, we have a track record of success." />
          <BannerCard_2 title="Local Market Expertise" desc="We have deep knowledge of the market trends and neighborhoods." />
        </div>
        <div className="md:flex flex-col gap-2 hidden w-4/12">
          <BannerCard_2 title="Personalized Service" desc="Every client’s journey is unique, and we tailor our approach accordingly." />
          <BannerCard_1 imgSrc="/images/bannerCard-2.png" title="Cutting-Edga Techoiogy" desc="We leverage the latest real estate tools to provide data-driven insights." />
        </div>
      </div>
    </div>
  )
}

export default Banner
