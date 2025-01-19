import React, { useEffect, useState } from "react";
import Input from "../../ui/Input";
import { useDispatch } from "react-redux";
import { changeShowPopup } from "../../../utils/slice/userSlice";

const Popup = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(true);

  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    phone: "",
    email: "",
    privacy: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);
    setFormData({
      companyName: "",
      name: "",
      phone: "",
      email: "",
      privacy: false,
    });
    dispatch(changeShowPopup(false));
  };
  useEffect(() => {
    dispatch(changeShowPopup(isOpen));
  }, [isOpen]);

  return (
    <div className="fixed inset-0  flex items-center justify-center">
      <div className="bg-white py-[25px] xs:py-[28px] sm:py-[30px] md:py-[33px] lg:py-[35px] xl:py-[38px] px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 rounded-lg w-[90%] xs:w-[85%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-full max-w-[300px] xs:max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[563px] max-h-[400px] xs:max-h-[450px] sm:max-h-[480px] md:max-h-[500px] lg:max-h-[520px] xl:max-h-[553px] relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 xs:top-2.5 sm:top-3 md:top-3.5 lg:top-4 right-2 xs:right-2.5 sm:right-3 md:right-3.5 lg:right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-center text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-[32px] font-medium leading-[30px] xs:leading-[32px] sm:leading-[35px] md:leading-[38px] lg:leading-[40.8px] text-gray-400 mb-4 xs:mb-4.5 sm:mb-5 md:mb-5.5 lg:mb-6">
          ОСТАВИТЬ ЗАЯВКУ
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-[12px] xs:space-y-[14px] sm:space-y-[15px] md:space-y-[16px] lg:space-y-[18px]"
        >
          <Input
            type={"text"}
            name="companyName"
            placeholder="Наименование компании"
            value={formData.companyName}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="name"
            placeholder="Имя"
            value={formData.name}
            onChange={handleInputChange}
          />
          <Input
            type="tel"
            name="phone"
            placeholder="+7 (999) 999-99-99"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="example@mail.ru"
            value={formData.email}
            onChange={handleInputChange}
          />
          <div className="flex items-start space-x-1.5 xs:space-x-2">
            <input
              type="checkbox"
              name="privacy"
              checked={formData.privacy}
              onChange={handleInputChange}
              className="mt-0.5 xs:mt-1"
              required
            />
            <label
              htmlFor="privacy"
              className="text-xs xs:text-sm text-gray-600"
            >
              Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
            </label>
          </div>
          <button
            type="submit"
            className="w-full p-2 xs:p-2.5 sm:p-2.5 md:p-3 bg-gray-400 text-white rounded hover:bg-[#2F2F2F] transition-colors text-base xs:text-base sm:text-lg font-medium"
          >
            ОТПРАВИТЬ
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
