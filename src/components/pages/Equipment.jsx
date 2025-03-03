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
  console.log(equipment, solutions);
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
  return (
    <>
      <Helmet>
        <title>
          {isEquipment ? equipment[0].page_title : solutions[0].page_title}
        </title>
        <meta
          name="description"
          content={
            isEquipment
              ? equipment[0].page_description
              : solutions[0].page_description
          }
        />
        <meta
          name="keywords"
          content={
            isEquipment
              ? equipment[0].page_keywords
              : solutions[0].page_keywords
          }
        />
        {/* <!-- Open Graph --> */}
        <meta
          property="og:title"
          content={
            isEquipment ? equipment[0].page_title : solutions[0].page_title
          }
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

        <ItemsList equipment={isEquipment} list={data} limited={false} />
        {/* <Calculator /> */}
        <Objects className={"mt-[20px]"} />
      </main>
      <Footer />
    </>
  );
}
