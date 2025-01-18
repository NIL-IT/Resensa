import React from "react";
import { data } from "../../../utils/data";
import Button from "../../ui/Button";
import Title from "../../ui/Title";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  changeEquipmentId,
  changeEquipmentPopup,
} from "../../../utils/slice/userSlice";

export default function AdminEquipment({ title }) {
  const dispatch = useDispatch();
  const changeEquipment = (id) => {
    dispatch(changeEquipmentId(id));
    dispatch(changeEquipmentPopup(true));
  };
  return (
    <div className="relative pb-5">
      <span className="w-[1px] h-[100%] absolute bg-gray-400 top-0 left-[-39px]" />
      <Title
        text={title}
        className="inline-block text-xl font-normal mb-[50px] "
      />

      <div className="max-h-[440px] overflow-y-scroll grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {data.equipment.items.map(({ id, name, description, img }) => (
          <Link
            key={id}
            className=" flex flex-col justify-between w-[200px] h-[400px] border border-gray-100 p-4 mb-5"
          >
            <div>
              <img className="w-full" src={img} alt={name} />
              <h2 className="text-gray-400 text-sm uppercase font-normal my-2">
                {name}
              </h2>

              <p className=" text-[13px] text-gray-300">{description}</p>
            </div>
            <div className="flex-center flex-col justify-center gap-2">
              <Button
                onClick={() => changeEquipment(id)}
                text={"Изменить"}
                className="w-[100%] py-2 hover:bg-gray-450 text-center"
              />
              <Button
                onClick={() => changeEquipment(id)}
                text={"Удалить"}
                className="w-[100%] py-2 bg-gray-300 hover:bg-gray-500 text-center"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
