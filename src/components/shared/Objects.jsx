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
export default function Objects() {
  const [index, setIndex] = React.useState(0);
  const handleChange = (value) => setIndex(value);
  return (
    <div className="w-full bg-gray-400 pb-[101px] pt-[81px]">
      <div className="container flex-center gap-[80px] justify-between">
        <div className="w-[411px]">
          <Title
            text={"наши объекты"}
            className="inline-block text-white text-2xl border-b border-b-white  mb-10"
          />
          <div className="text-white border border-white  *:border-b *:border-b-white last:border-b">
            {list.map(({ name, id }, i) => (
              <div
                className={`px-[22px] py-2 text-xl leading-[65px]  cursor-pointer uppercase ${
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
            className="bg-white text-gray-400 w-full mt-[42px] text-base font-normal py-[19px] pl-[26px] "
            white={true}
          />
        </div>
        <EarthScene />
      </div>
    </div>
  );
}
