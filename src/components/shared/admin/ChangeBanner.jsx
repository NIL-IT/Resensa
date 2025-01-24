import React, { useState, useEffect } from "react";
import Title from "../../ui/Title";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../ui/Input";
import {
  changeNumberForMainBanner,
  updateBanner,
} from "../../../utils/slice/userSlice";

export default function ChangeBanner({ title }) {
  const dispatch = useDispatch();
  const { experience, guarantee } = useSelector(({ user }) => user);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    experience_year: null,
    experience_text: null,
    guaranty_year: null,
    guaranty_text: null,
  });

  useEffect(() => {
    let timer;
    if (showSuccess) {
      timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000); // Hide message after 3 seconds
    }
    return () => clearTimeout(timer);
  }, [showSuccess]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(updateBanner(formData));
    setFormData({
      experience: "",
      guarantee: "",
    });
    setShowSuccess(true);
  };

  return (
    <div className="w-full relative">
      <span className="hidden md:block w-[1px] h-full absolute bg-gray-400 top-0 left-0 md:left-[-39px]" />
      <div className="flex items-center justify-between mb-4">
        <Title className="text-xl font-normal text-gray-400" text={title} />
      </div>
      <form
        onSubmit={handleSubmit}
        className="pt-6 sm:pt-10 w-full sm:w-[300px] md:w-[400px] lg:w-[500px]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-5 items-center">
            <div>
              <span className="block mb-1 text-sm font-medium text-gray-900">
                Цифра для первого значения
              </span>
              <Input
                required={false}
                type={"number"}
                name="experience_year"
                placeholder={"Введите цифру..."}
                value={formData.experience_year}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <span className="block mb-1 text-sm font-medium text-gray-900">
                Текст для первого значения
              </span>
              <Input
                required={false}
                type={"text"}
                name="experience_text"
                placeholder={"Введите текст..."}
                value={formData.experience_text}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <div>
              <span className="block mb-1 text-sm font-medium text-gray-900">
                Цифра для второго значения
              </span>
              <Input
                required={false}
                type={"number"}
                name=" guaranty_year"
                placeholder={"Введите цифру..."}
                value={formData.guaranty_year}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <span className="block mb-1 text-sm font-medium text-gray-900">
                Текст для второго значения
              </span>
              <Input
                required={false}
                type={"text"}
                name="guaranty_text"
                placeholder={"Введите текст..."}
                value={formData.guaranty_text}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="mt-5 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
          <button
            type="submit"
            className="flex w-full sm:w-[120px] justify-center rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-300 transition-colors mb-5 lg:mb-0"
          >
            Сохранить
          </button>
          {showSuccess && (
            <span className="text-green text-sm animate-fade-in mt-2 sm:mt-0">
              Данные успешно изменены
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
