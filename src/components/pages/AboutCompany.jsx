import React from "react";
import EquipmentBanner from "../shared/EquipmentBanner";
import Objects from "../shared/Objects";

import Partners from "../shared/Partners";
import Footer from "../shared/Footer";
import SliderPage from "../shared/SliderPage";
import {
  sliderTextMain,
  sliderTextSub,
  slidesMain,
  slidesSub,
} from "../../utils/data";
import ProductAdvantages from "../shared/ProductAdvantages";
import Points from "../shared/Points";
const text = `Мы — профессиональная команда специалистов в области вентиляции и кондиционирования воздуха с многолетним опытом работы. Бренд RECENSA ориентирован на создание новой производственной базы, а также на поставку вентиляционного оборудования под собственной торговой маркой.`;
export default function AboutCompany() {
  return (
    <main>
      <EquipmentBanner
        bannerImg={"/img/about_banner.png"}
        blurImg={"/img/blur.png"}
        title={"о компании"}
        subtitle={"recensa"}
        text={text}
        padding="pt-[394px]"
        textSize={"text-lg"}
      />
      <Objects />
      <SliderPage
        title={"о компании"}
        subTitle={"ВИРТУОЗЫ ВЕНТИЛЯЦИИ"}
        text={sliderTextMain}
        slides={slidesMain}
      />
      <SliderPage
        title={"производство"}
        subTitle={"СОБСТВЕННОЕ ПРОИЗВОДСТВО"}
        text={sliderTextSub}
        slides={slidesSub}
        second={true}
      />
      <Points />
      <ProductAdvantages />
      <Partners />
      <Footer />
    </main>
  );
}
