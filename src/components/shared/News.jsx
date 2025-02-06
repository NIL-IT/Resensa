import React, { useEffect, useState } from "react";
import Title from "../ui/Title";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { changeItemId, changeShowNewsPopup } from "../../utils/slice/userSlice";

export default function News({ news }) {
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
  const handleClick = () => {
    setLimited(false);
    setNewsData(news);
  };
  return newsData.length ? (
    <section
      className={`container pt-[50px] md:pt-[190px] lg:pt-[200px] xl:pt-[210px] 2xl:pt-[215px] 3xl:pt-[218px] ${
        newsData.length > 6 ? "pb-16" : "pb-16"
      }`}
    >
      <Title
        text={"новости"}
        className="ml-5  xs:ml-0 inline-block text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl border-b mb-6 xs:mb-7 sm:mb-8 md:mb-9 lg:mb-10"
      />
      <div className="flex justify-center  w-full">
        <div className="w-full flex-center flex-col mx-auto justify-center   md:w-[800px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1178px]">
          <div className="grid  grid-cols-1  lg:grid-cols-2  2xl:grid-cols-3 gap-8">
            {newsData.map((item) => (
              <article
                onClick={() => showNewsPopup(item.id)}
                className="group flex flex-col  w-[300px] xs:w-[320px] sm:w-[340px] md:w-[350px] lg:w-[360px] xl:w-[365px] 2xl:w-[368px] 3xl:w-[370px] 
                h-[430px] xs:h-[455px] sm:h-[460px] md:h-[470px] lg:h-[490px] xl:h-[505px] 2xl:h-[510px] 3xl:h-[520px] 
                gradient 
                mb-[25px] xs:mb-[28px] sm:mb-[30px] md:mb-[32px] lg:mb-[34px] xl:mb-[35px] 2xl:mb-[36px] 3xl:mb-[37px] 
                px-[20px] xs:px-[22px] sm:px-[24px] md:px-[26px] lg:px-[27px] xl:px-[28px] 2xl:px-[28px] 3xl:px-[29px] 
                py-[15px] xs:py-[16px] sm:py-[17px] md:py-[18px] lg:py-[19px] xl:py-[19px] 2xl:py-[19px] 3xl:py-[20px] 
                cursor-pointer"
                key={item.id}
              >
                <img
                  className="object-cover min-h-[250px] w-[260px] xs:min-h-[265px] xs:w-[275px] sm:min-h-[260px] sm:w-[290px] md:min-h-[260px] md:w-[300px] lg:min-h-[270px] lg:w-[310px] xl:h-[280px] xl:w-[315px] 2xl:min-h-[290px] 2xl:w-[318px]  3xl:min-w-[320px] "
                  src={item.image}
                  alt={item.title}
                  title={item.title}
                />
                <div className=" flex flex-col justify-between h-full pt-2">
                  <div>
                    <p className="text-white  text-base xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl leading-[22px] xs:leading-[23px] sm:leading-[24px] md:leading-[25px] lg:leading-[25.5px]">
                      {item.title}
                    </p>
                    <div className="pt-[10px] xs:pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] pb-3 xs:pb-3.5 sm:pb-4 md:pb-4.5 lg:pb-5">
                      <a className="text-gray-800 text-sm xs:text-sm sm:text-base">
                        {item.date}
                      </a>
                    </div>
                  </div>
                  <button className="flex-center gap-3 group-hover:gap-4 transition-all">
                    <a className="text-white text-base xs:text-base sm:text-lg font-normal">
                      Читать
                    </a>
                    <img
                      src="/icon/sm_arrow.svg"
                      alt="arrow"
                      title="Нажмите чтобы посмотреть новость"
                    />
                  </button>
                </div>
              </article>
            ))}
          </div>
          {isLimited && news.length > 6 && (
            <div className="flex justify-center w-[300px] sm:w-[350px] lg:w-[756px] xl:w-[766px] 2xl:w-full">
              <Button
                onClick={() => handleClick()}
                text={"смотреть все новости"}
                className="w-full py-[18px] xs:py-[20px] sm:py-[22px] md:py-[24px] lg:py-[26px] bg-white border border-gray-400 text-gray-400 text-sm xs:text-sm sm:text-base hover:bg-gray-50 hover:border-gray-200"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
}
