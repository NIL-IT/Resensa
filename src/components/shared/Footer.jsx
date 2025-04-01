import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  changeEquipmentId,
  changeIsAdmin,
  changeRoutingToOrders,
  changeShowPopup,
  changeSolutionsId,
} from "../../utils/slice/userSlice";
import useLatinFormat from "../../utils/hooks/useLatinFormat";

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
  const { isAdmin, equipment } = useSelector(({ user }) => user);

  const handleChangeShowPopup = (boolean) => dispatch(changeShowPopup(boolean));

  const handleClickLink = async (i, path) => {
    if (!isAdmin && +i == 4) {
      await dispatch(changeRoutingToOrders(true));
      dispatch(changeEquipmentId(equipment[0]));
      dispatch(changeSolutionsId(null));
      return navigate(`/equipment/${useLatinFormat(equipment[0].name)}`);
    }
    if (!isAdmin) {
      navigate(path);
      if (scrollTop) scrollTop();
      if (i === 4) {
        dispatch(changeRoutingToOrders(true));
      } else {
        dispatch(changeRoutingToOrders(false));
      }
    }
  };

  return (
    <footer className="pl-5 xs:pl-0 container py-[51px] xs:py-[56px] sm:py-[60px] md:py-[70px] lg:py-[75px] xl:py-[80px] 2xl:py-[82px] 3xl:py-[85px] flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 relative">
      <span itemScope itemType="https://schema.org/WPFooter" className="hidden">
        <meta itemProp="copyrightYear" content="2025" />
        <meta itemProp="copyrightHolder" content="Recensa" />
      </span>
      <div className="flex flex-col 2xl:flex-row gap-5 2xl:gap-20">
        <div>
          <div
            onClick={() => {
              if (scrollTop) scrollTop();
            }}
            className="cursor-pointer pb-2"
          >
            <Link
              to={"/"}
              target={isAdmin ? "_blank" : "_self"}
              className="max-w-[200px] xs:max-w-[210px] sm:max-w-[220px] md:max-w-[230px] lg:max-w-[240px] xl:max-w-[245px] 2xl:max-w-[247px] 3xl:max-w-[249px] max-h-[35px] xs:max-h-[36px] sm:max-h-[38px] md:max-h-[39px] lg:max-h-[40px] xl:max-h-[41px] 2xl:max-h-[41px] 3xl:max-h-[42px] mb-3 xs:mb-3.5 sm:mb-4 md:mb-4.5 lg:mb-5"
            >
              <img
                src="/icon/logo.svg"
                alt="Recensa - вентиляционное оборудование"
                title="Recensa - вентиляционное оборудование"
              />
            </Link>
          </div>
          <h5
            onClick={() => navigate("/privicy")}
            className="text-gray-900 text-sm xs:text-sm sm:text-base border-b cursor-pointer inline"
          >
            Политика конфиденциальности
          </h5>
        </div>
        <div className="order-3 lg:order-2">
          <nav className="flex flex-col sm:flex-row gap-8 xs:gap-10 sm:gap-[40px] md:gap-[45px] lg:gap-[50px] xl:gap-[54px] 2xl:gap-[56px] 3xl:gap-[58px]">
            <menu
              itemScope
              itemType="http://schema.org/SiteNavigationElement"
              className="flex flex-col gap-3 xs:gap-3.5 sm:gap-4 md:gap-4.5 lg:gap-5 text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl"
            >
              {navList.map(({ name, path }, i) => (
                <li
                  key={i}
                  className={`text-gray-400 hover:text-gray-300 cursor-pointer ${
                    isAdmin && i === 4 && "hidden"
                  }`}
                  onClick={() => handleClickLink(i, path)}
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
                </li>
              ))}
            </menu>
          </nav>
        </div>
      </div>

      <article
        className="flex flex-col
       gap-[15px] xs:gap-[18px] sm:gap-[20px] 
       md:gap-[22px] lg:gap-[24px] xl:gap-[25px] 
       2xl:gap-[25px] 3xl:gap-[26px] order-2 lg:order-3 justify-between"
      >
        <div className="flex flex-col 2xl:flex-row gap-6 xl:gap-10">
          <div className=" text-gray-400 text-base sm:text-lg font-normal space-y-1  xl:space-y-2">
            <p className=" ">г. Екатеринбург, ул. Свердлова,</p>
            <p> дом 11А, офис 512</p>
            <div>
              <a className=" " target="_blank" href="mailto:ufd@recensa.ru">
                ufd@recensa.ru
              </a>
            </div>
            <div className="text-gray-400 text-base sm:text-lg font-normal">
              <a
                target="_blank"
                href="tel:+79222059435"
                className="hover:text-gray-600"
              >
                +7 (922) 205-94-35
              </a>
            </div>
          </div>
          <div className=" text-gray-400 text-base sm:text-lg font-normal space-y-1  xl:space-y-2">
            <p>г. Новосибирск, ул. Серебренниковская,</p>
            <p>дом 14, офис 512</p>
            <div>
              <a target="_blank" href="mailto:office@recensa.ru">
                office@recensa.ru
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href="tel:+73832092088"
                className="hover:text-gray-600"
              >
                +7 (383) 209-20-88
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-[10px] lg:justify-end mb-5">
            <a href="https://t.me/+79231226699" target="_blank">
              <img src="/icon/telegram.svg" alt="telegram" title="Телеграмм" />
            </a>
            <a href="https://wa.me/+79231226699" target="_blank">
              <img src="/icon/wa.svg" alt="whatsapp" title="Ватсап" />
            </a>
          </div>

          <Button
            noLink={true}
            onClick={() => handleChangeShowPopup(true)}
            text={"заказать звонок"}
            className="  text-white text-xs font-normal py-2.5 xs:py-2.5 sm:py-3 px-[20px] xs:px-[22px] sm:px-[25px] md:px-[27px] lg:px-[30px] flex lg:justify-end 
           hover:bg-gray-450 w-fit lg:w-auto lg:ml-auto"
          />
        </div>
      </article>
      <a
        target="_blank"
        href="https://nil-it.ru"
        className="absolute bottom-3 xs:bottom-3.5 sm:bottom-4 md:bottom-4.5 lg:bottom-5 right-0 w-[120px] xs:w-[130px] sm:w-[140px] md:w-[145px] lg:w-[150px] xl:w-[153px] 2xl:w-[154px] 3xl:w-[156px] h-[20px] xs:h-[22px] sm:h-[24px] md:h-[25px] lg:h-[26px] xl:h-[26px] 2xl:h-[26px] 3xl:h-[27px]"
      >
        <img
          src="/img/nil.png"
          alt="nill"
          title="Компания разработающая сайт"
        />
      </a>
    </footer>
  );
}
