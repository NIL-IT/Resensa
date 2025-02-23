import React from "react";
import Title from "../ui/Title";
import Slider from "./Slider";
import { recensaAbout } from "../../utils/data";
export default function SliderPage({
  title,
  subTitle,
  text,
  slides,
  second = false,
}) {
  return (
    <section>
      <div
        className={`earth_container pl-5 pr-5 xs:pl-0 xs:pr-0  
         ${
           second
             ? "pt-[20px]"
             : "pt-[40px] xs:pt-[60px] sm:pt-[80px] md:pt-[100px] lg:pt-[115px] xl:pt-[120px] 2xl:pt-[122px] 3xl:pt-[124px]"
         }`}
      >
        <Title
          text={title}
          className="text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl border-b mb-6 xs:mb-7 sm:mb-8 md:mb-9 lg:mb-10 inline-block"
        />
        <div className="flex justify-center">
          <div className="w-full xs:w-full sm:w-full md:w-[800px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1100px] 3xl:w-[1160px]">
            <h3
              className="w-full text-gray-400 text-3xl leading-[41px] md:text-[48px] md:leading-[61px] xs:w-full 
            sm:w-full md:w-[350px] lg:w-[370px] xl:w-[390px] 2xl:w-[400px] 3xl:w-[410px]"
            >
              {subTitle}
            </h3>
            <div className="space-y-20 ">
              <div
                className="w-full xs:w-full sm:w-full md:w-[600px] 
            lg:w-[700px] xl:w-[750px] 2xl:w-[780px] 3xl:w-[813px] 
            text-base xs:text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg 3xl:text-lg 
            leading-[20px] xs:leading-[21px] sm:leading-[22px] md:leading-[23px]
             mt-[30px] xs:mt-[35px] sm:mt-[40px] md:mt-[45px] lg:mt-[50px] xl:mt-[60px] 2xl:mt-[65px] 3xl:mt-[70px] 
             space-y-6 xs:space-y-7 sm:space-y-8 md:space-y-9 lg:space-y-10
              text-gray-400 mb-[35px] xs:mb-[40px] sm:mb-[45px]
               md:mb-[50px] lg:mb-[55px] xl:mb-[60px] 2xl:mb-[65px] 
               3xl:mb-[70px]"
              >
                {text.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {!second && (
                <>
                  <div
                    className=" xs:text-base sm:text-lg md:text-lg 
            lg:text-lg xl:text-lg 2xl:text-lg 3xl:text-lg  leading-[20px] xs:leading-[21px] sm:leading-[22px] md:leading-[23px]
              space-y-3 lg:space-y-3
               text-gray-400 "
                  >
                    <h4 className="text-gray-400 text-base  xl:text-xl font-normal">
                      Recensa – это:
                    </h4>
                    <div className="pt-5 space-y-3 lg:space-y-3">
                      {recensaAbout.map((text, i) => (
                        <p key={i}>{text}</p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-base  xl:text-xl font-normal">
                      Recensa — это результат многолетнего опыта, уникальных
                      инженерных решений и постоянного развития. Мы объединили:
                    </h4>
                    <ul
                      className="pt-5 xs:text-base sm:text-lg md:text-lg 
            lg:text-lg xl:text-lg 2xl:text-lg 3xl:text-lg  
            leading-[20px] xs:leading-[21px] sm:leading-[22px] md:leading-[23px]

              space-y-3 lg:space-y-3
               text-gray-400 "
                    >
                      <li>
                        • Уникальные компетенции и инженерные решения — каждое
                        оборудование разрабатывается с учётом последних
                        достижений в области вентиляции.
                      </li>
                      <li>
                        • Современные алгоритмы управления производством,
                        которые позволяют выпускать продукцию, превосходящую
                        ожидания клиентов.
                      </li>
                    </ul>
                  </div>
                  <div className="pb-[60px] xs:pb-[70px] sm:pb-[80px] md:pb-[85px] lg:pb-[90px] xl:pb-[95px] 2xl:pb-[97px] 3xl:pb-[100px]">
                    <p
                      className="xs:text-base sm:text-lg md:text-lg 
            lg:text-lg xl:text-lg 2xl:text-lg 3xl:text-lg  leading-[20px] xs:leading-[21px] sm:leading-[22px] md:leading-[23px]
              text-gray-400 "
                    >
                      Recensa — уверенность в каждом решении. Мы знаем всё о
                      вентиляционном оборудовании, чтобы ваши задачи решались с
                      максимальной эффективностью. Обратитесь к профессионалам.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Slider slides={slides} second={second} />
    </section>
  );
}
