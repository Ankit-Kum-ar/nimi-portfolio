import { ArrowUpRight } from "lucide-react"
import BuilderIcon from "/images/BuilderIcon.png"
import VisitingCard from "./VisitingCard"
const VisitingcardBanner = () => {
  return (
    <section className="visitingcardbanner bg-[#1E5AA0] w-full px-10 py-10  ">
        <div className="max-w-7xl mx-auto px-4 relative">
            <div className="flex justify-center items-center absolute -top-16 left-10 h-10
            ">
                <img src={BuilderIcon} alt="NIMI" className="h-24" loading="lazy" decoding="async" />
            </div>
            <div className="banner flex flex-row gap-7 pt-10">
                <div className="content flex flex-col items-start gap-6">
                    <h5 className="text-[#C4DAF3] text-lg font-bold">GET STARTED</h5>
                    <p className="w-[60%] text-[#C4DAF3] text-justify text-xl">Whether you’re buying, selling, or investing, we are here to guide you every step of the way. Contact us today and let’s make your real estate goals a reality.
                    </p>
                    <button className="p-2 pl-4 bg-[#C4DAF3] text-[#1E5AA0] rounded-full text-center items-center flex gap-4 font-medium">
                        Contact Us
                        <div className="aspect-square p-2 bg-[#1E5AA0] text-[#C4DAF3] rounded-full">
                            <ArrowUpRight />
                        </div>
                    </button>
                </div>
                <div className="card h-40 w-[50vw] rounded-3xl flex justify-center items-center">
                    <VisitingCard />
                </div>
            </div>


        </div>
    </section>
  )
}

export default VisitingcardBanner
