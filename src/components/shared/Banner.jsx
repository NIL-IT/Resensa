import React from "react";
import Title from "../ui/Title";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { changeShowPopup } from "../../utils/slice/userSlice";
export default function Banner() {
  const dispatch = useDispatch();
  const handleChangeShowPopup = (boolean) => dispatch(changeShowPopup(boolean));
  return (
    <div className="container pt-[118px] pb-[102px]">
      <Title
        className="border-b border-gray-400 pb-[33px]"
        text="производство и поставка вентиляционного оборудования высокого класса"
      />
      <div className="flex-center justify-between mt-4">
        <div className="flex-center gap-[88px]">
          <div>
            <span className="text-[48px] text-gray-400">22</span>
            <p className="text-xl text-gray-300">
              года опыта на рынке
              <br /> вентиляционного оборудования
            </p>
          </div>
          <div>
            <span className="text-[48px] text-gray-400">3</span>
            <p className="text-xl text-gray-300">
              года гарантии
              <br /> на продукцию компании
            </p>
          </div>
        </div>
        <Button
          onClick={() => handleChangeShowPopup(true)}
          className="py-[26px] pr-[26px] pl-6 w-[332px] h-[76px] text-base"
          icon={true}
          text={"Получить консультацию"}
        />
      </div>
      <img className="w-full mt-[105px]" src="/img/banner.svg" alt="" />
    </div>
  );
}
