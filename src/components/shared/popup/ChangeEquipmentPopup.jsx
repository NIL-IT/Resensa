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
  document.body.style.overflowY = "hidden";
  const { itemId, equipment, solutions, news } = useSelector(
    ({ user }) => user
  );

  const itemsList = isNews ? news : isSolutions ? solutions : equipment;
  const findProduct = itemId
    ? itemsList?.find((item) => +item.id === +itemId)
    : null;

  const [formData, setFormData] = useState(() => {
    const baseData = isNews
      ? {
          title: findProduct?.title || "",
          date: findProduct?.date || "",
          text: findProduct?.text || "",
        }
      : isSolutions
      ? {
          name: findProduct?.name || "",
          description: findProduct?.description || "",
          sub_header: findProduct?.sub_header || "",
        }
      : {
          name: findProduct?.name || "",
          description: findProduct?.description || "",
          min_param: findProduct?.min_param || "",
          max_param: findProduct?.max_param || "",
          sub_header: findProduct?.sub_header || "",
        };

    if (findProduct?.image) {
      if (isNews) {
        baseData.news_photo = findProduct.image;
      } else if (isSolutions) {
        baseData.solution_photo = findProduct.image;
      } else {
        baseData.equipment_photo = findProduct.image;
      }
    }

    return baseData;
  });

  const [selectedFile, setSelectedFile] = useState();
  const [selectedFileBanner, setSelectedFileBanner] = useState();
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
      if (!isNews) {
        const isEquipment = !isSolutions;
        if (isEquipment) {
          const equipmentData = {
            name: formData.name,
            description: formData.description,
            image_card: selectedFile,
            image_banner: selectedFileBanner,
            min_param: parseInt(formData.min_param),
            max_param: parseInt(formData.max_param),
            sub_header: findProduct?.sub_header
          };
          await dispatch(
            updateEquipment({ id: findProduct?.id, data: equipmentData })
          ).unwrap();
        } else if (isSolutions) {
          const solutionData = {
            name: formData.name,
            description: formData.description,
            image_card: selectedFile,
            image_banner: selectedFileBanner,
            sub_header: findProduct?.sub_header
          };
          await dispatch(
            updateSolutions({ id: findProduct?.id, data: solutionData })
          ).unwrap();
        }
      } else {
        const newsData = {
          title: formData.title,
          text: formData.text,
          news_photo: selectedFile,
        };
        await dispatch(
          updateNews({ id: findProduct?.id, data: newsData })
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
      <div
        className="bg-white  h-[80%] py-[38px] px-8 
      rounded-lg w-full max-w-[663px]  overflow-scroll  relative"
      >
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
            ? "Изменить решения"
            : "Изменить оборудование"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-[18px]">
          {!isNews && (
            <div>
              <span className="w-full text-sm text-gray-900">
                Изображение для баннера
              </span>
              <ImageUploader
                banner={true}
                newsBanner={isNews ? true : false}
                findProduct={findProduct}
                onFileSelect={setSelectedFileBanner}
              />
            </div>
          )}

          <div>
            <span className="w-full text-sm text-gray-900">
              Изображение для карточки
            </span>
            <ImageUploader
              findProduct={findProduct}
              onFileSelect={setSelectedFile}
            />
          </div>
          {isNews ? (
            <>
              <div className="space-y-2">
                <span className="w-full text-sm text-gray-900">Название</span>
                <Input
                  type="text"
                  name="title"
                  className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <span className="w-full text-sm text-gray-900">Дата</span>
                <Input
                  type="text"
                  name="date"
                  className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
                  value={formData.date}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900"
                >
                  Текст новости
                </label>
                <textarea
                  id="message"
                  name="text"
                  rows="4"
                  onChange={handleInputChange}
                  className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
                  value={formData.text}
                ></textarea>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-2">
                <span className="w-full text-sm text-gray-900">Название</span>
                <Input
                  type="text"
                  name="name"
                  className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              {!isSolutions && (
                <>
                  <div className="space-y-2">
                    <span className="w-full text-sm text-gray-900">
                      Минимальный параметр
                    </span>
                    <Input
                      type="text"
                      name="min_param"
                      className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
                      value={formData.min_param}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="w-full text-sm text-gray-900">
                      Максимальный параметр
                    </span>
                    <Input
                      type="text"
                      name="max_param"
                      className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
                      value={formData.max_param}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="w-full text-sm text-gray-900">
                      Заголовок баннера 
                    </span>
                    <Input
                      type="text"
                      name="sub_header"
                      className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
                      value={formData.sub_header}
                      onChange={handleInputChange}
                    />
                  </div>
                </>
              )}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900"
                >
                  Описание
                </label>
                <textarea
                  id="message"
                  name="description"
                  rows="4"
                  onChange={handleInputChange}
                  className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
                  value={formData.description}
                ></textarea>
              </div>
            </>
          )}

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
