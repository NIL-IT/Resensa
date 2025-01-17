import React, { useEffect, useRef, useState } from "react";
import Title from "../ui/Title";
const list = [
  {
    title: "высокачественное оборудование",
    text: "Производим, учитывая специфику эксплуатационных требований и климатических условий.",
    img: "",
  },
  {
    title: "комплексные решения",
    text: "Предлагаем решения, повышающие эффективность проектирования, эксплуатации и модернизации объектов.",
    img: "",
  },
  {
    title: "инновации и технологии",
    text: "Используя передовые технологии, разрабатываем оборудование, которое соответствует мировым стандартам энергоэффективности и надежности.",
    img: "",
  },
  {
    title: "широкий выбор комплектующих",
    text: "Включая различные типы теплообменников, вентиляторов и фильтров, что позволяет создавать решения для любых условий.",
    img: "",
  },
  {
    title: "наши",
    subtitle: "инженеры",
    text: "Помогут вым подобрать идеальное решение, учитывая ваши задачи, требования и условия эксплуатации",
    img: "",
  },
  {
    title: "адаптация под ваши запросы",
    text: "Оборудование может быть адаптировано под ваши запросы, включая окрасуц и конфигурацию.",
    img: "",
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
          {list.map(({ title, text, subtitle, img }, i) => (
            <div
              key={`first-${i}`}
              className="min-w-[500px] select-none space-y-4"
            >
              <img width={150} src="/icon/image.png" alt="" />
              <div>
                <Title
                  className="text-2xl text-white max-w-[300px]"
                  text={title}
                />
                {subtitle && (
                  <Title
                    className="text-2xl text-white max-w-[300px]"
                    text={subtitle}
                  />
                )}
              </div>
              <p className="text-white text-xl leading-[25.5px] max-w-[370px]">
                {text}
              </p>
            </div>
          ))}
          {list.map(({ title, text, subtitle, img }, i) => (
            <div
              key={`second-${i}`}
              className="min-w-[500px] select-none  space-y-4"
            >
              <img width={150} src="/icon/image.png" alt="" />
              <div>
                <Title
                  className="text-2xl text-white max-w-[300px]"
                  text={title}
                />
                {subtitle && (
                  <Title
                    className="text-2xl text-white max-w-[300px]"
                    text={subtitle}
                  />
                )}
              </div>
              <p className="text-white text-xl leading-[25.5px]  max-w-[370px]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
