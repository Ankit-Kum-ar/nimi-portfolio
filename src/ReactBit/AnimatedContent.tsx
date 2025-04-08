import React, { useState, useRef, useEffect, forwardRef } from 'react';
import { animated, useSpring } from '@react-spring/web';

interface AnimatedContentProps {
  children: React.ReactNode;
  distance?: number;
  direction?: 'vertical' | 'horizontal';
  reverse?: boolean;
  config?: { tension: number; friction: number };
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  distance = 100,
  direction = 'vertical',
  reverse = false,
  config = { tension: 50, friction: 25 },
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
          setInView(true);
        }, delay);
      }
    },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, delay]);

  const springProps = useSpring({
    from: {
      opacity: animateOpacity ? initialOpacity : 1,
      transform:
        direction === 'vertical'
          ? `translateY(${reverse ? distance : -distance}px) scale(${scale})`
          : `translateX(${reverse ? distance : -distance}px) scale(${scale})`,
    },
    to: {
      opacity: 1,
      transform: inView
        ? `translateY(0px) scale(1)`
        : direction === 'vertical'
        ? `translateY(${reverse ? distance : -distance}px) scale(${scale})`
        : `translateX(${reverse ? distance : -distance}px) scale(${scale})`,
    },
    config,
    delay,
  });

  const AnimatedDiv = animated(
    forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
      (props, ref) => <div {...props} ref={ref} />
    )
  );

  return (
    <AnimatedDiv ref={ref} style={springProps}>
      {children}
    </AnimatedDiv>
  );
};

export default AnimatedContent;