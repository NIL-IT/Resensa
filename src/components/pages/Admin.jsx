import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../shared/Footer";
import AdminOrders from "../shared/admin/AdminOrders";

import AdminExit from "../shared/admin/AdminExit";
import AdminCategoryList from "../shared/admin/AdminCategoryList";
import FileUploader from "../ui/FileUploader";
import { div } from "three/tsl";
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
    component: (title) => <AdminCategoryList title={title} category={"news"} />,
    title: "все новости",
  },
  {
    id: "5",
    name: "выйти",
    component: (title) => <AdminExit title={title} />,
    title: "выйти",
  },
];
export default function Admin() {
  const [activeLink, setActiveLink] = useState(null);
  const [isActiveUploadFile, setActiveUploaderFile] = useState(false);
  const { pathname } = useLocation();
  const changeShowUploadFile = () => {
    setActiveUploaderFile(!isActiveUploadFile);
  };
  useEffect(() => {
    const getId = () => pathname.split("/").at(-1);
    setActiveLink(getId() - 1);
    setActiveUploaderFile(false);
  }, [pathname]);
  return (
    <div>
      <div className="container pt-[30px]">
        <span className="text-gray-900 text-sm">Личный кабинет - Заказы</span>
        <section className="mt-6 border-y border-y-gray-400 flex">
          <nav>
            <ul className="space-y-6 py-[105px] pb-[200px] pr-[81px] border-r border-r-gray-400 w-[220px]">
              {navList.map(({ name, id }, i) => (
                <li key={id}>
                  <Link
                    to={`/admin/${id}`}
                    className={`text-gray-400 text-lg uppercase ${
                      i === activeLink
                        ? "border-b border-b-gray-400 font-normal"
                        : ""
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {!isActiveUploadFile ? (
            <div className="pl-[38px] pt-12 w-full">
              {navList.map(({ title, id, component }, i) => (
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
        <div className="flex justify-center w-full gap-4 mt-6 pl-44">
          <button className="group bg-gray-400 text-white py-[15px] pl-[19px] pr-[22px] text-base uppercase flex-center gap-5">
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
            className="group bg-gray-400 text-white py-[15px] pl-[19px] pr-[22px] text-base uppercase flex-center gap-5"
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
