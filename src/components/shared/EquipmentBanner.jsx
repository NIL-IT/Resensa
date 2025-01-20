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
    <div
      className=" relative 3xl:pb-[280px] mb-[30px] 
     "
    >
      <img
        className="absolute top-[30px] left-0  h-full z-[-2] 
        xs:min-w-[100wh]"
        src={bannerImg}
        alt="banner"
      />
      {blurImg && (
        <img
          src={blurImg}
          className="absolute  top-[30px] left-0 
         xs:min-w-[100wh] h-full z-[-1]"
          alt=""
        />
      )}

      <div className={`container 2xl:pt-[200px] 3xl:pt-[337px]  ${padding}`}>
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
            onClick={() => handleChangeShowPopup(true)}
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
