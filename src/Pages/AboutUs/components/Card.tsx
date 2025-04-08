interface CardProps {
  title: string;
  description: string;
}

const Card = ({title, description}: CardProps) => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#284368] shadow-lg rounded-lg md:p-7 p-6 w-full text-[#C4DAF3] md:gap-5 gap-3">
      <h1 className="font-poppins md:text-3xl text-xl font-bold">{title}</h1>
      <p className="md:text-lg text-sm font-poppins md:w-10/12">{description}</p>
    </div>
  )
}

export default Card
