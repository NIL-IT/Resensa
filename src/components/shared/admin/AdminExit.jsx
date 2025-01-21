import React, { useEffect } from "react";
import Title from "../../ui/Title";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeIsAdmin } from "../../../utils/slice/userSlice";

export default function AdminExit({ title }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeIsAdmin(true));
  }, [dispatch]);

  return (
    <div className="relative pb-5">
      <span className="w-[1px] h-full absolute bg-gray-400 top-0 left-0 md:left-[-39px]" />
      <Title text={title} className="inline-block text-xl font-normal mb-6" />
      <div className="w-full h-[450px] flex items-center justify-center flex-col gap-5">
        <span className="text-gray-400 text-center">
          Вы уверены что хотите выйти?
        </span>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            href={"/auth"}
            text={"Да"}
            className="w-full sm:w-[100px] hover:bg-gray-300"
          />
          <Button
            href={"/admin/1"}
            text={"Нет"}
            className="w-full sm:w-[100px] hover:bg-gray-300"
          />
        </div>
      </div>
    </div>
  );
}
