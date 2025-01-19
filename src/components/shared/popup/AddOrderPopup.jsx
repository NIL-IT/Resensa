import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addItemOrder,
  changeAddOrderPopup,
} from "../../../utils/slice/userSlice";

import Select from "../../ui/Select";
import Input from "../../ui/Input";

const options = [
  { label: "Доставлен", value: "Доставлен" },
  { label: "Отменен", value: "Отменен" },
];

export default function AddOrderPopup() {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(true);

  const [formData, setFormData] = useState({
    nameOrder: "",
    id: "",
    date: "",
    client: "",
    status: "",
    amount: "",
  });

  const handleSelectChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      status: value === "Доставлен" ? "delivered" : "cancelled",
    }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItemOrder(formData));
    setIsOpen(false);
    setFormData({
      nameOrder: "",
      id: "",
      date: "",
      client: "",
      status: "",
      amount: "",
    });

    dispatch(changeAddOrderPopup(false));
  };
  useEffect(() => {
    dispatch(changeAddOrderPopup(isOpen));
  }, [isOpen]);

  return (
    <div className="fixed inset-0  flex items-center justify-center">
      <div className="bg-white py-[38px] px-8 rounded-lg w-full max-w-[563px] max-h-[653px] relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-center text-[32px] font-medium leading-[40.8px] text-gray-400 mb-6">
          Добавить заказ
        </h2>
        <form onSubmit={handleSubmit} className="space-y-[18px]">
          <Input
            type="text"
            name="nameOrder"
            placeholder="Наименование заказа"
            value={formData.nameOrder}
            onChange={handleInputChange}
          />
          <Input
            type={"number"}
            name="id"
            placeholder="Номер заказа"
            value={formData.id}
            onChange={handleInputChange}
          />
          <Input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="client"
            placeholder="Данные клиента"
            value={formData.client}
            onChange={handleInputChange}
          />
          <Select
            handleSelectChange={handleSelectChange}
            options={options}
            placeholder={"Статус заказа"}
            border={true}
            className={
              "w-full p-2 bg-gray-75 rounded focus:outline-none focus:ring-2 font-normal text-base text-gray-400 placeholder:text-gray-150"
            }
          />
          <Input
            type="text"
            name="amount"
            placeholder="Сумма заказа"
            value={formData.amount}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="w-full p-3 bg-gray-400 text-white uppercase rounded hover:bg-[#2F2F2F] transition-colors text-lg font-medium"
          >
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}
