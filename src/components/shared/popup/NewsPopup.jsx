import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeShowNewsPopup,
  changeItemId,
} from "../../../utils/slice/userSlice";

export default function NewsPopup() {
  const dispatch = useDispatch();
  const { itemId, news } = useSelector(({ user }) => user);
  const { title, text, date, image } = news.find(({ id }) => id === itemId);
  const listText = text.split("/");
  document.body.style.overflow = "hidden";
  const handleClose = () => {
    dispatch(changeShowNewsPopup(false));
    dispatch(changeItemId(null));
    document.body.style.overflow = "auto";
  };
  return (
    <article
      itemScope
      itemType="http://schema.org/Article"
      className="w-[90%] xs:w-[85%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-full max-w-[300px] xs:max-w-[400px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[922px] min-h-[80vh] fixed inset-0 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-y-scroll"
    >
      <div className="bg-white py-[25px] xs:py-[28px] sm:py-[30px] md:py-[33px] lg:py-[35px] xl:py-[38px] px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 rounded-lg w-full relative">
        <button
          onClick={() => handleClose()}
          className="fixed top-2 xs:top-2.5 sm:top-3 md:top-3.5 lg:top-4 right-2 xs:right-2.5 sm:right-3 md:right-3.5 lg:right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <div>
          <meta itemProp="headline" content="title" />
          <h2
            itemprop="name"
            className="text-lg xs:text-xl sm:text-2xl leading-[24px] xs:leading-[26px] sm:leading-[28px] md:leading-[30.6px] text-gray-400 mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8"
          >
            {title}
          </h2>
          <meta itemprop="url" content="https://new.recensa.ru/" />
          <meta itemprop="description" content={listText.map((p) => p)} />
          <div
            itemProp="image"
            itemScope
            itemType="http://schema.org/ImageObject"
            className="flex justify-center w-full"
          >
            <img
              itemProp="url contentUrl"
              content={title}
              className="min-w-full max-h-[150px] xs:max-h-[180px] sm:max-h-[200px] md:max-h-[250px] lg:h-[300px] object-contain"
              src={image}
              alt={title}
            />
          </div>
          <meta itemProp="datePublished" content={date} />
          <meta itemProp="dateModified" content={date} />
          <meta itemProp="inLanguage" content="ru-RU" />

          <p className="text-gray-900 text-sm xs:text-base block mt-4">
            {date}
          </p>
          <div
            itemProp="articleBody"
            className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 mt-4 xs:mt-5 sm:mt-6 md:mt-7 lg:mt-8"
          >
            {listText.map((p, i) => (
              <p key={i} className="text-gray-900 text-sm xs:text-base">
                {p}
              </p>
            ))}
          </div>
          <div
            itemProp="author"
            itemScope
            itemType="http://schema.org/Person"
          />
          <meta itemprop="name" content={"Recensa"} />
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
              <meta itemprop="width" content="200" />
              <meta itemprop="height" content="200" />
            </div>
            <meta itemprop="name" content="Recensa" />
            <meta itemprop="url" content="https://new.recensa.ru/" />
          </div>
        </div>
      </div>
      {/* рецензия материала */}
      <div itemScope="" itemtype="http://schema.org/Organization">
        <meta itemProp="name" content={title} />
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
        <div itemProp="review" itemtype="http://schema.org/Review" itemscope="">
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
    </article>
  );
}
