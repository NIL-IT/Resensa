import React from "react";
import Title from "../ui/Title";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { changeShowPopup } from "../../utils/slice/userSlice";
export default function Banner() {
  const dispatch = useDispatch();
  const handleChangeShowPopup = (boolean) => dispatch(changeShowPopup(boolean));
  return (
    <div className="container pt-[60px] md:pt-[90px] lg:pt-[118px] pb-[50px] md:pb-[75px] lg:pb-[102px]">
      <Title
        className="border-b border-gray-400 pb-[33px]"
        text="производство и поставка вентиляционного оборудования высокого класса"
      />
      <div className="flex-center flex-col lg:flex-row justify-between mt-4 gap-8 lg:gap-4">
        <div className="flex-center flex-wrap gap-8 md:gap-[60px] lg:gap-[88px]">
          <div>
            <span className="text-[36px] md:text-[42px] lg:text-[48px] text-gray-400">
              22
            </span>
            <p className="text-lg md:text-xl text-gray-300 text-center lg:text-left">
              года опыта на рынке
              <br /> вентиляционного оборудования
            </p>
          </div>
          <div>
            <span className="text-[36px] md:text-[42px] lg:text-[48px] text-gray-400">
              3
            </span>
            <p className="text-lg md:text-xl text-gray-300 text-center lg:text-left">
              года гарантии
              <br /> на продукцию компании
            </p>
          </div>
        </div>
        <Button
          onClick={() => handleChangeShowPopup(true)}
          className="py-[20px] md:py-[26px] px-6 md:pr-[26px] md:pl-6 w-full md:w-[332px] h-[66px] md:h-[76px] text-base"
          icon={true}
          text={"Получить консультацию"}
        />
      </div>
      <img
        className="w-full mt-[50px] md:mt-[75px] lg:mt-[105px]"
        src="/img/banner.svg"
        alt=""
      />
    </div>
  );
}
