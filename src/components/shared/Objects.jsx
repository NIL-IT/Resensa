import React, { useEffect, useState } from "react";
import Title from "../ui/Title";
import Button from "../ui/Button";
import EarthScene from "./EarthScene";

const list = [
  { name: "Административные объекты", id: 1 },
  { name: "Производства", id: 2 },
  { name: "Медицина и фармацевтика", id: 3 },
  // { name: "Спортивные объекты", id: 2 },
  // { name: "Муниципальные объекты", id: 5 },
];

export default function Objects({ className = null, about = false }) {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const handleChange = (value) => setIndex(value);

  // Определяем, что мы на клиенте
  useEffect(() => {
    document.body.style.zoom = "99.9%";
    setIsClient(true);
    setLoading(true);
  }, []);
  document.body.style.zoom = "100%";
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

  return (
    <section
      className={`w-full bg-gray-400 py-12 sm:py-16 md:py-20 lg:py-24 ${
        about
          ? "mt-[0px] xs:mt-[28px] md:mt-[160px] lg:mt-[225px] xl:mt-[205px] 2xl:mt-[220px] 3xl:mt-[225px]"
          : ""
      } ${className}`}
    >
      {/* Остальной код остается прежним */}
      <div className="earth_container relative max-w-[full] min-h-[500px] sm:min-h-[550px] md:min-h-[550px] lg:min-h-[602px] xl:min-h-[650px] 2xl:min-h-[702px] flex flex-col justify-center">
        <div
          className="flex-center flex-col 
        lg:flex-row lg:items-center lg:justify-between g
        ap-20 lg:gap-12"
        >
          <div
            className=" w-full  
          md:h-[800px] lg:h-[1000px] xl:h-[auto]
            
          sm:h-[850px] 
            xs:h-[800px] 
         h-[800px] px-4 sm:px-6 lg:px-8"
          >
            <Title
              text={"наши объекты"}
              className="inline-block text-white text-xl sm:text-2xl lg:text-3xl border-b border-b-white mb-6"
            />
            <article className=" max-w-[411px]">
              <div className="text-white border border-white divide-y divide-white w-full">
                {list.map(({ name, id }, i) => (
                  <button
                    type="button"
                    className={`select-none px-4 w-full text-left py-3 sm:py-4 lg:py-5 text-base sm:text-lg lg:text-xl cursor-pointer uppercase ${
                      i === index ? "text-gray-400 bg-white" : ""
                    }`}
                    key={id}
                    onClick={() => handleChange(i)}
                  >
                    {name}
                  </button>
                ))}
              </div>
              <Button
                target={"_blank"}
                href="https://yandex.ru/maps/65/novosibirsk/house/ulitsa_shevchenko_4/bEsYfwRjT0YCQFtvfXxwdXRnZA==/inside/?ll=82.932743%2C55.014572&tab=inside&z=19.71"
                icon={true}
                text={"построить маршрут до офиса"}
                className="bg-white text-gray-400 w-full select-none justify-center xl:justify-normal
              mt-6 sm:mt-8 text-sm lg:text-md xl:text-base 
               font-normal 
              py-3 xl:py-5  px-4 sm:px-3 xl:px-5
 
               gap-5 xl:gap-10 xl:text-center 2xl:text-start"
                white={true}
              />
            </article>
          </div>
          <div
            className="absolute   
            3xl:top-[40px] 3xl:right-[-250px]
            2xl:top-[60px] 2xl:right-[-200px]
            xl:top-[100px] xl:right-[-50px]
            lg:top-[460px] lg:right-[-140px]
            md:top-[360px] md:right-[-90px]
            sm:top-[400px] sm:right-[-90px]
            xs:top-[360px] xs:right-[-20px]
            top-[360px] right-[-20px] 
       "
          >
            {isClient && loading && <EarthScene index={index} />}
          </div>
        </div>
      </div>
    </section>
  );
}
