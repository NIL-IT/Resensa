import React from "react";
import EquipmentBanner from "../shared/EquipmentBanner";
import ItemsList from "../shared/ItemsList";
import Calculator from "../shared/Сalculator";
import Objects from "../shared/Objects";
import Footer from "../shared/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeItemId } from "../../utils/slice/userSlice";

export default function Equipment({ data, bannerImg, title, text }) {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeItemId(null));
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  document.body.style.overflowY = "auto";
  const isEquipment = pathname.split("/")[1] === "equipment";
  return (
    <>
      <main>
        <EquipmentBanner
          c
          bannerImg={bannerImg}
          title={title}
          text={text}
          subtitle={"recensa"}
          isButton={true}
        />
        <ItemsList equipment={isEquipment} list={data} limited={false} />
        <Calculator />
        <Objects className={"mt-[20px]"} />
      </main>
      <Footer />
    </>
  );
}
