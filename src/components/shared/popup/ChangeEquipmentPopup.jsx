import React, { useState } from "react";
import Input from "../../ui/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  changeData,
  changeEquipmentPopup,
} from "../../../utils/slice/userSlice";

import ImageUploader from "../../ui/ImageUploader";
import { updateItemById } from "../../../utils/hooks/updateItemById";
import { useLocation } from "react-router-dom";

const ChangeEquipmentPopup = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const pathnameId = pathname.split("/").at(-1);
  const isNews = +pathnameId === +5;

  const { equipmentId, newsId, data } = useSelector(({ user }) => user);
  const { itemsList } = {
    itemsList: !isNews
      ? [...data.equipment.items, ...data.solutions.items]
      : [...data.news.items],
  };

  const findProduct = itemsList.find((item) =>
    !isNews ? +item.id === +equipmentId : +item.id === +newsId
  );

  const [formData, setFormData] = useState(
    !isNews
      ? {
          id: findProduct.id,
          name: findProduct.name,
          description: findProduct.description,
          img: findProduct.img,
        }
      : {
          id: findProduct.id,
          text: findProduct.text,
          date: findProduct.date,
          img: findProduct.img,
        }
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isNews) {
      dispatch(changeData(updateItemById(formData.id, formData, data)));
      setFormData({
        id: findProduct.id,
        name: findProduct.name,
        description: findProduct.description,
        img: findProduct.img,
      });
    } else {
      const newData = { ...data };
      const categoryData = newData.news;
      const updatedItems = categoryData.items.map((item) => {
        if (item.id === formData.id) {
          return { ...item, ...formData };
        }
        return item;
      });
      if (JSON.stringify(updatedItems) !== JSON.stringify(categoryData.items)) {
        newData.news = {
          ...categoryData,
          items: updatedItems,
        };
      }
      dispatch(changeData(newData));
      setFormData({
        id: findProduct.id,
        text: findProduct.text,
        date: findProduct.date,
        img: findProduct.img,
      });
    }

    dispatch(changeEquipmentPopup(false));
  };

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
          {!isNews ? "Изменить оборудование" : "Изменить новость"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-[18px]">
          <div>
            <ImageUploader />
          </div>

          <div className="space-y-2">
            <span className="w-full text-sm text-gray-900 ">
              {!isNews ? "Название" : "Дата "}
            </span>
            <Input
              type={!isNews ? "text" : "text"}
              name={!isNews ? "name" : "date"}
              className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
              value={!isNews ? formData.name : formData.date}
              onChange={handleInputChange}
            />
          </div>

          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {!isNews ? "Описание" : "Текст новости"}
          </label>
          <textarea
            id="message"
            name={!isNews ? "description" : "text"}
            rows="4"
            onChange={handleInputChange}
            className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            value={!isNews ? formData.description : formData.text}
          ></textarea>

          <button
            type="submit"
            className="w-full p-3 bg-gray-400 text-white rounded hover:bg-[#2F2F2F] transition-colors text-lg font-medium"
          >
            ИЗМЕНИТЬ
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangeEquipmentPopup;
