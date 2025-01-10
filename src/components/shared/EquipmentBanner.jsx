import React from "react";
import Title from "../ui/Title";
import Button from "../ui/Button";

export default function EquipmentBanner() {
  return (
    <div className="relative h-[900px] mb-[30px]">
      <img
        className="absolute top-[30px] left-0 w-[100wh] h-[900px]  z-[-2]"
        src="/img/eq_banner.svg"
        alt=""
      />
      <img
        src="/img/blur.png"
        className="absolute top-[30px] left-[-50px] w-[1286px] h-[900px] z-[-1]"
        alt=""
      />
      <div className="container pt-[337px]">
        <Title
          text={"recensa"}
          className="font-normal text-[32px] text-white leading-[41px]"
        />
        <Title
          text={"оборудование"}
          className="font-normal text-[48px] text-white leading-[61px]"
        />
        <p className="text-xl text-white mt-[65px] mb-[33px] w-[656px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Button
          icon={true}
          white={true}
          text={"Оформить заказ"}
          className="py-[19px] pl-[19px] bg-white text-gray-400 text-base"
        />
      </div>
    </div>
  );
}
