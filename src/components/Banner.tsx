import { useEffect, useRef } from "react";
import gsap from "gsap";
import Product from "/images/productlogo.png";
import Luminus from "/images/luminouslogo.png";
import Umbrella from "/images/umbrellalogo.png";
import Border from "/images/borderlogo.png";
import Homey from "/images/homeylogo.png";

const images = [Product, Luminus, Umbrella, Border, Homey];

const Banner = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth / 2; // Half width since we duplicate
    const duration = totalWidth / 150; //// Adjust speed (lower = faster)

    gsap.set(container, { x: 0 }); //Reset position to prevent jump

    gsap.to(container, {
      x: `-${totalWidth}px`, // Scroll throug half of the content
      duration: duration, // Adjust speed dynamically
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.wrap(0, -totalWidth), // Ensures perfect looping
      },
    });
  }, []);

  return (
    <section className="banner bg-[#90BAE9]/80 w-full px-10 md:py-10 py-4 overflow-hidden z-20">
      <div ref={containerRef} className="relative w-full max-w-7xl mx-auto">
        <div className="flex gap-4 w-max">
          {/* Render images twice for seamless looping */}
          {[...images, ...images, ...images ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Brand Logo"
              className="h-10 md:h-16 w-auto"
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;