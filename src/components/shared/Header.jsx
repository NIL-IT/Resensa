import React from "react";
import Button from "../ui/Button";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import BurgerButton from "../ui/BurgerButton";

import { useDispatch, useSelector } from "react-redux";
import {
  changeIsAdmin,
  changeRoutingToOrders,
  changeShowPopup,
  changeShowSearchPopup,
} from "../../utils/slice/userSlice";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAdmin, equipment } = useSelector(({ user }) => user);
  const navList = [
    { name: "Главная", path: "/" },
    { name: "Оборудование", path: "/equipment" },
    { name: "Решения", path: "/solutions" },
    { name: "О компании", path: "/about" },
    { name: "Заказы", path: `/admin/1` },
    { name: "Контакты", path: "/contact" },
  ];
  const handleChangeShowPopup = (boolean) => dispatch(changeShowPopup(boolean));
  const handleClickImg = async (path) => {
    if (isAdmin) {
      Cookies.remove("access_token");
      await dispatch(changeIsAdmin(false));
      navigate("/auth");
    }
  };
  const handleClickLink = async (i, path) => {
    if (!isAdmin && +i == 4) {
      await dispatch(changeRoutingToOrders(true));
      navigate(`/product/${equipment[0].id}`);
    }
    if (isAdmin) {
      if (i === 4) {
        // If admin clicks on "Заказы", navigate to admin panel
        navigate("/admin/1");
      } else {
        // For any other link click by admin, log them out
        Cookies.remove("access_token");
        await dispatch(changeIsAdmin(false));
        navigate("/auth");
      }
    } else {
      // Non-admin users just navigate normally
      navigate(path);
      if (i === 4) {
        dispatch(changeRoutingToOrders(true));
      } else {
        dispatch(changeRoutingToOrders(false));
      }
    }
  };

  return (
    <header className="container sticky lg:static top-0 left-0 bg-white z-[60]  min-w-[100vw] lg:min-w-[auto] pt-6 lg:pt-8">
      <div className="pl-8 sm:pl-10 md:pl-14 lg:pl-0 flex justify-between items-center border-b border-gray-400 pb-6">
        <Link
          to={!isAdmin && "/"}
          onClick={() => handleClickImg("/")}
          className="mb-0"
        >
          <img
            className="w-[200px] sm:w-[230px] lg:w-[313px]"
            src="/icon/logo.svg"
            alt="logo"
          />
        </Link>
        <BurgerButton list={navList} handleClickLink={handleClickLink} />
        <div className="hidden pr-10 lg:pr-0 md:flex flex-col items-center lg:items-center gap-4 lg:gap-6 2xl:flex-row 2xl:items-center">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-gray-400 text-sm sm:text-base">
            <a
              target="blank"
              href="mailto:office@recensa.ru"
              className="hover:text-gray-600 "
            >
              office@recensa.ru
            </a>
            <a
              target="blank"
              href="tel:89999999999"
              className="hover:text-gray-600"
            >
              +7 999 999 99 99
            </a>
          </div>
          <div className="flex justify-normal  md:justify-between lg:justify-normal w-full flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-4">
              <a href="#" className="hover:opacity-80">
                <img src="/icon/telegram.svg" alt="telegram" className="w-8 " />
              </a>
              <a href="#" className="hover:opacity-80">
                <img src="/icon/wa.svg" alt="whatsapp" className="w-8 " />
              </a>
              <button
                onClick={() => dispatch(changeShowSearchPopup(true))}
                className="hover:opacity-80"
              >
                <img src="/icon/search_btn.svg" alt="search" className="w-8 " />
              </button>
            </div>
            <Button
              onClick={() => handleChangeShowPopup(true)}
              text={"заказать звонок"}
              className="w-full sm:w-auto md:px-2 md:text-xs lg:py-[9px] lg:px-[20px] xl:px-[30px] hover:bg-gray-450 lg:text-sm"
            />
          </div>
        </div>
      </div>
      <nav className="mt-6 hidden md:block">
        <ul className="flex flex-wrap justify-center xs:gap-x-4 lg:gap-x-8 gap-y-2 text-sm sm:text-base">
          {navList.map(({ name, path }, i) => (
            <li
              onClick={() => handleClickLink(i, path)}
              key={i}
              className="text-gray-400 hover:text-gray-300 cursor-pointer"
            >
              {name}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
