import React, { useEffect, useRef, useState } from "react";
import Title from "../ui/Title";
const list = [
  {
    title: "высокачественное оборудование",
    text: "Производим, учитывая специфику эксплуатационных требований и климатических условий.",
    img: "/icon/ad_1.svg",
  },
  {
    title: "комплексные решения",
    text: "Предлагаем решения, повышающие эффективность проектирования, эксплуатации и модернизации объектов.",
    img: "/icon/ad_2.svg",
  },
  {
    title: "инновации и технологии",
    text: "Используя передовые технологии, разрабатываем оборудование, которое соответствует мировым стандартам энергоэффективности и надежности.",
    img: "/icon/ad_3.svg",
  },
  {
    title: "широкий выбор комплектующих",
    text: "Включая различные типы теплообменников, вентиляторов и фильтров, что позволяет создавать решения для любых условий.",
    img: "/icon/ad_4.svg",
  },
  {
    title: "наши",
    subtitle: "инженеры",
    text: "Помогут вым подобрать идеальное решение, учитывая ваши задачи, требования и условия эксплуатации",
    img: "/icon/ad_5.svg",
  },
  {
    title: "адаптация под ваши запросы",
    text: "Оборудование может быть адаптировано под ваши запросы, включая окрасуц и конфигурацию.",
    img: "/icon/ad_6.svg",
  },
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
    <div className="w-full bg-gray-400 py-[50px] md:py-[75px] lg:py-[104px]">
      <div className="px-4 md:px-8 lg:ml-[15.8593%]">
        <Title
          text={"наши преимущества"}
          className="text-white text-xl md:text-2xl font-normal mb-[35px] md:mb-[50px] lg:mb-[65px]"
        />
        <div
          ref={sliderRef}
          className="flex gap-[20px] md:gap-[35px] lg:gap-[57px] overflow-x-auto w-[200%] scrollbar-hide cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {list.map(({ title, text, subtitle, img }, i) => (
            <div
              key={`first-${i}`}
              className="min-w-[280px] md:min-w-[400px] lg:min-w-[500px] select-none space-y-4"
            >
              <div className="max-w-[130px] max-h-[130px]">
                <img
                  className="w-[126px] h-[126px] md:w-[125px] lg:w-[150px]"
                  src={img}
                  alt=""
                />
              </div>
              <div>
                <Title
                  className="text-lg md:text-xl lg:text-2xl text-white max-w-[300px]"
                  text={title}
                />
                {subtitle && (
                  <Title
                    className="text-2xl text-white max-w-[300px]"
                    text={subtitle}
                  />
                )}
              </div>
              <p className="text-gray-100  text-base md:text-lg lg:text-xl leading-[22px] md:leading-[25.5px] max-w-[370px]">
                {text}
              </p>
            </div>
          ))}
          {list.map(({ title, text, subtitle, img }, i) => (
            <div
              key={`second-${i}`}
              className="min-w-[280px] md:min-w-[400px] lg:min-w-[500px] select-none space-y-4"
            >
              <div className="max-w-[130px] max-h-[130px]">
                <img
                  className="w-[126px] h-[126px] md:w-[125px] lg:w-[150px]"
                  src={img}
                  alt=""
                />
              </div>
              <div>
                <Title
                  className="text-lg md:text-xl lg:text-2xl text-white max-w-[300px]"
                  text={title}
                />
                {subtitle && (
                  <Title
                    className="text-2xl text-white max-w-[300px]"
                    text={subtitle}
                  />
                )}
              </div>
              <p className="text-gray-100 text-base md:text-lg lg:text-xl leading-[22px] md:leading-[25.5px] max-w-[370px]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
