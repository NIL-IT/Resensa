import React, { useEffect } from "react";
import Objects from "../shared/Objects";
import { Helmet } from "react-helmet-async";
import Banner from "../shared/Banner";
import Advantages from "../shared/Advantages";
import ItemsList from "../shared/ItemsList";
import { slidesMain } from "../../utils/data";
// import Calculator from "../shared/Сalculator";
import News from "../shared/News";
import Partners from "../shared/Partners";
import Footer from "../shared/Footer";
import { ROUTES } from "../../routes/routes";
import { useLocation } from "react-router-dom";
import SliderPage from "../shared/SliderPage";
import { useDispatch } from "react-redux";
import { changeItemId } from "../../utils/slice/userSlice";
import { domen } from "../../utils/config";
import Cookies from "js-cookie";
import SeoBlock from "../shared/SeoBlock";
export default function Home({ equipment, solutions, banner, news, company }) {
  const { pathname } = useLocation();
  const isNavigateNews = Cookies.get("news_nav") === "1";
  const dispatch = useDispatch();
  const scrollToOrders = () => {
    setTimeout(() => {
      const widthPage = document.querySelector("body").offsetWidth;
      const heightPage = document.querySelector("body").offsetHeight;
      let scrollPosition;
      if (widthPage > 1600) scrollPosition = 2500;
      else if (widthPage > 1280) scrollPosition = 2545;
      else if (widthPage > 768) scrollPosition = 2927;
      else if (widthPage > 640) scrollPosition = 3870;
      else if (widthPage > 420) scrollPosition = 3897;
      else if (widthPage > 375) scrollPosition = 3973;
      else scrollPosition = 3900;
      let scroll = heightPage - scrollPosition;

      window.scrollTo({
        top: scroll,
        left: 0,
        behavior: "smooth",
      });

      Cookies.set("news_nav", "0", { expires: 1 });
    }, 30);
  };

  const scrollTop = () => {
    if (isNavigateNews) {
      scrollToOrders();
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
      });
    }
  };

  useEffect(() => {
    scrollTop();
    dispatch(changeItemId(null));
  }, [pathname]);
  document.body.style.overflowY = "auto";

  return (
    <>
      <SeoBlock
        description={company.main_hidden_seo_text}
        title={company.main_page_title}
        url={`${domen}/`}
      />
      <Helmet>
        <title>{company.main_page_title}</title>
        <meta name="description" content={company.main_page_description} />
        <meta property="og:title" content={company.main_page_title} />
        <meta property="og:url" content={`${domen}/`} />
        <meta name="keywords" content={company.main_page_keywords} />
        <link rel="canonical" href={`${domen}/`} />
      </Helmet>
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
        {/* <Calculator /> */}
        <SliderPage
          title={"о компании"}
          subTitle={
            "Recensa: ваш стратегический партнер в реализации масштабных проектов."
          }
          text={company.about_unique_screen}
          slides={slidesMain}
        />
        <News news={news} />
        <Partners />
        <Objects className={"mt-[0px]"} />
      </main>
      <Footer scrollTop={scrollTop} />
    </>
  );
}
