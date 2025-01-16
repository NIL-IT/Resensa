import React from "react";
import EquipmentBanner from "../shared/EquipmentBanner";
import ItemsList from "../shared/ItemsList";

import Calculator from "../shared/Сalculator";
import Objects from "../shared/Objects";
import Footer from "../shared/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Equipment({ data, bannerImg, title, text }) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return (
    <div>
      <EquipmentBanner
        bannerImg={bannerImg}
        blurImg={"/img/blur.png"}
        title={title}
        subtitle={"recensa"}
        text={text}
        isButton={true}
      />
      <ItemsList list={data} limited={false} />
      <Calculator />
      <Objects className={"mt-[20px]"} />
      <Footer />
    </div>
  );
}
