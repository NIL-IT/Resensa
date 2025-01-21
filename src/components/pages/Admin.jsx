import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../shared/Footer";
import AdminOrders from "../shared/admin/AdminOrders";
import AdminExit from "../shared/admin/AdminExit";
import AdminCategoryList from "../shared/admin/AdminCategoryList";
import FileUploader from "../ui/FileUploader";
import ChangeBanner from "../shared/admin/ChangeBanner";
import AdminNews from "../shared/admin/AdminNews";
import { useSelector } from "react-redux";
import { Menu, X } from "lucide-react";

const navList = [
  {
    id: "1",
    name: "заказы",
    component: (title) => <AdminOrders title={title} />,
    title: "все заказы",
  },
  {
    id: "2",
    name: "оборудование",
    component: (title) => (
      <AdminCategoryList title={title} category={`equipment`} />
    ),
    title: "все оборудование",
  },
  {
    id: "3",
    name: "решения",
    component: (title) => (
      <AdminCategoryList title={title} category={"solutions"} />
    ),
    title: "все решения",
  },
  {
    id: "4",
    name: "новости",
    component: (title) => <AdminNews />,
    title: "все новости",
  },
  {
    id: "5",
    name: "Баннер",
    component: (title) => <ChangeBanner title={title} />,
    title: "Изменить баннер",
  },
  {
    id: "6",
    name: "выйти",
    component: (title) => <AdminExit title={title} />,
    title: "выйти",
  },
];

export default function Admin() {
  const [activeLink, setActiveLink] = useState(null);
  const [isActiveUploadFile, setActiveUploaderFile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const changeShowUploadFile = () => {
    setActiveUploaderFile(!isActiveUploadFile);
  };

  const getDirectoryName = (pathname) => {
    const dirs = pathname.split("/");
    if (+dirs[2] === 1) return "Заказы";
    if (+dirs[2] === 2) return "Оборудование";
    if (+dirs[2] === 3) return "Решения";
    if (+dirs[2] === 4) return "Новости";
    if (+dirs[2] === 5) return "Баннер";
    if (+dirs[2] === 6) return "Выйти";
  };

  useEffect(() => {
    const getId = () => pathname.split("/").at(-1);
    setActiveLink(getId() - 1);
    setActiveUploaderFile(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 pt-[30px] flex-grow">
        <span className="text-gray-900 text-sm">
          Личный кабинет - {getDirectoryName(pathname)}
        </span>
        <section className="mt-6 border-y border-y-gray-400 flex flex-col md:flex-row">
          <nav className="md:w-[220px] border-b md:border-b-0 md:border-r border-gray-400">
            <div className="md:hidden flex justify-between items-center py-4">
              <span className="text-gray-400 text-lg uppercase">Меню</span>
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-400" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-400" />
                )}
              </button>
            </div>
            <ul
              className={`${
                isMobileMenuOpen ? "block" : "hidden"
              } md:block space-y-6 py-[30px] md:py-[105px] md:pb-[200px] pr-[20px] md:pr-[81px]`}
            >
              {navList.map(({ name, id }, i) => (
                <li key={id}>
                  <Link
                    to={`/admin/${id}`}
                    className={`text-gray-400 text-lg uppercase ${
                      i === activeLink
                        ? "border-b border-b-gray-400 font-normal"
                        : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {!isActiveUploadFile ? (
            <div className="pl-[20px] md:pl-[38px] pt-6 md:pt-12 w-full">
              {navList.map(({ title, id, component }) => (
                <div key={id}>
                  {pathname.split("/").at(-1) === id && component(title)}
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full h-[500px] flex-center flex-col justify-center">
              <FileUploader />
            </div>
          )}
        </section>

        <div className="flex flex-col md:flex-row justify-center w-full gap-4 mt-6 md:pl-44">
          <button className="group bg-gray-400 text-white py-[15px] px-[19px] text-base uppercase flex items-center justify-center gap-5">
            <svg
              className="w-[30px] h-[30px] group-hover:translate-y-1 transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            ВЫГРУЗИТЬ В EXCEL
          </button>
          <button
            onClick={() => changeShowUploadFile()}
            className="group bg-gray-400 text-white py-[15px] px-[19px] text-base uppercase flex items-center justify-center gap-5"
          >
            <svg
              className="w-[30px] h-[30px] group-hover:translate-y-1 transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
            ЗАГРУЗИТЬ ДАННЫЕ
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
