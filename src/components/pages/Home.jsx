import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../shared/Banner";
import Advantages from "../shared/Advantages";
import ItemsList from "../shared/ItemsList";
import { sliderTextMain, slidesMain } from "../../utils/data";
// import Calculator from "../shared/Сalculator";
import News from "../shared/News";
import Partners from "../shared/Partners";
import Objects from "../shared/Objects";
import Footer from "../shared/Footer";
import { ROUTES } from "../../routes/routes";
import { useLocation } from "react-router-dom";
import SliderPage from "../shared/SliderPage";
import { useDispatch } from "react-redux";
import { changeItemId, changeShowNewsPopup } from "../../utils/slice/userSlice";
import Cookies from "js-cookie";
export default function Home({ equipment, solutions, banner, news }) {
  const { pathname } = useLocation();
  const isNavigateNews = Cookies.get("news_nav") === "1";
  const dispatch = useDispatch();
  const scrollToOrders = () => {
    const widthPage = document.querySelector("body").offsetWidth;
    let scrollPosition;
    if (widthPage > 1600) scrollPosition = 5200;
    else if (widthPage > 1200) scrollPosition = 5200;
    else if (widthPage > 768) scrollPosition = 5800;
    else if (widthPage > 640) scrollPosition = 5900;
    else if (widthPage > 420) scrollPosition = 5600;
    else if (widthPage > 375) scrollPosition = 5300;
    else scrollPosition = 5200;
    setTimeout(() => {
      window.scrollTo({
        top: scrollPosition,
        left: 0,
        behavior: "smooth",
      });
    }, 10);
    Cookies.set("news_nav", "0", { expires: 1 });
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
      <Helmet>
        <title>Recensa - Вентиляционное оборудование и решения</title>
        <meta
          name="description"
          content="Бренд RECENSA ориентирован на создание новой производственной базы, а также на поставку вентиляционного оборудования под собственной торговой маркой."
        />
        {/* <!-- Open Graph --> */}
        <meta
          property="og:title"
          content="Recensa - Вентиляционное оборудование и решения"
        />
        <meta property="og:url" content="https://new.recensa.ru/" />
        <link rel="canonical" href="https://new.recensa.ru/" />
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
          text={sliderTextMain}
          slides={slidesMain}
        />
        <News news={news} />
        <Partners />
        <Objects />
      </main>
      <Footer scrollTop={scrollTop} />
    </>
  );
}
