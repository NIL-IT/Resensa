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
        }
      : {
          name: findProduct?.name || "",
          description: findProduct?.description || "",
          min_param: findProduct?.min_param || "",
          max_param: findProduct?.max_param || "",
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

  // const urlToFile = async (url) => {
  //   try {
  //     // If the URL is from an external domain, skip the conversion
  //     if (!url.startsWith(window.location.origin)) {
  //       console.log("Skipping external image conversion:", url);
  //       return null;
  //     }

  //     const response = await fetch(url, { mode: "cors" });
  //     if (!response.ok) throw new Error("Failed to fetch image");

  //     const blob = await response.blob();
  //     const fileName = url.split("/").pop() || "image.jpg";
  //     return new File([blob], fileName, { type: blob.type });
  //   } catch (error) {
  //     console.warn("Error converting URL to File:", error);
  //     return null;
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const submitData = { ...formData };
      const imageFieldName = isNews
        ? "news_photo"
        : isSolutions
        ? "solution_photo"
        : "equipment_photo";

      // if (selectedFile) {
      // If a new file was selected, use it
      submitData[imageFieldName] = selectedFile;
      submitData["banner_photo"] = selectedFileBanner;
      // } else if (formData[imageFieldName]) {
      //   // If no new file was selected but we have an existing image URL, convert it
      //   const imageFile = await urlToFile(formData[imageFieldName]);
      //   submitData[imageFieldName] = imageFile;
      // }
      console.log(submitData, "submitData");
      if (!isNews) {
        const isEquipment = !isSolutions;
        if (isEquipment) {
          await dispatch(
            updateEquipment({ id: findProduct?.id, data: submitData })
          ).unwrap();
        } else if (isSolutions) {
          await dispatch(
            updateSolutions({ id: findProduct?.id, data: submitData })
          ).unwrap();
        }
      } else {
        await dispatch(
          updateNews({ id: findProduct?.id, data: submitData })
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
      <div className="bg-white h-[90%] overflow-y-scroll py-[38px] px-8 rounded-lg w-full max-w-[663px] relative">
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
