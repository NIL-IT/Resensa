import React, { useEffect } from "react";
import EquipmentBanner from "../shared/EquipmentBanner";
import Objects from "../shared/Objects";
import Advantages from "../shared/Advantages";
import Partners from "../shared/Partners";
import Footer from "../shared/Footer";
import SliderPage from "../shared/SliderPage";
import {
  sliderTextMain,
  sliderTextSub,
  slidesMain,
  slidesSub,
} from "../../utils/data";

import Points from "../shared/Points";
import { useDispatch } from "react-redux";
import { changeRoutingToOrders } from "../../utils/slice/userSlice";
const text = `Мы — профессиональная команда специалистов в области вентиляции и кондиционирования воздуха с многолетним опытом работы. Бренд RECENSA ориентирован на создание новой производственной базы, а также на поставку вентиляционного оборудования под собственной торговой маркой.`;
export default function AboutCompany() {
  return (
    <main>
      <EquipmentBanner
        bannerImg={"/img/newbanner_about.png"}
        title={"о компании"}
        subtitle={"recensa"}
        text={text}
        textSize={"text-lg"}
        about={true}
      />
      <Objects about={true} />
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
      <Advantages />
      <Partners />
      <Footer />
    </main>
  );
}
