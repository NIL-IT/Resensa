import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  changeIsAdmin,
  changeRoutingToOrders,
  changeShowPopup,
} from "../../utils/slice/userSlice";

const navList = [
  { name: "Главная", path: "/" },
  { name: "Оборудование", path: "/equipment" },
  { name: "Решения", path: "/solutions" },
  { name: "О компании", path: "/about" },
  { name: "Заказы", path: `/admin/1` },
  { name: "Контакты", path: "/contact" },
];

export default function Footer({ scrollTop = null }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAdmin } = useSelector(({ user }) => user);

  const handleChangeShowPopup = (boolean) => dispatch(changeShowPopup(boolean));
  const handleClickImg = async () => {
    if (isAdmin) {
      Cookies.remove("access_token");
      await dispatch(changeIsAdmin(false));
      navigate("/auth");
    } else {
      navigate("/");
    }
  };
  const handleClickLink = async (i, path) => {
    if (isAdmin) {
      if (i === 4) {
        // If admin clicks on "Заказы", navigate to admin panel
        navigate("/admin/1");
        dispatch(changeRoutingToOrders(true));
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

    if (scrollTop) scrollTop();
  };

  return (
    <footer className="container py-[50px] xs:py-[55px] sm:py-[60px] md:py-[70px] lg:py-[75px] xl:py-[80px] 2xl:py-[82px] 3xl:py-[85px] flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 relative">
      <div>
        <div
          onClick={() => {
            if (isAdmin) {
              Cookies.remove("access_token");
              dispatch(changeIsAdmin(false));
              navigate("/auth");
            } else {
              if (scrollTop) scrollTop();
              navigate("/");
            }
          }}
          className="cursor-pointer"
        >
          <div
            onClick={() => handleClickImg()}
            className="max-w-[200px] xs:max-w-[210px] sm:max-w-[220px] md:max-w-[230px] lg:max-w-[240px] xl:max-w-[245px] 2xl:max-w-[247px] 3xl:max-w-[249px] max-h-[35px] xs:max-h-[36px] sm:max-h-[38px] md:max-h-[39px] lg:max-h-[40px] xl:max-h-[41px] 2xl:max-h-[41px] 3xl:max-h-[42px] mb-3 xs:mb-3.5 sm:mb-4 md:mb-4.5 lg:mb-5"
          >
            <img src="/icon/logo.svg" alt="logo" />
          </div>
        </div>
        <span className="text-gray-900 text-sm xs:text-sm sm:text-base">
          copyright
        </span>
      </div>
      <div className="order-3 lg:order-2">
        <nav className="flex flex-col sm:flex-row gap-8 xs:gap-10 sm:gap-[40px] md:gap-[45px] lg:gap-[50px] xl:gap-[54px] 2xl:gap-[56px] 3xl:gap-[58px]">
          <ul className="flex flex-col gap-3 xs:gap-3.5 sm:gap-4 md:gap-4.5 lg:gap-5 text-base xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl">
            {navList.map(({ name, path }, i) => (
              <li
                key={i}
                className="text-gray-400 hover:text-gray-300 cursor-pointer"
                onClick={() => handleClickLink(i, path)}
              >
                {name}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-3 xs:gap-3.5 sm:gap-4 md:gap-4.5 lg:gap-5 text-base xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl">
            {navList.map(({ name }, i) => (
              <li key={i} className="text-gray-400 hover:text-gray-300">
                <span className="cursor-pointer">Оборудование</span>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-3 xs:gap-3.5 sm:gap-4 md:gap-4.5 lg:gap-5 text-base xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl">
            {navList.map(({ name }, i) => (
              <li key={i} className="text-gray-400 hover:text-gray-300">
                <span className="cursor-pointer">Решения</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex flex-col gap-[15px] xs:gap-[18px] sm:gap-[20px] md:gap-[22px] lg:gap-[24px] xl:gap-[25px] 2xl:gap-[25px] 3xl:gap-[26px] order-2 lg:order-3">
        <div className="flex flex-col lg:justify-end *:flex *:lg:justify-end text-gray-400 text-base xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl font-normal">
          <p>Адрес</p>
          <a target="blank" href="mailto:office@recensa.ru">
            office@recensa.ru
          </a>
          <a target="blank" href="tel:89999999999">
            +7 999 999 99 99
          </a>
        </div>
        <div className="flex gap-[10px] lg:justify-end">
          <a href="#">
            <img src="/icon/telegram.svg" alt="telegram" />
          </a>
          <a href="#">
            <img src="/icon/wa.svg" alt="whatsapp" />
          </a>
        </div>
        <Button
          onClick={() => handleChangeShowPopup(true)}
          text={"заказать звонок"}
          className="bg-white border border-gray-400 text-gray-400 text-xs font-normal py-2.5 xs:py-2.5 sm:py-3 px-[20px] xs:px-[22px] sm:px-[25px] md:px-[27px] lg:px-[30px] flex lg:justify-end hover:border-gray-200 hover:bg-gray-50 w-fit lg:w-auto lg:ml-auto"
        />
      </div>
      <div className="absolute bottom-3 xs:bottom-3.5 sm:bottom-4 md:bottom-4.5 lg:bottom-5 right-0 w-[120px] xs:w-[130px] sm:w-[140px] md:w-[145px] lg:w-[150px] xl:w-[153px] 2xl:w-[154px] 3xl:w-[156px] h-[20px] xs:h-[22px] sm:h-[24px] md:h-[25px] lg:h-[26px] xl:h-[26px] 2xl:h-[26px] 3xl:h-[27px]">
        <img src="/img/nil.png" alt="" />
      </div>
    </footer>
  );
}
