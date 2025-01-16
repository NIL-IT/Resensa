import React from "react";
import Title from "../ui/Title";
import Button from "../ui/Button";

export default function EquipmentBanner({
  bannerImg,
  blurImg,
  subtitle,
  title,
  text,
  isButton = false,
  padding = "",
  textSize,
  width = "",
}) {
  return (
    <div className="relative h-[900px] mb-[30px]">
      <img
        className="absolute top-[30px] left-0 w-[100wh] h-[900px]  z-[-2]"
        src={bannerImg}
        alt="banner"
      />
      {blurImg && (
        <img
          src={blurImg}
          className="absolute top-[30px] left-[-50px] w-[1286px] h-[900px] z-[-1]"
          alt=""
        />
      )}

      <div className={`container pt-[337px] ${padding}`}>
        <Title
          text={subtitle}
          className="font-normal text-[32px] text-white leading-[41px]"
        />
        <Title
          text={title}
          className="font-normal text-[48px] text-white leading-[61px]"
        />
        <p
          className={` text-white mt-[65px] mb-[33px] ${
            width ? width : "w-[656px]"
          }  ${textSize ? textSize : "text-xl"}`}
        >
          {text}
        </p>
        {isButton && (
          <Button
            icon={true}
            white={true}
            text={"Оформить заказ"}
            className="py-[19px] pl-[19px] bg-white text-gray-400 text-base"
          />
        )}
      </div>
    </div>
  );
}
