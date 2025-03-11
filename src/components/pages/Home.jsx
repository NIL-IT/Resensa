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
