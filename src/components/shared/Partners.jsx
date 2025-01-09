import React from "react";
import Title from "../ui/Title";
const list = [
  {
    img: "/img/part_1.svg",
    alt: "part_1",
  },
  {
    img: "/img/part_2.svg",
    alt: "part_1",
  },
  {
    img: "/img/part_3.svg",
    alt: "part_1",
  },
  {
    img: "/img/part_4.svg",
    alt: "part_1",
  },
  {
    img: "/img/part_5.svg",
    alt: "part_1",
  },
  {
    img: "/img/part_6.svg",
    alt: "part_1",
  },
  {
    img: "/img/part_7.svg",
    alt: "part_1",
  },
  {
    img: "/img/part_8.svg",
    alt: "part_1",
  },
];
export default function Partners() {
  return (
    <div className="w-full bg-gray-900 mt-[45px] pb-[101px] pt-[81px]">
      <div className="container ">
        <Title
          text={"партнеры"}
          className="inline-block text-white text-2xl border-b border-b-white  mb-10"
        />
        <div className="flex justify-center">
          <div className="flex flex-wrap max-w-[810px] gap-[70px]">
            {list.map((item, i) => (
              <div key={i}>
                <img src={item.img} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
