import React from "react";
import Title from "../ui/Title";
const list = [
  {
    img: "/img/part_1.svg",
    alt: "Партнер МССП",
  },
  {
    img: "/img/part_2.svg",
    alt: "Партнер Абсолют банк",
  },
  {
    img: "/img/part_3.svg",
    alt: "Партнер Мои документы",
  },
  {
    img: "/img/part_4.png",
    alt: "Партнер РКРСЕРВИС",
  },
  {
    img: "/img/part_5.svg",
    alt: "Партнер Министерство здравоохранения республики Татарстан",
  },
  {
    img: "/img/part_6.svg",
    alt: "Партнер Ростелеком",
  },
  {
    img: "/img/part_7.svg",
    alt: "Партнер РОСАТОМ",
  },
  {
    img: "/img/part_8_.svg",
    alt: "Партнер Министерство обороны Российской Федерации",
  },
];
export default function Partners() {
  return (
    <section
      className="pl-5 pr-5 xs:pl-0 xs:pr-0 w-full bg-gray-900  pb-[30px] lg:pb-[35px] 
    xl:pb-[40px] pt-[30px] lg:pt-[35px] 
    xl:pt-[40px]"
    >
      <div className="container">
        <Title
          text={"партнеры"}
          className="inline-block text-white text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl border-b border-b-white mb-6 xs:mb-7 sm:mb-8 md:mb-9 lg:mb-10"
        />
        <div className="flex justify-center">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-[30px] sm:gap-x-[30px] sm:gap-y-[20px] md:gap-x-[40px] md:gap-y-[10px]  2xl:gap-x-[200px] 3xl:gap-x-[300px] max-w-[400px] 
          xs:max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[750px] 
          xl:max-w-[780px] 2xl:max-w-[800px] 3xl:max-w-[1110px] mx-auto"
          >
            {list.map((item, i) => (
              <article
                key={i}
                className={`flex-center mt-2 xl:mt-3  ${
                  i === 4
                    ? "w-[150px]  xl:w-[200px] 2xl:w-[250px] 3xl:w-[300px]"
                    : "w-[100px]  xl:w-[130px] 2xl:w-[140px] 3xl:w-[150px]"
                }"
                }`}
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  title={item.alt}
                  className={`w-full  ${
                    i + 1 === list.length
                      ? "h-[100px] xl:h-[130px] 2xl:h-[140px] 3xl:min-h-[150px]"
                      : "h-auto"
                  } ${i === 3 ? "white" : ""} ${
                    i === 4 && "2xl:min-w-[250px] 3xl:min-w-[300px] "
                  } ${
                    i === 0 &&
                    "translate-y-[-12px] lg:translate-y-[-14px] xl:translate-y-[-16px] 3xl:translate-y-[-18px]"
                  } ${
                    i === 5 &&
                    "translate-y-[-4px] sm:translate-y-[-4px] md:translate-y-[-6px] lg:translate-y-[-6px] xl:translate-y-[-8px] "
                  }`}
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
