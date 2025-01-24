import React, { useEffect, useState } from "react";
import Title from "../ui/Title";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { changeItemId, changeShowPopup } from "../../utils/slice/userSlice";
import { Link, useLocation } from "react-router-dom";

export default function ItemsList({
  limited = true,
  list,
  href,
  title,
  changeRoutingToOrders = null,
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
  console.log(list);
  const handleChangeShowPopup = (boolean, id) => {
    dispatch(changeShowPopup(boolean));
    dispatch(changeItemId(id));
  };
  // const handleClickLink = () => {
  //   changeRoutingToOrders();
  //   dispatch(changeItemId(id));
  // };

  return data.length > 0 ? (
    <div className="container py-12 xs:py-14 sm:py-16 md:py-18 lg:py-20 xl:py-20 2xl:py-20 3xl:py-20">
      <Title
        text={title ? title : getTitle ? "Оборудование" : "решения"}
        className="inline-block text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl font-normal mb-[30px] xs:mb-[35px] sm:mb-[40px] md:mb-[45px] lg:mb-[50px] xl:mb-[50px] 2xl:mb-[50px] 3xl:mb-[50px] border-b border-b-gray-400"
      />
      <div className="flex flex-wrap justify-center gap-[20px] xs:gap-[25px] sm:gap-[30px] md:gap-[35px] lg:gap-[40px] xl:gap-[45px] 2xl:gap-[48px] 3xl:gap-[51px]">
        {data.map(({ id, name, description, image }) => (
          <Link
            to={`/product/${id}`}
            onClick={() => dispatch(changeItemId(id))}
            key={id}
            className="max-h-[440px] w-[280px] xs:w-[300px] sm:w-[320px] md:w-[330px] lg:w-[340px] xl:w-[345px] 2xl:w-[348px] 3xl:w-[352px] border border-gray-100 p-3 xs:p-3.5 sm:p-4"
          >
            <img
              className="object-cover h-[260px] w-[260px] xs:h-[275px] xs:w-[275px] sm:h-[290px] sm:w-[290px] md:h-[300px] md:w-[300px] lg:h-[310px] lg:w-[310px] xl:h-[315px] xl:w-[315px] 2xl:h-[318px] 2xl:w-[318px] 3xl:h-[320px] 3xl:w-[320px]"
              src={image}
              alt={name}
            />
            <h2 className="text-gray-400 text-xs xs:text-xs sm:text-sm uppercase font-normal my-1.5 xs:my-1.5 sm:my-2">
              {name}
            </h2>
            <div className="flex-center justify-between gap-2">
              <p className="w-[50%] text-[11px] max-h-[60px] overflow-hidden xs:text-[12px] sm:text-[13px] text-gray-300">
                {description}
              </p>
              <Button
                noLink={true}
                onClick={() => handleChangeShowPopup(true, id)}
                text={"Оставить заявку"}
                className="w-[50%] py-[16px] px-[12px] hover:bg-gray-450"
              />
            </div>
          </Link>
        ))}
      </div>
      {limited && (
        <div className="flex justify-center ">
          <Button
            href={href}
            text={"смотреть все"}
            className="bg-white w-full xs:w-full sm:w-full md:w-[800px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1100px] 3xl:w-[1158px] py-[18px] xs:py-[20px] sm:py-[22px] md:py-[24px] lg:py-[26px] xl:py-[26px] 2xl:py-[26px] 3xl:py-[26px] text-gray-400 border border-gray-400 mt-[40px] xs:mt-[45px] sm:mt-[50px] md:mt-[55px] lg:mt-[60px] xl:mt-[62px] 2xl:mt-[63px] 3xl:mt-[64px] hover:bg-gray-50 hover:border-gray-200"
          />
        </div>
      )}
    </div>
  ) : (
    <div>Загрузка...</div>
  );
}
