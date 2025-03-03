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
  console.log(findProduct);
  const [formData, setFormData] = useState(() => {
    const baseData = isNews
      ? {
          title: findProduct?.title || "",
          text: findProduct?.text || "",
        }
      : isSolutions
      ? {
          name: findProduct?.name || "",
          description: findProduct?.description || "",
          sub_header: findProduct?.sub_header || "",
          header: findProduct?.header || "",
          image_banner_alt: findProduct?.image_banner_alt || "",
          image_card_alt: findProduct?.image_card_alt || "",
          page_description: findProduct?.page_description || "",
          page_title: findProduct?.page_title || "",
          page_keywords: findProduct?.page_keywords || "",
        }
      : {
          name: findProduct?.name || "",
          description: findProduct?.description || "",
          min_param: findProduct?.min_param || "",
          max_param: findProduct?.max_param || "",
          sub_header: findProduct?.sub_header || "",
          header: findProduct?.header || "",
          image_banner_alt: findProduct?.image_banner_alt || "",
          image_card_alt: findProduct?.image_card_alt || "",
          page_description: findProduct?.page_description || "",
          page_title: findProduct?.page_title || "",
          page_keywords: findProduct?.page_keywords || "",
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
            sub_header: formData?.sub_header,
            header: formData?.header,
            image_banner_alt: formData?.image_banner_alt,
            image_card_alt: formData?.image_card_alt,
            page_description: formData?.page_description,
            page_title: formData?.page_title,
            page_keywords: formData?.page_keywords,
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
            sub_header: formData?.sub_header,
            header: formData?.header,
            image_banner_alt: formData?.image_banner_alt,
            image_card_alt: formData?.image_card_alt,
            page_description: formData?.page_description,
            page_title: formData?.page_title,
            page_keywords: formData?.page_keywords,
          };
          await dispatch(
            updateSolutions({ id: findProduct?.id, data: solutionData })
          ).unwrap();
        }
      } else {
        const newsData = selectedFile
          ? {
              title: formData.title,
              text: formData.text,
              news_photo: selectedFile,
            }
          : {
              title: formData.title,
              text: formData.text,
            };
        await dispatch(
          updateNews({ id: findProduct?.id, data: newsData })
        ).unwrap();
        setFormData({
          title: formData?.title || "",
          text: formData?.text || "",
        });
      }

      dispatch(changeEquipmentPopup(false));
      dispatch(changeItemId(null));
    } catch (error) {
      alert(
        error.message ||
          "Не удалось сохранить изменения. Возможно вы уже добавляли фотографию с таким названием, переименуйте и попробуйте снова."
      );
    }
  };

  return (
    <section className="fixed inset-0 flex items-center justify-center">
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
              <p className="w-full text-sm text-gray-900">
                Изображение для баннера
              </p>
              <ImageUploader
                banner={true}
                newsBanner={isNews ? true : false}
                findProduct={findProduct}
                onFileSelect={setSelectedFileBanner}
              />
              <div className="space-y-2 mt-2">
                <p className="w-full text-sm text-gray-900">
                  Alt-тег для баннера
                </p>
                <Input
                  type="text"
                  name="image_banner_alt"
                  className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
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
            <ImageUploader
              findProduct={findProduct}
              onFileSelect={setSelectedFile}
            />
            {!isNews && (
              <div className="space-y-2 mt-2">
                <p className="w-full text-sm text-gray-900">
                  Alt-тег для карточки
                </p>
                <Input
                  type="text"
                  name="image_card_alt"
                  className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
                  value={formData.image_card_alt}
                  onChange={handleInputChange}
                  placeholder="Описание изображения карточки"
                />
              </div>
            )}
          </div>

          {isNews ? (
            <>
              <div className="space-y-2">
                <p className="w-full text-sm text-gray-900">Название</p>
                <Input
                  type="text"
                  name="title"
                  className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
                  value={formData.title}
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
                <p className="w-full text-sm text-gray-900">Название</p>
                <Input
                  type="text"
                  name="name"
                  className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              {!isNews && (
                <>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm text-gray-900"
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
                  <div className="space-y-2">
                    <p className="w-full text-sm text-gray-900">
                      Заголовок баннера
                    </p>
                    <Input
                      type="text"
                      name="sub_header"
                      className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
                      value={formData.sub_header}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm text-gray-900"
                    >
                      Текст баннера
                    </label>
                    <textarea
                      id="message"
                      name="header"
                      rows="4"
                      onChange={handleInputChange}
                      className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
                      value={formData.header}
                    ></textarea>
                  </div>
                </>
              )}
              {!isSolutions && (
                <>
                  <div className="space-y-2">
                    <p className="w-full text-sm text-gray-900">
                      Минимальный параметр
                    </p>
                    <Input
                      type="text"
                      name="min_param"
                      className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
                      value={formData.min_param}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="w-full text-sm text-gray-900">
                      Максимальный параметр
                    </p>
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

              {/* SEO Information Section */}
              <div className="border-t border-gray-200 pt-4 space-y-[18px]">
                <h3 className="text-lg font-medium text-gray-900">
                  SEO информация
                </h3>

                <div className="space-y-2">
                  <p className="w-full text-sm text-gray-900">
                    Заголовок страницы (Title)
                  </p>
                  <Input
                    type="text"
                    name="page_title"
                    className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
                    value={formData.page_title}
                    onChange={handleInputChange}
                    placeholder="Заголовок для SEO"
                  />
                </div>

                <div className="space-y-2">
                  <p className="w-full text-sm text-gray-900">
                    Описание страницы (Description)
                  </p>
                  <textarea
                    name="page_description"
                    rows="3"
                    onChange={handleInputChange}
                    className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
                    value={formData.page_description}
                    placeholder="Краткое описание для поисковых систем"
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <p className="w-full text-sm text-gray-900">
                    Ключевые слова (Keywords)
                  </p>
                  <Input
                    type="text"
                    name="page_keywords"
                    className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
                    value={formData.page_keywords}
                    onChange={handleInputChange}
                    placeholder="Ключевые слова через запятую"
                  />
                </div>
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
    </section>
  );
};

export default ChangeEquipmentPopup;
