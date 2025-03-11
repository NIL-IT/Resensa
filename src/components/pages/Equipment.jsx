import React from "react";
import { Helmet } from "react-helmet-async";
import EquipmentBanner from "../shared/EquipmentBanner";
import ItemsList from "../shared/ItemsList";
// import Calculator from "../shared/Сalculator";
import Objects from "../shared/Objects";
import Footer from "../shared/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeItemId } from "../../utils/slice/userSlice";

export default function Equipment({
  data,
  bannerImg,
  title,
  text,
  placeholderSrc,
}) {
  const { pathname } = useLocation();
  const { equipment, solutions } = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeItemId(null));
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  document.body.style.overflowY = "auto";
  const isEquipment = pathname.split("/")[1] === "equipment";
  console.log(isEquipment);
  return (
    <>
      <Helmet>
        <title>{`Recensa - ${title}`}</title>
        <meta
          name="description"
          content={`${title} от RECENSA. ${
            text.split(".")[0]
          }. Профессиональные решения для вентиляции и кондиционирования.`}
        />
        {/* <!-- Open Graph --> */}
        <meta
          property="og:title"
          content={`Recensa - Вентиляционное ${
            isEquipment ? "оборудование" : "решения"
          }`}
        />
        <meta
          property="og:url"
          content={`https://new.recensa.ru/${
            isEquipment ? "equipment" : "solutions"
          }`}
        />
        <link
          rel="canonical"
          href={`https://new.recensa.ru/${
            isEquipment ? "equipment" : "solutions"
          }`}
        />
      </Helmet>
      <main>
        <EquipmentBanner
          bannerImg={bannerImg}
          title={title}
          text={text}
          subtitle={"recensa"}
          isButton={true}
          placeholderSrc={placeholderSrc}
        />

        <ItemsList
          equipment={isEquipment}
          list={data}
          limited={false}
          title={title}
        />
        {/* <Calculator /> */}
        <Objects className={"mt-[20px]"} />
      </main>
      <Footer />
    </>
  );
}
