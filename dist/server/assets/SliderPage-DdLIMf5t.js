import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { T as Title } from "../entry-server.js";
import { r as recensaAbout } from "./data-C21Hc6VP.js";
const list = [
  {
    img: "/img/part_1.svg",
    alt: "Партнер МССП"
  },
  {
    img: "/img/part_2.svg",
    alt: "Партнер Абсолют банк"
  },
  {
    img: "/img/part_3.svg",
    alt: "Партнер Мои документы"
  },
  {
    img: "/img/part_4.png",
    alt: "Партнер РКРСЕРВИС"
  },
  {
    img: "/img/part_5.svg",
    alt: "Партнер Министерство здравоохранения республики Татарстан"
  },
  {
    img: "/img/part_6.svg",
    alt: "Партнер Ростелеком"
  },
  {
    img: "/img/part_7.svg",
    alt: "Партнер РОСАТОМ"
  },
  {
    img: "/img/part_8_.svg",
    alt: "Партнер Министерство обороны Российской Федерации"
  }
];
function Partners() {
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: "pl-5 pr-5 xs:pl-0 xs:pr-0 w-full bg-gray-900  pb-[30px] lg:pb-[35px] \r\n    xl:pb-[40px] pt-[30px] lg:pt-[35px] \r\n    xl:pt-[40px]",
      children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx(
          Title,
          {
            text: "партнеры",
            className: "inline-block text-white text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl border-b border-b-white mb-6 xs:mb-7 sm:mb-8 md:mb-9 lg:mb-10"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-[30px] sm:gap-x-[30px] sm:gap-y-[20px] md:gap-x-[40px] md:gap-y-[10px]  2xl:gap-x-[200px] 3xl:gap-x-[300px] max-w-[400px] \r\n          xs:max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[750px] \r\n          xl:max-w-[780px] 2xl:max-w-[800px] 3xl:max-w-[1110px] mx-auto",
            children: list.map((item, i) => /* @__PURE__ */ jsx(
              "article",
              {
                className: `flex-center mt-2 xl:mt-3  ${i === 4 ? "w-[150px]  xl:w-[200px] 2xl:w-[250px] 3xl:w-[300px]" : "w-[100px]  xl:w-[130px] 2xl:w-[140px] 3xl:w-[150px]"}"
                }`,
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: item.img,
                    alt: item.alt,
                    title: item.alt,
                    className: `w-full  ${i + 1 === list.length ? "h-[100px] xl:h-[130px] 2xl:h-[140px] 3xl:min-h-[150px]" : "h-auto"} ${i === 3 ? "white" : ""} ${i === 4 && "2xl:min-w-[250px] 3xl:min-w-[300px] "} ${i === 0 && "translate-y-[-12px] lg:translate-y-[-14px] xl:translate-y-[-16px] 3xl:translate-y-[-18px]"} ${i === 5 && "translate-y-[-4px] sm:translate-y-[-4px] md:translate-y-[-6px] lg:translate-y-[-6px] xl:translate-y-[-8px] "}`
                  }
                )
              },
              i
            ))
          }
        ) })
      ] })
    }
  );
}
function Slider({ slides, second, recensaAbout: recensaAbout2 }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  let currentWidth = document.body.offsetWidth;
  const [width, setWidth] = useState(currentWidth);
  useEffect(() => {
    setWidth(currentWidth);
    setCurrentSlide(0);
  }, [currentWidth]);
  const goToSlide = (index) => {
    if (index < 0) return;
    if (second && width > 1669 && index > 1) return;
    if (second && index > 2 && width > 1220) return;
    if (second && index > 3) return;
    if (index > 1 && width > 1800) return;
    if (index > 2 && width > 1220) {
      return;
    }
    if (index > 3 && width > 1023) return;
    if (index > 4 && width > 300) return;
    setCurrentSlide(index);
  };
  const setTranslate = () => {
    if (width >= 1024 && second) return currentSlide * 60;
    if (width > 1280) return currentSlide * 60;
    if (width > 1024) return currentSlide * 60;
    if (width > 768) return currentSlide * 100;
    if (width > 768) return currentSlide * 100;
    if (width > 640) return currentSlide * 100;
    if (width > 420) return currentSlide * 100;
    if (width < 420) return currentSlide * 100;
  };
  return /* @__PURE__ */ jsx("article", { className: "min-w-[100wh] mb-10 xs:mb-0", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "min-w-[100wh] overflow-hidden ", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: " flex gap-0  \r\n              xl:gap-[55px] 2xl:gap-[60px] 3xl:gap-[64px] \r\n              transition-transform duration-500 ease-out",
        style: { transform: `translateX(-${setTranslate()}%)` },
        children: slides.map(({ image, title = "", description = "" }, index) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "w-full min-w-full flex justify-center xl:block xl:min-w-[auto]\r\n                   3xl:min-w-[auto]  \r\n                   2xl:h-auto  xs:w-full    ",
            children: second ? /* @__PURE__ */ jsx(
              "div",
              {
                className: " h-[270px]  sm:w-[420px]\r\n                     sm:h-[324px] md:w-[631px] md:h-[487px]  ",
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: image,
                    alt: title,
                    title,
                    className: "object-cover w-full max-h-[100%]"
                  }
                )
              }
            ) : (
              // <div
              //   className={` w-full xs:w-full sm:w-full
              //     md:w-[600px] lg:w-[650px] xl:w-[700px]
              //     2xl:w-[750px] 3xl:w-[816px] h-[360px]
              //     xs:h-[400px] sm:h-[420px]
              //     md:h-[420px]
              //     lg:h-[450px] xl:h-[490px] 2xl:h-[460px]
              //     3xl:h-[458px] ${second ? "" : "bg-gray-100"}`}
              // >
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: ` w-[300px] sm:w-[380px] md:w-[400px] lg:w-[450px] xl:w-[490px] 2xl:w-[500px] h-[360px] 
                      xs:h-[400px] sm:h-[420px] 
                      md:h-[420px] 
                      lg:h-[450px] xl:h-[490px] 2xl:h-[460px] 
                      3xl:h-[458px] ${second ? "" : "bg-gray-100"}`,
                  children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: ` h-[150px] xs:h-[170px] sm:h-[190px] md:h-[210px] lg:h-[230px] xl:h-[250px] 2xl:h-[260px] 3xl:h-[272px] overflow-hidden
                           w-full mb-[15px] xs:mb-[18px] sm:mb-[20px] md:mb-[25px] 
                           lg:mb-[28px] xl:mb-[30px] border-b border-b-gray-400  `,
                        children: /* @__PURE__ */ jsx(
                          "img",
                          {
                            style: {
                              backgroundPosition: "center center",
                              backgroundSize: "cover",
                              objectFit: "cover",
                              width: "100%",
                              height: "100%"
                            },
                            src: image,
                            alt: title,
                            title,
                            className: "w-full h-full max-w-[300px] sm:max-w-[380px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[490px] 2xl:max-w-[500px] overflow-hidden"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsx("div", { className: "px-[20px] xs:px-[25px] sm:px-[30px] md:px-[35px] lg:px-[40px] xl:px-[45px] pb-[30px] xs:pb-[35px] sm:pb-[40px] md:pb-[45px] lg:pb-[50px] xl:pb-[52px]", children: /* @__PURE__ */ jsx("p", { className: "text-gray-400 uppercase text-md xs:lg sm:text-xl ", children: description }) })
                  ]
                }
              )
            )
          },
          index
        ))
      }
    ) }) }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `container pl-5 xs:pl-0 flex-center gap-[15px] xs:gap-[17px] sm:gap-[20px]
         md:gap-[22px] lg:gap-[25px] mt-[25px] xs:mt-[30px] sm:mt-[35px] md:mt-[38px] lg:mt-[40px] xl:mt-[43px] pb-4 pt-5 xs:pt-0 
          border-b border-b-gray-400 ${!second ? `mb-[60px]
         xs:mb-[70px] sm:mb-[80px] md:mb-[90px] lg:mb-[100px] xl:mb-20` : ``}`,
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => goToSlide(currentSlide - 1),
              className: "cursor-pointer hover:translate-x-[-2px] transition-all",
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/icon/arrow_left.svg",
                  alt: "Стрелка",
                  title: "Нажмите чтобы перелистнуть назад"
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => goToSlide(currentSlide + 1),
              className: "cursor-pointer hover:translate-x-[2px] transition-all",
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/icon/arrow_right.svg",
                  alt: "Стрелка",
                  title: "Нажмите чтобы перелистнуть вперёд"
                }
              )
            }
          )
        ]
      }
    )
  ] }) });
}
function SliderPage({
  title,
  subTitle,
  text,
  slides,
  second = false
}) {
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `earth_container pl-5 pr-5 xs:pl-0 xs:pr-0  
         ${second ? "pt-[20px]" : "pt-[40px] xs:pt-[60px] sm:pt-[80px] md:pt-[100px] lg:pt-[115px] xl:pt-[120px] 2xl:pt-[122px] 3xl:pt-[124px]"}`,
        children: [
          /* @__PURE__ */ jsx(
            Title,
            {
              text: title,
              className: `text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl border-b mb-6 xs:mb-7 sm:mb-8 md:mb-9 lg:mb-10 inline-block`
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "w-full xs:w-full sm:w-full md:w-[800px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1100px] 3xl:w-[1160px]", children: [
            /* @__PURE__ */ jsx(
              "h3",
              {
                className: `w-full text-gray-400 text-3xl leading-[41px] md:text-[48px] md:leading-[61px]
                  ${!second ? "" : "md:w-[350px] lg:w-[370px] xl:w-[390px] 2xl:w-[400px] 3xl:w-[410px]"}`,
                children: subTitle
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "space-y-10 ", children: /* @__PURE__ */ jsx(
              "div",
              {
                dangerouslySetInnerHTML: { __html: text },
                className: "w-full xs:w-full sm:w-full md:w-[600px] \r\n            lg:w-[700px] xl:w-[750px] 2xl:w-[780px] 3xl:w-[813px] \r\n            text-base xs:text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg 3xl:text-lg \r\n            leading-[20px] xs:leading-[21px] sm:leading-[22px] md:leading-[23px]\r\n             mt-[30px] xs:mt-[35px] sm:mt-[40px] md:mt-[45px] lg:mt-[50px] xl:mt-[60px] 2xl:mt-[65px] 3xl:mt-[70px] \r\n             space-y-6 xs:space-y-7 sm:space-y-8 md:space-y-9 lg:space-y-10\r\n              text-gray-400 mb-[35px] xs:mb-[40px] sm:mb-[45px]\r\n               md:mb-[50px] lg:mb-[55px] xl:mb-[60px] 2xl:mb-[65px] \r\n               3xl:mb-[70px]"
              }
            ) })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsx(Slider, { recensaAbout, slides, second })
  ] });
}
export {
  Partners as P,
  SliderPage as S
};
