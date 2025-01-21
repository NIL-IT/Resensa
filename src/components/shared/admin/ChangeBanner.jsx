import React, { useState, useEffect } from "react";
import Title from "../../ui/Title";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../ui/Input";
import { changeNumberForMainBanner } from "../../../utils/slice/userSlice";

export default function ChangeBanner({ title }) {
  const dispatch = useDispatch();
  const { experience, guarantee } = useSelector(({ user }) => user);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    experience: experience,
    guarantee: guarantee,
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
    dispatch(changeNumberForMainBanner(formData));
    setFormData({
      experience: "",
      guarantee: "",
    });
    setShowSuccess(true);
  };

  return (
    <div className="w-full relative">
      <span className="w-[1px] h-full absolute bg-gray-400 top-0 left-0 md:left-[-39px]" />
      <div className="flex items-center justify-between mb-4">
        <Title className="text-xl font-normal text-gray-400" text={title} />
      </div>
      <form
        onSubmit={handleSubmit}
        className="pt-6 sm:pt-10 w-full sm:w-[80%] md:w-[60%] lg:w-[45%]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <span className="block mb-1 text-sm font-medium text-gray-900">
              Опыт на рынке
            </span>
            <Input
              required={false}
              type={"number"}
              name="experience"
              placeholder={experience}
              value={formData.experience}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <span className="block mb-1 text-sm font-medium text-gray-900">
              Гарантия на продукцию
            </span>
            <Input
              type="number"
              name="guarantee"
              placeholder={guarantee}
              value={formData.guarantee}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mt-5 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
          <button
            type="submit"
            className="flex w-full sm:w-[120px] justify-center rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-300 transition-colors"
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
