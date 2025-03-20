interface HomeCardProps {
  imgSrc: string;
  title: string;
  desc: string;
}

const HomeCard = ({ imgSrc, title, desc }: HomeCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center md:gap-8 gap-2 md:w-4/12 w-11/12 md:min-h-screen z-20">
        <img src={imgSrc} alt="" />
        <p className="text-left md:w-11/12 w-full text-[#1A4272] md:text-3xl text-lg font-bold font-poppins">{title}</p>
        <p className="text-left md:w-11/12 w-full pr-8 font-poppins md:leading-9">{desc}</p>      
    </div>
  )
}

export default HomeCard
