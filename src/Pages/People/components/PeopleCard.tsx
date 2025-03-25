
interface PeopleCardProps {
    title: string;
    src: string;
    
  }

const PeopleCard: React.FC<PeopleCardProps> = ({title, src}) => {
  return (
    <div className=" relative rounded-full  h-[40vh] w-[30vw] md:h-[45vh] md:w-[20vw] lg:h-[50vh] lg:w-[10vw] overflow-clip flex justify-center items-center group m-4 bg-black/50">
        <img src={src} alt="title" className="p-0 m-0 object-cover h-full w-full  group-hover:filter group-hover:grayscale transition-all duration-300" loading="lazy" decoding="async"/>
        <div className="absolute w-full h-full bg-black/50 flex justify-end items-end pb-15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        <p className=" text-white text-lg text-top rotate-270 w-full z-20 ">{title}</p>
        </div>
    </div>
  )



}

export default PeopleCard
