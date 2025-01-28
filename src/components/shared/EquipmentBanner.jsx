import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Title from "../ui/Title";
import Button from "../ui/Button";
import { changeShowPopup } from "../../utils/slice/userSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
export default function EquipmentBanner({
  subtitle,
  title,
  text,
  bannerImg,
  isButton = false,
  textSize,
  width = "",
  about = false,
  currentProduct,
  list,
  placeholderSrc,
}) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [loading, isLoading] = useState(!currentProduct ? false : true);
  const handleChangeShowPopup = (boolean) => dispatch(changeShowPopup(boolean));
  const [product, setProduct] = useState();
  const [paddingClass, setPaddingClass] = useState("");

  const h1Ref = useRef(null);

  useEffect(() => {
    if (!list || !id) return;
    const filterData = list.filter((item) => item.id === id);
    setProduct(filterData);
    isLoading(false);
  }, [id]);
  let height;

  useLayoutEffect(() => {
    if (h1Ref.current) {
      height = h1Ref.current.offsetHeight;
      if (height <= 55) {
        setPaddingClass(`pb-[50px] xs:pb-[60px] sm:pb-[60px] 
           md:pb-[100px] lg:pb-[136px]  
          xl:pb-[190px] 2xl:pb-[240px] 3xl:pb-[286px]`);
      } else {
        setPaddingClass(`pb-[30px] xs:pb-[40px] sm:pb-[30px] 
           md:pb-[65px] lg:pb-[95px]  
          xl:pb-[110px] 2xl:pb-[180px] 3xl:pb-[230px]`);
      }
    }
  }, [product]);
  const [imageSrc, setImageSrc] = useState(
    product ? product?.image_banner : placeholderSrc
  );
  console.log(imageSrc);
  useEffect(() => {
    if (product) return;
    const img = new Image();
    img.src = bannerImg;
    img.onload = () => {
      setImageSrc(bannerImg);
    };
  }, [bannerImg]);

  return loading && !height ? (
    <div
      className=" bg-white w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] 
              xl:h-[700px] 2xl:h-[800px] 3xl:h-[900px] flex-center justify-center mt-20"
    >
      <div className="loader" />
    </div>
  ) : (
    <section
      className={`relative ${
        !about && !product
          ? `pb-[50px] xs:pb-[30px] sm:pb-[60px] 
      md:pb-[105px] lg:pb-[160px]  
     xl:pb-[205px] 2xl:pb-[240px] 3xl:pb-[286px]`
          : product
          ? paddingClass
          : ""
      }`}
    >
      <img
        className={`absolute  brightness-50 object-cover object-center top-[30px] 
          left-0 w-full    
          z-[-2] ${imageSrc === placeholderSrc ? "loading" : "loaded"} ${
          product
            ? `object-contain h-[400px] md:h-[500px] lg:h-[600px] 
              xl:h-[700px] 2xl:h-[800px] 3xl:h-[900px]`
            : `
              min-w-[100%] max-w-[1920px] 
              h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] 
              xl:h-[700px] 2xl:h-[800px] 3xl:h-[900px]
              max-h-[900px]`
        }`}
        src={imageSrc}
        alt="banner"
        title="Banner"
      />
      <div
        className={`container pl-[20px] xs:pl-[0] ${
          about
            ? `pt-[80px] xs:pt-[100px] sm:pt-[120px] md:pt-[150px] lg:pt-[200px] xl:pt-[250px] 2xl:pt-[300px] 3xl:pt-[394px]`
            : ` ${
                height <= 76
                  ? `pt-[120px] 
          md:pt-[140px] lg:pt-[160px] xl:pt-[180px] 2xl:pt-[200px] 3xl:pt-[250px]`
                  : `pt-[80px] xs:pt-[90px] 
          md:pt-[130px] lg:pt-[160px] xl:pt-[180px] 2xl:pt-[200px] 3xl:pt-[250px]`
              }`
        }`}
      >
        <Title
          text={subtitle || product().name}
          className="font-norma text-md sm:text-[22px] leading-[22px] sm:leading-[24px] xl:text-[28px] 2xl:text-[32px] text-white md:leading-[41px]"
        />
        <h2
          ref={h1Ref}
          className="font-normal  text-lg leading-[28px]  md:text-[28px]  mt-3 md:mt-0 sm:leading-[32px]  md:leading-[36px]  
          xl:text-[38px] 2xl:text-[48px] xl:leading-[51px] 2xl:leading-[61px] text-white   uppercase"
        >
          {title || product().sub_header}
        </h2>

        <p
          className={` text-white mt-3 mb-3 xs:mb-[20px] xs:mt-[20px] sm:mb-[30px] sm:mt-[30px]  md:mb-[40px] md:mt-[40px] 
            lg:mb-[33px] lg:mt-[20px] xl:mt-[30px] 2xl:mt-[65px] 
            ${about ? "text-sm xl:text-lg" : ""} ${
            width ? width : "w-[300px] xs:w-[360px] md:w-[500px] lg:w-[656px]"
          }  ${
            textSize ? textSize : " text-xs sm:text-sm lg:text-lg xl:text-xl"
          }`}
        >
          {text || product().header}
        </p>
        {isButton && (
          <Button
            onClick={() => handleChangeShowPopup(true)}
            icon={true}
            iconWidth={"w-[24px] sm:w-[30px] md:w-[38px]"}
            white={true}
            text={"Оформить заказ"}
            className="py-[5px] px-[10px]  sm:py-[10px]  lg:py-[14px]
              xs:pl-[10px] xl:py-[19px] md:px-6 bg-white
              text-gray-400 text-xs sm:text-base"
          />
        )}
      </div>
    </section>
  );
}
