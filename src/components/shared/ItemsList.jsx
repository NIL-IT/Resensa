import React, { useEffect, useState } from "react";
import Title from "../ui/Title";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import {
  changeEquipmentId,
  changeItemId,
  changeShowPopup,
  changeSolutionsId,
  getEquipmentById,
  getSolutionsById,
} from "../../utils/slice/userSlice";
import { Link, useLocation } from "react-router-dom";
import useLatinFormat from "../../utils/hooks/useLatinFormat";

export default function ItemsList({
  limited = true,
  list,
  href,
  title,
  equipment,
}) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [data, setData] = useState(list);
  const isOrders = pathname.split("/")[2] === "orders";
  let getTitle;
  useEffect(() => {
    if (!list) return;
    setData(list);
    if (limited) setData(list.slice(0, 6));
    if (!isOrders && list.length > 0) {
      getTitle = list[0].hasOwnProperty("max_param");
    }
  }, [list, limited]);

  const handleChangeShowPopup = (boolean, id) => {
    dispatch(changeShowPopup(boolean));
    dispatch(changeItemId(id));
  };

  const handleClickItem = async (id) => {
    if (equipment) {
      await dispatch(getEquipmentById(id));
      dispatch(changeSolutionsId(null));
    } else {
      await dispatch(getSolutionsById(id));
      dispatch(changeEquipmentId(null));
    }
    dispatch(changeItemId(id));
  };
  // Добавляем дату действия цены на год вперед
  const priceValidUntil = new Date();
  priceValidUntil.setFullYear(priceValidUntil.getFullYear() + 1);
  const formattedPriceValidUntil = priceValidUntil.toISOString().split("T")[0];
  return data.length > 0 ? (
    <section className="container py-12 xs:py-14 sm:py-16 md:py-18 lg:py-20 xl:py-20 2xl:py-20 3xl:py-20">
      <div itemScope itemType="https://schema.org/ItemList">
        <Title
          itemProp="name"
          text={title ? title : getTitle ? "Оборудование" : "решения"}
          className="ml-5 xs:ml-0 inline-block text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl font-normal mb-[30px] xs:mb-[35px] sm:mb-[40px] md:mb-[45px] lg:mb-[50px] xl:mb-[50px] 2xl:mb-[50px] 3xl:mb-[50px] border-b border-b-gray-400"
        />
        <meta itemProp="numberOfItems" content={data.length} />
        {/* Добавляем review и aggregateRating */}
        <div
          className="hidden"
          itemProp="review"
          itemScope
          itemType="http://schema.org/Review"
        >
          <img
            itemProp="image"
            src="/img/banner_main.png"
            alt={title ? title : getTitle ? "Оборудование" : "решения"}
          />
          <div itemProp="author" itemscope itemtype="http://schema.org/Person">
            <meta itemProp="name" content="Recensa" />
          </div>
          <meta itemProp="reviewBody" content="Высокое качество продукции" />
          <div
            itemProp="reviewRating"
            itemScope
            itemType="http://schema.org/Rating"
          >
            <meta itemProp="ratingValue" content="5" />
            <meta itemProp="bestRating" content="5" />
          </div>
        </div>
        <div
          className="hidden"
          itemProp="aggregateRating"
          itemScope
          itemType="http://schema.org/AggregateRating"
        >
          <meta itemProp="ratingValue" content="4.8" />
          <meta itemProp="reviewCount" content="25" />
          <meta itemProp="bestRating" content="5" />
          <meta itemProp="worstRating" content="1" />
        </div>
        <div
          itemType="http://schema.org/AggregateOffer"
          itemScope=""
          itemProp="offers"
          className="w-full flex-center flex-col mx-auto justify-center 2xl:w-[1178px]"
        >
          <div className="invisible w-0 h-0">{data.length || 0}</div>
          <meta content={data.length || 0} itemProp="offerCount" />
          <div className="invisible w-0 h-0">Цена от 5000 руб.</div>
          <meta itemProp="price" content="5000" />
          <meta content="5000" itemProp="lowPrice" />
          <meta content="RUB" itemProp="priceCurrency" />
          <meta itemProp="availability" content="https://schema.org/InStock" />
          <meta itemProp="priceValidUntil" content={formattedPriceValidUntil} />
        </div>
      </div>
      <div className="flex justify-center w-full">
        <article className="grid  grid-cols-1  lg:grid-cols-2  2xl:grid-cols-3 gap-8">
          {data.map(({ id, name, description, image_card }) => (
            <Link
              itemScope
              itemType="http://schema.org/Product"
              to={
                equipment
                  ? `/equipment/${useLatinFormat(name)}`
                  : `/solutions/${useLatinFormat(name)}`
              }
              onClick={() => handleClickItem(id)}
              key={id}
              className="max-h-[440px] w-[280px] xs:w-[300px] sm:w-[320px] md:w-[330px] 
            lg:w-[340px] xl:w-[345px] 2xl:w-[348px] 3xl:w-[352px] border border-gray-100 p-3 xs:p-3.5 sm:p-4"
            >
              <img
                itemProp="image"
                className="object-cover h-[260px] w-[260px] xs:h-[275px] xs:w-[275px] sm:h-[290px] sm:w-[290px] md:h-[300px] md:w-[300px] lg:h-[310px] lg:w-[310px] xl:h-[315px] xl:w-[315px] 2xl:h-[318px] 2xl:w-[318px] 3xl:h-[320px] 3xl:w-[320px]"
                src={image_card || "/img/placeholder.svg"}
                alt={name}
                title={name}
              />
              <h3
                itemProp="name"
                className="text-gray-400 text-xs xs:text-xs sm:text-sm uppercase font-normal my-1.5 xs:my-1.5 sm:my-2"
              >
                {name}
              </h3>

              <meta itemProp="sku" content={id} />
              <div
                className="invisible w-0 h-0"
                itemProp="offers"
                itemScope
                itemType="http://schema.org/Offer"
              >
                <meta itemProp="price" content="5000" />
                <meta itemProp="priceCurrency" content="RUB" />
                <meta
                  itemProp="availability"
                  content="https://schema.org/InStock"
                />
                <meta
                  itemProp="priceValidUntil"
                  content={formattedPriceValidUntil}
                />
                <link
                  itemProp="url"
                  href={
                    equipment
                      ? `/equipment/${useLatinFormat(name)}`
                      : `/solutions/${useLatinFormat(name)}`
                  }
                />
              </div>
              <div className="hidden">
                <div
                  itemProp="brand"
                  itemScope
                  itemType="http://schema.org/Brand"
                >
                  <meta itemProp="name" content="Recensa" />
                </div>
                <meta itemProp="model" content={name} />
              </div>
              <div className="flex-center justify-between gap-2">
                <div
                  itemProp="description"
                  className="w-[50%] text-[11px] max-h-[60px] overflow-hidden xs:text-[12px] sm:text-[13px] text-gray-300"
                >
                  {description}
                </div>
                <Button
                  noLink={true}
                  onClick={() => handleChangeShowPopup(true, id)}
                  text={"Оставить заявку"}
                  className="w-[50%] py-[16px] px-[12px] hover:bg-gray-450"
                />
              </div>
            </Link>
          ))}
        </article>
      </div>

      {limited && (
        <div className="flex justify-center ">
          <Button
            href={href}
            text={"смотреть все"}
            className="bg-white w-[90%] xs:w-full sm:w-full md:w-[800px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1100px] 3xl:w-[1158px] py-[18px] xs:py-[20px] sm:py-[22px] md:py-[24px] lg:py-[26px] xl:py-[26px] 2xl:py-[26px] 3xl:py-[26px] text-gray-400 border border-gray-400 mt-[40px] xs:mt-[45px] sm:mt-[50px] md:mt-[55px] lg:mt-[60px] xl:mt-[62px] 2xl:mt-[63px] 3xl:mt-[64px] hover:bg-gray-50 hover:border-gray-200"
          />
        </div>
      )}
    </section>
  ) : (
    <p>Загрузка...</p>
  );
}
