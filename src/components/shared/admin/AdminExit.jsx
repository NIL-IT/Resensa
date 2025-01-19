import React from "react";
import Title from "../../ui/Title";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeIsAuth } from "../../../utils/slice/userSlice";

export default function AdminExit({ title }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleExit = () => {
    dispatch(changeIsAuth(false));
  };
  const returnHome = () => {
    navigate("/");
  };
  return (
    <div className="relative pb-5">
      <span className="w-[1px] h-[100%] absolute bg-gray-400 top-0 left-[-39px]" />
      <Title text={title} className="inline-block text-xl font-normal " />
      <div className="w-full h-[450px] flex-center flex-col justify-center gap-5">
        <span className="text-gray-400">Вы уверены что хотите выйти ? </span>
        <div className="flex gap-4">
          <Button
            onClick={() => handleExit()}
            text={"Да"}
            className="w-[100px] hover:bg-gray-300"
          />
          <Button
            onClick={() => returnHome()}
            text={"Нет"}
            className="w-[100px] hover:bg-gray-300"
          />
        </div>
      </div>
    </div>
  );
}
