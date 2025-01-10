import React from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
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

export default function Header() {
  return (
    <header className=" container pt-[34px]">
      <div className="flex justify-between border-b border-gray-400 pb-[25px]">
        <Link to="/">
          <img src="/icon/logo.svg" alt="logo" />
        </Link>
        <div className="flex gap-[71px]">
          <div className="text-gray-400 flex gap-[27px] pt-[14px]">
            <a target="blank" href="mailto:office@recensa.ru">
              office@recensa.ru
            </a>
            <a target="blank" href="tel:89999999999">
              +7 999 999 99 99
            </a>
          </div>
          <div>
            <div className="flex-center gap-[45px] mb-[15px]">
              <div className="flex-center gap-[10px] ">
                <a href="#">
                  <img src="/icon/telegram.svg" alt="telegram" />
                </a>
                <a href="#">
                  <img src="/icon/wa.svg" alt="whatsapp" />
                </a>
                <a href="#">
                  <img src="/icon/search_btn.svg" alt="search" />
                </a>
              </div>
              <Button text={"заказать звонок"} />
            </div>
          </div>
        </div>
      </div>
      <nav className="flex justify-center mt-[25px]">
        <ul className="flex gap-[33px] text-base">
          {list.map(({ name, path }, i) => (
            <li key={i} className="text-gray-400 hover:text-gray-300">
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
