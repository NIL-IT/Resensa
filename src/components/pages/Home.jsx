import React, { useEffect, useState } from "react";
import Banner from "../shared/Banner";
import Advantages from "../shared/Advantages";
import ItemsList from "../shared/ItemsList";
import { sliderTextMain, slidesMain } from "../../utils/data";
import Calculator from "../shared/Сalculator";
import News from "../shared/News";
import Partners from "../shared/Partners";
import Objects from "../shared/Objects";
import Footer from "../shared/Footer";
import { ROUTES } from "../../routes/routes";
import { useLocation } from "react-router-dom";
import SliderPage from "../shared/SliderPage";
import { useDispatch } from "react-redux";
import { changeItemId } from "../../utils/slice/userSlice";

export default function Home({ equipment, solutions, banner, news }) {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };

  useEffect(() => {
    scrollTop();
    dispatch(changeItemId(null));
  }, [pathname]);
  document.body.style.overflowY = "auto";

  return (
    <main>
      <Banner banner={banner} />
      <Advantages />
      <ItemsList
        equipment={true}
        title={"Оборудование"}
        list={equipment}
        href={ROUTES.EQUIPMENT}
      />
      <ItemsList equipment={false} list={solutions} href={ROUTES.SOLUTIONS} />
      <Calculator />
      <SliderPage
        title={"о компании"}
        subTitle={"ВИРТУОЗЫ ВЕНТИЛЯЦИИ"}
        text={sliderTextMain}
        slides={slidesMain}
      />
      <News news={news} />
      <Partners />
      <Objects />
      <Footer scrollTop={scrollTop} />
    </main>
  );
}
