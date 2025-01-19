import React, { useState } from "react";
import Input from "../../ui/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewItemToData,
  changeData,
  changeShowAddNewItemPopup,
} from "../../../utils/slice/userSlice";

import ImageUploader from "../../ui/ImageUploader";
import { updateItemById } from "../../../utils/hooks/updateItemById";
import { useLocation } from "react-router-dom";

const ChangeEquipmentPopup = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const pathnameId = pathname.split("/").at(-1);

  const isNews = +pathnameId === +5;

  const { data } = useSelector(({ user }) => user);
  const getNewId = () => {
    if (isNews) {
      return data.news.items.length + 1;
    } else if (+pathnameId === 2) {
      // equipment
      return data.equipment.items.length + 1;
    } else if (+pathnameId === 3) {
      // solutions
      return data.solutions.items.length + 1;
    }
  };

  const [formData, setFormData] = useState(
    !isNews
      ? {
          id: getNewId(),
          name: "",
          description: "",
          img: "",
        }
      : {
          id: getNewId(),
          text: "",
          date: "",
          img: "",
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
    if (isNews) {
      dispatch(
        addNewItemToData({
          category: "news",
          item: formData,
        })
      );
      setFormData({
        id: getNewId(),
        text: "",
        date: "",
        img: "",
      });
    } else if (+pathnameId === 2) {
      // equipment
      dispatch(
        addNewItemToData({
          category: "equipment",
          item: formData,
        })
      );
      setFormData({
        id: getNewId(),
        name: "",
        description: "",
        img: "",
      });
    } else if (+pathnameId === 3) {
      // solutions
      dispatch(
        addNewItemToData({
          category: "solutions",
          item: formData,
        })
      );
      setFormData({
        id: getNewId(),
        name: "",
        description: "",
        img: "",
      });
    }
    dispatch(changeShowAddNewItemPopup(false));
  };
  const getTitle = (id) => {
    if (id == 2) return "Добавление нового обрудования";
    if (id == 3) return "Добавление нового решения";
    if (id == 5) return "Добавление новой новости";
  };
  return (
    <div className="fixed inset-0  flex items-center justify-center">
      <div className="bg-white py-[38px] px-8 rounded-lg w-full max-w-[663px]  relative">
        <button
          onClick={() => dispatch(changeShowAddNewItemPopup(false))}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-center text-[32px] font-medium leading-[40.8px] text-gray-400 mb-6">
          {getTitle(pathnameId)}
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
              type={"text"}
              name={!isNews ? "name" : "date"}
              className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
              value={!isNews ? formData.name : formData.date}
              placeholder={!isNews ? "" : "дд.мм.гг"}
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
