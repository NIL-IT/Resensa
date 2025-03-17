import React, { useState, useEffect } from "react";
import Title from "../../ui/Title";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../ui/Input";
import {
  updateContactsSeo,
  updateHomeSeo,
  updateEquipmentSeo,
  updateSolutionSeo,
  getCompany,
} from "../../../utils/slice/userSlice";

export default function SeoPage({ title }) {
  const dispatch = useDispatch();
  const { company } = useSelector(({ user }) => user);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formDataMain, setFormDataMain] = useState({
    main_page_title: company.main_page_title || "",
    main_page_description: company.main_page_description || "",
    main_page_keywords: company.main_page_keywords || "",
    main_hidden_seo_text: company.main_hidden_seo_text || "",
  });
  const [formDataContacts, setFormDataContacts] = useState({
    contacts_page_title: company.contacts_page_title || "",
    contacts_page_description: company.contacts_page_description || "",
    contacts_page_keywords: company.contacts_page_keywords || "",
    contacts_hidden_seo_text: company.contacts_hidden_seo_text || "",
  });
  const [formDataEquipment, setFormDataEquipment] = useState({
    equipment_page_title: company.equipment_page_title || "",
    equipment_page_description: company.equipment_page_description || "",
    equipment_page_keywords: company.equipment_page_keywords || "",
    equipment_hidden_seo_text: company.equipment_hidden_seo_text || "",
  });
  const [formDataSolution, setFormDataSolution] = useState({
    solution_page_title: company.solution_page_title || "",
    solution_page_description: company.solution_page_description || "",
    solution_page_keywords: company.solution_page_keywords || "",
    solution_hidden_seo_text: company.solution_hidden_seo_text || "",
  });

  useEffect(() => {
    dispatch(getCompany());
  }, [dispatch]);

  useEffect(() => {
    if (company) {
      setFormDataMain((prevData) => ({
        ...prevData,
        main_page_title: company.main_page_title || "",
        main_page_description: company.main_page_description || "",
        main_page_keywords: company.main_page_keywords || "",
        main_hidden_seo_text: company.main_hidden_seo_text || "",
      }));
      setFormDataContacts((prevData) => ({
        ...prevData,
        contacts_page_title: company.contacts_page_title || "",
        contacts_page_description: company.contacts_page_description || "",
        contacts_page_keywords: company.contacts_page_keywords || "",
        contacts_hidden_seo_text: company.contacts_hidden_seo_text || "",
      }));
      setFormDataEquipment((prevData) => ({
        ...prevData,
        equipment_page_title: company.equipment_page_title || "",
        equipment_page_description: company.equipment_page_description || "",
        equipment_page_keywords: company.equipment_page_keywords || "",
        equipment_hidden_seo_text: company.equipment_hidden_seo_text || "",
      }));
      setFormDataSolution((prevData) => ({
        ...prevData,
        solution_page_title: company.solution_page_title || "",
        solution_page_description: company.solution_page_description || "",
        solution_page_keywords: company.solution_page_keywords || "",
        solution_hidden_seo_text: company.solution_hidden_seo_text || "",
      }));
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

  const handleInputChangeMain = (e) => {
    const { name, value } = e.target;
    setFormDataMain((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputChangeContacts = (e) => {
    const { name, value } = e.target;
    setFormDataContacts((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputChangeEquipment = (e) => {
    const { name, value } = e.target;
    setFormDataEquipment((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputChangeSolution = (e) => {
    const { name, value } = e.target;
    setFormDataSolution((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitMain = (e) => {
    e.preventDefault();
    dispatch(updateHomeSeo(formDataMain));
    setShowSuccess(true);
  };

  const handleSubmitContacts = (e) => {
    e.preventDefault();
    dispatch(updateContactsSeo(formDataContacts));
    setShowSuccess(true);
  };

  const handleSubmitEquipment = (e) => {
    e.preventDefault();
    console.log(formDataEquipment);
    dispatch(updateEquipmentSeo(formDataEquipment));
    setShowSuccess(true);
  };

  const handleSubmitSolution = (e) => {
    e.preventDefault();
    dispatch(updateSolutionSeo(formDataSolution));
    setShowSuccess(true);
  };

  return (
    <div className="w-full relative">
      <span className="hidden md:block w-[1px] h-full absolute bg-gray-400 top-0 left-0 md:left-[-39px]" />
      <div className="flex items-center justify-between mb-4">
        <Title className="text-xl font-normal text-gray-400" text={title} />
      </div>
      <form onSubmit={handleSubmitMain} className="pt-6 sm:pt-10 w-full ">
        {/* Main Page SEO Section */}
        <div className="pt-4 space-y-[18px]">
          <h3 className="text-lg font-medium text-gray-900">
            SEO информация для главной страницы
          </h3>

          <div className="space-y-2">
            <p className="w-full text-sm text-gray-900">
              Заголовок страницы (Title)
            </p>
            <Input
              type="text"
              name="main_page_title"
              className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
              value={formDataMain.main_page_title}
              onChange={handleInputChangeMain}
              placeholder="Заголовок для SEO"
            />
          </div>

          <div className="space-y-2">
            <p className="w-full text-sm text-gray-900">
              Описание страницы (Description)
            </p>
            <textarea
              name="main_page_description"
              rows="3"
              onChange={handleInputChangeMain}
              className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
              value={formDataMain.main_page_description}
              placeholder="Краткое описание для поисковых систем"
            ></textarea>
          </div>

          <div className="space-y-2">
            <p className="w-full text-sm text-gray-900">
              Текст для поисковых систем
            </p>
            <textarea
              name="main_hidden_seo_text"
              rows="3"
              onChange={handleInputChangeMain}
              className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
              value={formDataMain.main_hidden_seo_text}
              placeholder="Этот текст предназначен для поисковых систем и не виден пользователям."
            ></textarea>
          </div>

          <div className="space-y-2">
            <p className="w-full text-sm text-gray-900">
              Ключевые слова (Keywords)
            </p>
            <Input
              type="text"
              name="main_page_keywords"
              className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
              value={formDataMain.main_page_keywords}
              onChange={handleInputChangeMain}
              placeholder="Ключевые слова через запятую"
            />
          </div>
        </div>
        <div className="mt-5 flex flex-col  items-start sm:items-center gap-2 sm:gap-4">
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-300 transition-colors mb-5 lg:mb-0"
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
      <form
        onSubmit={handleSubmitContacts}
        className="pt-6 sm:pt-10 w-full pb-10"
      >
        {/* Contacts Page SEO Section */}
        <div className="border-t border-gray-200 pt-4 space-y-[18px] mt-6">
          <h3 className="text-lg font-medium text-gray-900">
            SEO информация для страницы контакты
          </h3>

          <div className="space-y-2">
            <p className="w-full text-sm text-gray-900">
              Заголовок страницы (Title)
            </p>
            <Input
              type="text"
              name="contacts_page_title"
              className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
              value={formDataContacts.contacts_page_title}
              onChange={handleInputChangeContacts}
              placeholder="Заголовок для SEO"
            />
          </div>

          <div className="space-y-2">
            <p className="w-full text-sm text-gray-900">
              Описание страницы (Description)
            </p>
            <textarea
              name="contacts_page_description"
              rows="3"
              onChange={handleInputChangeContacts}
              className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
              value={formDataContacts.contacts_page_description}
              placeholder="Краткое описание для поисковых систем"
            ></textarea>
          </div>

          <div className="space-y-2">
            <p className="w-full text-sm text-gray-900">
              Текст для поисковых систем
            </p>
            <textarea
              name="contacts_hidden_seo_text"
              rows="3"
              onChange={handleInputChangeContacts}
              className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
              value={formDataContacts.contacts_hidden_seo_text}
              placeholder="Этот текст предназначен для поисковых систем и не виден пользователям."
            ></textarea>
          </div>

          <div className="space-y-2">
            <p className="w-full text-sm text-gray-900">
              Ключевые слова (Keywords)
            </p>
            <Input
              type="text"
              name="contacts_page_keywords"
              className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
              value={formDataContacts.contacts_page_keywords}
              onChange={handleInputChangeContacts}
              placeholder="Ключевые слова через запятую"
            />
          </div>
        </div>

        {/* Submit Button and Success Message */}
        <div className="mt-5 flex flex-col  items-start sm:items-center gap-2 sm:gap-4">
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-300 transition-colors mb-5 lg:mb-0"
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
      <form
        onSubmit={handleSubmitEquipment}
        className="pt-6 sm:pt-10 w-full pb-10"
      >
        <div className="border-t border-gray-200 pt-4 space-y-[18px] mt-6">
          <h3 className="text-lg font-medium text-gray-900">
            SEO информация для страницы оборудования
          </h3>

          <div className="space-y-2">
            <p className="w-full text-sm text-gray-900">
              Заголовок страницы (Title)
            </p>
            <Input
              type="text"
              name="equipment_page_title"
              className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
              value={formDataEquipment.equipment_page_title}
              onChange={handleInputChangeEquipment}
              placeholder="Заголовок для SEO"
            />
          </div>

          <div className="space-y-2">
            <p className="w-full text-sm text-gray-900">
              Описание страницы (Description)
            </p>
            <textarea
              name="equipment_page_description"
              rows="3"
              onChange={handleInputChangeEquipment}
              className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
              value={formDataEquipment.equipment_page_description}
              placeholder="Краткое описание для поисковых систем"
            ></textarea>
          </div>

          <div className="space-y-2">
            <p className="w-full text-sm text-gray-900">
              Текст для поисковых систем
            </p>
            <textarea
              name="equipment_hidden_seo_text"
              rows="3"
              onChange={handleInputChangeEquipment}
              className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
              value={formDataEquipment.equipment_hidden_seo_text}
              placeholder="Этот текст предназначен для поисковых систем и не виден пользователям."
            ></textarea>
          </div>

          <div className="space-y-2">
            <p className="w-full text-sm text-gray-900">
              Ключевые слова (Keywords)
            </p>
            <Input
              type="text"
              name="equipment_page_keywords"
              className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
              value={formDataEquipment.equipment_page_keywords}
              onChange={handleInputChangeEquipment}
              placeholder="Ключевые слова через запятую"
            />
          </div>
        </div>

        {/* Submit Button and Success Message */}
        <div className="mt-5 flex flex-col  items-start sm:items-center gap-2 sm:gap-4">
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-300 transition-colors mb-5 lg:mb-0"
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
      <form
        onSubmit={handleSubmitSolution}
        className="pt-6 sm:pt-10 w-full pb-10"
      >
        <div className="border-t border-gray-200 pt-4 space-y-[18px] mt-6">
          <h3 className="text-lg font-medium text-gray-900">
            SEO информация для страницы решений
          </h3>

          <div className="space-y-2">
            <p className="w-full text-sm text-gray-900">
              Заголовок страницы (Title)
            </p>
            <Input
              type="text"
              name="solution_page_title"
              className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
              value={formDataSolution.solution_page_title}
              onChange={handleInputChangeSolution}
              placeholder="Заголовок для SEO"
            />
          </div>

          <div className="space-y-2">
            <p className="w-full text-sm text-gray-900">
              Описание страницы (Description)
            </p>
            <textarea
              name="solution_page_description"
              rows="3"
              onChange={handleInputChangeSolution}
              className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
              value={formDataSolution.solution_page_description}
              placeholder="Краткое описание для поисковых систем"
            ></textarea>
          </div>

          <div className="space-y-2">
            <p className="w-full text-sm text-gray-900">
              Текст для поисковых систем
            </p>
            <textarea
              name="solution_hidden_seo_text"
              rows="3"
              onChange={handleInputChangeSolution}
              className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
              value={formDataSolution.solution_hidden_seo_text}
              placeholder="Этот текст предназначен для поисковых систем и не виден пользователям."
            ></textarea>
          </div>

          <div className="space-y-2">
            <p className="w-full text-sm text-gray-900">
              Ключевые слова (Keywords)
            </p>
            <Input
              type="text"
              name="solution_page_keywords"
              className="block p-2.5 w-full text-base text-gray-400 font-normal bg-gray-50 rounded-lg border border-gray-300"
              value={formDataSolution.solution_page_keywords}
              onChange={handleInputChangeSolution}
              placeholder="Ключевые слова через запятую"
            />
          </div>
        </div>

        {/* Submit Button and Success Message */}
        <div className="mt-5 flex flex-col  items-start sm:items-center gap-2 sm:gap-4">
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-300 transition-colors mb-5 lg:mb-0"
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
