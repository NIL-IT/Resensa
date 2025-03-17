import React from "react";
import { Helmet } from "react-helmet-async";
import EquipmentBanner from "../shared/EquipmentBanner";
import ItemsList from "../shared/ItemsList";
// import Calculator from "../shared/Сalculator";
import Objects from "../shared/Objects";
import Footer from "../shared/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeItemId } from "../../utils/slice/userSlice";
import SeoBlock from "../shared/SeoBlock";

export default function Equipment({
  company,
  data,
  bannerImg,
  title,
  text,
  placeholderSrc,
}) {
  const { pathname } = useLocation();
  const { equipment, solutions } = useSelector(({ user }) => user);
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
      <SeoBlock
        url={company.url}
        title={company.page_title}
        description={company.hidden_seo_text}
      />
      <Helmet>
        <title>{company.page_title}</title>
        <meta name="description" content={company.page_description} />
        <meta name="keywords" content={company.page_keywords} />
        {/* <!-- Open Graph --> */}
        <meta property="og:title" content={company.page_title} />
        <meta property="og:url" content={company.url} />
        <link rel="canonical" href={company.url} />
      </Helmet>
      <main>
        <EquipmentBanner
          bannerImg={bannerImg}
          title={title}
          text={text}
          subtitle={"recensa"}
          isButton={true}
          placeholderSrc={placeholderSrc}
        />

        <ItemsList
          equipment={isEquipment}
          list={data}
          limited={false}
          title={title}
        />
        {/* <Calculator /> */}
        <Objects className={"mt-[20px]"} />
      </main>
      <Footer />
    </>
  );
}
