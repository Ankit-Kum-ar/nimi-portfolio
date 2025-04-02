interface BannerCardProps {
  imgSrc: string;
  title: string;
  desc: string;
}

export const BannerCard_1 = ({ imgSrc, title, desc }: BannerCardProps) => {
  return (
    <div className="bg-[#5597DB] p-6 flex flex-col md:justify-start md:items-start rounded-3xl shadow-lg gap-3 ">
        <img src={imgSrc} alt={title} />
        <h1 className="font-bold text-white">{title}</h1>
        <p className="text-[#C4DAF3] text-xs font-medium font-poppins">{desc}</p>
    </div>
  )
}

interface BannerCard2Props {
  title: string;
  desc: string;
}

export const BannerCard_2 = ({ title, desc }: BannerCard2Props) => {
    return (
        <div className="bg-[#5597DB] flex flex-col md:justify-start md:items-start rounded-3xl shadow-lg gap-3 p-6">
            <h1 className="text-white font-bold">{title}</h1>    
            <p className="text-[#C4DAF3] font-medium text-xs font-poppins">{desc}</p>        
        </div>
    )
}