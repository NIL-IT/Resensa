import React from "react";
import Title from "../ui/Title";
import Button from "../ui/Button";
const news = [
  {
    image: "/img/slider_1.png",
    text: "Следует отметить, что курс социально-ориентирован",
    date: "30.01.2023 ",
  },
  {
    image: "/img/slider_1.png",
    text: "Следует отметить, что курс социально-ориентирован",
    date: "30.01.2023 ",
  },
  {
    image: "/img/slider_1.png",
    text: "Следует отметить, что курс социально-ориентирован",
    date: "30.01.2023 ",
  },
  {
    image: "/img/slider_1.png",
    text: "Следует отметить, что курс социально-ориентирован",
    date: "30.01.2023 ",
  },
  {
    image: "/img/slider_1.png",
    text: "Следует отметить, что курс социально-ориентирован",
    date: "30.01.2023 ",
  },
  {
    image: "/img/slider_1.png",
    text: "Следует отметить, что курс социально-ориентирован",
    date: "30.01.2023 ",
  },
];
export default function News() {
  return (
    <div className="container pt-[218px]">
      <Title
        text={"новости"}
        className="inline-block text-2xl border-b  mb-10"
      />
      <div className="flex justify-center">
        <div className="w-[1160px]">
          <div className="flex flex-wrap justify-between ">
            {news.map((item, i) => (
              <div
                className="group flex flex-col justify-between w-[370px] h-[484px] gradient mb-[37px] px-[29px] py-[20px] cursor-pointer"
                key={i}
              >
                <img
                  className="h-[70%] object-contain"
                  src={item.image}
                  alt=""
                />
                <div className="h-[30%]">
                  <p className="text-white text-xl leading-[25.5px] ">
                    {item.text}
                  </p>
                  <div className="pt-[14px] pb-5">
                    <span className="text-gray-800 text-base ">
                      {item.date}
                    </span>
                  </div>
                  <button className="flex-center gap-3 group-hover:gap-4 transition-all">
                    <span className="text-white text-lg font-normal">
                      Читать
                    </span>
                    <img src="/icon/sm_arrow.svg" alt="arrow" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <Button
            text={"смотреть все новости"}
            className="w-full py-[26px] bg-white border border-gray-400 text-gray-400 text-base mt-1 hover:bg-gray-50 hover:border-gray-300"
          />
        </div>
      </div>
    </div>
  );
}
