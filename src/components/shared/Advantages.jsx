import React, { useEffect, useRef, useState } from "react";
import Title from "../ui/Title";
const list = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
];
export default function Advantages() {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const sliderRef = useRef(null);
  const animationRef = useRef();

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setAutoScroll(false);
    if (sliderRef.current) {
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
    setAutoScroll(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    setAutoScroll(true);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    if (sliderRef.current) {
      const x = e.pageX - sliderRef.current.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed multiplier
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };
  const handleTouchStart = () => {
    setAutoScroll(false);
  };

  const handleTouchEnd = () => {
    setAutoScroll(true);
  };
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const animate = () => {
      if (autoScroll && slider) {
        slider.scrollLeft += 1; // Adjust speed by changing this value

        // Reset scroll position when reaching the middle to create infinite effect
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [autoScroll]);
  return (
    <div className="w-full bg-gray-400 py-[104px] ">
      <div className=" ml-[15.8593%]">
        <Title
          text={"наши преимущества"}
          className="text-white text-2xl font-normal mb-[65px]"
        />
        <div
          ref={sliderRef}
          className="flex gap-[57px] overflow-x-auto w-[200%] scrollbar-hide cursor-grab active:cursor-grabbing "
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {list.map((text, i) => (
            <div
              key={`first-${i}`}
              className="min-w-[411px] flex gap-5 select-none"
            >
              <span className="text-gray-300 font-normal text-2xl">
                (0{i + 1})
              </span>
              <p className="text-white text-xl leading-[25.5px]">{text}</p>
            </div>
          ))}
          {list.map((text, i) => (
            <div
              key={`second-${i}`}
              className="min-w-[411px] flex gap-5 select-none"
            >
              <span className="text-gray-300 font-normal text-2xl">
                (0{i + 1})
              </span>
              <p className="text-white text-xl leading-[25.5px]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
