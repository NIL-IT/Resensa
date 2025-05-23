import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useDispatch } from "react-redux";
import {
  changeShowPopup,
  changeShowSearchPopup,
} from "../../utils/slice/userSlice";

const BurgerButton = ({ list, handleClickLink, isAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pageWidth, setPageWidth] = useState(0);
  useEffect(() => {
    setPageWidth(document.body.scrollWidth);
  }, []);
  const dispatch = useDispatch();
  const handleChangeShowPopup = (boolean) => dispatch(changeShowPopup(boolean));
  const handleClickLinkBurger = (i, path) => {
    setIsOpen(false);
    handleClickLink(i, path);
    handleChangeShowPopup(false);
  };
  return (
    <section className="md:hidden ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex absolute  top-[20px] flex-col justify-center items-center w-8 h-8 space-y-1.5 z-[80] ${
          isAdmin ? `right-5` : "right-10"
        }`}
      >
        <span
          className={`block w-6 h-0.5 bg-gray-400 transform transition-transform ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-400 ${isOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-400 transform transition-transform ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {isOpen && (
        <aside className="pt-10 fixed top-0 left-0 w-[100vw] bg-white shadow-lg p-4 z-50">
          <div className="flex flex-col  gap-4">
            <nav className="mt-2">
              <ul className="flex flex-col gap-2 text-sm">
                {list.map(({ name, path }, i) => (
                  <li
                    onClick={() => handleClickLinkBurger(i, path)}
                    key={i}
                    className="text-gray-400 hover:text-gray-300 cursor-pointer text-xl"
                  >
                    <Link to={path}>{name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex flex-col gap-2 text-gray-400 text-sm">
              <div className="flex flex-col gap-2 text-gray-400 text-sm">
                <a
                  target="_blank"
                  href="mailto:office@recensa.ru"
                  className="hover:text-gray-600"
                >
                  office@recensa.ru
                </a>
                <a
                  target="_blank"
                  href="tel:+73832092088"
                  className="hover:text-gray-600"
                >
                  +7 383 209 20 88
                </a>
              </div>

              <div className="flex items-center gap-4 mt-3 mb-3">
                <a
                  target="_blank"
                  href="https://t.me/+79231226699"
                  className="hover:opacity-80"
                >
                  <img
                    src="/icon/telegram.svg"
                    alt="telegram"
                    className="w-8"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://wa.me/+79231226699"
                  className="hover:opacity-80"
                >
                  <img src="/icon/wa.svg" alt="whatsapp" className="w-8" />
                </a>
                <button
                  onClick={() => dispatch(changeShowSearchPopup(true))}
                  className="hover:opacity-80"
                >
                  <img
                    src="/icon/search_btn.svg"
                    alt="search"
                    className="w-8"
                  />
                </button>
              </div>

              <Button
                onClick={() => handleChangeShowPopup(true)}
                text={"заказать звонок"}
                className="w-full hover:bg-gray-450 text-sm"
              />
            </div>
          </div>
        </aside>
      )}
    </section>
  );
};

export default BurgerButton;
