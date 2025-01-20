import React, { useState } from "react";
import Input from "../../ui/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewItemToData,
  changeData,
  changeShowAddNewItemPopup,
  createNews,
} from "../../../utils/slice/userSlice";

import ImageUploader from "../../ui/ImageUploader";
import { updateItemById } from "../../../utils/hooks/updateItemById";
import { useLocation } from "react-router-dom";

const ChangeEquipmentPopup = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const pathnameId = pathname.split("/").at(-1);

  const isNews = +pathnameId === +4;

  const { data, news } = useSelector(({ user }) => user);
  // const getNewId = () => {
  //   if (isNews) {
  //     return data.news.items.length + 1;
  //   } else if (+pathnameId === 2) {
  //     // equipment
  //     return data.equipment.items.length + 1;
  //   } else if (+pathnameId === 3) {
  //     // solutions
  //     return data.solutions.items.length + 1;
  //   }
  // };

  const [formData, setFormData] = useState(
    !isNews
      ? {
          name: "",
          description: "",
          img: "",
        }
      : {
          title: "",
          text: "",
          news_photo: "",
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
      dispatch(createNews(formData));
      setFormData({
        title: "",
        text: "",
        news_photo: "",
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
    if (id == 4) return "Добавление новой новости";
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8">
      <div className="bg-white py-[25px] xs:py-[28px] sm:py-[30px] md:py-[33px] lg:py-[35px] xl:py-[38px] px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 rounded-lg w-[90%] xs:w-[85%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-full max-w-[300px] xs:max-w-[350px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[600px] xl:max-w-[663px] relative">
        <button
          onClick={() => dispatch(changeShowAddNewItemPopup(false))}
          className="absolute top-2 xs:top-2.5 sm:top-3 md:top-3.5 lg:top-4 right-2 xs:right-2.5 sm:right-3 md:right-3.5 lg:right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-center text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-[32px] font-medium leading-[30px] xs:leading-[32px] sm:leading-[35px] md:leading-[38px] lg:leading-[40.8px] text-gray-400 mb-4 xs:mb-4.5 sm:mb-5 md:mb-5.5 lg:mb-6">
          {getTitle(pathnameId)}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-[12px] xs:space-y-[14px] sm:space-y-[15px] md:space-y-[16px] lg:space-y-[18px]"
        >
          <div>
            <ImageUploader />
          </div>

          <div className="space-y-2">
            <span className="w-full text-xs xs:text-sm text-gray-900">
              Название
            </span>
            <Input
              type={"text"}
              name={"title"}
              className="block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>

          <label
            htmlFor="message"
            className="block mb-1 xs:mb-2 text-xs xs:text-sm font-medium text-gray-900"
          >
            {!isNews ? "Описание" : "Текст новости"}
          </label>
          <textarea
            id="message"
            name={!isNews ? "description" : "text"}
            rows="4"
            onChange={handleInputChange}
            className="block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
            value={!isNews ? formData.description : formData.text}
          ></textarea>

          <button
            type="submit"
            className="w-full p-2 xs:p-2.5 sm:p-2.5 md:p-3 bg-gray-400 text-white rounded hover:bg-[#2F2F2F] transition-colors text-base xs:text-base sm:text-lg font-medium"
          >
            ИЗМЕНИТЬ
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangeEquipmentPopup;
