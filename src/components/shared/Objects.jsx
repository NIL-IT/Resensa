import React from "react";
import Title from "../ui/Title";
import Button from "../ui/Button";
import EarthScene from "./EarthScene";
const list = [
  {
    name: "Медицина и фармацевтика",
    id: 1,
  },
  {
    name: "Спортивные объекты",
    id: 2,
  },
  {
    name: "Административные объекты",
    id: 3,
  },
  {
    name: "Производства",
    id: 4,
  },
  {
    name: "Муниципальные объекты",
    id: 5,
  },
];
export default function Objects({ className = null }) {
  const [index, setIndex] = React.useState(0);
  const handleChange = (value) => setIndex(value);
  return (
    <div
      className={`w-full bg-gray-400 pb-[60px] xs:pb-[70px] sm:pb-[80px] md:pb-[85px] lg:pb-[90px] xl:pb-[95px] 2xl:pb-[98px] 3xl:pb-[101px] pt-[50px] xs:pt-[55px] sm:pt-[60px] md:pt-[65px] lg:pt-[70px] xl:pt-[75px] 2xl:pt-[78px] 3xl:pt-[81px] ${className}`}
    >
      <div className="container flex-col lg:flex-row flex-center gap-[40px] xs:gap-[45px] sm:gap-[50px] md:gap-[60px] lg:gap-[70px] xl:gap-[75px] 2xl:gap-[77px] 3xl:gap-[80px] justify-between">
        <div className="w-full xs:w-full sm:w-full md:w-[380px] lg:w-[390px] xl:w-[400px] 2xl:w-[405px] 3xl:w-[411px]">
          <Title
            text={"наши объекты"}
            className="inline-block text-white text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl border-b border-b-white mb-6 xs:mb-7 sm:mb-8 md:mb-9 lg:mb-10"
          />
          <div className="text-white border border-white  *:border-b *:border-b-white last:border-b">
            {list.map(({ name, id }, i) => (
              <div
                className={`px-[15px] xs:px-[16px] sm:px-[18px] md:px-[20px] lg:px-[21px] 
                  xl:px-[21px] 2xl:px-[21px] 3xl:px-[22px] 
                  py-1.5 xs:py-1.5 sm:py-2 lg:py-[22px] text-base 
                  xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl 
                  leading-[45px] xs:leading-[50px] sm:leading-[55px] md:leading-[60px] lg:leading-[65px] cursor-pointer uppercase ${
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
            className="bg-white text-gray-400 w-full mt-[25px] xs:mt-[30px] sm:mt-[35px] md:mt-[38px] lg:mt-[40px] xl:mt-[41px] 2xl:mt-[41px] 3xl:mt-[42px] text-sm xs:text-sm sm:text-base font-normal py-[14px] xs:py-[15px] sm:py-[16px] md:py-[17px] lg:py-[18px] xl:py-[18px] 2xl:py-[18px] 3xl:py-[19px] pl-[20px] xs:pl-[21px] sm:pl-[22px] md:pl-[24px] lg:pl-[25px] xl:pl-[25px] 2xl:pl-[25px] 3xl:pl-[26px]"
            white={true}
          />
        </div>
        <EarthScene />
      </div>
    </div>
  );
}
