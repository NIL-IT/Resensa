import React from "react";
import Title from "../ui/Title";
const list = [
  {
    title: `ПРЕДПРОДАЖНАЯ 
ПОДГОТОВКА`,
    text: `Подтверждаем максимальное соответствие
параметров вентагрегатов проектным значениям.`,
  },
  {
    title: `ОКРАСКА В ЛЮБОЙ ЦВЕТ`,
    // subTitle: "В ЛЮБОЙ ЦВЕТ",
    text: `По желанию клиента мы окрашиваем
вентиляционный агрегат в любой цвет
по каталогу RAL. Тип окраски: шагрень, глянец, матовый.`,
    // subtext: "Тип окраски: шагрень, глянец, матовый.",
  },
  {
    title: `СЕРТИФИЦИРОВАННЫЙ
ПРОДУКТ`,
    text: `Все выпускаемое оборудование 
имеет сертификаты соответствия
 и другие разрешительные документы.`,
  },
];
export default function Points() {
  return (
    <section className="container py-8 md:py-10 lg:py-16  mt-0 px-5 xs:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-6 xl:gap-4">
        {list.map((item, i) => (
          <article key={i} className="relative xl:w-[300px] 2xl:w-[420px]">
            <span className="bg-gray-400 w-3 h-3 md:w-[15px] md:h-[15px] block"></span>
            <Title
              text={item.title}
              className={`mt-3 md:mt-[15px] font-normal text-xl 
                md:text-2xl leading-[1.3] md:leading-[30.6px] ${
                  item.subTitle ? "mb-0" : "mb-4 md:mb-[30px]"
                }`}
            />
            {item.subTitle && (
              <Title
                text={item.subTitle}
                className="mb-4 md:mb-[30px] font-normal text-xl md:text-2xl leading-[1.3] md:leading-[30.6px]"
              />
            )}
            <p className="text-base md:text-lg text-gray-400 whitespace-pre-line max-w-[400px]">
              {item.text}
            </p>
            {item.subtext && (
              <p className="text-base md:text-lg text-gray-400 mt-2">
                {item.subtext}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
