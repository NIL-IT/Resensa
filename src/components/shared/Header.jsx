import React from "react";
import Button from "../ui/Button";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import BurgerButton from "../ui/BurgerButton";

import { useDispatch, useSelector } from "react-redux";
import {
  changeEquipmentId,
  changeIsAdmin,
  changeRoutingToOrders,
  changeShowPopup,
  changeShowSearchPopup,
  changeSolutionsId,
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
  // const handleClickImg = async (path) => {
  //   if (isAdmin) {
  //     Cookies.remove("access_token");
  //     await dispatch(changeIsAdmin(false));
  //     navigate("/auth");
  //   }
  // };
  const handleClickLink = (i, path) => {
    if (!isAdmin && +i === 4) {
      dispatch(changeRoutingToOrders(true));
      dispatch(changeEquipmentId(null));
      dispatch(changeSolutionsId(null));
      return navigate(`/equipment/${equipment[0].id}`);
    }
    if (!isAdmin) {
      navigate(path);
      if (i === 4) {
        dispatch(changeRoutingToOrders(true));
      } else {
        dispatch(changeRoutingToOrders(false));
      }
    }
  };

  return (
    <header
      className={`container sticky md:static top-0 left-0 bg-white z-[60]  min-w-[100vw] lg:min-w-[auto] pt-6 lg:pt-8 ${
        isAdmin && "flex justify-between"
      }`}
    >
      <div
        className={`pl-8 sm:pl-10 md:pl-14 lg:pl-0 flex justify-between items-center border-b border-gray-400 pb-6 ${
          isAdmin && "border-none"
        }`}
      >
        <Link
          to={isAdmin ? "https://new.recensa.ru/" : "/"}
          target={isAdmin ? "_blank" : "_self"}
          // onClick={() => handleClickImg("/")}
          className="mb-0"
        >
          <img
            className="w-[200px] sm:w-[230px] lg:w-[313px]"
            src="/icon/logo.svg"
            alt="logo"
            title="Перейти на главную страницу"
          />
        </Link>
        <BurgerButton
          isAdmin={isAdmin}
          list={navList}
          handleClickLink={handleClickLink}
        />
        {!isAdmin && (
          <div className="hidden pr-10 lg:pr-0 md:flex flex-col items-center lg:items-center gap-4 lg:gap-6 2xl:flex-row 2xl:items-center">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-gray-400 text-sm sm:text-base">
              <a
                target="_blank"
                href="mailto:office@recensa.ru"
                className="hover:text-gray-600 "
              >
                office@recensa.ru
              </a>
              <a
                target="_blank"
                href="tel:89999999999"
                className="hover:text-gray-600"
              >
                +7 999 999 99 99
              </a>
            </div>
            <div className="flex justify-normal  md:justify-between lg:justify-normal w-full lg:w-[auto] flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-4">
                <a target="_blank" href="#" className="hover:opacity-80">
                  <img
                    src="/icon/telegram.svg"
                    alt="telegram"
                    title="Телеграмм"
                    className="w-8 "
                  />
                </a>
                <a target="_blank" href="#" className="hover:opacity-80">
                  <img
                    src="/icon/wa.svg"
                    alt="whatsapp"
                    title="Ватсап"
                    className="w-8 "
                  />
                </a>
                <button
                  onClick={() => dispatch(changeShowSearchPopup(true))}
                  className="hover:opacity-80"
                >
                  <img
                    src="/icon/search_btn.svg"
                    alt="search"
                    title="Поиск"
                    className="w-8 "
                  />
                </button>
              </div>
              <Button
                onClick={() => handleChangeShowPopup(true)}
                text={"заказать звонок"}
                className="w-full sm:w-auto md:px-2 md:text-xs lg:py-[9px] lg:px-[20px] xl:px-[30px] hover:bg-gray-450 lg:text-sm"
                noLink={true}
              />
            </div>
          </div>
        )}
      </div>
      <aside>
        <nav
          itemScope
          itemType="http://schema.org/SiteNavigationElement"
          className="mt-6 hidden md:block"
        >
          <menu
            itemProp="about"
            itemScope
            itemType="http://schema.org/ItemList"
            className="flex flex-wrap justify-center xs:gap-x-4 lg:gap-x-8 gap-y-2 text-sm sm:text-base"
          >
            {navList.map(({ name, path }, i) => (
              <li
                itemProp="itemListElement"
                itemScope=""
                itemType="http://schema.org/ItemList"
                onClick={() => handleClickLink(i, path)}
                key={i}
                className={`text-gray-400 hover:text-gray-300 cursor-pointer ${
                  isAdmin && i === 4 && "hidden"
                }`}
              >
                {isAdmin ? (
                  <Link
                    target="_blank"
                    to={`https://new.recensa.ru${path}`}
                    itemProp="url"
                  >
                    {name}
                  </Link>
                ) : (
                  <Link itemProp="url">{name}</Link>
                )}
                <meta itemProp="name" content={name} />
              </li>
            ))}
          </menu>
        </nav>
      </aside>
    </header>
  );
}
