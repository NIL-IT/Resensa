import React from "react";
import Title from "../ui/Title";
import Button from "../ui/Button";
import { changeShowPopup } from "../../utils/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function EquipmentBanner({
  bannerImg,
  subtitle,
  title,
  text,
  isButton = false,
  currentProduct,
  textSize,
  width = "",
  about = false,
}) {
  const dispatch = useDispatch();
  const { equipment, solutions, itemId } = useSelector(({ user }) => user);
  const product = () => {
    const combinedData = [...equipment, ...solutions];
    const product = combinedData.find((item) => item.id === itemId);
    return product;
  };
  console.log(product());
  const handleChangeShowPopup = (boolean) => dispatch(changeShowPopup(boolean));
  return (
    <div
      className={`relative  ${
        !about && !currentProduct
          ? `pb-[50px] xs:pb-[40px] sm:pb-[30px] 
           md:pb-[150px] lg:pb-[160px]  
          xl:pb-[220px] 2xl:pb-[240px] 3xl:pb-[286px]`
          : currentProduct
          ? `pb-[50px] xs:pb-[60px] sm:pb-[30px] 
           md:pb-[120px] lg:pb-[136px]  
          xl:pb-[190px] 2xl:pb-[240px] 3xl:pb-[286px]`
          : ``
      }`}
    >
      <img
        className={`absolute object-cover top-[30px] 
          left-0 w-full    
          z-[-2] ${
            currentProduct
              ? `object-contain h-[400px] md:h-[500px] lg:h-[600px] 
              xl:h-[700px] 2xl:h-[800px] 3xl:h-[900px]`
              : `
              min-w-[100%] max-w-[1920px] 
              h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] 
              xl:h-[700px] 2xl:h-[800px] 3xl:h-[900px]
              max-h-[900px]`
          }`}
        src={bannerImg || "/placeholder.svg"}
        alt="banner"
      />
      <div
        className={`container pl-[20px] xs:pl-[0] ${
          about
            ? `pt-[80px] xs:pt-[100px] sm:pt-[120px] md:pt-[150px] lg:pt-[200px] xl:pt-[250px] 2xl:pt-[300px] 3xl:pt-[394px]`
            : `pt-[120px] 
          md:pt-[140px] lg:pt-[160px] xl:pt-[180px] 2xl:pt-[200px] 3xl:pt-[250px]`
        }`}
      >
        <Title
          text={subtitle || product().name}
          className="font-norma text-2xl sm:text-[22px] leading-[22px] sm:leading-[24px] xl:text-[28px] 2xl:text-[32px] text-white md:leading-[41px]"
        />
        <Title
          text={title || product().name}
          className="font-normal text-2xl md:text-[38px] sm:leading-[28px]  
          xl:text-[38px] 2xl:text-[48px] lg:leading-[61px] text-white leading-[24px]"
        />
        <p
          className={` text-white mt-[16px] mb-4 xs:mb-[25px] xs:mt-[25px] sm:mb-[30px] sm:mt-[30px]  md:mb-[40px] md:mt-[40px] 
            lg:mb-[33px] lg:mt-[20px] xl:mt-[30px] 2xl:mt-[65px] 
            ${about ? "text-sm xl:text-lg" : ""} ${
            width ? width : "w-[320px] xs:w-[360px] md:w-[500px] lg:w-[656px]"
          }  ${textSize ? textSize : " text-sm lg:text-lg xl:text-xl"}`}
        >
          {text || product().description}
        </p>
        {isButton && (
          <Button
            onClick={() => handleChangeShowPopup(true)}
            icon={true}
            white={true}
            text={"Оформить заказ"}
            className="py-[10px]  lg:py-[14px] xl:py-[19px] xs:pl-[19px] bg-white text-gray-400 text-base"
          />
        )}
      </div>
    </div>
  );
}
