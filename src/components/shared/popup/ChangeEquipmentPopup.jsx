import React, { useState } from "react";
import Input from "../../ui/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  changeEquipmentPopup,
  updateNews,
  updateEquipment,
  updateSolutions,
  changeItemId,
} from "../../../utils/slice/userSlice";
import ImageUploader from "../../ui/ImageUploader";
import { useLocation } from "react-router-dom";

const ChangeEquipmentPopup = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const pathnameId = pathname.split("/").at(-1);
  const isNews = +pathnameId === 4;
  const isSolutions = +pathnameId === 3;

  const { itemId, equipment, solutions, news } = useSelector(
    ({ user }) => user
  );

  const itemsList = isNews ? news : isSolutions ? solutions : equipment;
  const findProduct = itemsList.find((item) => +item.id === +itemId);

  const [formData, setFormData] = useState(() => {
    const baseData = isNews
      ? {
          title: findProduct.title,
          date: findProduct.date,
          text: findProduct.text,
        }
      : {
          name: findProduct.name,
          description: findProduct.description,
        };

    if (isNews) {
      baseData.news_photo = findProduct.image;
    } else if (isSolutions) {
      baseData.solution_photo = findProduct.image;
    } else {
      baseData.equipment_photo = findProduct.image;
    }

    return baseData;
  });

  const [selectedFile, setSelectedFile] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const urlToFile = async (url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const fileName = url.split("/").pop() || "image.jpg";
      return new File([blob], fileName, { type: blob.type });
    } catch (error) {
      console.error("Error converting URL to File:", error);
      throw new Error("Failed to process image");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const submitData = { ...formData };
      const imageFieldName = isNews
        ? "news_photo"
        : isSolutions
        ? "solution_photo"
        : "equipment_photo";

      if (selectedFile) {
        // If a new file was selected, use it
        submitData[imageFieldName] = selectedFile;
      } else {
        // If no new file was selected, convert the URL from server to a File
        const imageFile = await urlToFile(formData[imageFieldName]);
        submitData[imageFieldName] = imageFile;
      }

      if (!isNews) {
        const isEquipment = equipment.some(
          (item) => item.id === findProduct.id
        );
        if (isEquipment) {
          await dispatch(
            updateEquipment({ id: findProduct.id, data: submitData })
          ).unwrap();
        } else {
          await dispatch(
            updateSolutions({ id: findProduct.id, data: submitData })
          ).unwrap();
          console.log({ id: findProduct.id, data: submitData }, "урааааа");
        }
      } else {
        await dispatch(
          updateNews({ id: findProduct.id, data: submitData })
        ).unwrap();
      }

      dispatch(changeEquipmentPopup(false));
      dispatch(changeItemId(null));
    } catch (error) {
      alert(error.message || "Не удалось сохранить изменения");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white py-[38px] px-8 rounded-lg w-full max-w-[663px] relative">
        <button
          onClick={() => {
            dispatch(changeEquipmentPopup(false));
            dispatch(changeItemId(null));
          }}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-center text-[32px] font-medium leading-[40.8px] text-gray-400 mb-6">
          {isNews
            ? "Изменить новость"
            : isSolutions
            ? "Изменить решение"
            : "Изменить оборудование"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-[18px]">
          <div>
            <ImageUploader
              findProduct={findProduct}
              onFileSelect={setSelectedFile}
            />
          </div>
          {isNews && (
            <div className="space-y-2">
              <span className="w-full text-sm text-gray-900 ">Название</span>
              <Input
                type="text"
                name="title"
                className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>
          )}
          <div className="space-y-2">
            <span className="w-full text-sm text-gray-900 ">
              {!isNews ? "Название" : "Дата "}
            </span>
            <Input
              type="text"
              name={!isNews ? "name" : "date"}
              className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
              value={!isNews ? formData.name : formData.date}
              onChange={handleInputChange}
            />
          </div>

          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            {!isNews ? "Описание" : "Текст новости"}
          </label>
          <textarea
            id="message"
            name={!isNews ? "description" : "text"}
            rows="4"
            onChange={handleInputChange}
            className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
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
