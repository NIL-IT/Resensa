import React from "react";
import Title from "../ui/Title";
import Button from "../ui/Button";
import EarthScene from "./EarthScene";

const list = [
  { name: "Медицина и фармацевтика", id: 1 },
  { name: "Спортивные объекты", id: 2 },
  { name: "Административные объекты", id: 3 },
  { name: "Производства", id: 4 },
  { name: "Муниципальные объекты", id: 5 },
];

export default function Objects({ className = null }) {
  const [index, setIndex] = React.useState(0);
  const handleChange = (value) => setIndex(value);

  return (
    <div
      className={`w-full  bg-gray-400 py-12 sm:py-16 md:py-20 lg:py-24 ${className}`}
    >
      <div className="earth_container px-4 sm:px-6 lg:px-8 relative">
        <div
          className="flex-center flex-col 
        lg:flex-row lg:items-center lg:justify-between g
        ap-20 lg:gap-12"
        >
          <div
            className=" w-full lg:w-1/2 xl:w-5/12 
          md:h-[1000px] lg:h-[1200px] xl:h-[auto]
            
          sm:h-[1000px] 
            xs:h-[900px] 
         h-[900px]"
          >
            <Title
              text={"наши объекты"}
              className="inline-block text-white text-xl sm:text-2xl lg:text-3xl border-b border-b-white mb-6"
            />
            <div className="text-white border border-white divide-y divide-white">
              {list.map(({ name, id }, i) => (
                <div
                  className={`px-4 py-3 sm:py-4 lg:py-5 text-base sm:text-lg lg:text-xl cursor-pointer uppercase ${
                    i === index ? "text-gray-400 bg-white" : ""
                  }`}
                  key={id}
                  onClick={() => handleChange(i)}
                >
                  {name}
                </div>
              ))}
            </div>
            <Button
              icon={true}
              text={"построить маршрут до офиса"}
              className="bg-white gap-2 text-gray-400 w-full mt-6 sm:mt-8 text-sm sm:text-base font-normal py-3 sm:py-4 px-4 sm:px-3
            
              xs:gap-2 sm:gap-2 md:gap-[100px] lg:gap-5  xl:text-center 3xl:text-center"
              white={true}
            />
          </div>
          <div
            className="absolute  3xl:top-[-60px] 3xl:right-[-250px]
            2xl:top-[-60px] 2xl:right-[-200px]
            xl:top-[0px] xl:right-[-50px]
            lg:top-[580px] lg:right-[-140px]
            md:top-[520px] md:right-[-140px]
            sm:top-[500px] sm:right-[-110px]
            xs:top-[460px] xs:right-[0]
            top-[460px] right-[0]
       "
          >
            <EarthScene />
          </div>
        </div>
      </div>
    </div>
  );
}
