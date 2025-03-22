import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, lazy } from "react";
import { T as Title, B as Button } from "../entry-server.js";
import "react-dom/server";
import "react-router-dom/server.mjs";
import "react-redux";
import "@reduxjs/toolkit";
import "axios";
import "js-cookie";
import "react-helmet-async";
import "clsx";
import "tailwind-merge";
import "react-router-dom";
import "lucide-react";
const EarthScene = lazy(() => import("./EarthScene-CPvi4Dtj.js"));
const list = [
  { name: "Административные объекты", id: 1 },
  { name: "Производства", id: 2 },
  { name: "Медицина и фармацевтика", id: 3 }
  // { name: "Спортивные объекты", id: 2 },
  // { name: "Муниципальные объекты", id: 5 },
];
function Objects({ className = null, about = false }) {
  const [index, setIndex] = useState(0);
  const [refresh, setRefresh] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setRefresh((prev) => prev + 1);
    }, 2e3);
    return () => clearTimeout(timer);
  }, []);
  const handleChange = (value) => setIndex(value);
  useEffect(() => {
    setIsClient(true);
    setLoading(true);
  }, []);
  useEffect(() => {
    if (!isClient) return;
    const handleResize = () => {
      if (!loading) {
        setLoading(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [loading, isClient]);
  return refresh !== 0 && /* @__PURE__ */ jsx(
    "section",
    {
      className: `w-full bg-gray-400 py-12 sm:py-16 md:py-20 lg:py-24 ${about ? "mt-[0px] xs:mt-[28px] md:mt-[160px] lg:mt-[225px] xl:mt-[205px] 2xl:mt-[220px] 3xl:mt-[225px]" : ""} ${className}`,
      children: /* @__PURE__ */ jsx("div", { className: "earth_container relative max-w-[full] min-h-[500px] sm:min-h-[550px] md:min-h-[550px] lg:min-h-[602px] xl:min-h-[650px] 2xl:min-h-[702px] flex flex-col justify-center", children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex-center flex-col \r\n        lg:flex-row lg:items-center lg:justify-between g\r\n        ap-20 lg:gap-12",
          children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: " w-full  \r\n          md:h-[800px] lg:h-[1000px] xl:h-[auto]\r\n            \r\n          sm:h-[850px] \r\n            xs:h-[800px] \r\n         h-[800px] px-4 sm:px-6 lg:px-8",
                children: [
                  /* @__PURE__ */ jsx(
                    Title,
                    {
                      text: "наши объекты",
                      className: "inline-block text-white text-xl sm:text-2xl lg:text-3xl border-b border-b-white mb-6"
                    }
                  ),
                  /* @__PURE__ */ jsxs("article", { className: " max-w-[411px]", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-white border border-white divide-y divide-white w-full", children: list.map(({ name, id }, i) => /* @__PURE__ */ jsx(
                      "button",
                      {
                        type: "button",
                        className: `select-none px-4 w-full text-left py-3 sm:py-4 lg:py-5 text-base sm:text-lg lg:text-xl cursor-pointer uppercase ${i === index ? "text-gray-400 bg-white" : ""}`,
                        onClick: () => handleChange(i),
                        children: name
                      },
                      id
                    )) }),
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        target: "_blank",
                        href: "https://yandex.ru/maps/65/novosibirsk/house/ulitsa_shevchenko_4/bEsYfwRjT0YCQFtvfXxwdXRnZA==/inside/?ll=82.932743%2C55.014572&tab=inside&z=19.71",
                        icon: true,
                        text: "построить маршрут до офиса",
                        className: "bg-white text-gray-400 w-full select-none justify-center xl:justify-normal\r\n              mt-6 sm:mt-8 text-sm lg:text-md xl:text-base \r\n               font-normal \r\n              py-3 xl:py-5  px-4 sm:px-3 xl:px-5\r\n \r\n               gap-5 xl:gap-10 xl:text-center 2xl:text-start",
                        white: true
                      }
                    )
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute   \r\n            3xl:top-[40px] 3xl:right-[-250px]\r\n            2xl:top-[60px] 2xl:right-[-200px]\r\n            xl:top-[100px] xl:right-[-50px]\r\n            lg:top-[460px] lg:right-[-140px]\r\n            md:top-[360px] md:right-[-90px]\r\n            sm:top-[400px] sm:right-[-90px]\r\n            xs:top-[360px] xs:right-[-20px]\r\n            top-[360px] right-[-20px] \r\n       ",
                children: isClient && loading && /* @__PURE__ */ jsx(EarthScene, { index })
              }
            )
          ]
        }
      ) })
    }
  );
}
export {
  Objects as default
};
