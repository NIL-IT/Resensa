import React, { useEffect, useState } from "react";
import Input from "../ui/Input";
import { useDispatch } from "react-redux";
import { changeShowPopup, changeShowStatus } from "../../utils/slice/userSlice";

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
      <div className="bg-white py-[38px] px-8 rounded-lg w-full max-w-[563px] max-h-[553px] relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-center text-[32px] font-medium leading-[40.8px] text-gray-400 mb-6">
          ОСТАВИТЬ ЗАЯВКУ
        </h2>
        <form onSubmit={handleSubmit} className="space-y-[18px]">
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
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              name="privacy"
              checked={formData.privacy}
              onChange={handleInputChange}
              className="mt-1"
              required
            />
            <label htmlFor="privacy" className="text-sm text-gray-600">
              Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
            </label>
          </div>
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

export default Popup;
