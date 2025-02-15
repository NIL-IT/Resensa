import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
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
import { changeItemId } from "../../utils/slice/userSlice";
import { useParams } from "react-router-dom";
const text = `Мы — профессиональная команда специалистов в области вентиляции и кондиционирования воздуха с многолетним опытом работы. Бренд RECENSA ориентирован на создание новой производственной базы, а также на поставку вентиляционного оборудования под собственной торговой маркой.`;
export default function AboutCompany() {
  const dispatch = useDispatch();
  const { pathname } = useParams();
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };
  scrollTop();
  useEffect(() => {
    dispatch(changeItemId(null));
  }, [pathname]);
  document.body.style.overflowY = "auto";
  return (
    <>
      <Helmet>
        <title>О компании - Recensa</title>
        <meta name="description" content={text} />
        {/* <!-- Open Graph --> */}
        <meta property="og:title" content="О компании - Recensa" />
        <meta property="og:url" content="https://new.recensa.ru/about" />
      </Helmet>
      <main>
        <EquipmentBanner
          bannerImg={"/img/newbanner_about.png"}
          placeholderSrc={"/img/newbanner_about_compress.png"}
          title={"о компании"}
          subtitle={"recensa"}
          text={text}
          textSize={"text-lg"}
          about={true}
        />
        <Objects about={true} />
        <SliderPage
          title={"о компании"}
          subTitle={"ПРОФЕССИОНАЛЫ ВЕНТИЛЯЦИИ"}
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
      </main>
      <Footer />
    </>
  );
}
