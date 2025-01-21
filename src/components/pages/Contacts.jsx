import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import {
  changeRoutingToOrders,
  changeShowPopup,
} from "../../utils/slice/userSlice";
import { div } from "three/tsl";
import Footer from "../shared/Footer";

const Contacts = () => {
  return (
    <div>
      <div className="container px-4 sm:px-6 lg:px-8 py-6 border-b border-b-gray-400">
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-gray-600">
              Главная
            </Link>
            <span>{">"}</span>
            <span>Контакты</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-medium text-gray-400 mb-8">
          Контакты
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-xl font-medium text-gray-400 mb-4">Адрес</h2>
            <div className="space-y-4">
              <a
                href="mailto:office@recensa.ru"
                className="block text-gray-400 hover:text-gray-600"
              >
                office@recensa.ru
              </a>
              <a
                href="tel:+79999999999"
                className="block text-gray-400 hover:text-gray-600"
              >
                +7 999 999 99 99
              </a>
              <div className="flex gap-4 pb-6 pt-10">
                <a href="#" className="hover:opacity-80">
                  <img src="/icon/wa.svg" alt="WhatsApp" className="w-8" />
                </a>
                <a href="#" className="hover:opacity-80">
                  <img
                    src="/icon/telegram.svg"
                    alt="Telegram"
                    className="w-8"
                  />
                </a>
              </div>
              <Button
                onClick={() => dispatch(changeShowPopup(true))}
                text="Заказать звонок"
                className=""
              />
            </div>
          </div>

          {/* Right Column - Company Details */}
          <div>
            <h2 className="text-xl font-medium text-gray-400 mb-4">
              Реквизиты компании:
            </h2>
            <div className="space-y-2 text-gray-400">
              <p>ООО "РЕСЕНСА"</p>
              <p>ИНН: 1234567890</p>
              <p>КПП: 123456789</p>
              <p>ОГРН: 1234567890123</p>
              <p>Юридический адрес: г. Москва, ул. Примерная, д. 1</p>
              <p>Фактический адрес: г. Москва, ул. Примерная, д. 1</p>
              <p>Р/с: 12345678901234567890</p>
              <p>К/с: 12345678901234567890</p>
              <p>БИК: 123456789</p>
              <p>Банк: ПАО "Примербанк"</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
