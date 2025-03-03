import React, { useState } from "react";
import Input from "../../ui/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  changeShowAddNewItemPopup,
  createNews,
  createEquipment,
  createSolutions,
  getAllNews,
  getAllEquipment,
  getAllSolutions,
} from "../../../utils/slice/userSlice";

import ImageUploader from "../../ui/ImageUploader";
import { useLocation } from "react-router-dom";

const AddNewItem = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const pathnameId = pathname.split("/").at(-1);
  const isNews = +pathnameId === +4;
  const isSolutions = +pathnameId === +3;
  const [error, setError] = useState("");

  const [formData, setFormData] = useState(() => {
    if (isNews) {
      return {
        title: "",
        text: "",
      };
    } else if (isSolutions) {
      return {
        name: "",
        description: "",
        sub_header: "",
        header: "",
        image_banner_alt: "",
        image_card_alt: "",
        page_description: "",
        page_title: "",
        page_keywords: "",
      };
    } else {
      return {
        name: "",
        description: "",
        min_param: "",
        max_param: "",
        sub_header: "",
        header: "",
        image_banner_alt: "",
        image_card_alt: "",
        page_description: "",
        page_title: "",
        page_keywords: "",
      };
    }
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileBanner, setSelectedFileBanner] = useState(null);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isNews) {
        if (!formData.title || !formData.text || !selectedFile) {
          setError(
            "Пожалуйста, заполните все обязательные поля и загрузите изображение"
          );
          return;
        }
        const newsData = {
          title: formData.title,
          text: formData.text,
          news_photo: selectedFile,
        };
        await dispatch(createNews(newsData)).unwrap();
        await dispatch(getAllNews());
        setFormData({ title: "", text: "" });
      } else if (+pathnameId === 2) {
        if (
          !formData.name ||
          !formData.description ||
          !selectedFile ||
          !selectedFileBanner ||
          !formData.min_param ||
          !formData.max_param ||
          !formData.header ||
          !formData.sub_header
        ) {
          setError(
            "Пожалуйста, заполните все обязательные поля и загрузите изображение"
          );
          return;
        }
        const equipmentData = {
          name: formData.name,
          description: formData.description,
          image_card: selectedFile,
          image_banner: selectedFileBanner,
          min_param: parseInt(formData.min_param),
          max_param: parseInt(formData.max_param),
          sub_header: formData.sub_header,
          header: formData.header,
          image_banner_alt: formData.image_banner_alt,
          image_card_alt: formData.image_card_alt,
          page_description: formData.page_description,
          page_title: formData.page_title,
          page_keywords: formData.page_keywords,
        };
        await dispatch(createEquipment(equipmentData)).unwrap();
        await dispatch(getAllEquipment());
        setFormData({
          name: "",
          description: "",
          min_param: "",
          max_param: "",
          sub_header: "",
          header: "",
          image_banner_alt: "",
          image_card_alt: "",
          page_description: "",
          page_title: "",
          page_keywords: "",
        });
      } else if (+pathnameId === 3) {
        if (
          !formData.name ||
          !formData.description ||
          !selectedFile ||
          !selectedFileBanner ||
          !formData.header ||
          !formData.sub_header
        ) {
          setError(
            "Пожалуйста, заполните все обязательные поля и загрузите изображение"
          );
          return;
        }
        const solutionData = {
          name: formData.name,
          description: formData.description,
          image_card: selectedFile,
          image_banner: selectedFileBanner,
          sub_header: formData.sub_header,
          header: formData.header,
          image_banner_alt: formData.image_banner_alt,
          image_card_alt: formData.image_card_alt,
          page_description: formData.page_description,
          page_title: formData.page_title,
          page_keywords: formData.page_keywords,
        };
        await dispatch(createSolutions(solutionData)).unwrap();
        await dispatch(getAllSolutions());
        setFormData({
          name: "",
          description: "",
          sub_header: "",
          header: "",
          image_banner_alt: "",
          image_card_alt: "",
          page_description: "",
          page_title: "",
          page_keywords: "",
        });
      }

      setSelectedFile(null);
      dispatch(changeShowAddNewItemPopup(false));
    } catch (error) {
      console.error("Failed to create item:", error);
      const type = isNews
        ? "новость"
        : +pathnameId === 2
        ? "оборудование"
        : "решение";
      alert(
        `Не удалось создать ${type}. Возможно вы уже добавляли фото с таким названием, переименуйте и попробуйте ещё раз`
      );
    }
  };

  const getTitle = (id) => {
    if (id == 2) return "Добавление нового обрудования";
    if (id == 3) return "Добавление нового решения";
    if (id == 4) return "Добавление новой новости";
  };

  return (
    <section
      className="fixed inset-0 flex items-center justify-center px-4 xs:px-5 
    sm:px-6 md:px-7 lg:px-8"
    >
      <div
        className="bg-white py-[25px] xs:py-[28px] sm:py-[30px] md:py-[33px] 
      lg:py-[35px] xl:py-[38px] px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 
      rounded-lg w-[90%] xs:w-[85%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-full 
      max-w-[300px] xs:max-w-[350px] sm:max-w-[450px] md:max-w-[550px] 
      lg:max-w-[600px] xl:max-w-[663px] relative overflow-y-scroll max-h-[85%]"
      >
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
          {!isNews && (
            <div>
              <p className="w-full text-sm text-gray-900">
                Изображение для баннера
              </p>
              <ImageUploader
                banner={true}
                onFileSelect={setSelectedFileBanner}
              />
              <div className="space-y-2 mt-2">
                <p className="w-full text-xs xs:text-sm text-gray-900">
                  Alt-тег для баннера
                </p>
                <Input
                  type="text"
                  name="image_banner_alt"
                  className="block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
                  value={formData.image_banner_alt}
                  onChange={handleInputChange}
                  placeholder="Описание изображения баннера"
                />
              </div>
            </div>
          )}
          <div>
            <p className="w-full text-sm text-gray-900">
              Изображение для карточки
            </p>
            <ImageUploader onFileSelect={setSelectedFile} />
            {!isNews && (
              <div className="space-y-2 mt-2">
                <p className="w-full text-xs xs:text-sm text-gray-900">
                  Alt-тег для карточки
                </p>
                <Input
                  type="text"
                  name="image_card_alt"
                  className="block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
                  value={formData.image_card_alt}
                  onChange={handleInputChange}
                  placeholder="Описание изображения карточки"
                />
              </div>
            )}
          </div>
          <div className="space-y-2">
            <p className="w-full text-xs xs:text-sm text-gray-900">Название</p>
            <Input
              type="text"
              name={!isNews ? "name" : "title"}
              className="block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
              value={!isNews ? formData.name : formData.title}
              onChange={handleInputChange}
            />
          </div>

          <label
            htmlFor="message"
            className="block w-full text-xs xs:text-sm text-gray-900"
          >
            {!isNews
              ? "Описание"
              : "Текст новости. Вставьте знак / чтобы сделать абзац"}
          </label>
          <textarea
            id="message"
            name={!isNews ? "description" : "text"}
            rows="4"
            onChange={handleInputChange}
            className="block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
            value={!isNews ? formData.description : formData.text}
          ></textarea>
          {!isNews && (
            <>
              <div className="space-y-2">
                <p className="w-full text-xs xs:text-sm text-gray-900">
                  Заголовок баннера
                </p>
                <Input
                  type="text"
                  name="sub_header"
                  className="block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
                  value={formData.sub_header}
                  onChange={handleInputChange}
                />
              </div>
              <label
                htmlFor="message"
                className="block w-full text-xs xs:text-sm text-gray-900"
              >
                Текст баннера
              </label>
              <textarea
                id="message"
                name="header"
                rows="4"
                onChange={handleInputChange}
                className="block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
                value={formData.header}
              ></textarea>
            </>
          )}
          {+pathnameId === 2 && (
            <div className="flex w-full justify-between gap-4 pb-5">
              <div className="w-[48%] space-y-2">
                <p className="block w-full text-xs xs:text-sm text-gray-900">
                  От
                </p>
                <Input
                  required={true}
                  type="number"
                  name="min_param"
                  value={formData.min_param}
                  onChange={handleInputChange}
                  className=" block p-2 xs:p-2.5 w-[300px]
                  text-sm xs:text-base text-gray-400 
                  font-normal bg-gray-50 rounded-lg 
                  border 
                  border-gray-300"
                />
              </div>
              <div className="w-[48%] space-y-2">
                <p className="block w-full text-xs xs:text-sm text-gray-900">
                  До
                </p>
                <Input
                  required={true}
                  type="number"
                  name="max_param"
                  value={formData.max_param}
                  className="block p-2 xs:p-2.5 w-full] 
                  text-sm xs:text-base text-gray-400 
                  font-normal bg-gray-50 rounded-lg border
                   border-gray-300"
                  onChange={handleInputChange}
                />
              </div>
            </div>
          )}

          {!isNews && (
            <div className="border-t border-gray-200 pt-4 space-y-[12px] xs:space-y-[14px] sm:space-y-[15px] md:space-y-[16px] lg:space-y-[18px]">
              <h3 className="text-lg font-medium text-gray-900">
                SEO информация
              </h3>

              <div className="space-y-2">
                <p className="w-full text-xs xs:text-sm text-gray-900">
                  Заголовок страницы (Title)
                </p>
                <Input
                  type="text"
                  name="page_title"
                  className="block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
                  value={formData.page_title}
                  onChange={handleInputChange}
                  placeholder="Заголовок для SEO"
                />
              </div>

              <div className="space-y-2">
                <p className="w-full text-xs xs:text-sm text-gray-900">
                  Описание страницы (Description)
                </p>
                <textarea
                  name="page_description"
                  rows="3"
                  onChange={handleInputChange}
                  className="block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
                  value={formData.page_description}
                  placeholder="Краткое описание для поисковых систем"
                ></textarea>
              </div>

              <div className="space-y-2">
                <p className="w-full text-xs xs:text-sm text-gray-900">
                  Ключевые слова (Keywords)
                </p>
                <Input
                  type="text"
                  name="page_keywords"
                  className="block p-2 xs:p-2.5 w-full text-sm xs:text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
                  value={formData.page_keywords}
                  onChange={handleInputChange}
                  placeholder="Ключевые слова через запятую"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full p-2 xs:p-2.5 sm:p-2.5 md:p-3 bg-gray-400 text-white rounded hover:bg-[#2F2F2F] transition-colors text-base xs:text-base sm:text-lg font-medium"
          >
            Добавить
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddNewItem;
