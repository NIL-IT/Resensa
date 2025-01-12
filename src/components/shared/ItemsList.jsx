import React, { useState } from "react";
import Title from "../ui/Title";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { changeShowPopup } from "../../utils/slice/userSlice";

export default function ItemsList({ limited = true, list, href }) {
  const dispatch = useDispatch();
  let newData = list.items;
  if (limited) newData = newData.slice(0, 6);
  const handleChangeShowPopup = (boolean) => dispatch(changeShowPopup(boolean));
  return (
    <div className="container py-20">
      <Title text={list.name} className="text-2xl font-normal mb-[50px]" />
      <div className="flex flex-wrap justify-center gap-[51px]">
        {newData.map(({ id, name, description, img }) => (
          <div key={id} className="w-[352px] border border-gray-100 p-4">
            <img className="w-[320px]" src={img} alt={name} />
            <h2 className="text-gray-400 text-sm uppercase font-normal my-2">
              {name}
            </h2>
            <div className="flex-center justify-between gap-2">
              <p className="w-[50%] text-[13px] text-gray-300">{description}</p>
              <Button
                onClick={() => handleChangeShowPopup(true)}
                text={"Оставить заявку"}
                className="w-[50%] py-4 px-[12.5px] hover:bg-gray-450"
              />
            </div>
          </div>
        ))}
      </div>
      {limited && (
        <div className="flex justify-center ">
          <Button
            href={href}
            text={"смотреть все"}
            className="bg-white w-[1158px] py-[26px] text-gray-400 border border-gray-400 mt-[64px] hover:bg-gray-50 hover:border-gray-200"
          />
        </div>
      )}
    </div>
  );
}
