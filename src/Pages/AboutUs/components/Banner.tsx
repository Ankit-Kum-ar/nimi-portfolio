import { Button } from "@/components/ui/button"

const Banner = () => {
  return (
    <div className="flex items-center justify-center bg-[#284368] py-16 w-full">
      <div className="md:w-1/2 md:px-0 px-8 flex flex-col justify-center items-center">
        <div className="md:w-9/12">
            <h1 className="text-[#C4DAF3] md:text-8xl text-4xl font-extrabold">Why Choose Us?</h1>
            <Button className="bg-[#C4DAF3] text-[#284368] md:text-lg rounded-4xl font-extrabold mt-6 md:p-7 p-5">
                GET IN TOUCH
            </Button>
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="w-9/12">
            
        </div>
      </div>
    </div>
  )
}

export default Banner
