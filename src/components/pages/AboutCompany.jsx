import React, { lazy, Suspense, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import EquipmentBanner from "../shared/EquipmentBanner";
import Advantages from "../shared/Advantages";
import Partners from "../shared/Partners";
import Footer from "../shared/Footer";
import SliderPage from "../shared/SliderPage";
import { sliderTextSub, slidesMain, slidesSub } from "../../utils/data";

import Points from "../shared/Points";
import { useDispatch } from "react-redux";
import { changeItemId } from "../../utils/slice/userSlice";
import { useLocation } from "react-router-dom";
import SeoBlock from "../shared/SeoBlock";
import Objects from "../shared/Objects";
const text = `Recensa — уверенность в каждом решении. Мы знаем всё о вентиляционном оборудовании, чтобы ваши задачи решались с максимальной эффективностью. Обратитесь к профессионалам.`;
export default function AboutCompany({ company }) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
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
      <SeoBlock
        title={company.about_page_title}
        description={company.about_hidden_seo_text}
        url={"https://new.recensa.ru/about"}
      />
      <Helmet>
        <title>{company.about_page_title}</title>
        <meta name="description" content={company.about_page_description} />
        <meta name="keywords" content={company.about_page_keywords} />
        {/* <!-- Open Graph --> */}
        <meta property="og:title" content={company.about_page_title} />
        <meta property="og:url" content="https://new.recensa.ru/about" />
        <link rel="canonical" href="https://new.recensa.ru/about" />
      </Helmet>
      <main>
        <EquipmentBanner
          bannerImg={"/img/newbanner_about.png"}
          placeholderSrc={"/img/newbanner_about_compress.png"}
          title={"о компании"}
          subtitle={"recensa"}
          text={company.about_main_screen}
          textSize={"text-lg"}
          about={true}
        />
        <Objects about={true} />
        <SliderPage
          title={"о компании"}
          subTitle={
            "Recensa: ваш стратегический партнер в реализации масштабных проектов."
          }
          text={company.about_unique_screen}
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
