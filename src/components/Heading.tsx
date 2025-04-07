import React from 'react'

interface HeadingProps {
    title: string;
  }

const Heading:React.FC<HeadingProps> = ({ title })=> {
  return (
    <div
      className="w-full h-full bg-cover bg-center flex items-center justify-center bg-no-repeat bg-[url('/images/backdrop.jpeg')] text-[#284368] md:h-28 h-20 md:text-5xl text-3xl font-semibold font-poppins"
    >
      {title}
    </div>
  )
}

export default Heading
