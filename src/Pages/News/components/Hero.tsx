const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center gap-14 my-10">
      <div className="flex justify-center items-center flex-col md:w-5/12 w-11/12 md:gap-7 gap-5">
        <h1 className="font-poppins md:text-6xl text-4xl font-medium text-[#284368] md:leading-20 leading-12">Discover the world’s Hidden Wonders</h1>
        <p className="font-poppins text-base font-normal text-[#284368]">
            Explore the beauty of the world through our curated collection of breathtaking images and stories.
        </p>
      </div>
        <div className="md:flex hidden justify-center items-center w-5/12 gap-10">
            <div>
                <img src="/images/n-1.png" alt="" />
            </div>
            <div className="flex flex-col gap-5">
                <img src="/images/n-2.png" alt="" />
                <img src="/images/n-3.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero
