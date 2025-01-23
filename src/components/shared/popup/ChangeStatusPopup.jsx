import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "../../ui/Select";
import {
  changeItemId,
  changeStatusOrderPopup,
  patchOrders,
  updateOrders,
} from "../../../utils/slice/userSlice";

const options = [
  { label: "Доставлен", value: "Доставлен" },
  { label: "Отменен", value: "Отменен" },
  { label: "Оплачен", value: "Оплачен" },
  { label: "В пути", value: "В пути" },
];

export default function ChangeStatusPopup() {
  const dispatch = useDispatch();
  const { itemId, orders } = useSelector(({ user }) => user);
  const [selectedOrder, setSelectedOrder] = useState(
    orders.filter((item) => item.id === itemId)
  );

  const [formData, setFormData] = useState(selectedOrder[0].state);
  const handleSelectChange = (value) => {
    setFormData(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`Submit`, formData);
    try {
      if (selectedOrder) {
        console.log("Прокидываемая дата ", {
          id: itemId,
          state: formData,
        });
        await dispatch(
          patchOrders({
            id: itemId,
            state: formData,
          })
        );
        setFormData("");
        dispatch(changeItemId(null));
        dispatch(changeStatusOrderPopup(false));
      } else {
        alert("Заказ с указанным номером не найден среди выбранных.");
      }
    } catch (error) {
      console.error("Failed to update order status:", error);
      alert(
        "Не удалось изменить статус заказа. Пожалуйста, попробуйте еще раз."
      );
    }
  };

  const handleClose = () => {
    dispatch(changeItemId(null));
    dispatch(changeStatusOrderPopup(false));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 bg-black bg-opacity-50">
      <div
        className="bg-white py-[25px] xs:py-[28px] sm:py-[30px] md:py-[33px] lg:py-[35px] 
      xl:py-[38px] px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 rounded-lg w-[90%] xs:w-[85%] sm:w-[80%] 
      md:w-[70%] lg:w-[60%] xl:w-full max-w-[300px] xs:max-w-[350px] sm:max-w-[400px] md:max-w-[450px] 
      lg:max-w-[500px] xl:max-w-[663px] relative"
      >
        <button
          onClick={() => handleClose()}
          className="absolute top-2 xs:top-2.5 sm:top-3 md:top-3.5 lg:top-4 right-2 xs:right-2.5 sm:right-3 md:right-3.5 lg:right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-center text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-[32px] font-medium leading-[30px] xs:leading-[32px] sm:leading-[35px] md:leading-[38px] lg:leading-[40.8px] text-gray-400 mb-4 xs:mb-4.5 sm:mb-5 md:mb-5.5 lg:mb-10">
          Изменить статус заказа № {formData.number}
        </h2>
        <div className="space-y-[12px] xs:space-y-[14px] sm:space-y-[20px] md:space-y-[24px] lg:space-y-[40px]">
          <div className="space-y-[12px] xs:space-y-[14px] sm:space-y-[15px] md:space-y-[16px] lg:space-y-[18px]">
            <Select
              handleSelectChange={handleSelectChange}
              options={options}
              placeholder={"Выберите новый статус"}
              border={true}
              className={
                "w-full p-2 bg-gray-75 rounded focus:outline-none focus:ring-2 font-normal text-base text-gray-400 placeholder:text-gray-150"
              }
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full p-2 xs:p-2.5 sm:p-2.5 md:p-3 bg-gray-400 text-white uppercase rounded hover:bg-[#2F2F2F] transition-colors text-base xs:text-base sm:text-lg font-medium"
          >
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
}
