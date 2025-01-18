import React, { useEffect, useState } from "react";
import Input from "../../ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { changeEquipmentPopup } from "../../../utils/slice/userSlice";
import { data } from "../../../utils/data";

const ChangeEquipmentPopup = () => {
  const dispatch = useDispatch();
  const { itemsList } = {
    itemsList: [...data.equipment.items, ...data.solutions.items],
  };

  const { equipmentId } = useSelector(({ user }) => user);
  const findProduct = itemsList.find((item) => +item.id === +equipmentId);

  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({
    id: findProduct.id,
    name: findProduct.name,
    description: findProduct.description,
    img: findProduct.img,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);
    setFormData({
      name: "",
      description: "",
      img: "",
    });
  };
  useEffect(() => {}, [isOpen]);

  return (
    <div className="fixed inset-0  flex items-center justify-center">
      <div className="bg-white py-[38px] px-8 rounded-lg w-full max-w-[663px]  relative">
        <button
          onClick={() => dispatch(changeEquipmentPopup(false))}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-center text-[32px] font-medium leading-[40.8px] text-gray-400 mb-6">
          Изменить оборудование
        </h2>
        <form onSubmit={handleSubmit} className="space-y-[18px]">
          <div className=" flex gap-2">
            <img width={200} src={findProduct.img} alt="" />
            <Input
              type={"text"}
              name="img"
              placeholder="Наименование компании"
              value={formData.img}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <span className="w-full text-sm text-gray-900 ">Название</span>
            <Input
              type="text"
              name="name"
              className={
                "border-gray-300 focus:gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              }
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Описание
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            value={formData.description}
          ></textarea>

          <button
            type="submit"
            className="w-full p-3 bg-gray-400 text-white rounded hover:bg-[#2F2F2F] transition-colors text-lg font-medium"
          >
            ОТПРАВИТЬ
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangeEquipmentPopup;
