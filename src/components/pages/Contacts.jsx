import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import { useParams } from "react-router-dom";
import Button from "../ui/Button";
import { changeItemId, changeShowPopup } from "../../utils/slice/userSlice";
import { domen } from "../../utils/config";
import Footer from "../shared/Footer";
import { useDispatch } from "react-redux";
import SeoBlock from "../shared/SeoBlock";

const Contacts = ({ company }) => {
  const dispatch = useDispatch();
  document.body.style.overflowY = "auto";
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };
  scrollTop();
  const { pathname } = useParams();
  useEffect(() => {
    dispatch(changeItemId(null));
  }, [pathname]);
  return (
    <section className="min-h-screen flex flex-col">
      <SeoBlock
        url={`${domen}/contact`}
        description={company.contacts_hidden_seo_text}
        title={company.contacts_page_title}
      />
      <Helmet>
        <title>{company.contacts_page_title}</title>
        <meta name="description" content={company.contacts_page_description} />
        <meta name="keywords" content={company.contacts_page_keywords} />
        {/* <!-- Open Graph --> */}
        <meta property="og:title" content={company.contacts_page_title} />
        <meta property="og:url" content={`${domen}/contact`} />
        <link rel="canonical" href={`${domen}/contact`} />
      </Helmet>

      <div
        itemScope
        itemType="http://schema.org/Organization"
        className="hidden"
      >
        <meta itemProp="name" content="ООО РЕСЕНСА" />
        <meta itemProp="telephone" content="+7 999 999 99 99" />
        <meta itemProp="email" content="office@recensa.ru" />
        <meta itemProp="address" content="г. Москва, ул. Примерная, д. 1" />
        <meta itemProp="logo" content="/icon/logo.svg" />
        <meta itemProp="image" content="/img/newbanner_about.png" />
        <meta
          itemProp="description"
          content="Бренд RECENSA ориентирован на создание новой производственной базы, а также на поставку вентиляционного оборудования под собственной торговой маркой."
        />
        <meta
          itemProp="legalName"
          content="ООО РЕСЕНСА - производство и поставка вентиляционного оборудования"
        />
        <link itemProp="url" href={`${domen}/contact`} />
        <meta itemProp="sameAs" content="#" />
        <div
          itemProp="aggregateRating"
          itemScope
          itemType="https://schema.org/AggregateRating"
        >
          <meta itemProp="worstRating" content="1" />
          <meta itemProp="bestRating" content="5" />
          <meta itemProp="ratingValue" content="5" />
          <meta itemProp="ratingCount" content="1064" />
        </div>
      </div>
      <div className="container mx-auto pl-4 xs:pl-5 sm:pl-6 lg:pl-8 py-4 xs:py-5 sm:py-6 flex-grow border-b border-b-gray-400">
        <nav className="mb-4 xs:mb-5 sm:mb-6">
          <ul
            itemScope
            itemType="http://schema.org/BreadcrumbList"
            className="flex items-center gap-1 xs:gap-2 text-xs xs:text-sm text-gray-400"
          >
            <li
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/ListItem"
              className="hover:text-gray-600 transition-colors"
            >
              <a title="Основной раздел" href="/">
                <span itemProp="name">Главная</span>
                <meta itemProp="position" content="0" />
                <meta itemProp="item" content={`${domen}/`} />
              </a>
            </li>
            <span>{">"}</span>
            <li
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/ListItem"
            >
              <a className="pointer-events: none" title="Подраздел уровня 1">
                <span itemProp="name">Контакты</span>
                <meta itemProp="position" content="1" />
                <meta itemProp="item" content={`${domen}/contact`} />
              </a>
            </li>
          </ul>
        </nav>

        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-medium text-gray-400 mb-6 xs:mb-7 sm:mb-8">
          Контакты
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-7 lg:gap-28">
          <div className="space-y-4 ">
            <h3
              itemProp="address"
              itemScope
              itemType="http://schema.org/PostalAddress"
              className="text-lg xs:text-xl font-medium text-gray-400 mb-3 xs:mb-4"
            >
              Адрес
            </h3>
            <div className="space-y-3 xs:space-y-4">
              <div className="   text-sm xs:text-base text-gray-400 hover:text-gray-600 transition-colors space-y-8 xl:space-y-11">
                <div className="space-y-2 ">
                  <p>г. Новосибирск, ул. Серебренниковская, дом 14, офис 512</p>

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
                <div className="space-y-2">
                  <p>г. Екатеринбург, ул. Свердлова, дом 11А, офис 512</p>
                  <div>
                    <a
                      className=" "
                      target="_blank"
                      href="mailto:ufd@recensa.ru"
                    >
                      ufd@recensa.ru
                    </a>
                  </div>
                  <div className="">
                    <a
                      target="_blank"
                      href="tel:+79222059435"
                      className="hover:text-gray-600"
                    >
                      +7 (922) 205-94-35
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 xs:gap-4 pt-4 xs:pt-5 sm:pt-6 pb-2">
                <a
                  target="_blank"
                  href="https://wa.me/+79231226699"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/icon/wa.svg"
                    alt="WhatsApp"
                    title="WhatsApp"
                    className="w-6 xs:w-7 sm:w-8"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://t.me/+79231226699"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/icon/telegram.svg"
                    alt="Telegram"
                    title="Telegram"
                    className="w-6 xs:w-7 sm:w-8"
                  />
                </a>
              </div>

              <div className="">
                <Button
                  noLink={true}
                  onClick={() => dispatch(changeShowPopup(true))}
                  text="Заказать звонок"
                  className="w-full sm:w-auto  hover:bg-gray-450"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0">
            <h3 className="text-lg xs:text-xl font-medium text-gray-400 mb-3 xs:mb-4">
              Реквизиты компании:
            </h3>
            <div className="space-y-2 xs:space-y-3 text-sm xs:text-base text-gray-400">
              <p>ООО "РЕСЕНСА"</p>
              <p className="break-words">
                Юр. адрес: 630123, Новосибирская обл, Новосибирск г, Аэропорт
                ул, д. 2/3, офис 16
              </p>
              <p>ОГРН: 1235400003013</p>
              <p>ИНН: 5402076520</p>
              <p>КПП: 540201001</p>
              <p>Номер р/счета: 40702810012510001541</p>
              <p>Наименование банка: Филиал "Центральный" Банка ВТБ (ПАО)</p>
              <p>Адрес банка: г. Новосибирск</p>
              <p>БИК: 044525411</p>
              <p>Кор. счет: № 30101810145250000411</p>
              <p>Код по ОКВЭД: 46.69.9</p>
              <p>e-mail: office@recensa.ru</p>
              <p>Генеральный директор: Котенков Алексей Александрович</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contacts;
