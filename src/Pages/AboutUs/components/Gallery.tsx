import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState, useEffect } from "react";
import AnimatedContent from "@/ReactBit/AnimatedContent";

interface Image {
  src: string;
}

<<<<<<< HEAD
export default Gallery
=======
const images: Image[] = [
  {
    src: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=1000&auto=format&fit=crop&q=60",
  },
  {
    src: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1000&auto=format&fit=crop&q=60",
  },
  {
    src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1000&auto=format&fit=crop&q=60",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?w=1000&auto=format&fit=crop&q=60",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?w=1000&auto=format&fit=crop&q=60",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?w=1000&auto=format&fit=crop&q=60",
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1000&auto=format&fit=crop&q=60",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1676321688594-7c2e60a70de1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEhvbWV8ZW58MHx8MHx8fDA%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=1000&auto=format&fit=crop&q=60",
  },
  {
    src: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=1000&auto=format&fit=crop&q=60",
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
      <div className="columns-2 md:columns-3 lg:columns-4 ">
        {images.map((image, i) => (
          <AnimatedContent
            key={i}
            distance={50}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity={loaded}
            scale={0.8}
            threshold={0.2}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg break-inside-avoid">
              <img
                src={image?.src}
                alt={`Gallery-${i}`}
                className="w-full h-full rounded-lg object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setIndex(i)}
              />
            </div>
          </AnimatedContent>
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
>>>>>>> 015a315b693800967451f9d7a57c4c70f74a397f
