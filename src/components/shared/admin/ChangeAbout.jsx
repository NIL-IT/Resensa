import React, { useState, useEffect, useRef } from "react";
import Title from "../../ui/Title";
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
  });

  const bannerEditorRef = useRef(null);
  const aboutEditorRef = useRef(null);

  useEffect(() => {
    dispatch(getCompany());
    setFormData({
      about_main_screen: company?.about_main_screen || "",
      about_unique_screen: company?.about_unique_screen || "",
    });
  }, [dispatch, company]);

  useEffect(() => {
    let timer;
    if (showSuccess) {
      timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000); // Hide message after 3 seconds
    }
    return () => clearTimeout(timer);
  }, [showSuccess]);

  // Настройки для редактора Jodit

  // Обработчик изменения текста в редакторе
  const handleEditorChange = (content, editor) => {
    setFormData((prevData) => ({
      ...prevData,
      [editor]: content,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(updateCompany(formData));
    setShowSuccess(true);
  };

  return (
    <div className="w-full relative ">
      <span className="hidden md:block w-[1px] h-full absolute bg-gray-400 top-0 left-0 md:left-[-39px]" />
      <div className="flex items-center justify-between mb-4">
        <Title className="text-xl font-normal text-gray-400" text={title} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="pt-6 sm:pt-10 w-full max-h-[550px] overflow-y-auto pr-4 pb-10"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="about_main_screen"
              className="block text-sm font-medium text-gray-900"
            >
              Текст баннера
            </label>
            <JoditEditor
              ref={bannerEditorRef}
              value={formData.about_main_screen}
              config={{ ...config, height: 150 }}
              onBlur={(content) =>
                handleEditorChange(content, "about_main_screen")
              }
              tabIndex={1}
            />
          </div>
          <div className="space-y-2 w-full" style={{ marginTop: "40px" }}>
            <label
              htmlFor="about_unique_screen"
              className="block text-sm font-medium text-gray-900"
            >
              Текст страницы о компании
            </label>
            <JoditEditor
              ref={aboutEditorRef}
              value={formData.about_unique_screen}
              config={{ ...config, height: 200 }}
              onBlur={(content) =>
                handleEditorChange(content, "about_unique_screen")
              }
              tabIndex={2}
            />
          </div>
        </div>
        <div
          className="mt-5 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4"
          style={{ marginTop: "40px" }}
        >
          <button
            type="submit"
            className="flex w-full sm:w-[120px] justify-center rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-300 transition-colors mb-5 lg:mb-0"
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
