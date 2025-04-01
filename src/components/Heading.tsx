import React from 'react'

interface HeadingProps {
    title: string;
  }

const Heading:React.FC<HeadingProps> = ({ title })=> {
  return (
    <div
      className="w-full flex items-center justify-start bg-[url('/images/backdrop.jpeg')] bg-repeat-x object-contain text-[#284368] md:h-28 h-20 md:text-5xl text-3xl font-semibold font-poppins max-w-7xl mx-auto px-4"
    >
      {title}
    </div>
  )
}

export default Heading
