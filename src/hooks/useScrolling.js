import { useRef } from "react";
import { useState } from "react";

export const useScrolling = () => {
  const containerRef = useRef(null);
  const [scrollInterval, setScrollInterval] = useState()
  const [isScrolling, setIsScrolling] = useState(false);

  const handleMouseEnter = () => {
    setIsScrolling(true);
    startScrolling();
  };

  const startScrolling = () => {
    const interval = setInterval(() => {
      const container = containerRef.current;
      container.scrollLeft += 5;
      if (Math.ceil(container.scrollLeft) >= (container.scrollWidth - container.clientWidth)) {
        clearInterval(interval)
      }
    }, 50);

    setScrollInterval(interval)
  };

  const stopScrolling = () => {
    clearInterval(scrollInterval);
  };

  const handleMouseLeave = () => {
    setIsScrolling(false);
    stopScrolling();

    const container = containerRef.current;
    container.scrollTo({left:0,behavior:'smooth'});
  };

  return {handleMouseEnter, handleMouseLeave, isScrolling, containerRef}
}