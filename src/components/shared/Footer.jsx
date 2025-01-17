import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { changeShowPopup } from "../../utils/slice/userSlice";
const { HOME, EQUIPMENT, SOLUTIONS, ABOUT, ORDERS, CONTACT } = ROUTES;
const list = [
  {
    name: "Главная",
    path: HOME,
  },
  {
    name: "Оборудование",
    path: EQUIPMENT,
  },
  {
    name: "Решения",
    path: SOLUTIONS,
  },
  {
    name: "О компании",
    path: ABOUT,
  },
  {
    name: "Заказы",
    path: ORDERS,
  },
  {
    name: "Контакты",
    path: CONTACT,
  },
];
export default function Footer({ scrollTop = null }) {
  const dispatch = useDispatch();
  const handleChangeShowPopup = (boolean) => dispatch(changeShowPopup(boolean));
  return (
    <footer className="container py-[85px] flex justify-between relative">
      <div>
        <Link onClick={scrollTop} to={"/"}>
          <div className="max-w-[249px] max-h-[42px] mb-5">
            <img src="/icon/logo.svg" alt="logo" />
          </div>
        </Link>
        <span className="text-gray-900 text-base">copyright</span>
      </div>
      <div>
        <nav className="flex gap-[58px]">
          <ul className="flex flex-col gap-5 text-xl">
            {list.map(({ name, path }, i) => (
              <li
                onClick={scrollTop}
                key={i}
                className="text-gray-400 hover:text-gray-300"
              >
                <Link to={path}>{name}</Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-5 text-xl">
            {list.map(({ name, path }, i) => (
              <li key={i} className="text-gray-400 hover:text-gray-300">
                <Link>Оборудование</Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-5 text-xl">
            {list.map(({ name, path }, i) => (
              <li key={i} className="text-gray-400 hover:text-gray-300">
                <Link>Решения</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex flex-col gap-[26px]">
        <div className="flex flex-col justify-end *:flex *:justify-end  text-gray-400 text-xl font-normal">
          <p>Адрес</p>
          <a target="blank" href="mailto:office@recensa.ru">
            office@recensa.ru
          </a>
          <a target="blank" href="tel:89999999999">
            +7 999 999 99 99
          </a>
        </div>
        <div className="flex gap-[10px] justify-end">
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
          className=" bg-white border border-gray-400 text-gray-400 text-xs font-normal py-3 px-[30px] flex justify-end hover:border-gray-200 hover:bg-gray-50"
        />
      </div>
      <div className="absolute bottom-5 right-0 w-[156px] h-[27px]">
        <img src="/img/nil.png" alt="" />
      </div>
    </footer>
  );
}
