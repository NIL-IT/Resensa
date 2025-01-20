import React from "react";
import Title from "../ui/Title";
import Slider from "./Slider";
import { div } from "three/tsl";

export default function SliderPage({
  title,
  subTitle,
  text,
  slides,
  second = false,
}) {
  return (
    <div>
      <div className="container overflow-x-hidden pt-[520px] xs:pt-[500px] sm:pt-[520px] md:pt-[550px] lg:pt-[115px] xl:pt-[120px] 2xl:pt-[122px] 3xl:pt-[124px]">
        <Title
          text={title}
          className="text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl border-b mb-6 xs:mb-7 sm:mb-8 md:mb-9 lg:mb-10 inline-block"
        />
        <div className="flex justify-center">
          <div className="w-full xs:w-full sm:w-full md:w-[800px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1100px] 3xl:w-[1160px]">
            <Title
              className="w-full xs:w-full sm:w-full md:w-[350px] lg:w-[370px] xl:w-[390px] 2xl:w-[400px] 3xl:w-[410px]"
              text={subTitle}
            />

            <div className="w-full xs:w-full sm:w-full md:w-[600px] lg:w-[700px] xl:w-[750px] 2xl:w-[780px] 3xl:w-[813px] text-base xs:text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg 3xl:text-lg leading-[20px] xs:leading-[21px] sm:leading-[22px] md:leading-[23px] mt-[30px] xs:mt-[35px] sm:mt-[40px] md:mt-[45px] lg:mt-[50px] xl:mt-[55px] 2xl:mt-[57px] 3xl:mt-[60px] space-y-6 xs:space-y-7 sm:space-y-8 md:space-y-9 lg:space-y-10 text-gray-400 mb-[60px] xs:mb-[70px] sm:mb-[80px] md:mb-[85px] lg:mb-[90px] xl:mb-[95px] 2xl:mb-[97px] 3xl:mb-[100px]">
              {text.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Slider slides={slides} second={second} />
    </div>
  );
}
