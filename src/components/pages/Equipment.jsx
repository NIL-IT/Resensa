import React from "react";
import EquipmentBanner from "../shared/EquipmentBanner";
import ItemsList from "../shared/ItemsList";
import { data } from "../../utils/data";
import Calculator from "../shared/Сalculator";
import Objects from "../shared/Objects";
import Footer from "../shared/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
      <EquipmentBanner />
      <ItemsList list={data.equipment} limited={false} />
      <Calculator />
      <Objects className={"mt-[100px]"} />
      <Footer />
    </div>
  );
}
