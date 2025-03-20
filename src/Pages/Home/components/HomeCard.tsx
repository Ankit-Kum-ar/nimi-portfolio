interface HomeCardProps {
  imgSrc: string;
  title: string;
  desc: string;
}

const HomeCard = ({ imgSrc, title, desc }: HomeCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 w-4/12 min-h-screen z-20">
        <img src={imgSrc} alt="" />
        <p className="text-left w-11/12 text-[#1A4272] text-3xl font-bold font-poppins">{title}</p>
        <p className="text-left w-11/12 pr-8 font-poppins leading-9">{desc}</p>      
    </div>
  )
}

export default HomeCard
