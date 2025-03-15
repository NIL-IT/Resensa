import React, { useEffect, useState } from "react";
import Footer from "../shared/Footer";
import { useLocation } from "react-router-dom";
import useLatinFormat from "../../utils/hooks/useLatinFormat";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
export default function NewsPage({ news }) {
  const [findNews, setFindNews] = useState();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  useEffect(() => {
    const newsName = pathname.split("/")[2];
    if (!newsName || !news) return;
    const findNews = news.filter(({ title }) =>
      useLatinFormat(title.toLowerCase()).includes(newsName.toLowerCase())
    );

    setFindNews(findNews[0]);
  }, []);

  const handleNavigateNews = () => {
    Cookies.set("news_nav", "1", { expires: 1 });
  };
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };

  useEffect(() => {
    scrollTop();
  }, [pathname]);
  document.body.style.overflowY = "auto";
  return findNews ? (
    <>
      <article
        itemScope
        itemType="http://schema.org/Article"
        className={`
              container pt-[35px] md:pt-[40px] lg:pt-[50px] xl:pt-[60px] 2xl:pt-[70px] 3xl:pt-[80px] 
           `}
      >
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
                <meta itemProp="item" content="https://example.com/" />
              </a>
            </li>
            <span>{">"}</span>
            <li
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/ListItem"
              className="cursor-pointer"
            >
              <a
                title="Подраздел уровня 1"
                onClick={() => handleNavigateNews()}
                href="/"
              >
                <span itemProp="name">Новости</span>
                <meta itemProp="position" content="1" />
                <meta itemProp="item" content="https://example.com/contacts" />
              </a>
            </li>
            <span>{">"}</span>
            <li
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/ListItem"
            >
              <a className="pointer-events: none" title="Подраздел уровня 2">
                <span itemProp="name">{findNews.title}</span>
                <meta itemProp="position" content="1" />
                <meta itemProp="item" content="https://example.com/contacts" />
              </a>
            </li>
          </ul>
        </nav>
        <meta itemProp="headline" content="title" />
        <h1
          itemProp="name"
          className="text-lg xs:text-xl sm:text-2xl leading-[24px] xs:leading-[26px] sm:leading-[28px] md:leading-[30.6px] text-gray-400 mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8"
        >
          {findNews.title}
        </h1>
        <div className="flex justify-center w-full">
          <div className="w-full flex justify-center   md:w-[800px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1178px]">
            <div className="w-full">
              <div className="w-full">
                <meta
                  itemProp="url"
                  content={`https://new.recensa.ru/${useLatinFormat(
                    findNews.title
                  )}`}
                />
                <meta
                  itemProp="description"
                  content={
                    <div dangerouslySetInnerHTML={{ __html: findNews.text }} />
                  }
                />
                <div
                  itemProp="image"
                  itemScope
                  itemType="http://schema.org/ImageObject"
                  className="flex justify-center w-full"
                >
                  <img
                    style={{
                      backgroundPosition: "center center",
                      backgroundSize: "cover",
                      objectFit: "cover",
                    }}
                    itemProp="url contentUrl"
                    content={findNews.title}
                    className="w-[847px] h-[400px]"
                    src={findNews.image}
                    alt={findNews.title}
                  />
                </div>
                <meta itemProp="datePublished" content={findNews.date} />
                <meta itemProp="dateModified" content={findNews.date} />
                <meta itemProp="inLanguage" content="ru-RU" />

                <p className="text-gray-900 text-sm xs:text-base block mt-4">
                  {findNews.date}
                </p>
                <div
                  itemProp="articleBody"
                  className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 mt-4 xs:mt-5 sm:mt-6 md:mt-7 lg:mt-8"
                >
                  <div
                    className="text-gray-900 text-sm xs:text-base"
                    dangerouslySetInnerHTML={{ __html: findNews.text }}
                  />
                </div>
                <div
                  itemProp="author"
                  itemScope
                  itemType="http://schema.org/Person"
                />
                <meta itemProp="name" content={"Recensa"} />
                {/* Контактная информация о сайте/организации */}
                <div
                  className="hidden"
                  itemProp="publisher"
                  itemScope
                  itemType="https://schema.org/Organization"
                >
                  <div
                    itemProp="logo"
                    itemScope
                    itemType="https://schema.org/ImageObject"
                  >
                    <img itemProp="url" src="/logo.svg" alt="Recensa" />
                    <meta itemProp="width" content="200" />
                    <meta itemProp="height" content="200" />
                  </div>
                  <meta itemProp="name" content="Recensa" />
                  <meta itemProp="url" content="https://new.recensa.ru/" />
                </div>
              </div>
            </div>
            {/* рецензия материала */}
            <div itemScope="" itemType="http://schema.org/Organization">
              <meta itemProp="name" content={findNews.title} />
              <meta itemProp="description" content="description" />
              <link itemProp="url" href="https://new.recensa.ru/" />
              <div
                itemProp="aggregateRating"
                itemScope
                itemType="https://schema.org/AggregateRating"
              >
                <meta itemProp="worstRating" content="1" />
                <meta itemProp="bestRating" content="5" />
                <meta itemProp="ratingValue" content="4.6" />
                <meta itemProp="ratingCount" content="8864" />
              </div>
              <div
                itemProp="review"
                itemType="http://schema.org/Review"
                itemScope=""
              >
                <div
                  itemProp="author"
                  itemType="http://schema.org/Person"
                  itemScope=""
                >
                  <meta itemProp="name" content="Recensa" />
                  <link itemProp="url" href="https://new.recensa.ru/" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  ) : (
    <>Новости нет</>
  );
}
