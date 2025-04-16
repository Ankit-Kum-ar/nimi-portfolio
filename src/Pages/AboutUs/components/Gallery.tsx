import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState, useEffect } from "react";
// import AnimatedContent from "@/ReactBit/AnimatedContent";

interface Image {
  src: string;
}

const images: Image[] = [
  {
    src: "/images/G-0.png",
  },
  {
    src: "/images/G-3.png",
  },
  {
    src: "/images/G-5.png",
  },
  {
    src: "/images/G-8.png",
  },
  {
    src: "/images/G-9.png",
  },
  {
    src: "/images/G-1.png",
  },
  {
    src: "/images/G-4.png",
  },
  {
    src: "/images/G-6.png",
  },
  {
    src: "/images/G-7.png",
  },
  {
    src: "/images/G-5.png",
  },
];

const Gallery: React.FC = () => {
  const [index, setIndex] = useState<number>(-1);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000); // Delay for animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="px-8 py-8 pt-16  w-full">
      <h1 className="text-5xl text-center font-serif font-bold text-blue-950 mb-10">
        Our Gallery
      </h1>

      {/* Masonry Grid Layout */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2 ">
        {images.map((image, i) => (
          // <AnimatedContent
          //   key={i}
          //   distance={50}
          //   direction="vertical"
          //   reverse={false}
          //   config={{ tension: 80, friction: 20 }}
          //   initialOpacity={0}
          //   animateOpacity={loaded}
          //   scale={0.8}
          //   threshold={0.2}
          // >
            <div className="relative overflow-hidden rounded-lg shadow-lg break-inside-avoid">
              <img
                src={image?.src}
                alt={`Gallery-${i}`}
                className="w-full h-full rounded-lg object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setIndex(i)}
              />
            </div>
          // </AnimatedContent>
        ))}
      </div>

      {/* Lightbox for Full-Screen View */}
      <Lightbox
        slides={images.map((img) => ({ src: img.src }))}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
};

export default Gallery;
