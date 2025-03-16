import React, { useState, useEffect, useRef, useCallback } from "react";
import Title from "../../ui/Title";
import Input from "../../ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { getCompany, updateCompany } from "../../../utils/slice/userSlice";
import JoditEditor from "jodit-react";
import { config } from "../../../utils/data";

export default function ChangeAbout({ title }) {
  const dispatch = useDispatch();
  const { company } = useSelector(({ user }) => user);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    about_main_screen: company?.about_main_screen || "",
    about_unique_screen: company?.about_unique_screen || "",
    about_page_title: company?.about_page_title || "",
    about_page_description: company?.about_page_description || "",
    about_hidden_seo_text: company?.about_hidden_seo_text || "",
    about_page_keywords: company?.about_page_keywords || "",
  });

  const bannerEditorRef = useRef(null);
  const aboutEditorRef = useRef(null);
  const formRef = useRef(null);

  // Конфигурация редактора с улучшенными настройками для вставки текста

  useEffect(() => {
    dispatch(getCompany());
  }, [dispatch]);

  useEffect(() => {
    if (company) {
      setFormData({
        about_main_screen: company?.about_main_screen || "",
        about_unique_screen: company?.about_unique_screen || "",
        about_page_title: company?.about_page_title || "",
        about_page_description: company?.about_page_description || "",
        about_hidden_seo_text: company?.about_hidden_seo_text || "",
        about_page_keywords: company?.about_page_keywords || "",
      });
    }
  }, [company]);

  useEffect(() => {
    let timer;
    if (showSuccess) {
      timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000); // Hide message after 3 seconds
    }
    return () => clearTimeout(timer);
  }, [showSuccess]);

  // Используем onChange вместо onBlur для более надежной работы
  const handleEditorChange = useCallback((content, name) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: content,
    }));
  }, []);

  // Обработчик изменений для обычных полей ввода
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCompany(formData));
    setShowSuccess(true);
  };

  return (
    <div className="w-full relative">
      <span className="hidden md:block w-[1px] h-full absolute bg-gray-400 top-0 left-0 md:left-[-39px]" />
      <div className="flex items-center justify-between mb-4">
        <Title className="text-xl font-normal text-gray-400" text={title} />
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="pt-6 sm:pt-10 w-full overflow-hidden pb-10"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="about_main_screen"
              className="block text-sm font-medium text-gray-900"
            >
              Текст баннера
            </label>
            <div className="editor-container">
              <JoditEditor
                ref={bannerEditorRef}
                value={formData.about_main_screen}
                config={{ ...config, height: 150 }}
                onChange={(content) =>
                  handleEditorChange(content, "about_main_screen")
                }
                tabIndex={1}
              />
            </div>
          </div>
          <div className="space-y-2 w-full mt-10">
            <label
              htmlFor="about_unique_screen"
              className="block text-sm font-medium text-gray-900"
            >
              Текст страницы о компании
            </label>
            <div className="editor-container">
              <JoditEditor
                ref={aboutEditorRef}
                value={formData.about_unique_screen}
                config={{ ...config, height: 150 }}
                onChange={(content) =>
                  handleEditorChange(content, "about_unique_screen")
                }
                tabIndex={2}
              />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-4 space-y-[18px]">
          <h3 className="text-lg font-medium text-gray-900">SEO информация</h3>

          <div className="space-y-2">
            <p className="w-full text-sm text-gray-900">
              Заголовок страницы (Title)
            </p>
            <Input
              type="text"
              name="about_page_title"
              className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
              value={formData.about_page_title}
              onChange={handleInputChange}
              placeholder="Заголовок для SEO"
            />
          </div>

          <div className="space-y-2">
            <p className="w-full text-sm text-gray-900">
              Описание страницы (Description)
            </p>
            <textarea
              name="about_page_description"
              rows="3"
              onChange={handleInputChange}
              className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
              value={formData.about_page_description}
              placeholder="Краткое описание для поисковых систем"
            ></textarea>
          </div>
          <div className="space-y-2">
            <p className="w-full text-sm text-gray-900">
              Текст для поисковых систем
            </p>
            <textarea
              name="about_hidden_seo_text"
              rows="3"
              onChange={handleInputChange}
              className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
              value={formData.about_hidden_seo_text}
              placeholder="Этот текст предназначен для поисковых систем и не виден пользователям. "
            ></textarea>
          </div>

          <div className="space-y-2">
            <p className="w-full text-sm text-gray-900">
              Ключевые слова (Keywords)
            </p>
            <Input
              type="text"
              name="about_page_keywords"
              className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
              value={formData.about_page_keywords}
              onChange={handleInputChange}
              placeholder="Ключевые слова через запятую"
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col  items-start sm:items-center gap-2 sm:gap-4">
          <button
            type="submit"
            className="flex w-full  justify-center rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-300 transition-colors mb-5 lg:mb-0"
          >
            Сохранить
          </button>
          {showSuccess && (
            <p className="text-green text-sm animate-fade-in mt-2 sm:mt-0">
              Данные успешно изменены
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
