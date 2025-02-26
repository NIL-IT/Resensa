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
    <section className="container py-12">
      <div itemScope itemType="https://schema.org/ItemList">
        <Title
          itemProp="name"
          text={title || (equipment ? "Оборудование" : "Решения")}
          className="ml-5 inline-block text-lg border-b border-gray-400 mb-6"
        />
        <meta itemProp="numberOfItems" content={data.length} />
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
          {data.map(({ id, name, description, image_card }) => (
            <Link
              key={id}
              itemScope
              itemType="https://schema.org/Product"
              to={
                equipment
                  ? `/equipment/${useLatinFormat(name)}`
                  : `/solutions/${useLatinFormat(name)}`
              }
              onClick={() => handleClickItem(id)}
              className="border border-gray-100 p-4"
            >
              <img
                itemProp="image"
                src={image_card || "/img/placeholder.svg"}
                alt={name}
                title={name}
                className="object-cover h-[260px] w-[260px]"
              />
              <h3
                itemProp="name"
                className="text-gray-400 text-sm uppercase font-normal my-2"
              >
                {name}
              </h3>
              <meta itemProp="brand" content="Recensa" />
              <meta itemProp="sku" content={id} />
              <div
                itemProp="offers"
                itemScope
                itemType="https://schema.org/Offer"
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
              <div
                className="text-xs text-gray-500 truncate"
                itemProp="description"
              >
                {description}
              </div>
              <Button
                noLink={true}
                onClick={() => handleChangeShowPopup(true, id)}
                text={"Оставить заявку"}
                className="mt-3"
              />
            </Link>
          ))}
        </div>
      </div>
      {limited && (
        <div className="flex justify-center mt-6">
          <Button
            href={href}
            text="Смотреть все"
            className="border border-gray-400"
          />
        </div>
      )}
    </section>
  ) : (
    <p>Загрузка...</p>
  );
}
