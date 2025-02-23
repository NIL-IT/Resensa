import React, { useEffect, useState } from "react";
import Title from "../ui/Title";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { changeShowPopup } from "../../utils/slice/userSlice";
import imgPlaceholder from "/img/banner_main_placeholder.png";
import imgMain from "/img/banner_main.png";
import MainTitle from "../ui/MainTitle";
export default function Banner({ banner }) {
  const dispatch = useDispatch();
  const handleChangeShowPopup = (boolean) => dispatch(changeShowPopup(boolean));
  const [imageSrc, setImageSrc] = useState(imgPlaceholder);
  useEffect(() => {
    const img = new Image();
    img.src = imgMain;
    img.onload = () => {
      setImageSrc(imgMain);
    };
  }, []);
  return (
    <section
      className="pl-5 xs:pl-0 container 
      pt-[40px] xs:pt-[45px] sm:pt-[50px] md:pt-[90px] lg:pt-[118px] xl:pt-[120px] 2xl:pt-[122px] 3xl:pt-[125px] 
    pb-[35px] xs:pb-[40px] sm:pb-[45px] md:pb-[75px] lg:pb-[102px] xl:pb-[105px] 2xl:pb-[108px] 3xl:pb-[110px]
    "
    >
      <MainTitle
        className="border-b border-gray-400 pb-[20px] xs:pb-[23px] sm:pb-[25px] md:pb-[28px] 
        lg:pb-[30px] xl:pb-[31px] 2xl:pb-[32px] 3xl:pb-[33px]
        text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[48px] sm:leading-[40px] md:leading-[50px] lg:leading-[72px]"
        text="производство и поставка вентиляционного оборудования высокого класса"
      />
      <div className="flex-center flex-col lg:flex-row justify-between mt-3 xs:mt-3.5 sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4 2xl:mt-4 3xl:mt-4 gap-6 xs:gap-7 sm:gap-8 lg:gap-4">
        <div className="flex-center flex-wrap gap-6 xs:gap-7 sm:gap-8 md:gap-[60px] lg:gap-[70px] xl:gap-[75px] 2xl:gap-[80px] 3xl:gap-[88px]">
          <div className="xs:flex xs:gap-5 xl:block md:w-[290px] xl:w-[312px]">
            <span
              className="text-[28px] xs:text-[30px] sm:text-[32px] md:text-[42px] lg:text-[44px] xl:text-[45px] 2xl:text-[46px] 
            3xl:text-[48px] text-gray-400"
            >
              {banner.first_value || "22"}
            </span>
            <p
              className="text-base xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl
             text-gray-300 xs:text-start text-left "
            >
              {banner.first_value_string ||
                `года опыта на рынке
вентиляционного оборудования`}
            </p>
          </div>
          <div className="xs:flex xs:gap-5 xl:block md:w-[280px] xl:w-[312px]">
            <span
              className="text-[28px] xs:text-[30px] sm:text-[32px] 
            md:text-[42px] lg:text-[44px] xl:text-[45px] 2xl:text-[46px] 
            3xl:text-[48px] text-gray-400 xs:w-[34px] sm:w-[36px] md:w-[48px] lg:w-[50px] xl:w-[auto]"
            >
              {banner.second_value || `3`}
            </span>
            <p
              className="text-base xs:text-base sm:text-lg md:text-xl lg:text-xl
             xl:text-xl 2xl:text-xl 3xl:text-xl text-gray-300 xs:text-start text-left"
            >
              {banner.second_value_string ||
                `года гарантии
на продукцию компании.`}
            </p>
          </div>
        </div>
        <div className="mr-5 xs:mr-0">
          <Button
            onClick={() => handleChangeShowPopup(true)}
            className=" py-[16px] xs:py-[17px] sm:py-[18px] md:py-[26px] lg:py-[26px] xl:py-[26px] 2xl:py-[26px] 3xl:py-[26px] px-4 xs:px-5 sm:px-6 md:pr-[26px] md:pl-6 w-full xs:w-full sm:w-full md:w-[332px] h-[56px] xs:h-[58px] sm:h-[60px] md:h-[76px] lg:h-[76px] xl:h-[76px] 2xl:h-[76px] 3xl:h-[76px] text-sm xs:text-sm sm:text-base"
            icon={true}
            text={"Получить консультацию"}
          />
        </div>
      </div>
      <div className="mr-5 xs:mr-0">
        <img
          className={`${imageSrc === imgPlaceholder ? "loading" : "loaded"}
          w-full mt-[35px] xs:mt-[40px] sm:mt-[45px] md:mt-[75px] lg:mt-[85px] 
          xl:mt-[95px] 2xl:mt-[100px] 3xl:mt-[105px]
          `}
          src={imageSrc}
          alt="banner"
          title="Banner"
        />
      </div>
    </section>
  );
}
