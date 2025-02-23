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
    <section className="overflow-x-hidden w-full bg-gray-400 py-[40px] xs:py-[40px] sm:py-[40px] md:py-[40px] lg:py-[40px] xl:py-[40px] 2xl:py-[40px] ">
      <div className=" container ">
        <Title
          text={"наши преимущества"}
          className="ml-5 xs:ml-0 text-white text-lg xs:text-lg sm:text-xl md:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl font-normal mb-[25px] xs:mb-[30px] sm:mb-[35px] md:mb-[40px] lg:mb-[40px] xl:mb-[40px] 2xl:mb-[45px] 3xl:mb-[50px]"
        />
      </div>
      <div
        ref={sliderRef}
        className="flex gap-[40px]  lg:gap-[45px] xl:gap-[50px] 2xl:gap-[53px] 3xl:gap-[57px] overflow-x-auto w-auto scrollbar-hide cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {list.map(({ title, text, subtitle, img }, i) => (
          <article
            key={`first-${i}`}
            className="min-w-[260px] xs:min-w-[270px] sm:min-w-[280px] md:min-w-[400px] lg:min-w-[420px] xl:min-w-[430px]
               2xl:min-w-[445px] 3xl:min-w-[485px] select-none space-y-2 sm:space-y-3"
          >
            <div className="max-w-[130px] max-h-[130px]">
              <img
                className="w-[60px]  h-[60px]
                  xs:w-[60px] sm:w-[60px]  md:h-[60px]  md:w-[60px] 
                  lg:h-[70px] lg:w-[70px] xl:h-[80px] xl:w-[80px] 2xl:h-[90px] 2xl:w-[90px] 3xl:h-[100px] 3xl:w-[100px]"
                src={img}
                alt={title}
                title={title}
              />
            </div>
            <div
              className="min-h-[44px] sm:min-h-[48px] 
               md:min-h-[56px] max-w-[180px] md:max-w-[200px] lg:max-w-[220px]"
            >
              <h3 className=" text-base uppercase xs:text-base sm:text-lg md:text-xl   text-white max-w-[260px] xs:max-w-[270px] sm:max-w-[280px] md:max-w-[300px]">
                {title}
              </h3>
              {subtitle && (
                <h3 className="text-base uppercase xs:text-base sm:text-lg md:text-xl   text-white max-w-[260px] xs:max-w-[270px] sm:max-w-[280px] md:max-w-[300px]">
                  {subtitle}
                </h3>
              )}
            </div>
            <p className="text-gray-100 text-sm xs:text-sm sm:text-base md:text-lg  leading-[20px] xs:leading-[21px] sm:leading-[22px] md:leading-[25.5px] lg:leading-[26px] xl:leading-[26.5px] 2xl:leading-[27px] 3xl:leading-[27.5px] max-w-[330px] xs:max-w-[340px] sm:max-w-[350px] md:max-w-[370px]">
              {text}
            </p>
          </article>
        ))}
        {list.map(({ title, text, subtitle, img }, i) => (
          <article
            key={`second-${i}`}
            className="min-w-[260px] xs:min-w-[270px] sm:min-w-[280px] md:min-w-[400px] lg:min-w-[420px] xl:min-w-[430px]
               2xl:min-w-[445px] 3xl:min-w-[485px] select-none space-y-2 sm:space-y-3"
          >
            <div className="max-w-[130px] max-h-[130px]">
              <img
                className="w-[60px]  h-[60px]
                  xs:w-[60px] sm:w-[60px]  md:h-[60px]  md:w-[60px] 
                  lg:h-[70px] lg:w-[70px] xl:h-[80px] xl:w-[80px] 2xl:h-[90px] 2xl:w-[90px] 3xl:h-[100px] 3xl:w-[100px]"
                src={img}
                alt={title}
                title={title}
              />
            </div>
            <div
              className="min-h-[44px] sm:min-h-[48px] 
               md:min-h-[56px] max-w-[180px] md:max-w-[200px] lg:max-w-[220px]"
            >
              <h3 className=" text-base uppercase xs:text-base sm:text-lg md:text-xl   text-white max-w-[260px] xs:max-w-[270px] sm:max-w-[280px] md:max-w-[300px]">
                {title}
              </h3>
              {subtitle && (
                <h3 className="text-base uppercase xs:text-base sm:text-lg md:text-xl   text-white max-w-[260px] xs:max-w-[270px] sm:max-w-[280px] md:max-w-[300px]">
                  {subtitle}
                </h3>
              )}
            </div>
            <p className="text-gray-100 text-sm xs:text-sm sm:text-base md:text-lg  leading-[20px] xs:leading-[21px] sm:leading-[22px] md:leading-[25.5px] lg:leading-[26px] xl:leading-[26.5px] 2xl:leading-[27px] 3xl:leading-[27.5px] max-w-[330px] xs:max-w-[340px] sm:max-w-[350px] md:max-w-[370px]">
              {text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
