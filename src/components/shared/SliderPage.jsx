import React from "react";
import Title from "../ui/Title";
import Slider from "./Slider";

export default function SliderPage({
  title,
  subTitle,
  text,
  slides,
  second = false,
}) {
  return (
    <div className="container pt-[124px]">
      <Title text={title} className="text-2xl border-b mb-10 inline-block" />
      <div className="flex justify-center">
        <div className="w-[1160px]">
          <Title className="w-[410px]" text={subTitle} />

          <div className=" w-[813px] text-lg leading-[23px] mt-[60px] space-y-10 text-gray-400 mb-[100px]">
            {text.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
      <Slider slides={slides} second={second} />
    </div>
  );
}
