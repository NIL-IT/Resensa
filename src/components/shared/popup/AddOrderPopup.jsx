import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  createOrders,
  changeAddOrderPopup,
  getAllOrders,
} from "../../../utils/slice/userSlice";

import Select from "../../ui/Select";
import Input from "../../ui/Input";

const options = [
  { label: "Доставлен", value: "Доставлен" },
  { label: "Отменен", value: "Отменен" },
  { label: "Оплачен", value: "Оплачен" },
  { label: "В пути", value: "В пути" },
];

export default function AddOrderPopup() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    date: "",
    client_name: "",
    state: "",
    order_amount: "",
  });

  const handleSelectChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      state: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convert numeric fields before sending
      const submitData = {
        ...formData,
        number: Number(formData.number),
        order_amount: Number(formData.order_amount),
      };
      console.log(submitData);
      await dispatch(createOrders(submitData));
      await dispatch(getAllOrders());
      setFormData({
        name: "",
        number: "",
        date: "",
        client_name: "",
        state: "",
        order_amount: "",
      });
      setIsOpen(false);
    } catch (error) {
      console.error("Failed to create order:", error);
      alert(
        "Не удалось создать заказ. Пожалуйста, проверьте введенные данные."
      );
    }
  };

  useEffect(() => {
    dispatch(changeAddOrderPopup(isOpen));
  }, [isOpen]);

  return (
    <div className="fixed inset-0 flex items-center justify-center px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8">
      <div
        className="md:h-[70%] lg:h-[75%] bg-white py-[25px] xs:py-[28px] sm:py-[30px] md:py-[33px] lg:py-[35px] 
      xl:py-[38px] px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 rounded-lg w-[90%] xs:w-[85%] sm:w-[80%] 
      md:w-[70%] lg:w-[60%] xl:w-full max-w-[300px] xs:max-w-[350px] sm:max-w-[400px] md:max-w-[450px] l
      g:max-w-[500px] xl:max-w-[663px] relative overflow-y-auto"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 xs:top-2.5 sm:top-3 md:top-3.5 lg:top-4 right-2 xs:right-2.5 sm:right-3 md:right-3.5 lg:right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-center text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-[32px] font-medium leading-[30px] xs:leading-[32px] sm:leading-[35px] md:leading-[38px] lg:leading-[40.8px] text-gray-400 mb-4 xs:mb-4.5 sm:mb-5 md:mb-5.5 lg:mb-10">
          Добавить заказ
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-[12px] xs:space-y-[14px] sm:space-y-[20px] md:space-y-[24px] lg:space-y-[40px]"
        >
          <div className="space-y-[12px] xs:space-y-[14px] sm:space-y-[15px] md:space-y-[16px] lg:space-y-[18px]">
            <Input
              type="text"
              name="name"
              placeholder="Наименование заказа"
              value={formData.name}
              onChange={handleInputChange}
            />
            <Input
              type="number"
              name="number"
              placeholder="Номер заказа"
              value={formData.number}
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
              name="client_name"
              placeholder="Данные клиента"
              value={formData.client_name}
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
              type="number"
              name="order_amount"
              placeholder="Сумма заказа"
              value={formData.order_amount}
              onChange={handleInputChange}
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 xs:p-2.5 sm:p-2.5 md:p-3 bg-gray-400 text-white uppercase rounded hover:bg-[#2F2F2F] transition-colors text-base xs:text-base sm:text-lg font-medium"
          >
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}
