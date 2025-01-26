import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
  changeItemId,
  changeRoutingToOrders,
  getAllEquipment,
  getAllSolutions,
} from "../../utils/slice/userSlice";

export default function Home() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { equipment, solutions } = useSelector(({ user }) => user);
  const [loading, isLoading] = useState(true);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      isLoading(true);
      try {
        await dispatch(getAllEquipment());
        await dispatch(getAllSolutions());
      } catch (error) {
        console.log(error);
      }
      isLoading(false);
    };
    fetchData();
  }, [pathname]);
  useEffect(() => {
    scrollTop();
    dispatch(changeItemId(null));
  }, [pathname]);
  document.body.style.overflowY = "auto";

  return loading ? (
    <div className=" fixed top-0 left-0 bg-white w-full h-full flex-center justify-center mt-20 ">
      <div className="loader" />
    </div>
  ) : (
    <main>
      <Banner />
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
      <News />
      <Partners />
      <Objects />
      <Footer scrollTop={scrollTop} />
    </main>
  );
}
