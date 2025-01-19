import React, { useState } from "react";
import Title from "../../ui/Title";
import Input from "../../ui/Input";
import { useDispatch } from "react-redux";

export default function AdminCalculator({ title }) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    nameOrder: "",
    id: "",
    date: "",
    client: "",
    amount: "",
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
    // dispatch(addItemOrder(formData));
    setIsOpen(false);
    setFormData({
      nameOrder: "",
      id: "",
      date: "",
      client: "",
      status: "",
      amount: "",
    });

    // dispatch(changeAddOrderPopup(false));
  };

  return (
    <div className="relative pb-5">
      <span className="w-[1px] h-[100%] absolute bg-gray-400 top-0 left-[-39px]" />
      <Title text={title} className="inline-block text-xl font-normal " />
      <form onSubmit={handleSubmit} className="space-y-[18px] pt-6">
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
  );
}
