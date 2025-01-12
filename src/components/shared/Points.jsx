import React from "react";
import Title from "../ui/Title";
import { div } from "three/tsl";
const list = [
  {
    title: `ПРЕДПРОДАЖНАЯ 
ПОДГОТОВКА`,
    text: `Подтверждаем максимальное соответствие
параметров вентагрегатов проектным значениям.`,
  },
  {
    title: `ОКРАСКА`,
    subTitle: "В ЛЮБОЙ ЦВЕТ",
    text: `По желанию клиента мы окрашиваем
вентиляционный агрегат в любой цвет
по каталогу RAL.`,
    subtext: "Тип окраски: шагрень, глянец, матовый.",
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
    <div className="container pb-[124px]">
      <div className="flex justify-between">
        {list.map((item, i) => (
          <div key={i} className="w-[345px]">
            <span className="bg-gray-400 w-[15px] h-[15px] block"></span>
            <Title
              text={item.title}
              className={`mt-[21px] font-normal text-2xl leading-[30.6px] ${
                item.subTitle ? "mb-0 " : "mb-[30px] "
              }`}
            />
            {item.subTitle && (
              <Title
                text={item.subTitle}
                className="m mb-[30px] font-normal text-2xl leading-[30.6px]"
              />
            )}
            <p className="text-lg text-gray-400">{item.text}</p>
            {item.subtext && (
              <p className="text-lg text-gray-400">{item.subtext}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
