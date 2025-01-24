import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useDispatch } from "react-redux";
import {
  changeShowPopup,
  changeShowSearchPopup,
} from "../../utils/slice/userSlice";

const BurgerButton = ({ list, handleClickLink }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handleChangeShowPopup = (boolean) => dispatch(changeShowPopup(boolean));
  const handleClickLinkBurger = (i, path) => {
    setIsOpen(false);
    handleClickLink(i, path);
    handleChangeShowPopup(false);
  };
  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex absolute right-10 top-[-20px] flex-col justify-center items-center w-8 h-8 space-y-1.5 z-[80]"
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
        <div className="pt-10 fixed top-0 left-0 w-[100vw] bg-white shadow-lg p-4 z-50">
          <div className="flex flex-col  gap-4">
            <nav className="mt-2">
              <ul className="flex flex-col gap-2 text-sm">
                {list.map(({ name, path }, i) => (
                  <li
                    onClick={() => handleClickLinkBurger(i, path)}
                    key={i}
                    className="text-gray-400 hover:text-gray-300 cursor-pointer text-lg"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex flex-col gap-2 text-gray-400 text-sm">
              <div className="flex flex-col gap-2 text-gray-400 text-sm">
                <a
                  href="mailto:office@recensa.ru"
                  className="hover:text-gray-600"
                >
                  office@recensa.ru
                </a>
                <a href="tel:89999999999" className="hover:text-gray-600">
                  +7 999 999 99 99
                </a>
              </div>

              <div className="flex items-center gap-4 mt-3 mb-3">
                <a href="#" className="hover:opacity-80">
                  <img
                    src="/icon/telegram.svg"
                    alt="telegram"
                    className="w-8"
                  />
                </a>
                <a href="#" className="hover:opacity-80">
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
        </div>
      )}
    </div>
  );
};

export default BurgerButton;
