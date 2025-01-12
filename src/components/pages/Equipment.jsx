import React from "react";
import EquipmentBanner from "../shared/EquipmentBanner";
import ItemsList from "../shared/ItemsList";
import { data } from "../../utils/data";
import Calculator from "../shared/Сalculator";
import Objects from "../shared/Objects";
import Footer from "../shared/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
export default function Equipment() {
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
        bannerImg={"/img/eq_banner.svg"}
        blurImg={"/img/blur.png"}
        title={"оборудование"}
        subtitle={"recensa"}
        text={text}
        isButton={true}
      />
      <ItemsList list={data.equipment} limited={false} />
      <Calculator />
      <Objects className={"mt-[20px]"} />
      <Footer />
    </div>
  );
}
