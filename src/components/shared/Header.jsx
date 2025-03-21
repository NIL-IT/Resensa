import React, { useState } from "react";
import Button from "../ui/Button";
import { Link, useNavigate } from "react-router-dom";
import BurgerButton from "../ui/BurgerButton";
import useLatinFormat from "../../utils/hooks/useLatinFormat";
import { useDispatch, useSelector } from "react-redux";
import {
  changeEquipmentId,
  changeIsAdmin,
  changeItemId,
  changeRoutingToOrders,
  changeShowPopup,
  changeShowSearchPopup,
  changeSolutionsId,
  getEquipmentById,
  getSolutionsById,
} from "../../utils/slice/userSlice";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAdmin, equipment, solutions } = useSelector(({ user }) => user);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navList = !isAdmin
    ? [
        { name: "Главная", path: "/" },
        { name: "Оборудование", path: "/equipment", dropdownItems: equipment },
        { name: "Решения", path: "/solutions", dropdownItems: solutions },
        { name: "О компании", path: "/about" },
        {
          name: "Заказы",
          path: `${
            isAdmin
              ? `/admin/1`
              : `/equipment/${useLatinFormat(equipment[0]?.name)}`
          }`,
        },
        { name: "Контакты", path: "/contact" },
      ]
    : [
        { name: "Главная", path: "/" },
        { name: "Оборудование", path: "/equipment", dropdownItems: equipment },
        { name: "Решения", path: "/solutions", dropdownItems: solutions },
        { name: "О компании", path: "/about" },
        {
          name: "Заказы",
          path: `${
            isAdmin
              ? `/admin/1`
              : `/equipment/${useLatinFormat(equipment[0]?.name)}`
          }`,
        },
        { name: "Контакты", path: "/contact" },
        { name: "Личный кабинет", path: "/admin/1" },
      ];

  const handleChangeShowPopup = (boolean) => dispatch(changeShowPopup(boolean));
  const handleClickLink = (i, path) => {
    if (!isAdmin && +i === 4) {
      dispatch(changeRoutingToOrders(true));
      dispatch(changeEquipmentId(equipment[0]));
      dispatch(changeSolutionsId(null));
      // return navigate(`/equipment/${useLatinFormat(equipment[0].name)}`);
    }
    if (!isAdmin) {
      // navigate(path);
      if (i === 4) {
        dispatch(changeRoutingToOrders(true));
      } else {
        dispatch(changeRoutingToOrders(false));
      }
    }
  };
  const handleClickItem = async (id, name) => {
    if (name === "Оборудование") {
      await dispatch(getEquipmentById(id));
      dispatch(changeSolutionsId(null));
    } else {
      await dispatch(getSolutionsById(id));
      dispatch(changeEquipmentId(null));
    }
    dispatch(changeItemId(id));
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
        <Link to={"/"} target={isAdmin ? "_blank" : "_self"} className="mb-0">
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
                href="tel:+73832092088"
                className="hover:text-gray-600"
              >
                +7 383 209 20 88
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
            {navList.map(({ name, path, dropdownItems }, i) => (
              <li
                itemProp="itemListElement"
                itemScope=""
                itemType="http://schema.org/ItemList"
                key={i}
                className={`relative text-gray-400 hover:text-gray-300 cursor-pointer pb-4 ${
                  isAdmin && i === 4 && "hidden"
                }`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {console.log(name)}
                <div className="flex items-center">
                  {isAdmin ? (
                    <Link
                      onClick={() => handleClickLink(i, path)}
                      target="_blank"
                      to={path}
                      itemProp="url"
                    >
                      {name}
                    </Link>
                  ) : (
                    <Link
                      onClick={() => handleClickLink(i, path)}
                      itemProp="url"
                      to={path}
                    >
                      {name}
                    </Link>
                  )}
                  {dropdownItems && dropdownItems.length > 0 && (
                    <>
                      {hoveredIndex === i ? (
                        <ChevronUp width={20} />
                      ) : (
                        <ChevronDown width={20} />
                      )}
                    </>
                  )}
                </div>

                {/* Dropdown menu */}
                {dropdownItems && dropdownItems.length > 0 && (
                  <div
                    className={`absolute left-0 top-[30px] w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-20  ${
                      hoveredIndex === i ? "block" : "hidden"
                    }`}
                  >
                    {dropdownItems.map((item, index) => (
                      <Link
                        key={index}
                        to={`${path}/${useLatinFormat(item.name)}`}
                        className="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                        onClick={() => handleClickItem(item.id, name)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
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
