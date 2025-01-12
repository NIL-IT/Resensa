import React, { useEffect } from "react";
import Banner from "../shared/Banner";
import Advantages from "../shared/Advantages";
import ItemsList from "../shared/ItemsList";
import { data, sliderTextMain, slidesMain } from "../../utils/data";
import Calculator from "../shared/Сalculator";
import News from "../shared/News";
import Partners from "../shared/Partners";
import Objects from "../shared/Objects";
import Footer from "../shared/Footer";
import { ROUTES } from "../../routes/routes";
import { useLocation } from "react-router-dom";
import SliderPage from "../shared/SliderPage";

export default function Home() {
  const { pathname } = useLocation();
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };
  useEffect(() => {
    scrollTop();
  }, [pathname]);
  return (
    <main>
      <Banner />
      <Advantages />
      <ItemsList list={data.equipment} href={ROUTES.EQUIPMENT} />
      <ItemsList list={data.solutions} />
      <Calculator />
      <SliderPage
        title={"о компании"}
        subTitle={"ВИРТУОЗЫ ВЕНТИЛЯЦИИ"}
        text={sliderTextMain}
        slides={slidesMain}
      />
      <News />
      <Partners />
      <Objects />
      <Footer scrollTop={scrollTop} />
    </main>
  );
}
