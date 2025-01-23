import React, { useEffect, useState } from "react";
import Title from "../ui/Title";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  changeItemId,
  changeShowNewsPopup,
} from "../../utils/slice/userSlice";

export default function News() {
  const { news } = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  const [isLimited, setLimited] = useState(true);
  const [newsData, setNewsData] = useState(news);
  useEffect(() => {
    setNewsData(news);
  }, [news]);
  useEffect(() => {
    if (!isLimited) {
      setNewsData(news);
    } else {
      setNewsData(newsData.slice(0, 6));
    }
  }, [isLimited]);
  const showNewsPopup = (id) => {
    dispatch(changeItemId(id));
    dispatch(changeShowNewsPopup(true));
  };
  return newsData.length ? (
    <div
      className={`container pt-[50px] md:pt-[190px] lg:pt-[200px] xl:pt-[210px] 2xl:pt-[215px] 3xl:pt-[218px] ${
        newsData.length > 6 ? "" : "pb-16"
      }`}
    >
      <Title
        text={"новости"}
        className="inline-block text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl border-b mb-6 xs:mb-7 sm:mb-8 md:mb-9 lg:mb-10"
      />
      <div className="flex justify-center">
        <div className="w-full xs:w-full sm:w-full md:w-[800px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1100px] 3xl:w-[1160px]">
          <div className="flex flex-wrap justify-center xl:justify-normal   gap-[33px]   mb-6 xs:mb-7 sm:mb-8 md:mb-9 lg:mb-10">
            {newsData.map((item) => (
              <div
                onClick={() => showNewsPopup(item.id)}
                className="group flex flex-col justify-between w-[300px] xs:w-[320px] sm:w-[340px] md:w-[350px] lg:w-[360px] xl:w-[365px] 2xl:w-[368px] 3xl:w-[370px] h-[400px] xs:h-[420px] sm:h-[440px] md:h-[450px] lg:h-[465px] xl:h-[475px] 2xl:h-[480px] 3xl:h-[484px] gradient 
                mb-[25px] xs:mb-[28px] sm:mb-[30px] md:mb-[32px] lg:mb-[34px] xl:mb-[35px] 2xl:mb-[36px] 3xl:mb-[37px] 
                px-[20px] xs:px-[22px] sm:px-[24px] md:px-[26px] lg:px-[27px] xl:px-[28px] 2xl:px-[28px] 3xl:px-[29px] 
                py-[15px] xs:py-[16px] sm:py-[17px] md:py-[18px] lg:py-[19px] xl:py-[19px] 2xl:py-[19px] 3xl:py-[20px] 
                cursor-pointer"
                key={item.id}
              >
                <img
                  className="object-cover h-[260px] w-[260px] xs:h-[275px] xs:w-[275px] sm:h-[290px] sm:w-[290px] md:h-[300px] md:w-[300px] lg:h-[310px] lg:w-[310px] xl:h-[315px] xl:w-[315px] 2xl:h-[318px] 2xl:w-[318px] 3xl:h-[320px] 3xl:w-[320px] "
                  src={item.image}
                  alt=""
                />
                <div className=" flex flex-col justify-between ">
                  <div>
                    <p className="text-white text-base xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl leading-[22px] xs:leading-[23px] sm:leading-[24px] md:leading-[25px] lg:leading-[25.5px]">
                      {item.title}
                    </p>
                    <div className="pt-[10px] xs:pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] pb-3 xs:pb-3.5 sm:pb-4 md:pb-4.5 lg:pb-5">
                      <span className="text-gray-800 text-sm xs:text-sm sm:text-base">
                        {item.date}
                      </span>
                    </div>
                  </div>
                  <button className="flex-center gap-3 group-hover:gap-4 transition-all">
                    <span className="text-white text-base xs:text-base sm:text-lg font-normal">
                      Читать
                    </span>
                    <img src="/icon/sm_arrow.svg" alt="arrow" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {isLimited && newsData.length > 6 && (
            <div className="flex justify-center ">
              <Button
                onClick={() => setLimited(false)}
                text={"смотреть все новости"}
                className="w-full py-[18px] xs:py-[20px] sm:py-[22px] md:py-[24px] lg:py-[26px] bg-white border border-gray-400 text-gray-400 text-sm xs:text-sm sm:text-base hover:bg-gray-50 hover:border-gray-200"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
}
