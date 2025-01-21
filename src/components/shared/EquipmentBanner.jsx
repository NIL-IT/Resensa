import React from "react";
import Title from "../ui/Title";
import Button from "../ui/Button";
import { changeShowPopup } from "../../utils/slice/userSlice";
import { useDispatch } from "react-redux";
import { div } from "three/tsl";

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
  const dispatch = useDispatch();
  const handleChangeShowPopup = (boolean) => dispatch(changeShowPopup(boolean));
  return (
    <div className=" relative pb-[40px] xs:pb-[60px] sm:pb-[80px]  md:pb-[100px] lg:pb-[120px]  xl:pb-[140px] 2xl:pb-[160px] 3xl:pb-[180px]">
      <img
        className="absolute object-contain top-[30px] left-0 min-w-[800px]   md:w-full z-[-2]"
        src={bannerImg}
        alt="banner"
      />
      <div
        className={`container pt-[100px] pl-[20px] xs:pl-[0]  
          md:pt-[60px] lg:pt-[70px] xl:pt-[120px] 2xl:pt-[180px] 3xl:pt-[250px]  ${padding}`}
      >
        <Title
          text={subtitle}
          className="font-norma text-2xl sm:text-[22px] leading-[22px] sm:leading-[24px] xl:text-[28px] 2xl:text-[32px] text-white md:leading-[41px]"
        />
        <Title
          text={title}
          className="font-normal text-2xl md:text-[38px] sm:leading-[28px]  
          xl:text-[38px] 2xl:text-[48px] lg:leading-[61px] text-white leading-[24px]"
        />
        <p
          className={` text-white mt-[10px] mb-4 md:mb-[20px] lg:mb-[33px] lg:mt-[20px]  xl:mt-[30px] 2xl:mt-[65px]  ${
            width ? width : "w-[320px] xs:w-[360px] sm:w-[400px] lg:w-[656px]"
          }  ${textSize ? textSize : " text-sm lg:text-lg xl:text-xl"}`}
        >
          {text}
        </p>
        {isButton && (
          <Button
            onClick={() => handleChangeShowPopup(true)}
            icon={true}
            white={true}
            text={"Оформить заказ"}
            className="py-[10px]  lg:py-[14px] xl:py-[19px] xs:pl-[19px] bg-white text-gray-400 text-base"
          />
        )}
      </div>
    </div>
  );
}
