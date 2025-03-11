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
  const [lim, setLim] = useState(limited);
  const [visibleItems, setVisibleItems] = useState([]);
  const [hiddenItems, setHiddenItems] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isOrders = pathname.split("/")[2] === "orders";
  let getTitle;

  useEffect(() => {
    if (!list) return;

    if (lim && list.length > 6) {
      setVisibleItems(list.slice(0, 6));
      setHiddenItems(list.slice(6));
    } else {
      setVisibleItems(list);
      setHiddenItems([]);
    }

    if (!isOrders && list.length > 0) {
      getTitle = list[0].hasOwnProperty("max_param");
    }
  }, [list, limited, lim]);

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

  const handelClickLimited = () => {
    setIsAnimating(true);

    // Добавляем элементы по одному с задержкой для создания эффекта плавного появления
    let delay = 0;
    const delayIncrement = 100;

    hiddenItems.forEach((item, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, item]);

        // Когда все элементы добавлены, завершаем анимацию и снимаем ограничение
        if (index === hiddenItems.length - 1) {
          setTimeout(() => {
            setIsAnimating(false);
            setLim(false);
          }, 300);
        }
      }, delay);

      delay += delayIncrement;
    });
  };

  // Добавляем дату действия цены на год вперед
  const priceValidUntil = new Date();
  priceValidUntil.setFullYear(priceValidUntil.getFullYear() + 1);
  const formattedPriceValidUntil = priceValidUntil.toISOString().split("T")[0];

  const renderItem = (item, index) => {
    const { id, name, description, image_card, image_card_alt } = item;
    const isNewlyAdded = index >= 6 && isAnimating;

    return (
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
        className={`max-h-[440px] w-[280px] xs:w-[300px] sm:w-[320px] md:w-[330px] 
        lg:w-[340px] xl:w-[345px] 2xl:w-[348px] 3xl:w-[352px] border border-gray-100 p-3 xs:p-3.5 sm:p-4
        transition-all duration-500 ease-in-out ${
          isNewlyAdded
            ? "opacity-0 transform translate-y-8 animate-fadeIn"
            : "opacity-100"
        }`}
        style={{
          animationDelay: isNewlyAdded ? `${(index - 6) * 100}ms` : "0ms",
          animationFillMode: "forwards",
        }}
      >
        <img
          itemProp="image"
          className="object-cover h-[260px] w-[260px] xs:h-[275px] xs:w-[275px] sm:h-[290px] sm:w-[290px] md:h-[300px] md:w-[300px] lg:h-[310px] lg:w-[310px] xl:h-[315px] xl:w-[315px] 2xl:h-[318px] 2xl:w-[318px] 3xl:h-[320px] 3xl:w-[320px]"
          src={image_card || "/img/placeholder.svg"}
          alt={image_card_alt}
          title={image_card_alt}
        />
        <h3
          itemProp="name"
          className="text-gray-400 text-xs xs:text-xs sm:text-sm uppercase font-normal my-1.5 xs:my-1.5 sm:my-2"
        >
          {name}
        </h3>
        <meta itemProp="brand" content="Recensa" />
        <meta itemProp="sku" content={id} />
        <div
          className="invisible w-0 h-0"
          itemProp="offers"
          itemScope
          itemType="http://schema.org/Offer"
        >
          <meta itemProp="price" content="5000" />
          <meta itemProp="priceCurrency" content="RUB" />
          <meta itemProp="availability" content="https://schema.org/InStock" />
          <meta itemProp="priceValidUntil" content={formattedPriceValidUntil} />
          <link
            itemProp="url"
            href={
              equipment
                ? `/equipment/${useLatinFormat(name)}`
                : `/solutions/${useLatinFormat(name)}`
            }
          />
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
            onClick={(e) => {
              e.preventDefault();
              handleChangeShowPopup(true, id);
            }}
            text={"Оставить заявку"}
            className="w-[50%] py-[16px] px-[12px] hover:bg-gray-450"
          />
        </div>
      </Link>
    );
  };

  return visibleItems.length > 0 ? (
    <section className="container py-12 xs:py-14 sm:py-16 md:py-18 lg:py-20 xl:py-20 2xl:py-20 3xl:py-20">
      <div itemScope itemType="https://schema.org/ItemList">
        <Title
          itemProp="name"
          text={title ? title : getTitle ? "Оборудование" : "решения"}
          className="ml-5 xs:ml-0 inline-block text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl font-normal mb-[30px] xs:mb-[35px] sm:mb-[40px] md:mb-[45px] lg:mb-[50px] xl:mb-[50px] 2xl:mb-[50px] 3xl:mb-[50px] border-b border-b-gray-400"
        />
        <meta itemProp="numberOfItems" content={list ? list.length : 0} />

        <div className="flex justify-center w-full transition-all">
          <article className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
            {visibleItems.map((item, index) => renderItem(item, index))}
          </article>
        </div>
      </div>
      {lim && hiddenItems.length > 0 && (
        <div className="flex justify-center">
          <Button
            onClick={() => handelClickLimited()}
            text={"смотреть все"}
            className="bg-white w-[90%] xs:w-full sm:w-full md:w-[800px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1100px] 3xl:w-[1158px] py-[18px] xs:py-[20px] sm:py-[22px] md:py-[24px] lg:py-[26px] xl:py-[26px] 2xl:py-[26px] 3xl:py-[26px] text-gray-400 border border-gray-400 mt-[40px] xs:mt-[45px] sm:mt-[50px] md:mt-[55px] lg:mt-[60px] xl:mt-[62px] 2xl:mt-[63px] 3xl:mt-[64px] hover:bg-gray-50 hover:border-gray-200"
          />
        </div>
      )}

      <style jsx="true">{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation-name: fadeIn;
          animation-duration: 500ms;
          animation-timing-function: ease-out;
        }
      `}</style>
    </section>
  ) : (
    <p>Загрузка...</p>
  );
}
